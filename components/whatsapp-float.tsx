import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { site } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange text-navy-deep shadow-md transition-colors hover:bg-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  )
}
