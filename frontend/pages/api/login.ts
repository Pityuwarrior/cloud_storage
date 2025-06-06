import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { encrypt } from '@/app/lib/session';

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const sessionData = req.body;
    const encryptedSessionData = encrypt(sessionData);

    const cookie = serialize('session', encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });
    res.setHeader('Set-Cookie', cookie);
    res.status(200).json({ message: 'Login successful' });
}