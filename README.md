# **MovieFinder** 🎬  

**Aplicação para buscar filmes, visualizar detalhes e explorar informações usando a API do TMDB.**  

🔗 **Live Demo:** [https://moviefinder.com/](https://movie-finder-phi-gilt.vercel.app/)  
📂 **Repositório:** [Movie Finder](https://github.com/felixdomingos1/movieFinder)  

---

## **📌 Visão Geral**  
O **MovieFinder** é uma aplicação web responsiva que permite:  
✅ **Buscar filmes** por título  
✅ **Visualizar detalhes** como sinopse, gêneros, data de lançamento e avaliação  
✅ **Layout adaptável** para mobile, tablet e desktop  
✅ **Feedback visual** (loadings, mensagens de erro)  

---

## **🛠 Tecnologias Utilizadas**  
| **Tecnologia**       | **Descrição**                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **Next.js**          | Framework React para renderização híbrida (SSR/SSG) e rotas dinâmicas.      |
| **Tailwind CSS**     | Framework CSS utilitário para estilização responsiva e rápida.             |
| **Fetch API**        | Consumo da API TMDB para buscar filmes e detalhes.                         |
| **Framer Motion**    | Biblioteca de animações para transições suaves e interações.               |
| **React Icons**      | Ícones modernos para melhorar a UI.                                        |
| **Vercel**           | Hospedagem e deploy automatizado.                                          |

---

## **✨ Funcionalidades**  

### **1. Página Inicial (Home)**
- 🔍 **Campo de busca** para pesquisar filmes por título.  
- 🎬 **Lista de resultados** com:  
  - Poster do filme  
  - Título  
  - Ano de lançamento  
  - Nota (rating)  
- 🔄 **Loading state** enquanto os dados são carregados.  
- ❌ **Mensagem de erro** se nenhum filme for encontrado.  

### **2. Página de Detalhes**
- 📖 **Sinopse completa** do filme.  
- 🏷️ **Gêneros** (ex: Ação, Comédia).  
- 📅 **Data de lançamento**.  
- ⭐ **Nota média** (TMDB Rating).  
- 🖼️ **Poster em alta resolução**.  
- ↩️ **Botão "Voltar"** para retornar à lista.  

### **3. Responsividade & UX**
- 📱 **Mobile-first design** (funciona em celulares, tablets e desktops).  
- 🎨 **UI moderna** com Tailwind CSS (dark/light mode opcional).  
- 🖱️ **Estados interativos** (hover em botões, animações suaves).  

---

## **🚀 Como Executar Localmente**  

### **Pré-requisitos**  
- Node.js (v18+)  
- Yarn ou npm  
- Chave de API do TMDB ([obtenha aqui](https://www.themoviedb.org/settings/api))  

### **Passos**  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/felixdomingos1/movieFinder.git
   cd movieFinder
   ```  

2. Instale as dependências:  
   ```bash
   npm install
   # ou
   yarn install
   ```  

3. Crie um arquivo `.env.local` e adicione sua API Key:  
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
   ```  

4. Inicie o servidor:  
   ```bash
   npm run dev
   # ou
   yarn dev
   ```  

5. Acesse no navegador:  
   🔗 [http://localhost:3000](http://localhost:3000)  

---

## **📂 Estrutura do Projeto**  
```bash
src/
├── app/        
├── components/        
├── constants/          
├── service/         
├── models/        
├── lib/           
└── messages/           
```

---

## **🎯 Diferenciais Implementados**  
🌟 **Deploy na Vercel** (disponível publicamente)  
🌟 **Animações com Framer Motion** (transições suaves)  
🌟 **Componentização organizada** (código limpo e reutilizável)  
🌟 **Tratamento de erros** (feedback visual para o usuário)  

---
 
---

## **📬 Contato**  
✉️ **Email:** [felixsdomingos93@gmail.com](mailto:felixsdomingos93@gmail.com)  
💼 **LinkedIn:** [Felix Sanjala Domingos](https://www.linkedin.com/in/felixdomingos?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)  
🌐 **Portfólio:** [https://felidom.vercel.app](https://felidom.vercel.app)  

---

**🎉 Obrigado pela oportunidade!**  
**Félix S. Domingos**  
*Fullstack Developer*
