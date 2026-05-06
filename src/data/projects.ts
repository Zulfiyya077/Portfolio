import type { IconType } from 'react-icons';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux } from 'react-icons/si';
import { MdDevices, MdApi } from 'react-icons/md';
import pacmanImg from '../assets/pacman.png';
import tictactoeImg from '../assets/tictactoe.png';
import rpsImg from '../assets/rockscissorpaper.png';
import ferrariImg from '../assets/ferrari.png';
import luxWatchesImg from '../assets/luxwatches.png';
import weatherImg from '../assets/weather.png';
import ziptechImg from '../assets/ziptech.png';

export interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string | any;
  video?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'mobile';
  featured?: boolean;
}

export const techStack: Tech[] = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
  { name: 'API Integration', icon: MdApi, color: '#4CAF50' },
  { name: 'Responsive Design', icon: MdDevices, color: '#FF9800' },
  { name: 'Version Control', icon: FaGitAlt, color: '#F05032' },
];

export const projects: Project[] = [
  {
    id: 'alis-core',
    title: 'AlisCore',
    description: 'Modern corporate platform with advanced layout and interactive components.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://backbonix.vercel.app/',
    category: 'web',
    featured: true,
  },
  {
    id: 'tiktak-mobile',
    title: 'TikTak E-commerce App',
    description: 'A comprehensive mobile e-commerce application with modern UI and smooth user flow.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
    techStack: ['React Native', 'Redux Toolkit', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://tiktak-admin-v2-gew9.vercel.app/login',
    category: 'mobile',
    featured: true,
  },
  {
    id: 'ferrari',
    title: 'Ferrari',
    description: 'A high-performance automotive showcase platform featuring luxury vehicle classes and interactive galleries.',
    image: ferrariImg,
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Zulfiyya077/Ferrari--Class/',
    liveUrl: 'https://zulfiyya077.github.io/Ferrari--Class/',
    category: 'web',
    featured: true,
  },
  {
    id: 'filmalisa',
    title: 'Filmalisa',
    description: 'Comprehensive movie database and streaming platform interface with dynamic content.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Next.js', 'Tailwind CSS', 'API Integration'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://filmalisa-rust.vercel.app',
    category: 'web',
  },
  {
    id: 'intern-intelligence-login',
    title: 'Modern Auth System',
    description: 'A professional login and registration system built for Intern Intelligence projects.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    techStack: ['React', 'Tailwind CSS', 'Auth'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://intern-intelligence-login-page-pied.vercel.app/',
    category: 'web',
  },
  {
    id: 'lux-watches',
    title: 'Lux Watches',
    description: 'A premium e-commerce platform for luxury watches with a sleek dark aesthetic.',
    image: luxWatchesImg,
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://lux-watches.vercel.app/',
    category: 'web',
    featured: false,
  },
  {
    id: 'blog-rezneed',
    title: 'Rezneed Blog',
    description: 'A dynamic blog application with full content management and responsive design.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Next.js', 'Tailwind CSS', 'API Integration'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://blog-app-rezneed.vercel.app',
    category: 'web',
  },
  {
    id: 'pacman',
    title: 'Pac-Man Next.js',
    description: 'A nostalgic arcade game reconstructed using modern web technologies.',
    image: pacmanImg,
    techStack: ['Next.js', 'Canvas API', 'JavaScript'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://pac-man-next-js.vercel.app',
    category: 'web',
  },
  {
    id: 'coffee-shop',
    title: 'Dolce Coffee',
    description: 'Elegant coffee shop website with menu displays and reservation forms.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://coffe-shop-coral-eight.vercel.app',
    category: 'web',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Real-time weather tracking application with dynamic backgrounds.',
    image: weatherImg,
    techStack: ['React', 'OpenWeather API', 'CSS3'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://wheather-app-nine-rho.vercel.app/',
    category: 'web',
  },
  {
    id: 'pokemon-game',
    title: 'Pokemon Battle',
    description: 'Interactive Pokemon card game using PokeAPI data.',
    image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?auto=format&fit=crop&q=80&w=1000',
    techStack: ['React', 'PokeAPI', 'Animations'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://pokemon-game-nu-six.vercel.app',
    category: 'web',
  },
  {
    id: 'product-commerce',
    title: 'Product Commerce',
    description: 'Modern product catalog with filtering and cart system.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Next.js', 'Redux', 'Tailwind'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://product-commerce-steel.vercel.app',
    category: 'web',
  },
  {
    id: 'restoran-website',
    title: 'Restoran Website',
    description: 'A beautiful restaurant landing page with booking features.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    techStack: ['React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://restoran-website-lake.vercel.app',
    category: 'web',
  },
  {
    id: 'zip-tech',
    title: 'Zip Tech',
    description: 'A modern e-commerce platform specializing in electronic products and technology gadgets.',
    image: ziptechImg,
    techStack: ['Next.js', 'Tailwind'],
    githubUrl: 'https://github.com/Zulfiyya077',
    liveUrl: 'https://zip-tech.vercel.app/',
    category: 'web',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    description: 'Classic strategy game with a modern UI and local multiplayer mode.',
    image: tictactoeImg,
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Zulfiyya077/TicTacToe_Game/',
    liveUrl: 'https://zulfiyya077.github.io/TicTacToe_Game/',
    category: 'web',
  },
  {
    id: 'rps-game',
    title: 'Rock Paper Scissors',
    description: 'Interactive Rock Paper Scissors game with scores and smooth animations.',
    image: rpsImg,
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Zulfiyya077/RPS-Full/',
    liveUrl: 'https://zulfiyya077.github.io/RPS-Full/',
    category: 'web',
  },
  {
    id: 'word-guess',
    title: 'Word Guess Game',
    description: 'Fun word guessing game with logic and scores.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1000',
    techStack: ['JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/Zulfiyya077/WordGuessGame/',
    liveUrl: 'https://zulfiyya077.github.io/WordGuessGame/',
    category: 'web',
  }
];
