import Image from 'next/image'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy-deep pt-[70px]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-light">
            Cálculos Trabalhistas &nbsp;|&nbsp; Suporte Técnico à Advocacia
          </p>

          <h1 className="mt-5 text-balance font-heading text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            O cálculo feito por quem já rodou a folha que originou a verba.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Cálculos trabalhistas, liquidações, conferências e análises
            técnico-financeiras para escritórios de advocacia, com experiência
            prática em rotinas de Departamento Pessoal e folha de pagamento.
          </p>

          <ul className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li className="flex items-baseline gap-2 text-sm text-white/85">
              <span className="font-heading text-lg font-bold text-orange-light">+2.000</span>
              colaboradores em operações de folha
            </li>
            <li className="flex items-baseline gap-2 text-sm text-white/85">
              <span className="font-heading text-lg font-bold text-orange-light">+R$ 4 milhões</span>
              em volume mensal de folha
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Solicitar orçamento
            </a>
            <a
              href="https://wa.me/5561999551292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs text-white/55">
            Atendimento de segunda a sexta, das 9h às 18h.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-[460px]">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.75rem] bg-orange/90"
          />
          <Image
            src="/anderson-dp-sem-risco.png"
            alt="Anderson Luiz de Oliveira, responsável pela DP Sem Risco, de blazer azul em um escritório, ao lado do painel com a marca DP Sem Risco"
            width={912}
            height={912}
            priority
            quality={95}
            sizes="(min-width: 1024px) 460px, (min-width: 640px) 448px, calc(100vw - 2rem)"
            className="relative aspect-square h-auto w-full rounded-[1.75rem] border border-white/10 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
