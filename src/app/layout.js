import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Binge Watch',
  description: 'Get lastest info on movies and shows',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mainBody`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
