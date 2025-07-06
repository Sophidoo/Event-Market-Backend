// utils/email.ts
import nodemailer from "nodemailer";
import crypto from "crypto"

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    },
    dkim: {
        domainName: "eventmarket.com", // If you have a custom domain
        keySelector: 'default',
        privateKey: process.env.DKIM_PRIVATE_KEY || ''
    }
});

export const sendEmail = async (options: {
    to: string;
    subject: string;
    html: string;
}) => {
    const mailOptions = {
        from:  process.env.EMAIL_FROM || 'Event Market <sophieokosodo@gmail.com>',
        to: options.to,
        subject: options.subject,
        html: options.html,
        headers: {
            'X-Mailer': 'EventMarketMailer/1.0',
            'X-Entity-Ref-ID': crypto.randomBytes(16).toString('hex'),
            'List-Unsubscribe': `<https://eventmarket.com/unsubscribe?email=${options.to}>`,
            'Precedence': 'bulk',
            'X-Abuse-Report': 'https://eventmarket.com/abuse',
            'Message-ID': `<${crypto.randomBytes(16).toString('hex')}@eventmarket.com>`
        }
    };

    await transporter.sendMail(mailOptions);
};