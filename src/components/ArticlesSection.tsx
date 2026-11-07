import { useState } from 'react';
import { ARTICLES_DATA, HealthArticle } from '../data/articlesData';
import { BookOpen, ExternalLink, X, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

export function ArticlesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeArticle, setActiveArticle] = useState<HealthArticle | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Artigos' },
    { id: 'Doenças Infecciosas', label: 'Doenças Infecciosas' },
    { id: 'Uso Racional de Medicamentos', label: 'Uso de Remédios' },
    { id: 'Evidência & Pesquisa', label: 'Evidência Científica' },
    { id: 'Saúde Pública & SUS', label: 'SUS & Saúde Pública' },
    { id: 'Neurologia & Sintomas', label: 'Sintomas Neurológicos' },
  ];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    return selectedCategory === 'todos' || art.category === selectedCategory;
  });

  return (
    <section id="artigos" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          {/* Unboxed kicker per zero-pill discipline */}
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">
            <span>Fontes Médicas Reais</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Sem Fake News</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Diretrizes Oficiais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Artigos Educativos Baseados em Evidências Médicas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Textos didáticos elaborados a partir de consensos do Ministério da Saúde, Fiocruz, OMS e Sociedades Brasileiras de Especialidades, com rigor contra a desinformação.
          </p>
        </div>

        {/* Category Filters (Interactive buttons with click handlers) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col hover:border-slate-300 hover:shadow-xs transition-all group"
            >
              {/* Cover Image */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white drop-shadow-xs">
                    {article.sourceOrganization}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata Line per zero-pill discipline */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-medium text-teal-800">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {article.publishedDate}
                  </span>
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Article Reader */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
            <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4 z-10">
                {/* Unboxed metadata line */}
                <div className="flex items-center gap-2 text-xs text-slate-500 truncate">
                  <span className="font-semibold text-teal-800">{activeArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{activeArticle.sourceOrganization}</span>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                  aria-label="Fechar artigo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {activeArticle.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
                    {activeArticle.subtitle}
                  </p>
                </div>

                {/* Cover Image in Modal */}
                <div className="rounded-xl overflow-hidden border border-slate-200 max-h-72">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.imageAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Key Takeaways */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    Pontos-Chave Baseados em Evidências
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {activeArticle.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Myth vs Fact Section */}
                {activeArticle.mythVsFact.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Desmistificando Mitos Comuns
                    </h4>
                    {activeArticle.mythVsFact.map((item, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
                        <div className="text-xs text-rose-800 flex items-start gap-2">
                          <span className="font-bold shrink-0">MITO:</span>
                          <span>"{item.myth}"</span>
                        </div>
                        <div className="text-xs text-emerald-900 font-semibold flex items-start gap-2">
                          <span className="font-bold shrink-0">FATO CIENTÍFICO:</span>
                          <span>{item.fact}</span>
                        </div>
                        <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                          {item.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Main Content Sections */}
                <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
                  {activeArticle.contentSections.map((sec, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-bold text-slate-900 text-base">
                        {sec.heading}
                      </h4>
                      <p className="whitespace-pre-line text-slate-700">
                        {sec.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* When to see doctor */}
                <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-5 text-xs sm:text-sm text-amber-950">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    Quando procurar auxílio médico presencial neste quadro:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-amber-900">
                    {activeArticle.whenToSeeDoctor.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Official References & Sources with external links */}
                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                  <h5 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                    Fontes Oficiais e Referências Bibliográficas:
                  </h5>
                  <ul className="space-y-1.5">
                    {activeArticle.academicReferences.map((ref, idx) => (
                      <li key={idx} className="flex items-start justify-between gap-2">
                        <span>
                          <strong>{ref.institution}:</strong> {ref.citation}
                        </span>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-teal-700 hover:text-teal-900 underline whitespace-nowrap shrink-0 inline-flex items-center gap-1"
                        >
                          <span>Portal Oficial</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Concluir Leitura
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
