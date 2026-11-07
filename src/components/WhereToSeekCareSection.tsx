import { useState } from 'react';
import { CARE_LEVELS, EMERGENCY_CONTACTS } from '../data/healthServicesData';
import { PhoneCall, MapPin, Building2, AlertTriangle, ShieldCheck, Check, Clock, ChevronRight, Copy } from 'lucide-react';

export function WhereToSeekCareSection() {
  const [activeTab, setActiveTab] = useState<'ubs' | 'upa' | 'emergencia'>('ubs');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  const currentLevel = CARE_LEVELS.find((l) => l.level === activeTab) || CARE_LEVELS[0];

  return (
    <section id="onde-ir" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">
            <span>Guia de Navegação no Sistema de Saúde</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>SUS & Emergência</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Acesso Cidadão</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Para Onde Devo Ir? UBS, UPA ou Emergência Hospitalar?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Buscar o nível correto de atendimento economiza horas de espera, evita a exposição a bactérias hospitalares e garante o tratamento adequado para o seu caso.
          </p>
        </div>

        {/* 3-Level Segmented Switcher */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl mb-8 max-w-2xl">
          {CARE_LEVELS.map((level) => {
            const isActive = activeTab === level.level;
            return (
              <button
                key={level.level}
                onClick={() => setActiveTab(level.level as any)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-center ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {level.name.split(' (')[0]}
              </button>
            );
          })}
        </div>

        {/* Selected Care Level Detailed Card */}
        <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50/50 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-teal-700">
                Nível de Atenção à Saúde
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {currentLevel.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {currentLevel.summary}
              </p>
            </div>

            {currentLevel.level === 'emergencia' && (
              <a
                href="tel:192"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors whitespace-nowrap self-start sm:self-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Discar 192 (SAMU)</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* When to go */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-teal-600" />
                Quando você deve procurar este serviço:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {currentLevel.whenToGo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What they do & examples */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-600" />
                  Estrutura e procedimentos realizados:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {currentLevel.whatTheyDo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real common examples */}
              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Exemplos comuns de queixas ideais para este local:
                </span>
                {/* Unboxed metadata per zero-pill discipline */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 font-medium">
                  {currentLevel.examples.map((ex, idx) => (
                    <span key={idx} className="flex items-center gap-2">
                      <span>{ex}</span>
                      {idx < currentLevel.examples.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency & Citizen Telephones Grid */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              Telefones Públicos Gratuitos e Centrais de Apoio
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Serviços oficiais do Brasil de utilidade pública sem custos de ligação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EMERGENCY_CONTACTS.map((contact) => (
              <div
                key={contact.number}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-extrabold font-mono text-slate-900">
                      {contact.number}
                    </span>
                    <button
                      onClick={() => handleCopy(contact.number)}
                      title="Copiar número"
                      className="p-1.5 text-slate-400 hover:text-slate-800 rounded transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {contact.name}
                  </h4>

                  <p className="text-[11px] text-teal-800 font-medium mt-1">
                    {contact.scope}
                  </p>

                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                    {contact.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">
                    {contact.operatingHours}
                  </span>
                  <a
                    href={`tel:${contact.number}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900"
                  >
                    <span>Ligar</span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {copiedNumber && (
            <div className="mt-4 text-center text-xs text-teal-700 font-medium">
              Número {copiedNumber} copiado com sucesso!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
