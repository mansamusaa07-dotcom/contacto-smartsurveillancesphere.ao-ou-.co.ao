# Guia de Desenvolvimento - Smart Surveillance Sphere

## 🚀 Começar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn
- Git

### Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/mansamusaa07-dotcom/contacto-smartsurveillancesphere.ao-ou-.co.ao.git
cd contacto-smartsurveillancesphere.ao-ou-.co.ao

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env.local

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

## 📁 Estrutura de Ficheiros

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Estilos globais
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navegação
│   │   └── Footer.tsx     # Rodapé
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Services.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Statistics.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       └── ScrollToTop.tsx
├── hooks/
│   └── useInView.ts       # Hook de visibilidade
├── utils/
│   └── helpers.ts         # Funções utilitárias
└── styles/
    └── globals.css        # Estilos globais
```

## 🎨 Design System

### Cores Principais
- **Preto Profundo**: `#0a0a0a` (premium-black)
- **Dourado Metálico**: `#d4af37` (gold)
- **Cinza Grafite**: `#2d2d2d` (graphite)
- **Azul Técnico**: `#0f3a7d` (tech-blue)

### Tipografia
- **Display**: Manrope (títulos)
- **Body**: Inter (textos)
- **Mono**: Space Mono (código)

### Componentes Reutilizáveis

#### Button
```jsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="lg">
  Clique Aqui
</Button>
```

#### Badge
```jsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="gold">Premium</Badge>
```

## 🔄 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev           # Inicia servidor em modo dev

# Build
npm run build         # Cria build para produção
npm start            # Inicia servidor de produção

# Linting
npm run lint         # Executa ESLint
npm run format       # Formata código com Prettier
npm run type-check   # Verifica tipos TypeScript

# Análise
npm run analyze      # Analisa bundle size
```

## 🎯 Principais Seções

1. **Hero Section** - Vídeo de fundo com CTA
2. **How It Works** - Timeline de 7 passos
3. **Services** - Grid de 16 serviços
4. **Dashboard** - Métricas interactivas
5. **Statistics** - Contadores animados
6. **Gallery** - Projetos antes/depois
7. **Testimonials** - Depoimentos de clientes
8. **FAQ** - Perguntas frequentes (accordion)
9. **CTA** - Chamada à ação final
10. **Footer** - Links e contactos

## 🔧 Configurações

### Next.js
- **App Router** para routing moderno
- **Image Optimization** automática
- **Font Optimization** com Google Fonts

### Tailwind CSS
- **Tema Personalizado** com cores premium
- **Animações Customizadas** (fade, glow, float)
- **Responsividade** mobile-first

### TypeScript
- **Strict Mode** ativado
- **Path Aliases** configurados (`@/*`)
- **Type Safety** em todos os componentes

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# 1. Push para GitHub
git push origin main

# 2. Conectar repositório no Vercel
# https://vercel.com/new

# 3. Deploy automático
```

### Outras Plataformas

```bash
# Build
npm run build

# Copiar `/out` ou `.next` para servidor
```

## 📝 Convenções de Código

### Nomenclatura
- **Componentes**: PascalCase (`HeroSection.tsx`)
- **Ficheiros**: kebab-case ou camelCase
- **Variáveis**: camelCase
- **Constantes**: UPPER_SNAKE_CASE

### Componentes
```jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function MyComponent() {
  const { ref, inView } = useInView({ once: true });

  return (
    <motion.section ref={ref}>
      {/* Conteúdo */}
    </motion.section>
  );
}
```

## 🧪 Testing (Futuro)

```bash
npm run test          # Executar testes
npm run test:watch   # Modo watch
npm run test:coverage # Cobertura de testes
```

## 📚 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🐛 Troubleshooting

### Porta 3000 em uso
```bash
lsof -i :3000
kill -9 <PID>
```

### Cache do Next.js
```bash
rm -rf .next
npm run dev
```

### Reinstalar dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Contacto

**Email**: smartsurveillancesphere@gmail.com  
**Telefone**: +244 975 107 092 | +244 927 655 128

## 📄 Licença

MIT License - veja LICENSE para detalhes

---

**Desenvolvido com ❤️ em Angola**
