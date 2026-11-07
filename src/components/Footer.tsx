import { ShieldCheck, Heart, AlertTriangle, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Brand & Mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
                +
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                SaberSaúde Educativo
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Portal público de promoção do letramento em saúde, combate à desinformação pós-pandemia e incentivo ao uso consciente dos serviços de atenção primária do SUS e medicina de família.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Navegação Educativa
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button
                  onClick={() => onNavigate('explorador')}
                  className="hover:text-white transition-colors text-left"
                >
                  Explorador de Sintomas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artigos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Artigos Baseados em Evidências
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('videos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Vídeos Educativos Oficiais
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('onde-ir')}
                  className="hover:text-white transition-colors text-left"
                >
                  Guia do SUS: Onde Buscar Ajuda
                </button>
              </li>
            </ul>
          </div>

          {/* Official Health Sources */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Fontes Governamentais & Científicas
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a
                  href="https://www.gov.br/saude/pt-br"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Ministério da Saúde (Brasil)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://portal.fiocruz.br"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Fundação Oswaldo Cruz (Fiocruz)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.who.int"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Organização Mundial da Saúde (OMS)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://portal.cfm.org.br"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Conselho Federal de Medicina (CFM)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Numbers */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Telefones de Emergência e Apoio
            </h4>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center text-slate-300">
                <span>SAMU (Emergência Médica):</span>
                <span className="font-mono font-bold text-white text-xs">192</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Disque Saúde (SUS):</span>
                <span className="font-mono font-bold text-white text-xs">136</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Corpo de Bombeiros:</span>
                <span className="font-mono font-bold text-white text-xs">193</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>CVV (Apoio Emocional):</span>
                <span className="font-mono font-bold text-white text-xs">188</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Disclaimer Box in Footer */}
        <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/60 text-[11px] leading-relaxed text-slate-300 space-y-1">
          <p className="font-semibold text-amber-300 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            TERMO DE RESPONSABILIDADE MÉDICA E ÉTICA:
          </p>
          <p>
            O portal <strong>SaberSaúde Educativo</strong> é uma ferramenta pedagógica de orientação pública. Nenhuma informação aqui contida substitui a avaliação clínica presencial, a anamnese detalhada, a palpação física e a ausculta realizadas por um médico registrado no CRM. Jamais interrompa tratamentos prescritos nem inicie o uso de antibióticos ou anti-inflamatórios sem receita médica. Se você ou alguém próximo apresentar falta de ar intensa, dor no peito em aperto, desmaio ou alteração súbita de consciência, acione o SAMU 192 ou dirija-se imediatamente à emergência hospitalar mais próxima.
          </p>
        </div>

        {/* Quiet copyright */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>
            © {new Date().getFullYear()} SaberSaúde Educativo. Desenvolvido para a promoção da ciência e saúde pública.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Ciência, evidência e respeito à vida</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
