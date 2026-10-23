import {
  Calculator,
  RefreshCw,
  ClipboardCheck,
  TrendingUp,
  Scale,
  FileSpreadsheet,
} from 'lucide-react'

const services = [
  {
    icon: Calculator,
    title: 'Memórias de cálculo e liquidações',
    text: 'Apuração de verbas e reflexos, com memória organizada e demonstrativos estruturados.',
  },
  {
    icon: RefreshCw,
    title: 'Atualização de valores',
    text: 'Atualização de valores conforme os parâmetros aplicáveis à demanda, com critérios e datas-base identificados.',
  },
  {
    icon: ClipboardCheck,
    title: 'Conferência de cálculos',
    text: 'Análise de cálculos apresentados pela parte contrária ou por terceiros, com identificação objetiva das divergências encontradas.',
  },
  {
    icon: TrendingUp,
    title: 'Análises técnico-financeiras',
    text: 'Análise dos documentos e parâmetros da demanda para auxiliar na compreensão dos valores envolvidos e em propostas de acordo.',
  },
  {
    icon: Scale,
    title: 'Apoio técnico à advocacia',
    text: 'Suporte técnico para petições, impugnações, manifestações e propostas de acordo que dependam de cálculos e informações financeiras.',
  },
  {
    icon: FileSpreadsheet,
    title: 'PJe-Calc e cálculos trabalhistas',
    text: 'Prática com PJe-Calc e experiência na elaboração e conferência de cálculos trabalhistas, com formação complementar em Perícia Trabalhista.',
  },
]

export function Atuacao() {
  return (
    <section id="atuacao" className="scroll-mt-[70px] bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-dark">
            Atuação
          </p>
          <h2 className="mt-4 text-balance font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
            Cálculos e suporte técnico para a advocacia trabalhista
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-graphite/80">
            A DP Sem Risco oferece apoio técnico em cálculos trabalhistas,
            liquidações, conferências e análises técnico-financeiras, de acordo
            com os documentos e parâmetros de cada demanda.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <li
                key={s.title}
                className="group rounded-xl border border-line bg-background p-6 transition-colors hover:border-navy/30"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/80">{s.text}</p>
              </li>
            )
          })}
        </ul>

        <div className="mt-12">
          <a
            href="/#contato"
            className="inline-flex items-center justify-center rounded-md bg-orange px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  )
}
