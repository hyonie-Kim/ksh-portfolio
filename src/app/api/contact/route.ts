import { NextResponse } from 'next/server';
import { EmailData, sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

async function readRequestBody(request: Request): Promise<string> {
  const reader = request.body?.getReader();
  if (!reader) return '';

  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }

  return Buffer.concat(chunks).toString('utf8');
}

export async function POST(request: Request) {
  let body: EmailData;

  try {
    const raw = await readRequestBody(request);
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { message: '요청 본문을 읽을 수 없습니다.' },
      { status: 400 }
    );
  }

  if (!bodySchema.isValidSync(body)) {
    return NextResponse.json(
      { message: '메일 전송에 실패하였습니다.' },
      { status: 400 }
    );
  }

  try {
    await sendEmail(body);
    return NextResponse.json(
      { message: '메일 성공적으로 전송하였습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: '메일 전송에 실패하였습니다.' },
      { status: 500 }
    );
  }
}
