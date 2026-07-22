import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

function getTransporter() {
  const user = process.env.AUTH_USER;
  const pass = process.env.AUTH_PASS?.replace(/\s/g, '');

  if (!user || !pass) {
    throw new Error('메일 발송 환경 변수(AUTH_USER, AUTH_PASS)가 설정되지 않았습니다.');
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

export async function sendEmail({ subject, from, message }: EmailData) {
  const user = process.env.AUTH_USER;
  if (!user) {
    throw new Error('메일 발송 환경 변수(AUTH_USER)가 설정되지 않았습니다.');
  }

  const transporter = getTransporter();

  const mailData = {
    to: user,
    from: `"Portfolio Contact" <${user}>`,
    replyTo: from,
    subject: `[PORTFOLIO] ${subject}`,
    html: `
      <h1>${subject}</h1>
      <div>${message}</div>
      <br/>
      <p>보낸사람: ${from}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
