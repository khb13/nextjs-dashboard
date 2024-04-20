import '@/app/ui/global.css'; // jQuery common.css와 동일
import { pretendard } from '@/app/ui/fonts';

export default function RootLayout({
  children, // 프롭이 하나가 아닐 수 있어서 구조분해를 사용
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
