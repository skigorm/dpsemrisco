import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { listarNoticias } from '@/lib/noticias'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${site.url}/noticias`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...listarNoticias().map((n) => ({
      url: `${site.url}/noticias/${n.slug}`,
      lastModified: n.data,
      priority: 0.6,
    })),
  ]
}
