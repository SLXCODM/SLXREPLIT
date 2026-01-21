import multer from "multer";
import path from "path";
import fs from "fs";

// Configuração de storage: Vercel é Read-Only, usamos memoryStorage
const isVercel = process.env.VERCEL === "1";

if (!isVercel) {
    // Ensure uploads directory exists ONLY if NOT on Vercel
    const uploadDir = path.join(process.cwd(), "server", "uploads");
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
}

const storage = isVercel 
    ? multer.memoryStorage() 
    : multer.diskStorage({
        destination: function (req, file, cb) {
            const uploadDir = path.join(process.cwd(), "server", "uploads");
            cb(null, uploadDir);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, uniqueSuffix + path.extname(file.originalname));
        }
    });

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 500 * 1024 * 1024 // 500MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("video/")) {
            cb(null, true);
        } else {
            cb(null, false);
            // You might want to pass an error here in a real app
        }
    }
});
