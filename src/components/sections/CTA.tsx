'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.3, once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      className="relative py-20 md:py-32 bg-gradient-to-r from-premium-black via-dark-black to-premium-black overflow-hidden"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-tech-blue rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Pronto para Transformar a Sua <span className="text-gold">Segurança?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            Contacte-nos hoje para uma demonstração gratuita. Descubra como a Smart Surveillance Sphere pode elevar a segurança da sua organização a um novo patamar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold text-premium-black font-bold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-gold-glow"
            >
              Solicitar Demonstração
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-premium-black transition-all duration-300"
            >
              Agendar Reunião
            </motion.button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-graphite-light">
            <p className="text-gray-400 mb-4">Contacte-nos directamente:</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+244975107092"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <span className="text-2xl">📱</span>
                <span>+244 975 107 092</span>
              </a>
              <a
                href="tel:+244927655128"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <span className="text-2xl">📱</span>
                <span>+244 927 655 128</span>
              </a>
              <a
                href="mailto:smartsurveillancesphere@gmail.com"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <span className="text-2xl">📧</span>
                <span>smartsurveillancesphere@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
