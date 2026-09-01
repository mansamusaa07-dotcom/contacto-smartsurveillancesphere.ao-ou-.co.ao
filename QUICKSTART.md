# 🎬 GUIA DE INÍCIO RÁPIDO

## 🚀 Começar em 5 Minutos

### 1️⃣ Instalação
```bash
# Clone o repositório
git clone https://github.com/mansamusaa07-dotcom/contacto-smartsurveillancesphere.ao-ou-.co.ao.git
cd contacto-smartsurveillancesphere.ao-ou-.co.ao

# Instale dependências
npm install
```

### 2️⃣ Configuração
```bash
# Copie o arquivo de ambiente
cp .env.example .env.local

# Edite as variáveis conforme necessário
nano .env.local
```

### 3️⃣ Executar em Desenvolvimento
```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Abra http://localhost:3000 no navegador
```

### 4️⃣ Visualizar no Navegador
```
http://localhost:3000          # Homepage
http://localhost:3000/sobre    # Sobre
http://localhost:3000/servicos # Serviços
http://localhost:3000/precos   # Preços
http://localhost:3000/contactos # Contactos
```

---

## 📁 Estrutura de Pastas Explicada

```
smartsurveillancesphere/
├── src/
│   ├── app/                    # Páginas Next.js (App Router)
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── sobre/              # Página Sobre
│   │   ├── servicos/           # Página Serviços
│   │   └── ...outros/
│   │
│   ├── components/             # Componentes React reutilizáveis
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Seções da página
│   │   ├── ui/                 # Componentes UI
│   │   └── ...
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── config/                 # Configurações
│   ├── styles/                 # CSS global
│   └── utils/                  # Funções utilitárias
│
├── public/                     # Ficheiros estáticos (imagens, fontes)
├── .github/                    # Configuração GitHub
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configuração TypeScript
├── tailwind.config.ts          # Configuração Tailwind
├── next.config.js              # Configuração Next.js
└── README.md                   # Este arquivo
```

---

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Produção
npm run build            # Cria build para produção
npm start                # Inicia servidor de produção

# Qualidade de Código
npm run lint             # Executa ESLint
npm run format           # Formata código com Prettier
npm run type-check       # Verifica tipos TypeScript

# Análise
npm run analyze          # Analisa tamanho do bundle
npm run test             # Executa testes (se configurados)
```

---

## 🎨 Customização

### Cores
Edite `tailwind.config.ts`:
```typescript
colors: {
  'gold': '#d4af37',
  'gold-light': '#e8c547',
  // ... outras cores
}
```

### Tipografia
Edite `tailwind.config.ts`:
```typescript
fontFamily: {
  'display': ['Manrope', 'sans-serif'],
  'body': ['Inter', 'sans-serif'],
}
```

### Conteúdo
- Edite textos em `src/components/sections/*.tsx`
- Substitua images em `public/`
- Modifique dados em arrays dentro dos componentes

---

## 🔗 Links Importantes

### Documentação Interna
- [README.md](./README.md) - Overview do projeto
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Guia completo de desenvolvimento
- [ROADMAP.md](./ROADMAP.md) - Plano futuro
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Resumo detalhado
- [FINAL_SUMMARY.md](./FINAL_SUMMARY.md) - Relatório final
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guia de deployment
- [VISUAL_MOCKUP.md](./VISUAL_MOCKUP.md) - Estrutura visual

### Recursos Externos
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)

---

## 🐛 Troubleshooting

### Erro: "Port 3000 já está em uso"
```bash
# Use outra porta
npm run dev -- -p 3001
```

### Erro: "Module not found"
```bash
# Reinstale dependências
rm -rf node_modules package-lock.json
npm install
```

### Lentidão no desenvolvimento
```bash
# Limpe cache
rm -rf .next
npm run dev
```

### Problema com Tailwind
```bash
# Reconstrua Tailwind
npm run build
```

---

## 📱 Testar Responsividade

### Chrome DevTools
1. F12 ou Ctrl+Shift+I
2. Ctrl+Shift+M (Mobile view)
3. Teste diferentes tamanhos de tela

### Breakpoints Usados
```
sm:  640px   (mobile)
md:  768px   (tablet)
lg:  1024px  (desktop pequeno)
xl:  1280px  (desktop)
2xl: 1536px  (desktop grande)
```

---

## 🚀 Deploy em Vercel (Recomendado)

### 1. Conecte GitHub
```bash
# Git push para GitHub
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy em Vercel
1. Vá para [vercel.com](https://vercel.com)
2. Clique "New Project"
3. Selecione repositório GitHub
4. Clique "Deploy"

### 3. Configure Domínio
1. Em Project Settings → Domains
2. Adicione seu domínio
3. Configure DNS records

---

## 🔐 Variáveis de Ambiente

Crie `.env.local` com:
```env
# API URLs
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service
NEXT_PUBLIC_EMAIL_SERVICE_ID=service_xxxxx

# Outros
NEXT_PUBLIC_SITE_URL=https://smartsurveillancesphere.com
```

---

## 📊 Monitoramento

### Verificar Performance
```bash
# Build analysis
npm run analyze

# Lighthouse score
npm run build && npm start
# Depois F12 → Lighthouse
```

### Logs de Erro
Verifique:
- Browser console (F12)
- Server logs (terminal)
- Sentry dashboard (se configurado)

---

## 💡 Dicas Profissionais

1. **Hot Reload**: Alterações são recarregadas automaticamente
2. **Debugging**: Use `console.log()` ou debugger do VS Code
3. **Performance**: Use React DevTools para profiling
4. **Acessibilidade**: Teste com screen readers
5. **SEO**: Valide meta tags com Google Search Console

---

## 🎯 Próximas Etapas

1. ✅ Instalar e executar localmente
2. ✅ Customizar conteúdo e cores
3. ✅ Adicionar imagens reais
4. ✅ Integrar backend
5. ✅ Fazer deploy em produção

---

## 📞 Suporte

- **Email**: smartsurveillancesphere@gmail.com
- **Telefone**: +244 975 107 092
- **Issues**: GitHub Issues
- **Discussões**: GitHub Discussions

---

**Pronto para começar? Execute `npm run dev` e boa sorte! 🚀**

