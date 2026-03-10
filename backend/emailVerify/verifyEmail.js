import nodemailer from "nodemailer"
import "dotenv/config"

export const verifyEmail = (token, email) => {
    const transporter =
        nodemailer.createTransport(
            {
                service: 'gmail',
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                }
            }
        );
    const mailConfigurations = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Email verification',
        text: `Hi there, you have resently visited our website and entered your email, please follow the given link to verify your email http://localhost:5173/verify/${token}`
    };
    transporter
        .sendMail(mailConfigurations,
            function (error, info) {
                if (error) {
                    throw Error(error);
                } else {
                    console.log('Email sent successfully');
                }
                console.log(info);
            });
}





