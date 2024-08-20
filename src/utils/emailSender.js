import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (options) => {
  const msg = {
    to: options.email,
    from: 'jeff1zuniga3@gmail.com',
    subject: options.subject,
    text: options.message,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to MarketLink</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="background-color: #ffffff; padding: 20px; margin: 30px auto; max-width: 600px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; padding: 10px 0; border-bottom: 1px solid #dddddd;">
                <img src="https://i.ibb.co/TYn8CQS/online-shop.png" alt="MarketLink Logo" style="max-width: 100px;">
            </div>
            <div style="padding: 20px; line-height: 1.6; color: #333333;">
                <h1 style="color: #333333; font-size: 24px;">Welcome to MarketLink!</h1>
                <p>Hi there,</p>
                <p>Thank you for joining MarketLink. We're excited to have you on board!</p>
                <p>At MarketLink, we strive to provide the best marketplace experience. Whether you're looking for the latest products or the best deals, we're here to help you every step of the way.</p>
                <p>If you have any questions or need assistance, feel free to reach out to our support team at any time.</p>
                <p>Best regards,</p>
                <p>The MarketLink Team</p>
            </div>
            <div style="text-align: center; padding: 20px; border-top: 1px solid #dddddd; color: #999999; font-size: 12px;">
                <p>&copy; 2024 MarketLink. All rights reserved.</p>
                <p><a href="https://unsubscribe.com/digitalMarketUnsubscribe" style="color: #333333; text-decoration: none;">Unsubscribe</a> | <a href="https://digitalMarketPolicy.com/privacy-policy" style="color: #333333; text-decoration: none;">Privacy Policy</a></p>
            </div>
        </div>
    </body>
    </html>
    `, // Contenido en HTML con CSS en línea
  };

  try {
    await sgMail.send(msg);
    console.log('Correo enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};
// import nodemailer from 'nodemailer';

// export const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: 'Your App digitalMarkert@gmail.com',
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };
import nodemailer from 'nodemailer';

// export const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: '"Your App" <digitalMarkert@gmail.com>',
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };