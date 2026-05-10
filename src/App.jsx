import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
const IconBase = ({ children, className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const MailIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </IconBase>
);

const MapPinIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 21s6-5.2 6-11a6 6 0 10-12 0c0 5.8 6 11 6 11z" />
    <circle cx="12" cy="10" r="2.2" />
  </IconBase>
);

const ArrowRightIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </IconBase>
);

const PhoneIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M6.5 4.5h3l1.5 4-2 1.5a15 15 0 006 6l1.5-2 4 1.5v3A2 2 0 0118.5 21C10 21 3 14 3 5.5a2 2 0 012-2z" />
  </IconBase>
);

const MenuIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </IconBase>
);

const GithubIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M9 19c-4 1.2-4-2-6-2" />
    <path d="M15 21v-3.5a3 3 0 00-.8-2.1c2.6-.3 5.3-1.3 5.3-5.9a4.6 4.6 0 00-1.2-3.2 4.3 4.3 0 00-.1-3.1s-1-.3-3.2 1.2a11.2 11.2 0 00-6 0C6.8 2.9 5.8 3.2 5.8 3.2a4.3 4.3 0 00-.1 3.1 4.6 4.6 0 00-1.2 3.2c0 4.5 2.7 5.6 5.3 5.9A3 3 0 009 18.5V21" />
    <path d="M12 3a9 9 0 00-2.8 17.6" />
    <path d="M12 3a9 9 0 012.8 17.6" />
  </IconBase>
);

const ExternalLinkIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M14 5h5v5" />
    <path d="M10 14L19 5" />
    <path d="M19 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h4" />
  </IconBase>
);

const ShieldIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
    <path d="M9.5 12l1.8 1.8L15 10.2" />
  </IconBase>
);

const ServerIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="4" y="4" width="16" height="6" rx="2" />
    <rect x="4" y="14" width="16" height="6" rx="2" />
    <path d="M8 7h.01" />
    <path d="M8 17h.01" />
    <path d="M12 7h4" />
    <path d="M12 17h4" />
  </IconBase>
);

const SmartphoneIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 5h2" />
    <circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none" />
  </IconBase>
);

const CloudIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M7 18h10a4 4 0 000-8 5.5 5.5 0 00-10.6-1.7A4 4 0 007 18z" />
  </IconBase>
);

const GlobeIcon = ({ className }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 010 18" />
    <path d="M12 3a15 15 0 000 18" />
  </IconBase>
);

const GraduationCapIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M3 10l9-4 9 4-9 4-9-4z" />
    <path d="M7 12.5V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-3.5" />
    <path d="M21 10v5" />
  </IconBase>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: ServerIcon,
    title: 'Backend API Development',
    description:
      'Robust, scalable REST APIs built with NestJS, Symfony, Node.js, and PHP — from authentication flows to complex business logic.',
    tags: ['NestJS', 'Symfony', 'Node.js', 'PHP'],
  },
  {
    icon: SmartphoneIcon,
    title: 'Cross-Platform Mobile Apps',
    description:
      'Native-quality Flutter apps for iOS and Android with polished UI, state management, local storage, push notifications, and API integration.',
    tags: ['Flutter', 'Dart', 'Android', 'iOS'],
  },
  {
    icon: ShieldIcon,
    title: 'Security & Data Protection',
    description:
      'Security-first development with API hardening, DEK/KEK key management, key rotation, and testing to protect production systems.',
    tags: ['API Security', 'DEK/KEK', 'Key Rotation', 'Testing'],
  },
  {
    icon: CloudIcon,
    title: 'Cloud Deployment & DevOps',
    description:
      'End-to-end deployment on AWS and VPS with CI/CD pipelines, environment configuration, and reliable infrastructure delivery.',
    tags: ['AWS', 'VPS', 'CI/CD', 'Git'],
  },
  {
    icon: GlobeIcon,
    title: 'Web Platform Development',
    description:
      'Business showcases, admin dashboards, internal tools, and organization websites designed for clarity, speed, and maintainability.',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    icon: GraduationCapIcon,
    title: 'Training & Mentoring',
    description:
      'Practical Flutter guidance for beginners through structured exercises, live mentoring, and hands-on project support.',
    tags: ['Flutter', 'Mentoring', 'Training'],
  },
];

