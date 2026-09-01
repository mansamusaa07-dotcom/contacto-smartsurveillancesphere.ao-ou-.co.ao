'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const resources = [
  {
    icon: '📄',
    title: 'Guia de Implementação',
    description: 'Passo a passo completo para implementar a plataforma na sua empresa',
    type: 'PDF',
    size: '2.4 MB',
  },
  {
    icon: '🎥',
    title: 'Webinar: IA em Segurança',
    description: 'Sessão online ao vivo com nossos especialistas sobre machine learning',
    type: 'Vídeo',
    size: '45 min',
  },
  {
    icon: '📊',
    title: 'ROI Calculator',
    description: 'Ferramenta interactiva para calcular o retorno sobre investimento',
    type: 'Ferramenta',
    size: 'Online',
  },
  {
    icon: '📚',
    title: 'White Paper: Segurança em Angola',
    description: 'Análise profunda do cenário de segurança e oportunidades de mercado',
    type: 'PDF',
    size: '1.8 MB',
  },
  {
    icon: '🎬',
    title: 'Tutorial em Vídeo',
    description: 'Série de tutoriais mostrando como usar todas as funcionalidades',
    type: 'Vídeo',
    size: '2h 30min',
  },
  {
    icon: '💼',
    title: 'Proposta Comercial',
    description: 'Template personalizável para apresentações comerciais',
    type: 'Documento',
    size: '1.2 MB',
  },
];

export default function Resources() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true });

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
            Recursos e <span className="text-gold">Materiais</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Acesso a guias, webinars, white papers e ferramentas para otimizar sua implementação
          </motion.p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href="#"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-lg glass-effect border border-graphite-light hover:border-gold transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold font-display mb-2 group-hover:text-gold transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {resource.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-graphite-light">
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-semibold">
                  {resource.type}
                </span>
                <span className="text-xs text-gray-500">{resource.size}</span>
              </div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-4 py-2 text-sm font-semibold border border-gold/50 text-gold rounded hover:bg-gold hover:text-premium-black transition-all opacity-0 group-hover:opacity-100"
              >
                Download
              </motion.button>
            </motion.a>
          ))}
        </motion.div>

        {/* Help Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {[
            { icon: '📞', title: 'Suporte 24/7', desc: 'Entre em contacto com nosso time de suporte' },
            { icon: '📖', title: 'Documentação', desc: 'Acesso completo à documentação técnica' },
            { icon: '🎓', title: 'Treinamento', desc: 'Programas de formação para sua equipa' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-lg glass-effect border border-graphite-light"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="font-bold mb-2">{item.title}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
