import { Clock } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Envio do caso',
    text: 'O cliente apresenta a demanda, a decisão e os documentos disponíveis.',
  },
  {
    number: '02',
    title: 'Definição do escopo',
    text: 'O caso é analisado para definir o escopo do trabalho e o orçamento.',
  },
  {
    number: '03',
    title: 'Elaboração do cálculo',
    text: 'O cálculo é desenvolvido conforme os documentos e parâmetros definidos para a demanda.',
  },
  {
    number: '04',
    title: 'Entrega',
    text: 'O material é entregue de forma organizada, com demonstrativos e critérios utilizados.',
  },
]

export function Metodologia() {
  return (
    <section id="metodologia" className="scroll-mt-[70px] bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-dark">
            Metodologia
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
            Como funciona o trabalho
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-xl border border-line bg-background p-6"
            >
              <span className="font-heading text-3xl font-bold text-orange-dark">
                {step.number}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/80">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex items-start gap-3 rounded-xl border border-navy/15 bg-navy/5 p-5">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-graphite">
            <span className="font-semibold text-navy">Prazo padrão de entrega: 5 dias úteis.</span>{' '}
            O prazo aplicável é apresentado como referência e pode variar conforme
            o escopo e as particularidades de cada trabalho.
          </p>
        </div>
      </div>
    </section>
  )
}
