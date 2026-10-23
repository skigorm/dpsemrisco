import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

const dir = path.join(process.cwd(), 'content/noticias')

export type Noticia = {
  slug: string
  titulo: string
  data: string
  imagem: string
  resumo: string
  html: string
}

function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value ?? '').slice(0, 10)
}

function resumir(markdown: string, max = 160): string {
  const texto = markdown
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>`\[\]()!-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return texto.length > max ? `${texto.slice(0, max).trimEnd()}…` : texto
}

function ler(arquivo: string): Noticia {
  const raw = fs.readFileSync(path.join(dir, arquivo), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug: arquivo.replace(/\.md$/, ''),
    titulo: String(data.titulo ?? ''),
    data: toISODate(data.data),
    imagem: String(data.imagem ?? ''),
    resumo: resumir(content),
    html: marked.parse(content, { async: false }),
  }
}

export function listarNoticias(): Noticia[] {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map(ler)
    .sort((a, b) => b.data.localeCompare(a.data))
}

export function obterNoticia(slug: string): Noticia | undefined {
  return listarNoticias().find((n) => n.slug === slug)
}

export function formatarData(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
