import { useState } from 'react';
import { ClipboardCheck, Plus, Trash2, Printer, Copy, Check, Info } from 'lucide-react';

export function ConsultationPrepSection() {
  const [symptomStarted, setSymptomStarted] = useState('Há cerca de 3 dias');
  const [mainComplaints, setMainComplaints] = useState('Febre baixa no final da tarde e tosse seca com garganta arranhando');
  const [currentMedications, setCurrentMedications] = useState('Losartana 50mg (para pressão alta)');
  const [knownAllergies, setKnownAllergies] = useState('Alergia a Dipirona (inchaço nos olhos)');
  const [customQuestions, setCustomQuestions] = useState<string[]>([
    'Qual é o diagnóstico mais provável para este padrão de sintomas?',
    'Preciso realizar exames de sangue ou imagem?',
    'Há sinais de alarme que exigem retorno imediato antes da data prevista?'
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [copied, setCopied] = useState(false);

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setCustomQuestions([...customQuestions, newQuestion.trim()]);
      setNewQuestion('');
    }
  };

  const removeQuestion = (index: number) => {
    setCustomQuestions(customQuestions.filter((_, i) => i !== index));
  };

  const handleCopyNotes = () => {
    const formatted = `=== GUIA PREPARATÓRIO PARA CONSULTA MÉDICA (SaberSaúde) ===

1. QUANDO COMEÇOU E HISTÓRICO:
${symptomStarted}

2. PRINCIPAIS QUEIXAS / SINTOMAS ATUAIS:
${mainComplaints}

3. MEDICAMENTOS DE USO CONTÍNUO EM CASA:
${currentMedications}

4. ALERGIAS CONHECIDAS A MEDICAMENTOS OU ALIMENTOS:
${knownAllergies}

5. DÚVIDAS E PERGUNTAS PARA FAZER AO MÉDICO:
${customQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

*Anotação pessoal gerada para melhor aproveitamento do tempo de consulta médica.*`;

    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">
            <span>Ferramenta Cidadã</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Aproveite Sua Consulta</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Relação Médico-Paciente</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Preparador da Sua Consulta Médica
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Muitas pessoas esquecem sintomas cruciais ou medicações que já tomam ao entrar no consultório. Preencha este roteiro simples e leve com você.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                1. Há quanto tempo o sintoma começou?
              </label>
              <input
                type="text"
                value={symptomStarted}
                onChange={(e) => setSymptomStarted(e.target.value)}
                placeholder="Ex: Começou na terça-feira com febre..."
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                2. Quais são as principais queixas?
              </label>
              <input
                type="text"
                value={mainComplaints}
                onChange={(e) => setMainComplaints(e.target.value)}
                placeholder="Ex: Dor na nuca e dor de garganta ao engolir..."
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                3. Medicamentos que você já toma continuamente:
              </label>
              <input
                type="text"
                value={currentMedications}
                onChange={(e) => setCurrentMedications(e.target.value)}
                placeholder="Ex: Remédio de pressão, insulina, anticoncepcional..."
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                4. Alergias conhecidas (remédios ou alimentos):
              </label>
              <input
                type="text"
                value={knownAllergies}
                onChange={(e) => setKnownAllergies(e.target.value)}
                placeholder="Ex: Alergia a Penicilina, Dipirona, iodo..."
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Custom Questions Section */}
          <div className="pt-6 border-t border-slate-100 mb-6">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              5. Perguntas que você quer fazer ao médico:
            </label>

            <div className="space-y-2 mb-4">
              {customQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800"
                >
                  <span className="leading-snug">{q}</span>
                  <button
                    onClick={() => removeQuestion(idx)}
                    className="text-slate-400 hover:text-rose-600 p-1 shrink-0"
                    title="Remover pergunta"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addQuestion()}
                placeholder="Adicionar outra pergunta específica para o seu médico..."
                className="flex-1 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
              />
              <button
                onClick={addQuestion}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar</span>
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              Você pode copiar estas anotações no celular ou imprimir para levar em mãos.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir Roteiro</span>
              </button>
              <button
                onClick={handleCopyNotes}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Roteiro Copiado!' : 'Copiar para o Celular'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
