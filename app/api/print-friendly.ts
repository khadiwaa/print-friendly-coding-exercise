// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Puppeteer Docs: https://pptr.dev/
import type {NextApiRequest, NextApiResponse} from 'next';
import puppeteer from 'puppeteer';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const browser = await puppeteer.launch();

    return res.status(200).send('Print Friendly Content');
}