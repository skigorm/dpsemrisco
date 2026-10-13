'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Qual é o prazo padrão?',
    a: 'O prazo padrão de entrega é de 5 dias úteis. O prazo aplicável à demanda deve ser definido conforme o escopo e as particularidades do trabalho.',
  },
  {
    q: 'Quais trabalhos são realizados?',
    a: 'São realizados cálculos trabalhistas, memórias de cálculo, liquidações, atualizações de valores, conferências e análises técnico-financeiras, além de apoio técnico à advocacia.',
  },
  {
    q: 'Quais documentos podem ser analisados?',
    a: 'Entre os documentos estão cartões de ponto, contracheques, fichas financeiras, TRCTs, normas coletivas, sentenças e acórdãos.',
  },
  {
    q: 'Há experiência com PJe-Calc?',
    a: 'Sim. Anderson possui formação complementar em Perícia Trabalhista, incluindo prática com PJe-Calc.',
  },
  {
    q: 'Como funciona o orçamento?',
    a: 'A demanda e os documentos disponíveis são apresentados para definição do escopo do trabalho e do orçamento.',
  },
  {
    q: 'Como entrar em contato?',
    a: 'O contato pode ser feito pelo WhatsApp corporativo, e-mail ou Instagram.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section aria-labelledby="faq-title" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-dark">
            Perguntas frequentes
          </p>
          <h2 id="faq-title" className="mt-4 font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl">
            Dúvidas comuns
          </h2>
        </div>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                  >
                    <span className="font-heading text-base font-semibold text-navy sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-orange-dark transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className="pb-5 text-sm leading-relaxed text-graphite/80 sm:text-base"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
