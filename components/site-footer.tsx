import Image from 'next/image'
import { Phone, Mail, AtSign } from 'lucide-react'
import { nav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-dp-sem-risco.png"
                alt={`Logo ${site.brand}`}
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="font-heading text-lg font-bold leading-none text-white">
                DP <span className="text-orange-light">Sem Risco</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Cálculos trabalhistas e suporte técnico à advocacia.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-light">
              Contato
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-orange-light" aria-hidden="true" />
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-orange-light" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagramLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <AtSign className="h-4 w-4 text-orange-light" aria-hidden="true" />
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-white/60">Atendimento: {site.hours}.</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-light">
              Navegação
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-sm text-white/55">
          <p>Responsável: {site.owner}.</p>
          <p>
            Este site tem caráter informativo. Cada demanda é analisada de acordo
            com suas particularidades e documentação disponível.
          </p>
          <p>© 2026 DP Sem Risco. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
