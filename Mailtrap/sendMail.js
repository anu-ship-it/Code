import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
    },
});

export const sendMail = async (toString, subject, message) => {
    try {
        const info = await transporter.sendMail({
            from: '"Talk2hire Dev" <noreply@talk2hire.com>',
            to,
            subject,
            html: '<p>${message}</p>',
        });

        console.log("✅ Email sent:", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return { success: false, error };
    }
};

export default sendMail;