import {
  CirclePlay,
  ExternalLink,
  FileText,
  Film,
  Laptop,
  MessageCircleMore,
} from '../components/Icons';


export const projectInfo = {
  projectName: 'CanonScore',
  developerName: 'Victoria González',
  year: '2026',
  tagline: 'Menos tiempo buscando. Más tiempo disfrutando.',
  description:
    'Explora todos los recursos del proyecto y descubre una nueva forma de encontrar contenido variado y entretenido en un solo lugar.',
};

export const projectLinks = [
  {
    id: 'promo',
    title: 'Ver video de CanonScore',
    description: 'Conoce el proyecto en menos de 40 segundos',
    url: 'https://TU-ENLACE-DEL-TIKTOK.com',
    icon: CirclePlay,
    variant: 'featured',
    badge: '0:40',
  },
  {
    id: 'portfolio',
    title: 'Ver portafolio',
    description: 'Conoce mis proyectos y habilidades',
    url: 'https://portafolio-khaki-beta-84.vercel.app/',
    icon: Laptop,
    variant: 'default',
  },
  {
    id: 'tour',
    title: 'Ver tour por la aplicación',
    description: 'Recorrido breve por sus funciones principales',
    url: 'https://TU-VIDEO-TOUR.com',
    icon: Film,
    variant: 'default',
    badge: '1:30',
  },
  {
    id: 'spa',
    title: 'Abrir CanonScore',
    description: 'Explora la aplicación web',
    url: 'https://canonscore.vercel.app/',
    icon: ExternalLink,
    variant: 'primary',
  },
  {
    id: 'srs',
    title: 'Consultar SRS',
    description: 'Documentación completa del proyecto',
    url: 'https://redunid-my.sharepoint.com/:b:/g/personal/00900652_red_unid_mx/IQDcvlhoGoPtQ7nQGeciejXZAaYkeGr3k6SQF8Zs4dwi8pA?e=EyiER5',
    icon: FileText,
    variant: 'default',
  },
  {
    id: 'testimonial',
    title: 'Ver video testimonial',
    description: '¿Por qué es vital la toma correcta de requerimientos?',
    url: 'https://TU-VIDEO-TESTIMONIAL.com',
    icon: MessageCircleMore,
    variant: 'default',
  },
];
