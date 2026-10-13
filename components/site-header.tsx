'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { nav, site } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background">
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-2.5" aria-label={`${site.brand} — início`}>
          <Image
            src="/logo-dp-sem-risco.png"
            alt={`Logo ${site.brand}`}
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-heading text-lg font-bold leading-none tracking-tight text-navy">
            DP <span className="text-orange-dark">Sem Risco</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-graphite/80 transition-colors hover:text-navy focus-visible:text-navy focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-flex items-center rounded-md bg-orange px-4 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Solicitar orçamento
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-navy transition-colors hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-graphite transition-colors hover:bg-ice"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-orange px-4 py-3 text-base font-semibold text-navy-deep transition-colors hover:bg-orange-light"
            >
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
