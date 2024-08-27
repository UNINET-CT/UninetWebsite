// netlify/functions/sendEmail.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
    }

    const { name, email, message } = JSON.parse(event.body);

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.OUTLOOK_EMAIL,
                pass: process.env.OUTLOOK_PASSWORD
            },
            tls: {
                ciphers: 'SSLv3'
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.OUTLOOK_EMAIL,
            subject: `New message from ${name}`,
            text: message
        };

        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Email sent' })
        };
    } catch (error) {
        console.error('Failed to send email:', error);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Failed to send email', error: error.toString() })
        };
    }
};
