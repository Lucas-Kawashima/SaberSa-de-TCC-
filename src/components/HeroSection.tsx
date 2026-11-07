import { ArrowRight, BookOpen, Activity, CheckCircle2, ShieldAlert } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onArticlesClick: () => void;
  onSUSClick: () => void;
}

export function HeroSection({ onExploreClick, onArticlesClick, onSUSClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Split 2-Column Hero */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Medical Guidance */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed kicker metadata per zero-pill discipline */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
              <span>Portal Educativo em Saúde</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Evidências Científicas</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>SUS & Diretrizes Clínicas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Compreenda seus sintomas com ciência e segurança, sem mitos.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Uma ferramenta interativa para você aprender sobre sintomas comuns, identificar sinais de alerta graves, combater a desinformação pós-pandemia e saber exatamente quando e onde procurar um profissional de saúde.
            </p>

            {/* Action buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <Activity className="w-4 h-4" />
                <span>Explorar Sintomas Interativamente</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onArticlesClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span>Artigos de Fontes Médicas</span>
              </button>
            </div>

            {/* Scientific trust markers */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Fontes Oficiais</strong>
                  <span>Ministério da Saúde, Fiocruz, OMS e Sociedades Médicas.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Sem Autodiagnóstico</strong>
                  <span>Foco em letramento e preparo para consulta médica real.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Detecção de Red Flags</strong>
                  <span>Identificação clara de sinais que exigem UPA ou SAMU 192.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-fidelity verified medical consultation image */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full h-72 sm:h-96 lg:h-full min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <img
                src="/src/assets/images/hero_medical_consultation_1791919462426.jpg"
                alt="Médica dialogando com paciente em consulta ambulatorial atenciosa"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <p className="text-xs uppercase tracking-wider font-semibold text-teal-300">
                  Atenção e Cuidado Humanizado
                </p>
                <p className="text-sm font-medium leading-snug mt-1 text-slate-100">
                  "O diálogo com um médico qualificado é insubstituível. Use a informação para fazer perguntas melhores na sua consulta."
                </p>
                <button
                  onClick={onSUSClick}
                  className="mt-2 text-xs font-semibold text-teal-200 hover:text-white underline underline-offset-2 self-start"
                >
                  Conheça a rede de atendimento do SUS →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Evidence & Public Health Strip below the hero split */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              85%
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Dos problemas de saúde são resolvidos no Posto de Saúde (UBS) sem precisar de hospital
            </p>
          </div>
          <div className="p-3">
            <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              0%
            </div>
            <p className="mt-1 text-xs text-slate-600">
              De eficácia de antibióticos contra vírus como gripe, resfriado ou COVID-19
            </p>
          </div>
          <div className="p-3">
            <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              192
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Ligação gratuita para o SAMU em qualquer lugar do Brasil para emergências com risco de morte
            </p>
          </div>
          <div className="p-3">
            <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              136
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Disque Saúde do Ministério da Saúde para tirar dúvidas e localizar postos de vacinação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
