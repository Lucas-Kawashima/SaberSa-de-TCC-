import { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, ShieldCheck, HeartPulse } from 'lucide-react';

export function MedicalDisclaimerBanner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      aria-label="Aviso Legal e Ético Médico"
      className="bg-amber-50/90 border-b border-amber-200/80 text-amber-950 text-xs sm:text-sm py-2.5 px-4 sm:px-6 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong className="font-semibold text-amber-900">Aviso Educativo e de Segurança:</strong> As informações e ferramentas deste portal destinam-se exclusivamente ao letramento e aprendizado em saúde. <strong>Não substituem consulta, diagnóstico, exame clínico nem prescrição médica.</strong> Em caso de dor no peito, falta de ar severa ou febre persistente, procure atendimento médico imediatamente.
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="self-start md:self-center shrink-0 inline-flex items-center gap-1 font-medium text-amber-800 hover:text-amber-950 underline underline-offset-2 whitespace-nowrap"
        >
          <span>{expanded ? 'Ocultar detalhes éticos' : 'Por que este aviso é essencial?'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-amber-200/60 text-xs text-amber-900 leading-relaxed grid md:grid-cols-3 gap-4">
          <div className="flex gap-2">
            <HeartPulse className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">A Complexidade do Diagnóstico Humano</p>
              <p className="text-amber-800 mt-0.5">
                O diagnóstico médico exige exame físico presencial (ausculta de pulmão e coração, palpação do abdômen, aferição de pressão arterial e sinais vitais), além de histórico pessoal e familiar que nenhum algoritmo pode reproduzir.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">Combate à Desinformação Pós-Pandemia</p>
              <p className="text-amber-800 mt-0.5">
                A automedicação baseada em buscas na internet ou correntes de redes sociais é responsável por intoxicações graves, atraso no socorro hospitalar e seleção de bactérias resistentes a antibióticos.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">Sinais de Alarme Críticos</p>
              <p className="text-amber-800 mt-0.5">
                Sintomas que duram mais de 3 dias, pioram progressivamente ou envolvem dor aguda exigem avaliação médica presencial na UBS, UPA ou acionamento imediato do SAMU (192).
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
