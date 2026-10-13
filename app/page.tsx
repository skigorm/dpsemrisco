import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ExperienceBar } from '@/components/experience-bar'
import { Atuacao } from '@/components/atuacao'
import { Documentos } from '@/components/documentos'
import { Metodologia } from '@/components/metodologia'
import { Diferenciais } from '@/components/diferenciais'
import { Sobre } from '@/components/sobre'
import { Contato } from '@/components/contato'
import { Faq } from '@/components/faq'
import { CtaFinal } from '@/components/cta-final'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ExperienceBar />
        <Atuacao />
        <Documentos />
        <Metodologia />
        <Diferenciais />
        <Sobre />
        <Contato />
        <Faq />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
