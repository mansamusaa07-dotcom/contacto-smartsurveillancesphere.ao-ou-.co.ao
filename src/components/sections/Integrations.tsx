'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const integrations = [
  {
    name: 'Slack',
    icon: '💬',
    description: 'Notificações de alertas em tempo real no Slack',
    category: 'Comunicação',
  },
  {
    name: 'Google Meet',
    icon: '📹',
    description: 'Transmissão ao vivo de eventos críticos',
    category: 'Conferência',
  },
  {
    name: 'Salesforce',
    icon: '📊',
    description: 'Sincronização de dados de segurança',
    category: 'CRM',
  },
  {
    name: 'Microsoft Teams',
    icon: '👥',
    description: 'Integração completa com Microsoft Teams',
    category: 'Comunicação',
  },
  {
    name: 'AWS',
    icon: '☁️',
    description: 'Deploy e gerenciamento em AWS',
    category: 'Cloud',
  },
  {
    name: 'Google Cloud',
    icon: '🌐',
    description: 'Integração com Google Cloud Platform',
    category: 'Cloud',
  },
  {
    name: 'Zapier',
    icon: '⚙️',
    description: 'Automações com 1000+ aplicações',
    category: 'Automação',
  },
  {
    name: 'REST API',
    icon: '🔌',
    description: 'API completa para integrações customizadas',
    category: 'API',
  },
];

export default function Integrations() {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-dark-black overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-tech-blue rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
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
            Integrações <span className="text-gold">Disponíveis</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Conecte a Smart Surveillance Sphere com suas ferramentas favoritas
          </motion.p>
        </motion.div>

        {/* Integrations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-lg glass-effect border border-graphite-light hover:border-gold transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {integration.icon}
              </div>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-semibold mb-3">
                {integration.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold font-display mb-2 group-hover:text-gold transition-colors">
                {integration.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {integration.description}
              </p>

              {/* Connect Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-4 py-2 text-sm font-semibold border border-gold/50 text-gold rounded hover:bg-gold hover:text-premium-black transition-all opacity-0 group-hover:opacity-100"
              >
                Conectar
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Integration CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 mb-4">Precisa de uma integração customizada?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gold text-premium-black font-semibold rounded-lg hover:bg-gold-light transition-all"
          >
            Contacte nosso time técnico
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
