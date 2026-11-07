import { useState, useMemo } from 'react';
import {
  SYMPTOMS_LIST,
  SYMPTOM_CATEGORIES,
  EDUCATIONAL_CONDITIONS,
  Symptom,
  ConditionProfile,
} from '../data/symptomsData';
import {
  Search,
  Check,
  AlertTriangle,
  PhoneCall,
  ClipboardList,
  Copy,
  RotateCcw,
  Info,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Clock,
  Sparkles,
} from 'lucide-react';

interface SymptomExplorerProps {
  onGoToSUSGuide: () => void;
}

export function SymptomExplorer({ onGoToSUSGuide }: SymptomExplorerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedSymptomIds, setSelectedSymptomIds] = useState<string[]>([]);
  const [duration, setDuration] = useState<'poucas_horas' | '1_2_dias' | '3_7_dias' | 'mais_de_uma_semana'>('1_2_dias');
  const [intensity, setIntensity] = useState<'leve' | 'moderada' | 'severa'>('moderada');
  const [patientProfile, setPatientProfile] = useState<'adulto' | 'idoso' | 'crianca' | 'gestante'>('adulto');
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Filter symptoms
  const filteredSymptoms = useMemo(() => {
    return SYMPTOMS_LIST.filter((symptom) => {
      const matchesSearch =
        symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        symptom.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'todos' || symptom.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleSymptom = (id: string) => {
    setSelectedSymptomIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setHasAnalyzed(false);
  };

  const clearAll = () => {
    setSelectedSymptomIds([]);
    setSearchTerm('');
    setSelectedCategory('todos');
    setHasAnalyzed(false);
  };

  // Identify red flags in selection
  const selectedRedFlags = useMemo(() => {
    return selectedSymptomIds
      .map((id) => SYMPTOMS_LIST.find((s) => s.id === id))
      .filter((s): s is Symptom => !!s && !!s.isRedFlagSingle);
  }, [selectedSymptomIds]);

  // Check additional clinical urgency criteria
  const isClinicallyUrgent = useMemo(() => {
    if (selectedRedFlags.length > 0) return true;
    if (intensity === 'severa') return true;
    if (
      selectedSymptomIds.includes('febre_alta') &&
      (duration === '3_7_dias' || duration === 'mais_de_uma_semana')
    ) {
      return true;
    }
    if (patientProfile === 'idoso' && selectedSymptomIds.includes('febre_alta')) return true;
    if (patientProfile === 'crianca' && selectedSymptomIds.includes('febre_alta') && duration !== 'poucas_horas') return true;
    return false;
  }, [selectedRedFlags, intensity, selectedSymptomIds, duration, patientProfile]);

  // Calculate educational matches
  const matchedConditions = useMemo(() => {
    if (selectedSymptomIds.length === 0) return [];

    return EDUCATIONAL_CONDITIONS.map((condition) => {
      const matchCount = condition.matchedSymptomIds.filter((id) =>
        selectedSymptomIds.includes(id)
      ).length;
      const matchScore = Math.round((matchCount / Math.max(condition.matchedSymptomIds.length, 4)) * 100);
      return {
        condition,
        matchCount,
        matchScore: Math.min(matchScore, 98),
      };
    })
      .filter((item) => item.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount || b.matchScore - a.matchScore);
  }, [selectedSymptomIds]);

  const durationLabels: Record<string, string> = {
    poucas_horas: 'Menos de 24 horas (início recente)',
    '1_2_dias': '1 a 2 dias',
    '3_7_dias': '3 a 7 dias (persistente)',
    mais_de_uma_semana: 'Mais de 1 semana (prolongado)',
  };

  const intensityLabels: Record<string, string> = {
    leve: 'Leve (incômodo suportável, mantém atividades normais)',
    moderada: 'Moderada (dificulta atividades diárias, necessita repouso)',
    severa: 'Severa (dor ou mal-estar intenso incapacitante)',
  };

  const profileLabels: Record<string, string> = {
    adulto: 'Adulto (18 a 59 anos)',
    idoso: 'Idoso (60+ anos - maior vulnerabilidade)',
    crianca: 'Criança / Adolescente (< 18 anos)',
    gestante: 'Gestante ou Puérpera',
  };

  // Generate consultation summary
  const generateConsultationText = () => {
    const symptomsSelectedNames = selectedSymptomIds
      .map((id) => SYMPTOMS_LIST.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return `--- RESUMO PARA CONSULTA MÉDICA (SaberSaúde Educativo) ---
Perfil: ${profileLabels[patientProfile]}
Duração dos sintomas: ${durationLabels[duration]}
Intensidade informada: ${intensityLabels[intensity]}
Sintomas assinalados: ${symptomsSelectedNames || 'Nenhum'}

Possíveis pontos de atenção para discutir com o médico:
1. Há quanto tempo os sintomas se intensificaram?
2. Há necessidade de testes laboratoriais ou diferenciais (ex: Dengue, COVID-19, Hemograma)?
3. Existem sinais de alarme específicos para o meu quadro?
4. Quais medicações de uso contínuo devo manter ou ajustar?

*AVISO ÉTICO: Este documento é apenas uma organização pessoal de anotações do paciente para facilitar o diálogo com o médico na consulta presencial.*`;
  };

  const handleCopySummary = () => {
    const text = generateConsultationText();
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <section id="explorador" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">
            <span>Ferramenta Interativa</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Letramento em Saúde</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Protocolo de Segurança</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Explorador Interativo de Sintomas & Guia de Orientação
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Selecione o que você está sentindo para receber uma explicação educativa sobre as possíveis causas, identificar sinais de alerta e preparar perguntas organizadas para a sua consulta médica.
          </p>
        </div>

        {/* Permanent Safe Disclaimer within the Tool */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-amber-950">Lembrete Importante:</strong> Esta ferramenta é estritamente educativa e tem caráter informativo. Não fornece diagnóstico médico, não prescreve remédios e não dispensa a avaliação presencial de um profissional de saúde qualificado. Se você tiver sintomas repentinos e graves, procure atendimento imediato.
          </div>
        </div>

        {/* Step 1: Select Clinical Context (Duration, Intensity, Profile) */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 mb-8 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs flex items-center justify-center font-bold">1</span>
            Contexto do Quadro Clínico
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Duration Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Há quanto tempo os sintomas começaram?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'poucas_horas', label: '< 24 horas' },
                  { id: '1_2_dias', label: '1 a 2 dias' },
                  { id: '3_7_dias', label: '3 a 7 dias' },
                  { id: 'mais_de_uma_semana', label: '> 1 semana' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setDuration(item.id as any);
                      setHasAnalyzed(false);
                    }}
                    className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors border ${
                      duration === item.id
                        ? 'bg-teal-50 border-teal-600 text-teal-900 font-semibold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Intensity Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Intensidade geral do desconforto:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'leve', label: 'Leve' },
                  { id: 'moderada', label: 'Moderada' },
                  { id: 'severa', label: 'Severa' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setIntensity(item.id as any);
                      setHasAnalyzed(false);
                    }}
                    className={`px-3 py-2 text-xs font-medium rounded-lg text-center transition-colors border ${
                      intensity === item.id
                        ? item.id === 'severa'
                          ? 'bg-rose-50 border-rose-600 text-rose-900 font-bold'
                          : 'bg-teal-50 border-teal-600 text-teal-900 font-semibold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {intensity === 'severa' && (
                <p className="mt-2 text-xs text-rose-600 font-medium">
                  Sintomas de intensidade severa requerem avaliação médica imediata.
                </p>
              )}
            </div>

            {/* Profile Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Perfil do indivíduo:
              </label>
              <select
                value={patientProfile}
                onChange={(e) => {
                  setPatientProfile(e.target.value as any);
                  setHasAnalyzed(false);
                }}
                className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                <option value="adulto">Adulto geral (18 a 59 anos)</option>
                <option value="idoso">Idoso (60+ anos - atenção redobrada)</option>
                <option value="crianca">Criança / Adolescente (Pediatria)</option>
                <option value="gestante">Gestante ou Puérpera</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 2: Symptom Selection Area */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs flex items-center justify-center font-bold">2</span>
              Assinale os Sintomas Presentes
              <span className="text-xs font-normal text-slate-500 lowercase">
                ({selectedSymptomIds.length} selecionado{selectedSymptomIds.length !== 1 ? 's' : ''})
              </span>
            </h3>

            {selectedSymptomIds.length > 0 && (
              <button
                onClick={clearAll}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 self-start sm:self-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpar seleção</span>
              </button>
            )}
          </div>

          {/* Search and Category Filter Bar */}
          <div className="space-y-4 mb-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar sintoma por nome (ex: tosse, febre, dor no peito, enjoo...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-colors"
              />
            </div>

            {/* Category Segmented Filter (Allowed interactive buttons with click handlers) */}
            <div className="flex flex-wrap gap-1.5">
              {SYMPTOM_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Symptom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSymptoms.map((symptom) => {
              const isSelected = selectedSymptomIds.includes(symptom.id);
              const isRedFlag = symptom.isRedFlagSingle;

              return (
                <div
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3 select-none ${
                    isSelected
                      ? isRedFlag
                        ? 'bg-rose-50/70 border-rose-500 shadow-xs'
                        : 'bg-teal-50/60 border-teal-600 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 transition-colors border ${
                      isSelected
                        ? isRedFlag
                          ? 'bg-rose-600 border-rose-600 text-white'
                          : 'bg-teal-600 border-teal-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-semibold text-slate-900 leading-snug">
                        {symptom.name}
                      </span>
                      {isRedFlag && (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.2 rounded">
                          Sinal de Alerta 🚨
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                      {symptom.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredSymptoms.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-xs">
              Nenhum sintoma encontrado para os termos pesquisados.
            </div>
          )}

          {/* Action Button */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              {selectedSymptomIds.length === 0
                ? 'Selecione pelo menos um sintoma para iniciar a análise educativa.'
                : `${selectedSymptomIds.length} sintoma(s) pronto(s) para análise.`}
            </p>

            <button
              onClick={() => setHasAnalyzed(true)}
              disabled={selectedSymptomIds.length === 0}
              className={`w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs ${
                selectedSymptomIds.length > 0
                  ? 'bg-teal-700 hover:bg-teal-800 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Analisar Sintomas de Forma Educativa</span>
            </button>
          </div>
        </div>

        {/* Step 3: Analysis and Educational Guidance Output */}
        {hasAnalyzed && selectedSymptomIds.length > 0 && (
          <div className="space-y-8 animate-fadeIn">
            {/* 🚨 Red Flag / Urgent Alert Box (If triggered) */}
            {isClinicallyUrgent && (
              <div className="p-5 sm:p-6 rounded-xl bg-rose-50 border-2 border-rose-500 text-rose-950 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base sm:text-lg font-bold text-rose-900">
                        Sinal de Alerta Clínico Detectado (Bandeira Vermelha)
                      </h4>
                      <span className="text-xs font-semibold bg-rose-200 text-rose-900 px-2 py-0.5 rounded">
                        Prioridade Alta
                      </span>
                    </div>

                    <p className="mt-1 text-xs sm:text-sm text-rose-800 leading-relaxed">
                      Você assinalou um ou mais sintomas críticos ou intensidade severa que, de acordo com as diretrizes do Ministério da Saúde e do SUS, exigem <strong>avaliação médica presencial imediata</strong>.
                    </p>

                    {selectedRedFlags.length > 0 && (
                      <div className="mt-3 p-3 bg-white/80 rounded-lg border border-rose-200 text-xs text-rose-900 space-y-1.5">
                        <p className="font-semibold text-rose-950">
                          Sintomas específicos que acionaram este alerta:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedRedFlags.map((flag) => (
                            <li key={flag.id}>
                              <strong>{flag.name}:</strong> {flag.redFlagReason}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a
                        href="tel:192"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Ligar SAMU 192 Imediatamente</span>
                      </a>
                      <button
                        onClick={onGoToSUSGuide}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-rose-800 border border-rose-300 hover:bg-rose-100/60 text-xs font-semibold rounded-lg transition-colors"
                      >
                        <span>Ver onde fica a UPA ou Emergência mais próxima</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* General Health Education Conditions Match */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-teal-600" />
                    Condições Médicas Frequentemente Relacionadas em Estudo
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Como a medicina estuda e agrupa os sintomas selecionados (para fins didáticos).
                  </p>
                </div>

                <div className="text-xs text-slate-500">
                  Baseado em diretrizes do <strong className="text-slate-700">Ministério da Saúde & Fiocruz</strong>
                </div>
              </div>

              {matchedConditions.length > 0 ? (
                <div className="space-y-6">
                  {matchedConditions.slice(0, 3).map(({ condition, matchScore }) => (
                    <div
                      key={condition.id}
                      className="border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-teal-200 transition-colors bg-slate-50/30"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-base font-bold text-slate-900">
                              {condition.name}
                            </h4>
                            <span className="text-xs text-slate-500 italic">
                              ({condition.scientificName})
                            </span>
                          </div>
                          {/* Unboxed metadata per zero-pill discipline */}
                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                            <span>{condition.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>Duração média: {condition.typicalDuration}</span>
                          </div>
                        </div>

                        <div className="text-right sm:self-center">
                          <span className="text-xs font-medium text-slate-500 block">
                            Afinidade com sintomas:
                          </span>
                          <span className="text-sm font-bold font-mono text-teal-800">
                            {matchScore}% de compatibilidade didática
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2">
                        {condition.summary}
                      </p>

                      {/* Educational Breakdown Grid */}
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        {/* Safe Home Care */}
                        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-lg p-3">
                          <p className="font-semibold text-emerald-950 flex items-center gap-1.5 mb-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                            Cuidados Seguros de Conforto em Casa
                          </p>
                          <ul className="space-y-1 text-emerald-900 list-disc list-inside">
                            {condition.safeHomeCare.map((care, idx) => (
                              <li key={idx} className="leading-snug">
                                {care}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What NOT to do */}
                        <div className="bg-rose-50/60 border border-rose-200/80 rounded-lg p-3">
                          <p className="font-semibold text-rose-950 flex items-center gap-1.5 mb-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                            O Que JAMAIS Fazer (Riscos de Saúde)
                          </p>
                          <ul className="space-y-1 text-rose-900 list-disc list-inside">
                            {condition.whatNOTToDo.map((warn, idx) => (
                              <li key={idx} className="leading-snug">
                                {warn}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Source Citation */}
                      <div className="mt-3 text-[11px] text-slate-400">
                        Fonte da diretriz: {condition.sourceReference}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">
                  Os sintomas selecionados são gerais. Consulte um médico na Unidade Básica de Saúde para exame clínico detalhado.
                </p>
              )}
            </div>

            {/* Step 4: Questions to Ask Your Doctor & Consultation Summary */}
            <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-7 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                    <ClipboardList className="w-5 h-5 text-teal-400" />
                    Roteiro para a Sua Consulta Médica
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Leve estas informações anotadas para não esquecer detalhes cruciais durante a consulta com o médico.
                  </p>
                </div>

                <button
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap self-start md:self-center"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedSummary ? 'Copiado para a Área de Transferência!' : 'Copiar Resumo para o Médico'}</span>
                </button>
              </div>

              {/* Questions Checklist */}
              <div className="space-y-2.5 text-xs text-slate-200">
                <p className="font-semibold text-teal-300 text-sm mb-2">
                  Perguntas recomendadas para fazer ao profissional de saúde:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    <p className="font-medium text-white">1. Investigação Diagnóstica:</p>
                    <p className="text-slate-300 mt-0.5">
                      "Doutor(a), pelo tempo que estou com esses sintomas, há necessidade de realizar testes para Dengue, COVID-19 ou exames de sangue?"
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    <p className="font-medium text-white">2. Sinais de Alarme:</p>
                    <p className="text-slate-300 mt-0.5">
                      "Quais sintomas específicos indicam que devo retornar imediatamente a um pronto-socorro antes do prazo previsto?"
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    <p className="font-medium text-white">3. Medicações em Uso:</p>
                    <p className="text-slate-300 mt-0.5">
                      "Os remédios que já tomo habitualmente para pressão ou diabetes podem interagir com o tratamento que você está me passando?"
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    <p className="font-medium text-white">4. Tempo Esperado de Melhora:</p>
                    <p className="text-slate-300 mt-0.5">
                      "Em quantos dias é esperado que a febre e o mal-estar comecem a ceder de forma segura?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
