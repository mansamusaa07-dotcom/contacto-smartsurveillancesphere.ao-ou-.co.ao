'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true });

  const testimonials = [
    {
      name: 'João Silva',
      role: 'Director de Segurança',
      company: 'Condomínio Premium Luanda',
      message: 'A plataforma mudou completamente a forma como gerimos a segurança. Os relatórios mensais são excelentes.',
      avatar: '👨‍💼',
    },
    {
      name: 'Maria Santos',
      role: 'Gerente Operacional',
      company: 'Centro Comercial Bairro Alto',
      message: 'Reduzimos perdas em 80%. O suporte técnico é impecável e os alertas em tempo real funcionam perfeitamente.',
      avatar: '👩‍💼',
    },
    {
      name: 'Carlos Nkosi',
      role: 'Director Executivo',
      company: 'Indústria Transformadora',
      message: 'Investimento que pagou a si próprio em 6 meses. Segurança 360 graus garantida.',
      avatar: '👨‍💼',
    },
    {
      name: 'Amélia Oliveira',
      role: 'Administradora',
      company: 'Escola Privada Elite',
      message: 'Confiança total na segurança dos alunos. A plataforma é intuitiva e os alertas são precisos.',
      avatar: '👩‍💼',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-premium-black overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
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
            O Que Dizem os Nossos <span className="text-gold">Clientes</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Depoimentos reais de empresas e organizações que confiam em nós
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg glass-effect border border-graphite-light hover:border-gold transition-all duration-300"
            >
              {/* Stars */}
              <div className="mb-4">
                {'⭐'.repeat(5)}
              </div>

              {/* Message */}
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-graphite-light">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
