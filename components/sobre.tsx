import Image from 'next/image'
import { Check } from 'lucide-react'

const highlights = [
  'Graduação em Gestão de Recursos Humanos',
  'Especialização em Relações e Cálculos Trabalhistas',
  'Formação complementar em Perícia Trabalhista',
  'Prática com PJe-Calc',
  'Excel avançado',
  'Experiência com folha de +2.000 colaboradores',
  'Volume mensal de folha superior a R$ 4 milhões',
]

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-[70px] bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-navy"
              />
              <Image
                src="/anderson-dp-sem-risco.png"
                alt="Retrato de Anderson Luiz de Oliveira no escritório da DP Sem Risco"
                width={912}
                height={912}
                loading="lazy"
                quality={95}
                sizes="(min-width: 640px) 384px, calc(100vw - 2rem)"
                className="relative aspect-square h-auto w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-dark">
              Sobre
            </p>
            <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
              Anderson Luiz de Oliveira
            </h2>
            <p className="mt-2 text-base font-medium text-graphite/70">
              Cálculos trabalhistas e experiência prática em Departamento Pessoal
            </p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-graphite/85 sm:text-base">
              <p>
                Sou profissional especializado em cálculos trabalhistas,
                administração de pessoal e análise de rotinas de folha de
                pagamento, com atuação voltada ao suporte técnico de escritórios
                de advocacia em demandas trabalhistas.
              </p>
              <p>
                Minha experiência reúne conhecimento prático em Departamento
                Pessoal e domínio das principais verbas que compõem as relações
                de trabalho, como salários, horas extras, adicionais, férias, 13º
                salário, FGTS, aviso-prévio, rescisões, reflexos, benefícios,
                jornadas, banco de horas, afastamentos e encargos.
              </p>
              <p>
                Sou graduado em Gestão de Recursos Humanos, com especialização em
                Relações e Cálculos Trabalhistas e formação complementar em
                Perícia Trabalhista, incluindo prática com PJe-Calc.
              </p>
              <p>
                Desenvolvo memórias de cálculo, liquidações, atualizações de
                valores, conferências de contas e análises técnico-financeiras
                para apoiar a atuação de advogados nas demandas trabalhistas.
              </p>
              <p>
                Também tenho experiência com rotinas de folha de pagamento em
                operações de grande porte, envolvendo mais de 2.000 colaboradores
                e volumes mensais superiores a R$ 4 milhões.
              </p>
              <p>
                Utilizo Excel avançado, controles automatizados, planilhas
                estruturadas e recursos de análise de dados para organizar
                informações e demonstrativos.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-graphite">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-dark" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
