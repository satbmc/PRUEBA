/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, 
  Trash2, 
  ChevronRight, 
  ChevronLeft, 
  Layout, 
  CheckCircle, 
  MessageSquare, 
  CreditCard, 
  Image as ImageIcon, 
  HelpCircle, 
  Mail, 
  Type, 
  Download, 
  Eye, 
  Settings, 
  Sparkles,
  ArrowRight,
  Monitor,
  Smartphone,
  Tablet,
  Save,
  Undo,
  Redo,
  FlaskConical,
  Wand2,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LandingPageData, LandingPageSection, SectionType, Template, ABTestConfig, MarketingSuggestion } from './types';
import { TEMPLATES, SECTION_TYPES } from './constants';
import { getMarketingSuggestions } from './services/marketingService';

// --- Preview Components ---

const HeroSection = ({ content, theme }: { content: any; theme: any }) => (
  <section className="py-20 px-6 text-center" style={{ backgroundColor: theme.primaryColor + '10' }}>
    <div className="max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6 tracking-tight" 
        style={{ color: theme.primaryColor, fontFamily: theme.fontFamily }}
      >
        {content.title || 'Tu Título Aquí'}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        {content.subtitle || 'Una descripción breve de tu propuesta de valor.'}
      </motion.p>
      <motion.button 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition-all"
        style={{ backgroundColor: theme.primaryColor, borderRadius: theme.borderRadius }}
      >
        {content.ctaText || 'Empezar ahora'}
      </motion.button>
      {content.imageUrl && (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <img src={content.imageUrl} alt="Hero" className="w-full h-auto" referrerPolicy="no-referrer" />
        </motion.div>
      )}
    </div>
  </section>
);

