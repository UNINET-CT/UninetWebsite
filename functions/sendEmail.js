require('dotenv').config();

const axios = require('axios');
const nodemailer = require('nodemailer');

// OAuth2 credentials from environment variables
const clientId = process.env.CLIENT_ID;
const tenantId = process.env.TENANT_ID;
const refreshToken = process.env.REFRESH_TOKEN;
const userEmail = process.env.OUTLOOK_EMAIL;

async function getAccessToken() {
  const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('refresh_token', refreshToken);
  params.append('grant_type', 'refresh_token');
  params.append('scope', 'https://outlook.office365.com/.default');

  try {
    const response = await axios.post(tokenEndpoint, params);
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to obtain access token:', error.response ? error.response.data : error.message);
    throw error;
  }
}

async function sendEmail(event) {
  const { name, email, message } = JSON.parse(event.body);

  try {
    const accessToken = await getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        type: 'OAuth2',
        user: userEmail,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: userEmail,
      to: userEmail,
      subject: `[UNINET-CT WEBSITE]: New message from ${name} <${email}>`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.toString() })
    };
  }
}

exports.handler = async (event) => {
  return await sendEmail(event);
};
