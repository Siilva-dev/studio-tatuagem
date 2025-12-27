import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Marciano Tattoo',
    description: 'Dê vida às suas ideias com tatuagens únicas, onde criatividade e precisão se encontram para um design marcante.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <meta name="google" content="notranslate" />
            </head>
            <body className={inter.className}>
                {children}  
            </body>
        </html>
    )
}
