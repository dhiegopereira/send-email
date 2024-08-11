import { Router } from 'express';
import { sendEmail } from '../controllers/emailController';

const router = Router();

router.post('/', sendEmail);

export default router;