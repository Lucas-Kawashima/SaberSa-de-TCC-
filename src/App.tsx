import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MedicalDisclaimerBanner } from './components/MedicalDisclaimerBanner';
import { HeroSection } from './components/HeroSection';
import { SymptomExplorer } from './components/SymptomExplorer';
import { ArticlesSection } from './components/ArticlesSection';
import { VideosSection } from './components/VideosSection';
import { WhereToSeekCareSection } from './components/WhereToSeekCareSection';
import { ConsultationPrepSection } from './components/ConsultationPrepSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extralarge'>('normal');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cycleFontSize = () => {
    setFontSize((current) => {
      if (current === 'normal') return 'large';
      if (current === 'large') return 'extralarge';
      return 'normal';
    });
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const getFontSizeClass = () => {
    if (fontSize === 'large') return 'text-[17px]';
    if (fontSize === 'extralarge') return 'text-[19px]';
    return '';
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors ${
        highContrast ? 'high-contrast bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'
      } ${getFontSizeClass()}`}
    >
      {/* Prominent Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner />

      {/* Top Bar Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
        highContrast={highContrast}
        toggleHighContrast={toggleHighContrast}
        fontSize={fontSize}
        cycleFontSize={cycleFontSize}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('explorador')}
          onArticlesClick={() => scrollToSection('artigos')}
          onSUSClick={() => scrollToSection('onde-ir')}
        />

        {/* Interactive Symptom Explorer */}
        <SymptomExplorer onGoToSUSGuide={() => scrollToSection('onde-ir')} />

        {/* Doctor Consultation Preparation Tool */}
        <ConsultationPrepSection />

        {/* Verified Medical Articles from Official Sources */}
        <ArticlesSection />

        {/* Educational Videos from Reputable Medical Channels */}
        <VideosSection />

        {/* Where to Seek Care (UBS, UPA, SAMU 192) */}
        <WhereToSeekCareSection />
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
