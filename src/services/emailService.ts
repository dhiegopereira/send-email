import nodemailer from 'nodemailer';
import { InEmail } from '../models/Email';
import { emailTemplate } from '../templates/emailTemplate';

export const send = async (inEmail: InEmail): Promise<string> => {
    const transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: inEmail.email,
        subject: inEmail.subject,
        html: emailTemplate(inEmail.message),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return 'Email sent: ' + info.response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}
