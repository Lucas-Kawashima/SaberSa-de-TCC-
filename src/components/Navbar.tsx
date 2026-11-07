import { useState } from 'react';
import { PhoneCall, ShieldAlert, BookOpen, Video, Activity, MapPin, Menu, X, Eye } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontSize: 'normal' | 'large' | 'extralarge';
  cycleFontSize: () => void;
}

export function Navbar({
  onNavigate,
  activeSection,
  highContrast,
  toggleHighContrast,
  fontSize,
  cycleFontSize,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'explorador', label: 'Explorador de Sintomas', icon: Activity },
    { id: 'artigos', label: 'Artigos Científicos', icon: BookOpen },
    { id: 'videos', label: 'Vídeos Educativos', icon: Video },
    { id: 'onde-ir', label: 'Onde Buscar Ajuda (SUS)', icon: MapPin },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Bar strictly adhering to Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line text element */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="text-left group flex items-center gap-2.5 focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            +
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors whitespace-nowrap">
            SaberSaúde
          </span>
        </button>

        {/* Zone 2: 4 nav links, 1-2 word concise labels, single-line text with subtle hover */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap py-1 border-b-2 text-left ${
                activeSection === item.id
                  ? 'border-teal-600 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + accessible controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Accessibility toggle controls */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 mr-1 border-r border-slate-200 pr-3">
            <button
              onClick={cycleFontSize}
              title="Ajustar tamanho da fonte"
              className="px-2 py-1 rounded text-slate-700 hover:bg-slate-100 font-mono transition-colors"
            >
              A{fontSize === 'large' ? '+' : fontSize === 'extralarge' ? '++' : ''}
            </button>
            <button
              onClick={toggleHighContrast}
              title="Alternar alto contraste"
              className={`p-1.5 rounded transition-colors ${
                highContrast ? 'bg-slate-800 text-yellow-300' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          <a
            href="tel:192"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            title="Ligar para emergência médica"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>SAMU 192</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-teal-50 text-teal-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4 text-teal-600" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 px-2">
            <span>Acessibilidade:</span>
            <div className="flex gap-2">
              <button
                onClick={cycleFontSize}
                className="px-2.5 py-1 bg-slate-100 rounded text-slate-800 font-mono"
              >
                Tamanho da Fonte ({fontSize})
              </button>
              <button
                onClick={toggleHighContrast}
                className="px-2.5 py-1 bg-slate-100 rounded text-slate-800"
              >
                Alto Contraste
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
