import { Layers, Building2, GraduationCap, Table2 } from 'lucide-react'

const blocks = [
  {
    icon: Layers,
    title: 'Departamento Pessoal na origem da verba',
    text: 'Experiência prática com salários, horas extras, adicionais, férias, 13º salário, FGTS, aviso-prévio, rescisões, reflexos, benefícios, jornadas, banco de horas, afastamentos e encargos.',
  },
  {
    icon: Building2,
    title: 'Experiência em operação de grande porte',
    text: 'Vivência em operações de folha envolvendo mais de 2.000 colaboradores e volumes mensais superiores a R$ 4 milhões.',
  },
  {
    icon: GraduationCap,
    title: 'Formação direcionada',
    text: 'Graduação em Gestão de Recursos Humanos, especialização em Relações e Cálculos Trabalhistas e formação complementar em Perícia Trabalhista.',
  },
  {
    icon: Table2,
    title: 'Organização e rastreabilidade',
    text: 'Utilização de Excel avançado, controles automatizados e planilhas estruturadas para organizar informações e demonstrativos.',
  },
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="scroll-mt-[70px] bg-navy-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-light">
            Diferencial
          </p>
          <h2 className="mt-4 text-balance font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Experiência de Departamento Pessoal aplicada ao cálculo
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {blocks.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="rounded-xl border border-white/10 bg-navy p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange text-navy-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{b.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
