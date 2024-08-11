import { Router, Request, Response } from 'express';
import email from './email';

const router = Router();

router.get('/', (req: Request, res: Response) => res.send('Send Email API'));
router.use('/email', email);

module.exports = router;