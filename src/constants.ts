import { Template, SectionType } from './types';

export const SECTION_TYPES: { type: SectionType; label: string; icon: string }[] = [
  { type: 'hero', label: 'Cabecera (Hero)', icon: 'Layout' },
  { type: 'features', label: 'Características', icon: 'CheckCircle' },
  { type: 'testimonials', label: 'Testimonios', icon: 'MessageSquare' },
  { type: 'pricing', label: 'Precios', icon: 'CreditCard' },
  { type: 'gallery', label: 'Galería', icon: 'Image' },
  { type: 'faq', label: 'Preguntas Frecuentes', icon: 'HelpCircle' },
  { type: 'contact', label: 'Contacto', icon: 'Mail' },
  { type: 'footer', label: 'Pie de página', icon: 'Type' },
];

export const TEMPLATES: Template[] = [
  {
    id: 'saas',
    name: 'SaaS Moderno',
    description: 'Perfecto para aplicaciones de software y herramientas digitales.',
    thumbnail: 'https://picsum.photos/seed/saas/400/300',
    data: {
      theme: {
        primaryColor: '#6366f1',
        secondaryColor: '#4f46e5',
        fontFamily: 'Inter',
        borderRadius: '0.75rem',
        style: 'modern',
      },
      sections: [
        {
          id: 'hero-1',
          type: 'hero',
          content: {
            title: 'Lleva tu productividad al siguiente nivel',
            subtitle: 'La herramienta definitiva para equipos que quieren escalar rápido y sin fricciones.',
            ctaText: 'Empieza gratis hoy',
            imageUrl: 'https://picsum.photos/seed/app/800/600',
          },
        },
        {
          id: 'features-1',
          type: 'features',
          content: {
            title: 'Todo lo que necesitas en un solo lugar',
            items: [
              { title: 'Análisis en tiempo real', description: 'Visualiza tus datos al instante con gráficos interactivos.' },
              { title: 'Colaboración fluida', description: 'Trabaja con tu equipo en el mismo documento sin retrasos.' },
              { title: 'Seguridad de nivel bancario', description: 'Tus datos están protegidos con el cifrado más avanzado.' },
            ],
          },
        },
      ],
    },
  },
  {
    id: 'restaurant',
    name: 'Restaurante Gourmet',
    description: 'Diseño elegante para destacar tus platos y facilitar reservas.',
    thumbnail: 'https://picsum.photos/seed/food/400/300',
    data: {
      theme: {
        primaryColor: '#b45309',
        secondaryColor: '#92400e',
        fontFamily: 'Georgia',
        borderRadius: '0.5rem',
        style: 'elegant',
      },
      sections: [
        {
          id: 'hero-2',
          type: 'hero',
          content: {
            title: 'Sabores que cuentan una historia',
            subtitle: 'Una experiencia gastronómica única en el corazón de la ciudad.',
            ctaText: 'Reserva tu mesa',
            imageUrl: 'https://picsum.photos/seed/restaurant/800/600',
          },
        },
        {
          id: 'gallery-1',
          type: 'gallery',
          content: {
            title: 'Nuestras Especialidades',
            images: [
              'https://picsum.photos/seed/dish1/400/400',
              'https://picsum.photos/seed/dish2/400/400',
              'https://picsum.photos/seed/dish3/400/400',
              'https://picsum.photos/seed/dish4/400/400',
            ],
          },
        },
      ],
    },
  },
  {
    id: 'portfolio',
    name: 'Portfolio Creativo',
    description: 'Limpio y minimalista para que tu trabajo sea el protagonista.',
    thumbnail: 'https://picsum.photos/seed/creative/400/300',
    data: {
      theme: {
        primaryColor: '#111827',
        secondaryColor: '#374151',
        fontFamily: 'Inter',
        borderRadius: '0rem',
        style: 'classic',
      },
      sections: [
        {
          id: 'hero-3',
          type: 'hero',
          content: {
            title: 'Diseñador Visual & Estratega Digital',
            subtitle: 'Ayudo a marcas a destacar en el mundo digital a través de un diseño intencional.',
            ctaText: 'Ver mis proyectos',
            imageUrl: 'https://picsum.photos/seed/designer/800/600',
          },
        },
      ],
    },
  },
];
