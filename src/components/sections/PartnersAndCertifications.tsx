'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  { name: 'TechSecure Angola', logo: '🔐', category: 'Tecnologia' },
  { name: 'Digital Solutions', logo: '💻', category: 'Software' },
  { name: 'CloudGuard', logo: '☁️', category: 'Cloud' },
  { name: 'SecureNet', logo: '🌐', category: 'Network' },
  { name: 'AI Intelligence', logo: '🤖', category: 'IA' },
  { name: 'DataProtect', logo: '🔒', category: 'Dados' },
  { name: 'MonitorPro', logo: '📡', category: 'IoT' },
  { name: 'EventLog Systems', logo: '📊', category: 'Analytics' },
];

const certifications = [
  { name: 'ISO 27001', icon: '✅', description: 'Segurança de Informação' },
  { name: 'ISO 9001', icon: '⭐', description: 'Qualidade' },
  { name: 'GDPR Compliant', icon: '🔐', description: 'Proteção de Dados' },
  { name: 'SOC 2', icon: '✔️', description: 'Compliance' },
];

export default function PartnersAndCertifications() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-dark-black overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        {/* Certifications */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Certificações e <span className="text-gold">Conformidade</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Somos certificados e auditados pelos mais altos padrões internacionais
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg glass-effect border border-graphite-light hover:border-gold transition-all text-center"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-bold font-display mb-2 text-gold">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Partners */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Os Nossos <span className="text-gold">Parceiros</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trabalhamos com as melhores empresas de tecnologia e segurança
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg glass-effect border border-graphite-light hover:border-gold transition-all flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="text-5xl mb-3">{partner.logo}</div>
                <p className="text-center font-semibold text-sm mb-1">{partner.name}</p>
                <p className="text-xs text-gray-400 text-center">{partner.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
