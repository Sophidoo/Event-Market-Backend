import multer from 'multer';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save to uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName); // Generate unique filename
  }
});

// File filter for images only
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(new Error('Error: Only images (JPEG, JPG, PNG, GIF) are allowed!'));
};

// Multer configuration
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB per file
    files: 5 // Max 5 files
  },
  fileFilter
}).array('images', 5); // Field name 'photos' with max 5 files

// Middleware handler
export const multipleUploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        // Multer-specific errors
        return res.status(400).json({ 
          success: false,
          message: err.code === 'LIMIT_FILE_SIZE' 
            ? 'File too large (max 10MB)' 
            : err.message 
        });
      }
      // Other errors
      return res.status(400).json({ 
        success: false, 
        message: err.message 
      });
    }
    next();
  });
};
