import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'DP Sem Risco | Cálculos Trabalhistas',
  description:
    'DP Sem Risco — cálculos trabalhistas, liquidações, conferências e suporte técnico para escritórios de advocacia, com experiência prática em Departamento Pessoal.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: 'DP Sem Risco',
    title: 'DP Sem Risco | Cálculos Trabalhistas',
    description:
      'Cálculos trabalhistas e suporte técnico para escritórios de advocacia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DP Sem Risco — cálculos trabalhistas e suporte técnico à advocacia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DP Sem Risco | Cálculos Trabalhistas',
    description:
      'Cálculos trabalhistas e suporte técnico para escritórios de advocacia.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#011a3e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${archivo.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
