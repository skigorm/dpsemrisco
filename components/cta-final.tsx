import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function CtaFinal() {
  return (
    <section className="bg-ice">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-balance font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
          Precisa de apoio técnico em um cálculo trabalhista?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-graphite/80">
          Apresente a sua demanda e converse diretamente com Anderson Luiz de
          Oliveira.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/#contato"
            className="inline-flex w-full items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:w-auto"
          >
            Solicitar orçamento
          </a>
          <a
            href="https://wa.me/5561999551292"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy/60 hover:bg-navy/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
