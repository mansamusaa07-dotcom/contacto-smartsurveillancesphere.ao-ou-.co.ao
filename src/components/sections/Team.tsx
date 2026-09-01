'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const teamMembers = [
  {
    name: 'Dr. João Silva',
    role: 'Director Executivo & Fundador',
    bio: 'Mais de 20 anos em segurança e inteligência artificial',
    avatar: '👨‍💼',
    social: ['LinkedIn', 'Twitter'],
  },
  {
    name: 'Eng. Maria Santos',
    role: 'CTO & Arquitecto de Sistemas',
    bio: 'Especialista em cloud computing e infraestrutura distribuída',
    avatar: '👩‍💻',
    social: ['LinkedIn', 'GitHub'],
  },
  {
    name: 'Dra. Amélia Oliveira',
    role: 'Directora de Inovação',
    bio: 'Líder em IA e machine learning aplicado à segurança',
    avatar: '👩‍🔬',
    social: ['LinkedIn', 'Twitter'],
  },
  {
    name: 'Carlos Nkosi',
    role: 'Diretor de Parcerias',
    bio: 'Estratega de negócios com network global em tecnologia',
    avatar: '👨‍🤝‍👨',
    social: ['LinkedIn', 'Email'],
  },
];

export default function Team() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
            Conheça a Nossa <span className="text-gold">Equipa</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Especialistas dedicados à transformação de segurança
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-lg overflow-hidden glass-effect border border-graphite-light hover:border-gold transition-all duration-300"
            >
              {/* Avatar */}
              <div className="h-40 bg-gradient-to-br from-gold/20 to-tech-blue/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                {member.avatar}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-2">
                  {member.social.map((social, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs hover:bg-gold hover:text-premium-black transition-all"
                      title={social}
                    >
                      {social[0]}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <p className="text-gray-400 mb-4">Quer fazer parte da nossa equipa?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gold text-premium-black font-semibold rounded-lg hover:bg-gold-light transition-all"
          >
            Ver Ofertas de Emprego
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
