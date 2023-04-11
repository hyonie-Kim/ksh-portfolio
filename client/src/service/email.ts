import nodemailer from "nodemailer";
export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER, // generated ethereal user
    pass: process.env.AUTH_PASS, // generated ethereal password
  },
});

// export async function sendEmail(params:type) {

// }
