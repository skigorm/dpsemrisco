const chips = [
  'Cartões de ponto',
  'Contracheques',
  'Fichas financeiras',
  'TRCTs',
  'Normas coletivas',
  'Sentenças',
  'Acórdãos',
]

export function Documentos() {
  return (
    <section aria-labelledby="documentos-title" className="bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="max-w-2xl">
          <h2
            id="documentos-title"
            className="font-heading text-xl font-bold text-navy sm:text-2xl"
          >
            Documentos que podem compor a análise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite/80">
            A análise considera os documentos e parâmetros disponíveis em cada
            demanda.
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-line bg-background px-4 py-2 text-sm font-medium text-navy"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
