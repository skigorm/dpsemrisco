'use client'

import { useState } from 'react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { site } from '@/lib/site'

const perfilOptions = ['Advogado(a)/Escritório', 'Empresa', 'Parte', 'Outro']
const servicoOptions = [
  'Memória de cálculo / liquidação',
  'Atualização de valores',
  'Conferência de cálculo',
  'Análise técnico-financeira / acordo',
  'PJe-Calc e cálculos trabalhistas',
  'Não sei ainda',
]
const faseOptions = [
  'Conhecimento',
  'Liquidação',
  'Execução',
  'Recurso',
  'Acordo em negociação',
  'Não sei informar',
]

type Errors = Partial<Record<string, string>>

const labelClass = 'block text-sm font-medium text-white'
const fieldClass =
  'mt-2 w-full rounded-md border border-white/20 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-orange-light focus:outline-none focus:ring-2 focus:ring-orange-light/40'
const selectClass = `${fieldClass} cursor-pointer [color-scheme:light] [&_option]:bg-white [&_option]:text-navy-deep [&_option:checked]:bg-ice [&_option:checked]:text-navy-deep [&_option:hover]:bg-ice [&_option:focus]:bg-ice`
const errorClass = 'mt-1.5 text-xs text-orange-light'

export function Contato() {
  const [errors, setErrors] = useState<Errors>({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const nome = (data.get('nome') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const whatsapp = (data.get('whatsapp') as string)?.trim()
    const perfil = data.get('perfil') as string
    const servico = data.get('servico') as string
    const fase = data.get('fase') as string
    const prazo = (data.get('prazo') as string)?.trim()
    const necessidade = (data.get('necessidade') as string)?.trim()
    const autorizo = data.get('autorizo')

    const next: Errors = {}
    if (!nome) next.nome = 'Informe seu nome completo.'
    if (!email) next.email = 'Informe seu e-mail.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Informe um e-mail válido.'
    if (!whatsapp) next.whatsapp = 'Informe seu WhatsApp.'
    else if (whatsapp.replace(/\D/g, '').length < 10)
      next.whatsapp = 'Informe um WhatsApp válido com DDD.'
    if (!necessidade) next.necessidade = 'Descreva a necessidade.'
    if (!autorizo) next.autorizo = 'É necessário autorizar o contato.'

    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)
      first?.focus()
      return
    }

    const message = [
      'Olá, Anderson. Vim pelo site da DP Sem Risco e gostaria de solicitar um orçamento.',
      '',
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `WhatsApp: ${whatsapp}`,
      `Perfil: ${perfil}`,
      `Tipo de serviço: ${servico}`,
      `Fase do processo: ${fase}`,
      `Prazo: ${prazo || 'Não informado'}`,
      `Necessidade: ${necessidade}`,
    ].join('\n')

    const url = `${site.whatsappLink}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="scroll-mt-[70px] bg-navy-deep">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-light">
            Contato
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Solicite um orçamento
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/80">
            Apresente a sua demanda e as informações disponíveis. O escopo do
            trabalho é definido de acordo com as particularidades de cada caso.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="nome" className={labelClass}>
              Nome completo <span className="text-orange-light">*</span>
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              autoComplete="name"
              className={fieldClass}
              aria-required="true"
              aria-invalid={!!errors.nome}
              aria-describedby={errors.nome ? 'nome-error' : undefined}
            />
            {errors.nome && (
              <p id="nome-error" role="alert" className={errorClass}>
                {errors.nome}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              E-mail <span className="text-orange-light">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" role="alert" className={errorClass}>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="whatsapp" className={labelClass}>
              WhatsApp <span className="text-orange-light">*</span>
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              className={fieldClass}
              aria-required="true"
              aria-invalid={!!errors.whatsapp}
              aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            />
            {errors.whatsapp && (
              <p id="whatsapp-error" role="alert" className={errorClass}>
                {errors.whatsapp}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="perfil" className={labelClass}>
              Você é:
            </label>
            <select id="perfil" name="perfil" className={selectClass} defaultValue={perfilOptions[0]}>
              {perfilOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="servico" className={labelClass}>
              Tipo de serviço:
            </label>
            <select id="servico" name="servico" className={selectClass} defaultValue={servicoOptions[0]}>
              {servicoOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="fase" className={labelClass}>
              Fase do processo:
            </label>
            <select id="fase" name="fase" className={selectClass} defaultValue={faseOptions[0]}>
              {faseOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="prazo" className={labelClass}>
              Prazo do processo <span className="text-white/50">(opcional)</span>
            </label>
            <input id="prazo" name="prazo" type="text" className={fieldClass} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="necessidade" className={labelClass}>
              Descrição da necessidade <span className="text-orange-light">*</span>
            </label>
            <textarea
              id="necessidade"
              name="necessidade"
              rows={5}
              className={`${fieldClass} resize-y`}
              aria-required="true"
              aria-invalid={!!errors.necessidade}
              aria-describedby={errors.necessidade ? 'necessidade-error' : undefined}
            />
            {errors.necessidade && (
              <p id="necessidade-error" role="alert" className={errorClass}>
                {errors.necessidade}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="autorizo" className="flex items-start gap-3 text-sm text-white/85">
              <input
                id="autorizo"
                name="autorizo"
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-white/10 accent-orange"
                aria-required="true"
                aria-invalid={!!errors.autorizo}
                aria-describedby={errors.autorizo ? 'autorizo-error' : undefined}
              />
              <span>Autorizo o contato pelos dados informados.</span>
            </label>
            {errors.autorizo && (
              <p id="autorizo-error" role="alert" className={errorClass}>
                {errors.autorizo}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enviar pelo WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
