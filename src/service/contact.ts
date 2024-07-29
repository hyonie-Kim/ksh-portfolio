import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
    {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청 실패');
  }
  return data;
}
