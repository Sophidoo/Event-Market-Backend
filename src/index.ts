import App from "./app"
import UserRoutes from "./routes/user.routes"
import dotenv from "dotenv"

dotenv.config()

const app = new App([
    new UserRoutes()
    
])

app.listen()

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});