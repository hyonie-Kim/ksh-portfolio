import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

/** 기존 /project/[slug] 경로 호환용 리다이렉트 */
export default function LegacyProjectPage({ params: { slug } }: Props) {
  redirect(`/projects/${slug}`);
}
