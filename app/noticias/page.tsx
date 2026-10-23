import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { formatarData, listarNoticias } from '@/lib/noticias'

export const metadata: Metadata = {
  title: 'Notícias | DP Sem Risco',
  description: 'Notícias e atualizações sobre cálculos trabalhistas e Departamento Pessoal.',
  alternates: { canonical: '/noticias' },
}

export default function NoticiasPage() {
  const noticias = listarNoticias()

  return (
    <>
      <SiteHeader />
      <main className="pt-[70px]">
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
          <h1 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Notícias</h1>

          {noticias.length === 0 ? (
            <p className="mt-6 text-graphite/80">Nenhuma notícia publicada ainda.</p>
          ) : (
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {noticias.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/noticias/${n.slug}`}
                    className="group block overflow-hidden rounded-lg border border-line bg-background transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-video bg-ice">
                      {n.imagem && (
                        <Image
                          src={n.imagem}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <time dateTime={n.data} className="text-xs font-medium text-graphite/60">
                        {formatarData(n.data)}
                      </time>
                      <h2 className="mt-2 font-heading text-lg font-bold text-navy group-hover:text-orange-dark">
                        {n.titulo}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-graphite/80">{n.resumo}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
