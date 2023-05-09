import './globals.css'
import Head from 'next/head'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <script async src="https://cdn.loado.dev/sdk.js"/>
        </Head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
