import { Request, Response } from 'express';
import { send } from '../services/emailService';
import { InEmail } from '../models/Email';

export const sendEmail = async (req: Request, res: Response) => {
    const inEmail = req.body as InEmail;
    try {
        const result = await send(inEmail); 
        res.status(200).send(result);
    } catch (error: any) {
        console.error('Failed to send email:', error);
        res.status(500).send('Failed to send email: ' + error.message);
    }
}
