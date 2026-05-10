const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.BREVO_USER,
                pass: process.env.BREVO_PASS,
            },
        });

        const mailOptions = {
            from: process.env.BREVO_USER,
            to: options.email,
            subject: options.subject,
            text: options.message,
            html: `<p>${options.message}</p>`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Email sending error:', error.message);
        throw new Error(`Failed to send email: ${error.message}`);
    }
};

module.exports = sendEmail;