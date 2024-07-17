import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  // 데이터 형태 정의
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: '메일 전송에 실패하였습니다.' }),
      { status: 400 }
    );
  }
  return sendEmail(body) //
    .then(
      () =>
        new Response(
          JSON.stringify({ message: '메일 성공적으로 전송하였습니다.' }),
          {
            status: 200,
          }
        )
    )
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({ message: '메일 전송에 실패하였습니다.' }),
        { status: 500 }
      );
    });
}
