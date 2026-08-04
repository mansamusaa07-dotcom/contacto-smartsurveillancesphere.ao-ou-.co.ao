'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: '📹',
    title: 'Videovigilância Inteligente',
    description: 'Câmaras de alta resolução com análise de vídeo em tempo real',
  },
  {
    icon: '🌙',
    title: 'Monitorização Remota 24/7',
    description: 'Acesso em tempo real a todas as câmaras e sensores',
  },
  {
    icon: '🚁',
    title: 'Drones de Vigilância',
    description: 'Patrulhamento aéreo e monitorização de grandes áreas',
  },
  {
    icon: '🤖',
    title: 'Inteligência Artificial',
    description: 'Detecção automática de anomalias e comportamentos suspeitos',
  },
  {
    icon: '📊',
    title: 'Análise de Dados',
    description: 'Processamento e análise profunda de eventos',
  },
  {
    icon: '📈',
    title: 'Business Intelligence',
    description: 'Dashboards e relatórios estratégicos personalizados',
  },
  {
    icon: '📋',
    title: 'Relatórios Mensais',
    description: 'Análise executiva completa com recomendações',
  },
  {
    icon: '🎛️',
    title: 'Centro de Comando',
    description: 'Plataforma centralizada de controlo e monitorização',
  },
  {
    icon: '🔑',
    title: 'Controlo de Acessos',
    description: 'Gestão inteligente de entradas e saídas',
  },
  {
    icon: '🚨',
    title: 'Alarmes',
    description: 'Sistema de alertas instantâneos e notificações',
  },
  {
    icon: '⚡',
    title: 'Cercas Eléctricas',
    description: 'Perímetro de segurança perimetral',
  },
  {
    icon: '🚪',
    title: 'Automação de Portões',
    description: 'Controlo automático de acessos e portões',
  },
  {
    icon: '🔧',
    title: 'Manutenção Preventiva',
    description: 'Serviços de manutenção regular e preventiva',
  },
  {
    icon: '🛠️',
    title: 'Manutenção Correctiva',
    description: 'Suporte técnico e reparação de equipamentos',
  },
  {
    icon: '💼',
    title: 'Consultoria Estratégica',
    description: 'Consultores especializados em segurança',
  },
  {
    icon: '🔍',
    title: 'Auditorias de Segurança',
    description: 'Análise completa de vulnerabilidades e riscos',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-dark-black overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Os Nossos <span className="text-gold">Serviços</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Soluções completas de segurança e inteligência em vigilância
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-lg glass-effect border border-graphite-light hover:border-gold transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold font-display mb-2 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