const FeaturesSection = ({ content, theme }: { content: any; theme: any }) => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: theme.fontFamily }}>
        {content.title || 'Características Principales'}
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {(content.items || []).map((item: any, i: number) => (
          <div key={i} className="text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: theme.primaryColor + '15', color: theme.primaryColor }}>
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GallerySection = ({ content, theme }: { content: any; theme: any }) => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: theme.fontFamily }}>
        {content.title || 'Galería'}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(content.images || []).map((img: string, i: number) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-md group cursor-pointer">
            <img 
              src={img} 
              alt={`Gallery ${i}`} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110" 
              referrerPolicy="no-referrer" 
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = ({ content, theme }: { content: any; theme: any }) => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: theme.fontFamily }}>
        {content.title || 'Lo que dicen nuestros clientes'}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {(content.items || []).map((item: any, i: number) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 italic text-slate-700 relative">
            <MessageSquare className="absolute -top-4 -left-4 text-indigo-200" size={40} />
            <p className="text-lg mb-6">"{item.text}"</p>
            <div className="flex items-center gap-4 not-italic">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${item.name}`} alt={item.name} referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PricingSection = ({ content, theme }: { content: any; theme: any }) => (
  <section className="py-20 px-6 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: theme.fontFamily }}>
        {content.title || 'Planes y Precios'}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {(content.plans || []).map((plan: any, i: number) => (
          <div 
            key={i} 
            className={`p-8 rounded-3xl bg-white border transition-all ${plan.featured ? 'border-indigo-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'}`}
          >
            {plan.featured && (
              <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full mb-4">MÁS POPULAR</div>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-slate-500">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              {(plan.features || []).map((f: string, j: number) => (
                <li key={j} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button 
              className={`w-full py-3 rounded-xl font-bold transition-all ${plan.featured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Elegir plan
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FooterSection = ({ content, theme }: { content: any; theme: any }) => (
  <footer className="py-12 px-6 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
          <Sparkles size={18} />
        </div>
        <span className="font-bold text-lg tracking-tight">{content.brandName || 'LandingCraft'}</span>
      </div>
      <p className="text-slate-400 text-sm">
        {content.copyright || `© ${new Date().getFullYear()} Todos los derechos reservados.`}
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [step, setStep] = useState<'welcome' | 'template' | 'editor'>('welcome');
  const [activeTab, setActiveTab] = useState<'structure' | 'branding' | 'ai' | 'ab'>('structure');
  const [pageData, setPageData] = useState<LandingPageData>({
    id: 'new-page',
    name: 'Mi Nueva Landing',
    theme: {
      primaryColor: '#6366f1',
      secondaryColor: '#4f46e5',
      fontFamily: 'Inter',
      borderRadius: '0.75rem',
      style: 'modern',
    },
    sections: [],
  });
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  
  // AI Assistant State
  const [aiInput, setAiInput] = useState({ business: '', goal: '', audience: '' });
  const [isAiLoading, setIsAiLoading] = useState(false);

  // A/B Testing State
  const [abConfig, setAbConfig] = useState<ABTestConfig>({
    hypothesis: '',
    metric: 'Conversion Rate',
    distribution: 50,
    versionA: pageData,
    versionB: { ...pageData, id: 'version-b' }
  });

  const handleAiSuggest = async () => {
    setIsAiLoading(true);
    try {
      const suggestion = await getMarketingSuggestions(aiInput.business, aiInput.goal, aiInput.audience);
      
      // Apply suggestion to a new hero section
      const heroSection: LandingPageSection = {
        id: 'hero-' + Date.now(),
        type: 'hero',
        content: {
          title: suggestion.title,
          subtitle: suggestion.subtitle,
          ctaText: suggestion.cta,
          imageUrl: `https://picsum.photos/seed/${encodeURIComponent(suggestion.imagePrompt.slice(0, 10))}/800/600`
        }
      };

      const featuresSection: LandingPageSection = {
        id: 'features-' + Date.now(),
        type: 'features',
        content: {
          title: '¿Por qué elegirnos?',
          items: suggestion.features
        }
      };

      setPageData(prev => ({
        ...prev,
        sections: [heroSection, featuresSection, ...prev.sections]
      }));
      setActiveTab('structure');
      showToast('¡Contenido generado por IA aplicado!', 'success');
    } catch (error) {
      showToast('Error al generar sugerencias', 'error');
    } finally {
      setIsAiLoading(false);
    }
  };

  const applyBranding = (primary: string, secondary: string, font: string, style: any) => {
    setPageData(prev => ({
      ...prev,
      theme: {
        ...prev.theme,
        primaryColor: primary,
        secondaryColor: secondary,
        fontFamily: font,
        style: style
      }
    }));
    showToast('Branding aplicado correctamente', 'success');
  };

  const handleSelectTemplate = (template: Template) => {
    setPageData({
      ...pageData,
      ...template.data,
      id: Date.now().toString(),
    } as LandingPageData);
    setStep('editor');
  };

  const addSection = (type: SectionType) => {
    const newSection: LandingPageSection = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: getDefaultContent(type),
    };
    setPageData({
      ...pageData,
      sections: [...pageData.sections, newSection],
    });
    setActiveSectionId(newSection.id);
  };

  const removeSection = (id: string) => {
    setPageData({
      ...pageData,
      sections: pageData.sections.filter(s => s.id !== id),
    });
    if (activeSectionId === id) setActiveSectionId(null);
  };

  const updateSectionContent = (id: string, newContent: any) => {
    setPageData({
      ...pageData,
      sections: pageData.sections.map(s => s.id === id ? { ...s, content: newContent } : s),
    });
  };

  const getDefaultContent = (type: SectionType) => {
    switch (type) {
      case 'hero': return { title: 'Tu Título Aquí', subtitle: 'Descripción breve de tu propuesta de valor.', ctaText: 'Empezar ahora', imageUrl: 'https://picsum.photos/seed/hero/800/600' };
      case 'features': return { title: 'Características Principales', items: [{ title: 'Rápido', description: 'Resultados en tiempo récord.' }, { title: 'Seguro', description: 'Tus datos siempre protegidos.' }, { title: 'Fácil', description: 'Interfaz intuitiva para todos.' }] };
      case 'testimonials': return { title: 'Lo que dicen nuestros clientes', items: [{ name: 'Juan Pérez', role: 'CEO en Tech', text: 'Esta herramienta cambió nuestra forma de trabajar.' }, { name: 'Ana García', role: 'Diseñadora', text: 'Increíble facilidad de uso y resultados profesionales.' }] };
      case 'pricing': return { title: 'Planes y Precios', plans: [{ name: 'Básico', price: '€0', features: ['1 Proyecto', 'Soporte básico'] }, { name: 'Pro', price: '€29', featured: true, features: ['Proyectos ilimitados', 'Soporte 24/7', 'Dominio personalizado'] }, { name: 'Empresa', price: '€99', features: ['Todo en Pro', 'SSO', 'SLA garantizado'] }] };
      case 'gallery': return { title: 'Galería', images: ['https://picsum.photos/seed/1/400/400', 'https://picsum.photos/seed/2/400/400', 'https://picsum.photos/seed/3/400/400', 'https://picsum.photos/seed/4/400/400'] };
      case 'footer': return { brandName: 'LandingCraft', copyright: `© ${new Date().getFullYear()} Todos los derechos reservados.` };
      default: return {};
    }
  };

  const renderSectionPreview = (section: LandingPageSection) => {
    switch (section.type) {
      case 'hero': return <HeroSection content={section.content} theme={pageData.theme} />;
      case 'features': return <FeaturesSection content={section.content} theme={pageData.theme} />;
      case 'testimonials': return <TestimonialsSection content={section.content} theme={pageData.theme} />;
      case 'pricing': return <PricingSection content={section.content} theme={pageData.theme} />;
      case 'gallery': return <GallerySection content={section.content} theme={pageData.theme} />;
      case 'footer': return <FooterSection content={section.content} theme={pageData.theme} />;
      default: return <div className="py-10 text-center border-2 border-dashed border-gray-200 m-4 rounded-xl">Sección {section.type} en construcción</div>;
    }
  };

  const activeSection = pageData.sections.find(s => s.id === activeSectionId);

  const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    // Simple alert for now, could be a real toast component
    alert(`${type.toUpperCase()}: ${message}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden flex flex-col">
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Sparkles size={24} />
          </div>
          <h1 className="font-bold text-xl tracking-tight">LandingCraft</h1>
        </div>

        {step === 'editor' && (
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button 
                onClick={() => setPreviewDevice('desktop')}
                aria-label="Vista de escritorio"
                title="Vista de escritorio"
                className={`p-1.5 rounded-md transition-all ${previewDevice === 'desktop' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <Monitor size={18} />
              </button>
              <button 
                onClick={() => setPreviewDevice('tablet')}
                aria-label="Vista de tableta"
                title="Vista de tableta"
                className={`p-1.5 rounded-md transition-all ${previewDevice === 'tablet' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <Tablet size={18} />
              </button>
              <button 
                onClick={() => setPreviewDevice('mobile')}
                aria-label="Vista de móvil"
                title="Vista de móvil"
                className={`p-1.5 rounded-md transition-all ${previewDevice === 'mobile' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <Smartphone size={18} />
              </button>
            </div>
            <button 
              onClick={() => {
                const html = document.querySelector('.bg-white.shadow-2xl')?.innerHTML;
                if (html) {
                  const blob = new Blob([`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <script src="https://cdn.tailwindcss.com"></script>
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
                        <style>
                          body { font-family: 'Inter', sans-serif; }
                        </style>
                      </head>
                      <body>
                        ${html}
                      </body>
                    </html>
                  `], { type: 'text/html' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${pageData.name}.html`;
                  a.click();
                }
              }}
              aria-label="Exportar página como HTML"
              title="Exportar"
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              <Download size={18} />
              Exportar
            </button>
            <div className="h-6 w-px bg-slate-200 mx-2" />
            <button 
              onClick={() => {
                const html = document.querySelector('.bg-white.shadow-2xl')?.innerHTML;
                if (html) {
                  const fullHtml = `
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <script src="https://cdn.tailwindcss.com"></script>
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
                        <style>
                          body { font-family: 'Inter', sans-serif; }
                        </style>
                      </head>
                      <body>
                        ${html}
                      </body>
                    </html>
                  `;
                  const win = window.open('', '_blank');
                  if (win) {
                    win.document.write(fullHtml);
                    win.document.close();
                  } else {
                    alert('Por favor, permite las ventanas emergentes para ver la vista previa.');
                  }
                }
              }}
              aria-label="Abrir vista previa en nueva pestaña"
              title="Vista Previa"
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              <Eye size={18} />
              Vista Previa
            </button>
            <button 
              onClick={() => alert('¡Landing page guardada exitosamente!')}
              aria-label="Guardar cambios"
              title="Guardar"
              className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100"
            >
              <Save size={18} />
              Guardar
            </button>
          </div>
        )}
      </header>

      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {step === 'welcome' && (
            <motion.div 
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-full flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-8">
                  <Sparkles size={16} />
                  NUEVO: ASISTENTE CON IA
                </div>
                <h2 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                  Crea tu landing page <br />
                  <span className="text-indigo-600">en solo 3 pasos.</span>
                </h2>
                <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                  Diseña páginas de aterrizaje profesionales para cualquier negocio sin escribir una sola línea de código. Rápido, intuitivo y optimizado para convertir.
                </p>
                <div className="flex items-center justify-center gap-6">
                  <button 
                    onClick={() => setStep('template')}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center gap-3 group"
                  >
                    Empezar ahora
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                    Ver ejemplos
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'template' && (
            <motion.div 
              key="template"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full overflow-y-auto p-12"
            >
              <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                  <button 
                    onClick={() => setStep('welcome')}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-4 font-medium"
                  >
                    <ChevronLeft size={20} />
                    Volver
                  </button>
                  <h2 className="text-4xl font-bold mb-4 tracking-tight">Elige una plantilla base</h2>
                  <p className="text-lg text-slate-500">Selecciona el diseño que mejor se adapte a tu negocio para empezar.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {TEMPLATES.map((template) => (
                    <motion.div 
                      key={template.id}
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                      onClick={() => handleSelectTemplate(template)}
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                        <img src={template.thumbnail} alt={template.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors" />
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                        <p className="text-slate-500 mb-6 line-clamp-2">{template.description}</p>
                        <div className="flex items-center text-indigo-600 font-bold group-hover:gap-3 transition-all">
                          Seleccionar plantilla
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  <div 
                    onClick={() => setStep('editor')}
                    className="bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:shadow-lg transition-all mb-4">
                      <Plus size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700">Empezar de cero</h3>
                    <p className="text-slate-500 text-center mt-2">Crea tu propio diseño desde una página en blanco.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'editor' && (
            <motion.div 
              key="editor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex"
            >
              {/* Sidebar Editor */}
              <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0">
                {/* Tabs */}
                <div className="flex border-b border-slate-100">
                  <button 
                    onClick={() => setActiveTab('structure')}
                    className={`flex-1 p-3 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'structure' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <Layout size={16} className="mx-auto mb-1" />
                    Diseño
                  </button>
                  <button 
                    onClick={() => setActiveTab('branding')}
                    className={`flex-1 p-3 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'branding' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <Palette size={16} className="mx-auto mb-1" />
                    Marca
                  </button>
                  <button 
                    onClick={() => setActiveTab('ai')}
                    className={`flex-1 p-3 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'ai' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <Wand2 size={16} className="mx-auto mb-1" />
                    IA
                  </button>
                  <button 
                    onClick={() => setActiveTab('ab')}
                    className={`flex-1 p-3 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'ab' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <FlaskConical size={16} className="mx-auto mb-1" />
                    A/B
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  {activeTab === 'structure' && (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Secciones</label>
                        <AnimatePresence>
                          {pageData.sections.map((section, index) => (
                            <motion.div 
                              key={section.id}
                              layout
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className={`group flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${activeSectionId === section.id ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-100 hover:border-slate-300 text-slate-600'}`}
                              onClick={() => setActiveSectionId(section.id)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  setActiveSectionId(section.id);
                                }
                              }}
                              tabIndex={0}
                              role="button"
                              aria-label={`Editar sección ${SECTION_TYPES.find(t => t.type === section.type)?.label}`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                                {SECTION_TYPES.find(t => t.type === section.type)?.icon === 'Layout' && <Layout size={16} />}
                                {SECTION_TYPES.find(t => t.type === section.type)?.icon === 'CheckCircle' && <CheckCircle size={16} />}
                                {SECTION_TYPES.find(t => t.type === section.type)?.icon === 'MessageSquare' && <MessageSquare size={16} />}
                                {SECTION_TYPES.find(t => t.type === section.type)?.icon === 'CreditCard' && <CreditCard size={16} />}
                                {SECTION_TYPES.find(t => t.type === section.type)?.icon === 'Image' && <ImageIcon size={16} />}
                                {SECTION_TYPES.find(t => t.type === section.type)?.icon === 'HelpCircle' && <HelpCircle size={16} />}
                                {SECTION_TYPES.find(t => t.type === section.type)?.icon === 'Mail' && <Mail size={16} />}
                                {SECTION_TYPES.find(t => t.type === section.type)?.icon === 'Type' && <Type size={16} />}
                              </div>
                              <span className="flex-1 font-medium text-sm truncate">
                                {SECTION_TYPES.find(t => t.type === section.type)?.label}
                              </span>
                              <button 
                                onClick={(e) => { e.stopPropagation(); removeSection(section.id); }}
                                aria-label="Eliminar sección"
                                title="Eliminar sección"
                                className="opacity-0 group-hover:opacity-100 focus-within:opacity-100 p-1.5 hover:bg-red-50 hover:text-red-600 rounded-md transition-all"
                              >
                                <Trash2 size={14} />
                              </button>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Añadir Sección</label>
                        <div className="grid grid-cols-2 gap-2">
                          {SECTION_TYPES.map((type) => (
                            <button 
                              key={type.type}
                              onClick={() => addSection(type.type)}
                              className="flex flex-col items-center gap-2 p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all group"
                            >
                              <div className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                                {type.icon === 'Layout' && <Layout size={20} />}
                                {type.icon === 'CheckCircle' && <CheckCircle size={20} />}
                                {type.icon === 'MessageSquare' && <MessageSquare size={20} />}
                                {type.icon === 'CreditCard' && <CreditCard size={20} />}
                                {type.icon === 'Image' && <ImageIcon size={20} />}
                                {type.icon === 'HelpCircle' && <HelpCircle size={20} />}
                                {type.icon === 'Mail' && <Mail size={20} />}
                                {type.icon === 'Type' && <Type size={20} />}
                              </div>
                              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{type.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'branding' && (
                    <div className="space-y-6 animate-in">
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Colores de Marca</label>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <input 
                              type="color" 
                              value={pageData.theme.primaryColor} 
                              onChange={(e) => setPageData(prev => ({ ...prev, theme: { ...prev.theme, primaryColor: e.target.value } }))}
                              className="w-10 h-10 rounded-lg cursor-pointer"
                            />
                            <span className="text-sm font-medium">Primario</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <input 
                              type="color" 
                              value={pageData.theme.secondaryColor} 
                              onChange={(e) => setPageData(prev => ({ ...prev, theme: { ...prev.theme, secondaryColor: e.target.value } }))}
                              className="w-10 h-10 rounded-lg cursor-pointer"
                            />
                            <span className="text-sm font-medium">Secundario</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Tipografía</label>
                        <select 
                          value={pageData.theme.fontFamily}
                          onChange={(e) => setPageData(prev => ({ ...prev, theme: { ...prev.theme, fontFamily: e.target.value } }))}
                          className="w-full p-2 rounded-lg border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="Inter">Inter (Sans)</option>
                          <option value="Outfit">Outfit (Display)</option>
                          <option value="Georgia">Georgia (Serif)</option>
                          <option value="JetBrains Mono">JetBrains Mono</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Estilo Visual</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['modern', 'classic', 'elegant', 'brutalist'].map(s => (
                            <button 
                              key={s}
                              onClick={() => setPageData(prev => ({ ...prev, theme: { ...prev.theme, style: s as any } }))}
                              className={`p-2 rounded-lg border text-xs font-bold uppercase transition-all ${pageData.theme.style === s ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'}`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ai' && (
                    <div className="space-y-6 animate-in">
                      <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                        <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-2">
                          <Sparkles size={16} />
                          Asistente de Marketing
                        </div>
                        <p className="text-xs text-indigo-600 leading-relaxed">
                          Describe tu negocio y la IA generará el contenido perfecto para tu landing page.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-bold text-slate-500 mb-1 block">Tipo de Negocio</label>
                          <input 
                            type="text" 
                            placeholder="Ej: Agencia de viajes, SaaS de RRHH..."
                            className="w-full p-2 rounded-lg border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                            value={aiInput.business}
                            onChange={(e) => setAiInput(prev => ({ ...prev, business: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-500 mb-1 block">Objetivo</label>
                          <input 
                            type="text" 
                            placeholder="Ej: Conseguir leads, vender curso..."
                            className="w-full p-2 rounded-lg border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                            value={aiInput.goal}
                            onChange={(e) => setAiInput(prev => ({ ...prev, goal: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-500 mb-1 block">Público Objetivo</label>
                          <input 
                            type="text" 
                            placeholder="Ej: Emprendedores jóvenes, padres..."
                            className="w-full p-2 rounded-lg border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                            value={aiInput.audience}
                            onChange={(e) => setAiInput(prev => ({ ...prev, audience: e.target.value }))}
                          />
                        </div>
                        <button 
                          onClick={handleAiSuggest}
                          disabled={isAiLoading || !aiInput.business}
                          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isAiLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Wand2 size={18} />
                              Generar Contenido
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ab' && (
                    <div className="space-y-6 animate-in">
                      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-2">
                          <FlaskConical size={16} />
                          Experimento A/B
                        </div>
                        <p className="text-xs text-emerald-600 leading-relaxed">
                          Configura variaciones para optimizar tus conversiones basándote en datos reales.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-bold text-slate-500 mb-1 block">Hipótesis</label>
                          <textarea 
                            placeholder="Ej: Cambiar el color del botón a rojo aumentará los clics en un 10%."
                            className="w-full p-2 rounded-lg border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500 h-24"
                            value={abConfig.hypothesis}
                            onChange={(e) => setAbConfig(prev => ({ ...prev, hypothesis: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-500 mb-1 block">Métrica Clave</label>
                          <select 
                            className="w-full p-2 rounded-lg border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                            value={abConfig.metric}
                            onChange={(e) => setAbConfig(prev => ({ ...prev, metric: e.target.value }))}
                          >
                            <option>Click Through Rate (CTR)</option>
                            <option>Conversion Rate</option>
                            <option>Bounce Rate</option>
                            <option>Time on Page</option>
                          </select>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <label className="text-xs font-bold text-slate-500">Distribución de Tráfico</label>
                            <span className="text-xs font-bold text-indigo-600">{abConfig.distribution}% Versión B</span>
                          </div>
                          <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            step="5"
                            className="w-full accent-indigo-600"
                            value={abConfig.distribution}
                            onChange={(e) => setAbConfig(prev => ({ ...prev, distribution: parseInt(e.target.value) }))}
                          />
                          <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                            <span>VERSIÓN A (CONTROL)</span>
                            <span>VERSIÓN B (VARIANTE)</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => showToast('Experimento configurado y listo para lanzar', 'success')}
                          className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                        >
                          Lanzar Experimento
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section Editor Panel */}
                <AnimatePresence>
                  {activeSectionId && activeTab === 'structure' && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      className="p-4 bg-slate-50 border-t border-slate-200 max-h-[400px] overflow-y-auto"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-sm text-slate-700">Editar {SECTION_TYPES.find(t => t.type === activeSection?.type)?.label}</h4>
                        <button onClick={() => setActiveSectionId(null)} className="text-slate-400 hover:text-slate-600">
                          <ChevronRight size={18} />
                        </button>
                      </div>
                      <div className="space-y-4">
                        {activeSection?.type === 'hero' && (
                          <>
                            <div>
                              <label className="text-xs font-bold text-slate-500 mb-1 block">Título</label>
                              <input 
                                type="text" 
                                className="w-full p-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                value={activeSection.content.title}
                                onChange={(e) => updateSectionContent(activeSectionId, { ...activeSection.content, title: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="text-xs font-bold text-slate-500 mb-1 block">Subtítulo</label>
                              <textarea 
                                className="w-full p-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 outline-none h-20"
                                value={activeSection.content.subtitle}
                                onChange={(e) => updateSectionContent(activeSectionId, { ...activeSection.content, subtitle: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="text-xs font-bold text-slate-500 mb-1 block">Texto del Botón</label>
                              <input 
                                type="text" 
                                className="w-full p-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                value={activeSection.content.ctaText}
                                onChange={(e) => updateSectionContent(activeSectionId, { ...activeSection.content, ctaText: e.target.value })}
                              />
                            </div>
                          </>
                        )}
                        {activeSection?.type === 'features' && (
                          <div>
                            <label className="text-xs font-bold text-slate-500 mb-1 block">Título de Sección</label>
                            <input 
                              type="text" 
                              className="w-full p-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                              value={activeSection.content.title}
                              onChange={(e) => updateSectionContent(activeSectionId, { ...activeSection.content, title: e.target.value })}
                            />
                          </div>
                        )}
                        {activeSection?.type === 'footer' && (
                          <>
                            <div>
                              <label className="text-xs font-bold text-slate-500 mb-1 block">Nombre de Marca</label>
                              <input 
                                type="text" 
                                className="w-full p-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                value={activeSection.content.brandName}
                                onChange={(e) => updateSectionContent(activeSectionId, { ...activeSection.content, brandName: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="text-xs font-bold text-slate-500 mb-1 block">Copyright</label>
                              <input 
                                type="text" 
                                className="w-full p-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                value={activeSection.content.copyright}
                                onChange={(e) => updateSectionContent(activeSectionId, { ...activeSection.content, copyright: e.target.value })}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </aside>

              {/* Preview Canvas */}
              <div className="flex-1 bg-slate-100 p-8 flex flex-col items-center overflow-y-auto">
                <div 
                  className={`bg-white shadow-2xl transition-all duration-500 overflow-y-auto ${
                    previewDevice === 'desktop' ? 'w-full max-w-5xl' : 
                    previewDevice === 'tablet' ? 'w-[768px]' : 'w-[375px]'
                  }`}
                  style={{ minHeight: '100%' }}
                >
                  {pageData.sections.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center p-20 text-center">
                      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                        <Layout size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-400">Tu lienzo está vacío</h3>
                      <p className="text-slate-400 mt-2 max-w-xs">Añade secciones desde el panel lateral para empezar a construir tu landing page.</p>
                    </div>
                  ) : (
                    pageData.sections.map((section) => (
                      <div 
                        key={section.id} 
                        className={`relative group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${activeSectionId === section.id ? 'ring-2 ring-indigo-500 ring-inset' : ''}`}
                        onClick={() => setActiveSectionId(section.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveSectionId(section.id);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`Seleccionar sección ${SECTION_TYPES.find(t => t.type === section.type)?.label}`}
                      >
                        {renderSectionPreview(section)}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity flex gap-2">
                          <button
                            aria-label="Configuración de sección"
                            title="Configuración de sección"
                            className="p-2 bg-white shadow-lg rounded-lg text-slate-600 hover:text-indigo-600"
                          >
                            <Settings size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
