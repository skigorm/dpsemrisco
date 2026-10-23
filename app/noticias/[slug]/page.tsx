import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { formatarData, listarNoticias, obterNoticia } from '@/lib/noticias'

export const dynamicParams = false

export function generateStaticParams() {
  return listarNoticias().map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const n = obterNoticia(slug)
  if (!n) return {}
  return {
    title: `${n.titulo} | DP Sem Risco`,
    description: n.resumo,
    alternates: { canonical: `/noticias/${n.slug}` },
    openGraph: {
      type: 'article',
      title: n.titulo,
      description: n.resumo,
      publishedTime: n.data,
      images: n.imagem ? [n.imagem] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: n.titulo,
      description: n.resumo,
      images: n.imagem ? [n.imagem] : undefined,
    },
  }
}

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const n = obterNoticia(slug)
  if (!n) notFound()

  return (
    <>
      <SiteHeader />
      <main className="pt-[70px]">
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-14">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-graphite/70 hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Todas as notícias
          </Link>

          {n.imagem && (
            <div className="relative mt-6 aspect-video overflow-hidden rounded-lg bg-ice">
              <Image
                src={n.imagem}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <time dateTime={n.data} className="mt-6 block text-sm font-medium text-graphite/60">
            {formatarData(n.data)}
          </time>
          <h1 className="mt-2 font-heading text-2xl font-bold text-navy sm:text-3xl">{n.titulo}</h1>

          <div className="noticia-texto mt-6" dangerouslySetInnerHTML={{ __html: n.html }} />
        </article>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