const experience = [
  {
    company: 'Sona',
    role: 'Backend & Mobile Developer — AI Therapy Platform',
    period: 'Dec 2025 – Present',
    location: 'Netherlands',
    bullets: [
      'Designed and implemented a security-first architecture for a couples therapy platform, including role-based access control, encrypted backups, audit logging, monitoring systems, anomaly detection, and encryption key rotation workflows.',
      
      'Built AI-driven therapy orchestration systems capable of generating contextual therapist-inspired responses based on relationship history, conversation analysis, behavioral summaries, and evolving interaction patterns.',
  
      'Developed secure backend workflows and internal governance systems for handling sensitive user data, including controlled staff access policies, traceability mechanisms, and compliance-oriented security protections.',
  
      'Contributed to platform infrastructure including subscription systems, user engagement analytics, and administrative dashboard tooling for operational and therapy-management workflows.',
    ],
    projects: [
      {
        name: 'Sona Therapy App',
        description:
          'A privacy-focused couples therapy platform developed alongside licensed therapists, combining AI-assisted therapeutic interaction systems, secure backend infrastructure, behavioral analysis workflows, and sensitive data protection mechanisms.',
        tags: ['Flutter', 'NestJS', 'AI', 'Security', 'Therapy'],
        screenshots: [],
        links: [],
        privacyNote:
          'Due to the sensitive nature of therapy-related data and platform privacy requirements, I cannot publicly share screenshots or internal product details for this project.',
      },
    ],
  },
  {
    company: 'Elbright Corporation',
    role: 'Backend & Mobile Developer',
    period: 'Oct 2025 – Jan 2026',
    location: 'USA / Togo',
    bullets: [
      'Contributed to multiple web platforms and internal business applications.',
      'Worked across AI, internal tools, fintech-related products, and web platforms.',
      'Delivered backend, mobile, and implementation work across several company initiatives.',
    ],
    projects: [
      {
        name: 'Kowdi AI',
        description: 'Website for the AI-focused branch of the company.',
        tags: ['Web', 'AI'],
        links: [{ label: 'Visit Website', url: 'https://boonjoseph16.wixsite.com/website' }],
        screenshots: [],
        privacyNote: null,
      },
      {
        name: 'Elbright Import / Export',
        description:
          'Corporate website for the company’s import/export activities, built in partnership with Pathway Global Technology & Consulting LLC.',
        tags: ['Web', 'Corporate'],
        links: [{ label: 'Visit Website', url: 'https://www.elbrightcorporation.com' }],
        screenshots: [],
        privacyNote: null,
      },
      {
        name: 'Elbright Association',
        description:
          'Social support association website focused on helping people in difficult situations and promoting aid initiatives.',
        tags: ['Web', 'NGO'],
        links: [{ label: 'Visit Website', url: 'https://kowdiaispace.wixsite.com/el-bright-aid' }],
        screenshots: [],
        privacyNote: null,
      },
      {
        name: 'Media / MIJA Church Website',
        description:
          'Church/community website highlighting messages, media content, and community information.',
        tags: ['Web', 'WordPress'],
        links: [{ label: 'Visit Website', url: 'http://boonjoseph16.wixstudio.com/mija/fr' }],
        screenshots: [],
        privacyNote: null,
      },
      {
        name: 'Kowdi Pay',
        description:
          'Internal employee account management application for deposits, transfers, and balance tracking.',
        tags: ['Flutter', 'Fintech', 'Internal Tool'],
        links: [],
        screenshots: [],
        privacyNote:
          'This was an internal product, so I cannot publicly show screenshots or detailed product flows.',
      },
      {
        name: 'Kowdi Altura Capital',
        description:
          'Internal investment and portfolio management application built for company use.',
        tags: ['Flutter', 'Fintech'],
        links: [],
        screenshots: [],
        privacyNote:
          'This project cannot be publicly demonstrated because it was built for internal/private use.',
      },
    ],
  },
  {
    company: 'PathwayGlobal Technology & Consulting LLC',
    role: 'Backend & Mobile Developer — Product Safety Platform',
    period: '2025',
    location: 'USA',
    bullets: [
      'Developed backend systems and APIs for a product recall intelligence platform designed to detect and distribute safety alerts for dangerous consumer products.',
  
      'Built and maintained large-scale data ingestion and filtering pipelines that collected, analyzed, validated, and normalized recall data from sources such as the FDA and other public safety agencies.',
  
      'Contributed to product-recognition and recall-matching systems capable of identifying potentially dangerous products through user interactions and image-based detection workflows.',
  
      'Worked on geolocation and mapping infrastructure connecting recalled products to nearby stores, supermarkets, and distribution points within specific geographic areas.',
  
      'Collaborated on backend workflows for product detection, trust-based filtering, news aggregation, and real-time recall notification delivery.',
  
      'Contributed to AWS-related deployment and infrastructure workflows supporting platform reliability, scalability, and data processing operations.',
    ],
    projects: [
      {
        name: 'Safe Shop Alert',
        description:
          'A product safety and recall intelligence platform designed to aggregate, analyze, and distribute dangerous product alerts through AI-assisted detection systems, recall data pipelines, geolocation mapping, and real-time notification workflows.',
        tags: ['Flutter', 'NestJS', 'AWS', 'APIs', 'Data Processing', 'Product Safety'],
        links: [],
        screenshots: [],
        privacyNote:
          'Due to client and product confidentiality restrictions, I cannot publicly share screenshots or internal implementation details for this project.',
      },
    ],
  },
  {
    company: 'Kaba Delivery',
    role: 'Full-Stack Product Engineer',
    period: 'Sep 2024 – Jan 2025',
    location: 'Togo',
    bullets: [
      'Built and maintained operational backend systems for a multi-service delivery platform, including order-routing automation, restaurant dispatch workflows, rider assignment systems, and delivery lifecycle management.',
  
      'Developed dynamic pricing and surcharge infrastructure based on weather conditions, geolocation zones, nighttime delivery, weekends, and operational logistics constraints.',
  
      'Contributed to logistics and shipment-management systems supporting pharmacy delivery, external store requests, intercity shipping, and international delivery workflows with package estimation, tracking, and operational negotiation features.',
  
      'Implemented business-logic integrations for subscription systems, including delivery-radius benefits, promotional pricing workflows, and order-level subscription handling across distributed backend services.',
  
      'Worked on wallet and payment infrastructure through integration of mobile-money aggregators, transaction-processing systems, deposit workflows, and operational payment flows.',
  
      'Contributed across multiple platform applications including customer, rider, restaurant, and partner-facing systems to ensure feature consistency and operational continuity.',
  
      'Participated in production deployment workflows, Play Store and App Store release management, application publishing, signing-key management, and production update operations.',
  
      'Led application stabilization efforts by diagnosing production issues, monitoring logs, resolving backend and mobile bugs, and maintaining operational reliability across live systems.',
  
      'Contributed to platform evolution through UI/UX improvements, rating and review systems, delivery experience enhancements, and operational tooling improvements.',
    ],
    projects: [
      {
        name: 'Kaba Delivery',
        description:
          'A large-scale multi-service delivery platform supporting food delivery, pharmacy services, external store requests, shipment workflows, subscription systems, operational automation, and mobile-money payment infrastructure.',
        tags: ['Flutter', 'NestJS', 'Delivery', 'Payments', 'Logistics'],
        links: [
          {
            label: 'View on Play Store',
            url: 'https://play.google.com/store/apps/details?id=tg.tmye.kaba.brave.one&hl=fr',
          },
        ],
        screenshots: [],
        privacyNote: null,
      },
  
      {
        name: 'Kaba Partners',
        description:
          'Merchant and partner management application enabling restaurants, stores, and sales points to manage products, orders, operational workflows, and interactions with the Kaba ecosystem.',
        tags: ['Flutter', 'Operations', 'Delivery'],
        links: [
          {
            label: 'View on Play Store',
            url: 'https://play.google.com/store/apps/details?id=tg.tmye.kaba.partner&hl=fr',
          },
        ],
        screenshots: [],
        privacyNote: null,
      },
  
      {
        name: 'Kaba Riders',
        description:
          'Delivery-driver application supporting ride management, delivery tracking, order workflows, operational notifications, and real-time logistics coordination.',
        tags: ['Flutter', 'Logistics', 'Delivery'],
        links: [],
        screenshots: [],
        privacyNote:
          'Due to product ownership and usage rights, I cannot publicly share screenshots or internal operational flows for this application.',
      },
    ],
  },
  {
    company: 'Aloba',
    role: 'Mobile Developer — E-commerce App',
    period: 'Apr 2023 – Jul 2024',
    location: 'Togo',
    bullets: [
      'Designed and developed a mobile e-commerce application.',
      'Built shopping flows, product browsing, and core marketplace features.',
      'Also developed the admin/dashboard side using Flutter and Firebase.',
    ],
    projects: [
      {
        name: 'Aloba',
        description:
          'E-commerce mobile application with catalog, ordering flows, updates in 2024, and a back-office/admin dashboard built with Flutter and Firebase.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Dashboard', 'E-commerce'],
        screenshots: [
          '/images/aloba-1.jpg',
          '/images/aloba-2.jpg',
          '/images/aloba-3.jpg',
        ],
        links: [],
        privacyNote: null,
      },
    ],
  },
  {
    company: 'Freelance / Web Projects',
    role: 'Web Developer',
    period: '2021 – 2022',
    location: 'Togo',
    bullets: [
      'Built websites for NGOs, communities, and professionals.',
      'Worked with WordPress, Wix, and custom web solutions.',
      'Delivered showcase websites tailored to each client’s communication needs.',
    ],
    projects: [
      {
        name: 'AICD – Refugee Association',
        description:
          'Website presenting activities, news, and useful information for refugees.',
        tags: ['Web', 'HTML', 'CSS'],
        links: [{ label: 'Visit Website', url: 'https://www.africimmigrationclando.net/' }],
        screenshots: [],
        privacyNote: null,
      },
      {
        name: 'L’AET – Writers of Togo',
        description:
          'Wix showcase website for the writers association of Togo, highlighting authors, events, and publications.',
        tags: ['Wix', 'Culture'],
        links: [{ label: 'Visit Website', url: 'https://www.ecrivainsdutogo.com' }],
        screenshots: [],
        privacyNote: null,
      },
      {
        name: 'Professor Showcase Website',
        description:
          'Showcase website for a professor presenting profile, courses, and publications.',
        tags: ['WordPress', 'Showcase'],
        links: [],
        screenshots: ['/images/prof-1.png', '/images/prof-2.png'],
        privacyNote: null,
      },
    ],
  },
];
const projects = [
  {
    eyebrow: 'Personal Project',
    title: 'Se-Learn',
    period: '2022',
    description:
    'A gamified educational platform combining learning systems, AI-assisted study support, memory-training tools, competitive progression mechanics, and interactive mini-games to improve student engagement and retention.',
    
    tags: ['Flutter', 'Firebase', 'Education', 'Gamification', 'AI'],
    
    status: 'Completed',
    
    highlights: [
    'Designed and developed a multiplayer educational board-game system inspired by progression-based platform mechanics, including quizzes, rewards, penalties, dice movement, and competitive ranking workflows.',
    
    ```
    'Built memory-training systems using flashcards, image associations, contextual memorization techniques, and AI-assisted learning support to improve long-term knowledge retention.',
    
    'Implemented quiz-generation and automated study-card systems with dynamic educational content workflows and adaptive revision mechanics.',
    
    'Developed gamification infrastructure including points, rankings, weekly competitions, reward systems, achievement notifications, virtual currency systems, and engagement-based progression tracking.',
    
    'Integrated AI-assisted educational explanations allowing users to request contextual help and exercise breakdowns directly inside learning flows.',
    
    'Built educational mini-games for English learning, spelling challenges, translation exercises, word reconstruction systems, listening exercises, and vocabulary reinforcement.',
    
    'Implemented behavioral analytics and statistics systems enabling users to monitor study performance, weekly progression, engagement metrics, and learning consistency over time.',
    
    'Integrated notifications, reminder systems, targeted advertising workflows, virtual currency purchases, and heart/energy regeneration mechanics to support long-term platform engagement.',
    ```
    
    ],
    
    screenshots: [
      '/images/selearn-1.png',
      '/images/selearn-2.png',
      '/images/selearn-3.png',
      '/images/selearn-4.png',
      '/images/selearn-5.png',
      '/images/selearn-6.png',
      '/images/selearn-7.png',
      '/images/selearn-8.png',
      '/images/selearn-9.png',
      '/images/selearn-10.png',
      '/images/selearn-11.png',
      '/images/selearn-12.png',
      '/images/selearn-13.png',
      '/images/selearn-14.png',
      '/images/selearn-15.png',
      '/images/selearn-16.png',
    ],
    
    links: [],
    privacyNote: null,
    },
    
    {
      eyebrow: 'Personal Project',
      title: 'Se-Learn Flow',
      period: '2024',
      description:
      'An AI-assisted productivity and workflow-management platform focused on intelligent scheduling, behavioral productivity systems, adaptive planning, and long-term goal orchestration.',
      
      tags: ['Flutter', 'Productivity', 'AI', 'Workflow Systems'],
      
      status: 'Active',
      
      highlights: [
      'Designed and developed an intelligent scheduling system capable of automatically organizing tasks across calendars based on availability, workload balancing, activity types, and configurable productivity constraints.',
      
      ```
      'Implemented adaptive planning workflows that analyze user scheduling patterns and automatically suggest optimized task placement and time allocation strategies.',
      
      'Built session-persistence systems allowing users to resume active work sessions, maintain task continuity, and track long-running productivity workflows across application restarts.',
      
      'Developed productivity-evaluation systems combining task completion metrics, AI-assisted summaries, questionnaire analysis, objective tracking, and engagement scoring to assess user progress and reward consistency.',
      
      'Implemented AI-assisted productivity interactions enabling contextual task reviews, activity summaries, and behavioral feedback workflows based on user-generated work sessions.',
      
      'Designed hierarchical workflow-tree systems allowing users to decompose long-term goals into structured objectives, sub-objectives, and automatically generated task pathways integrated directly into scheduling flows.',
      
      'Built reminder, notification, and behavioral reinforcement systems encouraging task consistency, routine maintenance, and long-term productivity engagement.',
      
      'Worked on statistics and progression systems enabling users to analyze productivity trends, performance metrics, activity consistency, and long-term behavioral evolution.',
      ```
      
      ],
      
      screenshots: [
        '/images/flow-1.png',
        '/images/flow-2.png',
        '/images/flow-3.png',
        '/images/flow-4.png',
        '/images/flow-5.png',
        '/images/flow-6.png',
        '/images/flow-7.png',
        '/images/flow-8.png',
        '/images/flow-9.png',
        '/images/flow-10.png',
        '/images/flow-11.png',
      ],
      
      links: [],
      privacyNote: null,
      },      
];
const principles = [
  'Delivered On Time',
  'Security-First Mindset',
  'Full-Stack Thinking',
  'Clear Communication',
  'Fast to Productive',
  'Business-Focused Output',
];

