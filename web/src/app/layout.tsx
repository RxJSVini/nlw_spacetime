import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

export const metadata = {
  title: 'Next Level Week - Spacetime',
  description: 'Uma capsula do tempo construída com React/Nextjs na NLW',
}


const roboto = Roboto({subsets:['latin'], variable:'--font-roboto'});
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '200',
  variable:'--font-bai-jamjuree'
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${baiJamjuree.variable}`}>{children}</body>
    </html>
  )
}
