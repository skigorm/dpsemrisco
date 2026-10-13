const indicators = [
  { value: '+2.000', label: 'colaboradores em operações de folha' },
  { value: '+R$ 4 milhões', label: 'em volume mensal de folha' },
  { value: 'PJe-Calc', label: 'prática na ferramenta' },
  { value: '5 dias úteis', label: 'prazo padrão de entrega' },
]

export function ExperienceBar() {
  return (
    <section aria-labelledby="experiencia-title" className="border-b border-line bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12">
        <h2
          id="experiencia-title"
          className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-orange-dark"
        >
          Experiência prática aplicada ao cálculo trabalhista
        </h2>
        <dl className="mt-8 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {indicators.map((item) => (
            <div key={item.value} className="text-center">
              <dt className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                {item.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-graphite/75">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
