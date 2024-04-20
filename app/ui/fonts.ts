import { Montserrat, Lusitana } from 'next/font/google'; // 경로를 먼저 입력하자!
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  subsets: ['latin'], // 물음표로 나오지만 필수값임!
  display: 'swap', //역시 필수값인듯?
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});
