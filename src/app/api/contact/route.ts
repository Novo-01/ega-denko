import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, subject, message } = await request.json();

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // メール本文の作成
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `【お問い合わせ】${subject} - ${name}様`,
      text: `
お名前: ${name}
会社名: ${company || '未記入'}
メールアドレス: ${email}
電話番号: ${phone || '未記入'}
お問い合わせ内容: ${subject}
メッセージ:
${message}
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'メールの送信に失敗しました。' },
      { status: 500 }
    );
  }
} 