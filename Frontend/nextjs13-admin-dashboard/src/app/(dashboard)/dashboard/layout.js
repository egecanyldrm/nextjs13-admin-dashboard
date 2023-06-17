import { Inter } from 'next/font/google'
import dashboardConfig from '@/configs/dashboard.json'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