const skills = {
  Backend: ['Node.js', 'NestJS', 'PHP', 'Symfony'],
  'Mobile & Frontend': ['Flutter', 'Dart', 'Java (Android)', 'HTML', 'CSS', 'JavaScript'],
  'DevOps & Tools': ['Git', 'GitHub', 'GitLab', 'AWS', 'VPS', 'CI/CD'],
  'Security & Testing': ['Unit Testing', 'API Security', 'Key Management', 'Key Rotation'],
  Languages: ['French', 'English', 'Ewe'],
};

const heroPortrait = 'https://i.ibb.co/cSKnKk3p/joe.png';

export default function BoonJosephPortfolio() {
  const [lightbox, setLightbox] = useState({
    open: false,
    title: '',
    images: [],
    index: 0,
  });
  
  const openScreenshots = (title, images) => {
    setLightbox({
      open: true,
      title,
      images,
      index: 0,
    });
  };
  
  const closeScreenshots = () => {
    setLightbox({
      open: false,
      title: '',
      images: [],
      index: 0,
    });
  };
  
  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
    }));
  };
  
  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1,
    }));
  };
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-emerald-400/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[20%] h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.18]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white/90">
            <div className="h-3 w-3 rounded-sm bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.7)]" />
            Boon Joseph
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a href="#contact">
          <Button className="hidden rounded-full bg-white text-neutral-950 hover:bg-white/90 md:inline-flex">
            Hire Me
          </Button>
          </a>
          <Button size="icon" variant="ghost" className="md:hidden text-white">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-7xl px-6 lg:px-8">
        <section className="grid min-h-[92vh] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
            <motion.div variants={fadeUp}>
              <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-emerald-300 hover:bg-white/5">
                AVAILABLE FOR NEW PROJECTS
              </Badge>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Backend & Mobile
                <span className="block bg-gradient-to-r from-white via-white to-white/55 bg-clip-text text-transparent">
                  Developer.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                I build scalable APIs, cross-platform mobile apps, and production-ready systems — with a sharp focus on security, performance, and delivering on time, every time.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 text-sm text-white/65">
              <div className="flex items-center gap-2"><MapPinIcon className="h-4 w-4 text-emerald-300" /> Lomé, Togo</div>
              <div className="flex items-center gap-2"><MailIcon className="h-4 w-4 text-emerald-300" /> boonjoseph16@gmail.com</div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#contact">
              <Button className="rounded-full bg-emerald-400 px-6 py-6 text-base font-semibold text-neutral-950 hover:bg-emerald-300">
                Get in Touch <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a href="#experience">
              <Button variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">
                View My Work
              </Button>
            </a>
            </motion.div>
            <motion.div variants={fadeUp} className="grid max-w-2xl grid-cols-2 gap-4 pt-4 md:grid-cols-4">
              {[
                ['5+', 'Years of Experience'],
                ['17+', 'Projects Delivered'],
                ['2', 'Active Clients'],
                ['100%', 'On-Time Delivery'],
              ].map(([value, label]) => (
                <Card key={label} className="rounded-3xl border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur">
                  <CardContent className="p-5">
                    <div className="text-2xl font-semibold text-white">{value}</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/55">{label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-transparent to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
              <img
                src={heroPortrait}
                alt="Professional portrait"
                className="h-[520px] w-full rounded-[1.5rem] object-cover object-center"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/10 bg-neutral-950/60 p-5 backdrop-blur-xl">
                <div className="text-sm uppercase tracking-[0.3em] text-emerald-300">Backend • Mobile • Security</div>
                <div className="mt-2 text-2xl font-semibold">Building systems that scale cleanly.</div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="py-20"
        >
          <motion.div variants={fadeUp} className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-emerald-300">Services I Offer</div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">What I Build.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/65">
              From a single API endpoint to a full mobile ecosystem — I cover the stack that modern products are built on.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={fadeUp}>
                  <Card className="group h-full rounded-[2rem] border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                    <CardContent className="p-7">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-emerald-300 transition group-hover:scale-105 group-hover:bg-emerald-400/10">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="mt-4 leading-7 text-white/65">{service.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full bg-white/6 px-3 py-1 text-xs text-white/75 hover:bg-white/6">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="py-20"
        >
          <motion.div variants={fadeUp} className="mb-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-emerald-300">Track Record</div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Professional Experience.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/65">
              Real projects, real clients, real impact — across Africa, Europe, and the USA.
            </p>
          </motion.div>
        </motion.section>
        <div className="space-y-5">
          {experience.map((item, index) => (
            <motion.div key={item.company} variants={fadeUp}>
              <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04]">
                <CardContent className="grid gap-6 p-7 lg:grid-cols-[90px_1fr_260px]">
                  <div className="text-sm font-medium text-emerald-300/90">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-white text-2xl font-semibold">{item.company}</h3>
                      {index === 0 && (
                        <Badge className="rounded-full bg-emerald-400/15 text-emerald-300 hover:bg-emerald-400/15">
                          Current
                        </Badge>
                      )}
                    </div>

                    <div className="mt-1 text-lg text-white/80">{item.role}</div>

                    <ul className="mt-5 space-y-3 text-white/65">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {item.projects?.length > 0 && (
                      <div className="mt-8 space-y-4">
                        <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                          Related Projects
                        </div>

                        {item.projects.map((project) => (
                          <div
                            key={project.name}
                            className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                          >
                            <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                            <p className="mt-2 text-white/65">{project.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  className="rounded-full bg-white/6 text-white/75 hover:bg-white/6"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {project.privacyNote && (
                              <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                                {project.privacyNote}
                              </div>
                            )}

                            {project.links?.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-3">
                                {project.links.map((link) => (
                                  <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-emerald-300"
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            )}

                            {project.screenshots?.length > 0 && (
                              <div className="mt-4">
                                <button
                                  onClick={() => openScreenshots(project.name, project.screenshots)}
                                  className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                                >
                                  View Screenshots
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm text-white/70">
                    <div className="font-medium text-white">{item.period}</div>
                    <div className="mt-2">{item.location}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="py-20"
        >
          <motion.div variants={fadeUp} className="mb-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-emerald-300">Personal Work</div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects I Own.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/65">
              Side projects where I have full creative and technical ownership — from concept to production.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Card className="h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04]">
                  <div className={`h-64 w-full ${idx === 0 ? 'bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.4),transparent_35%),linear-gradient(135deg,#0b1220,#101827_40%,#1f2937)]' : 'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.3),transparent_30%),linear-gradient(135deg,#171717,#262626_45%,#0f172a)]'} p-6`}>
                    <div className="flex items-start justify-between">
                      <Badge className="rounded-full bg-white/80 text-neutral-950 hover:bg-white/80">{idx === 0 ? 'Active' : 'Long-term Project'}</Badge>
                      <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm text-white/85 backdrop-blur">{project.period}</span>
                    </div>
                    <div className="mt-20 max-w-sm">
                      <div className="text-sm uppercase tracking-[0.3em] text-white/60">{project.eyebrow}</div>
                      <div className="mt-3 text-4xl font-semibold">{project.title}</div>
                    </div>
                  </div>
                  <CardContent className="p-7">
                      <p className="text-lg leading-8 text-white/65">
                        {project.description}
                      </p>

                      {/* TAGS */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="rounded-full bg-white/6 text-white/75 hover:bg-white/6"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* PRIVACY */}
                      {project.privacyNote && (
                        <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                          {project.privacyNote}
                        </div>
                      )}

                      {/* ACTIONS */}
                      <div className="mt-6 flex flex-wrap gap-3">

                        {/* Screenshots */}
                        {project.screenshots && project.screenshots.length > 0 && (
                          <button
                            onClick={() => openScreenshots(project.title, project.screenshots)}
                            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
                          >
                            View Screenshots
                          </button>
                        )}

                        {/* Links */}
                        {project.links && project.links.length > 0 && (
                          project.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-emerald-300"
                            >
                              {link.label}
                            </a>
                          ))
                        )}

                      </div>
                    </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

    
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="py-20"
        >
          <motion.div variants={fadeUp} className="mb-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-emerald-300">Why Work With Me</div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">What I Bring to the Table.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/65">
              Beyond technical skills — these are the working principles that make collaboration smooth and results consistent.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div key={principle} variants={fadeUp}>
                <Card className="rounded-[2rem] border-white/10 bg-white/[0.04]">
                  <CardContent className="p-7">
                    <div className="mb-4 text-sm text-emerald-300">0{index + 1}</div>
                    <h3 className="text-xl font-semibold text-white">{principle}</h3>
                    <p className="mt-3 leading-7 text-white/65 ">
                      {principle === 'Delivered On Time' && 'Deadlines are commitments. I scope carefully, communicate early about blockers, and deliver what was agreed.'}
                      {principle === 'Security-First Mindset' && 'Security is built in from the start, from encrypted key flows to hardened APIs and production-safe implementation choices.'}
                      {principle === 'Full-Stack Thinking' && 'I understand how backend, mobile, and cloud layers connect, which reduces gaps and speeds up problem-solving.'}
                      {principle === 'Clear Communication' && 'You get regular updates, honest estimates, and thoughtful questions when something needs clarification.'}
                      {principle === 'Fast to Productive' && 'I ramp up quickly on new domains and codebases, helping projects move forward without long onboarding delays.'}
                      {principle === 'Business-Focused Output' && 'I build for real users and business outcomes, not just technical completion.'}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="py-20"
        >
          <motion.div variants={fadeUp} className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-emerald-300">Expertise</div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Technical Skills.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/65">
              A practical toolkit built from real projects — not just tutorials.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <motion.div key={group} variants={fadeUp}>
                <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.04]">
                  <CardContent className="p-7">
                    <h3 className="text-lg font-semibold text-white">{group}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Badge key={item} className="rounded-full bg-white/6 px-3 py-1.5 text-sm text-white/80 hover:bg-white/6">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="py-20"
        >
          <motion.div variants={fadeUp} className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] shadow-2xl shadow-black/20">
            <div className="grid gap-8 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-emerald-300">Get In Touch</div>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Let’s Work Together.</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                  Have a project in mind? I’d love to hear about it. Reach out and let’s make something great.
                </p>
                <div className="mt-8 space-y-4 text-white/75">
                  <div className="flex items-center gap-3"><MailIcon className="h-5 w-5 text-emerald-300" /> boonjoseph16@gmail.com</div>
                  <div className="flex items-center gap-3"><PhoneIcon className="h-5 w-5 text-emerald-300" /> +228 97 31 14 98</div>
                  <div className="flex items-center gap-3"><MapPinIcon className="h-5 w-5 text-emerald-300" /> Lomé, Togo</div>
                </div>
                <div className="mt-8 flex gap-3">
                  <Button variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                    <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                  <Button className="rounded-full bg-emerald-400 text-neutral-950 hover:bg-emerald-300">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" /> boonjoseph-portfolio.com
                  </Button>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/70">Full Name</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30" placeholder="Your name" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/70">Email Address</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30" placeholder="you@company.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/70">Project Type</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30" placeholder="Select a service..." />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/70">Tell Me About Your Project</label>
                    <textarea className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30" placeholder="Describe your project, timeline, and budget..." />
                  </div>
                </div>
                <Button className="mt-5 w-full rounded-2xl bg-white text-neutral-950 hover:bg-white/90">Send Message</Button>
                <p className="mt-4 text-sm text-white/45">I typically respond within 24 hours.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Boon Joseph. Built with React & Tailwind.</div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
      {lightbox.open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
    
    <button
      onClick={closeScreenshots}
      className="absolute right-6 top-6 text-white text-2xl"
    >
      ✕
    </button>

    <button
      onClick={prevImage}
      className="absolute left-6 text-white text-3xl"
    >
      ‹
    </button>

    <img
      src={lightbox.images[lightbox.index]}
      alt=""
      className="max-h-[80vh] max-w-[90vw] rounded-2xl"
    />

    <button
      onClick={nextImage}
      className="absolute right-6 text-white text-3xl"
    >
      ›
    </button>

    <div className="absolute bottom-6 text-white text-sm">
      {lightbox.index + 1} / {lightbox.images.length}
    </div>

  </div>
)}
    </div>
  );
}
