# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Showcasing professional experience, projects, content creation, and contact information.

## 🚀 Features

- **Modern UI/UX**: Clean, dark-themed design with smooth animations
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **TypeScript**: Full type safety for better code quality and developer experience

## 📋 Sections

- **Hero**: Introduction and key highlights
- **About**: Personal background and expertise
- **Experience**: Professional work history and achievements
- **Official Projects**: Enterprise projects from work experience
- **Personal Projects**: Side projects and applications
- **Content Creator**: YouTube and content creation work
- **Blog**: Featured blog posts and articles
- **Contact**: Get in touch via various channels
- **Footer**: Social links and additional information

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase Hosting** - Deployment platform

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🚀 Deployment

This project is configured for Firebase Hosting. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

```bash
npm run deploy
```

This command will build the project and deploy it to Firebase Hosting.

## 📁 Project Structure

```
portfolio/
├── components/          # React components
│   ├── common/         # Shared components
│   ├── icons/          # Icon components
│   └── ...             # Section components
├── constants.ts         # Data and configuration
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── firebase.json       # Firebase hosting configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

- **Profile Data**: Update `constants.ts` to modify experience, projects, and social links
- **Styling**: Modify Tailwind classes in components or update the global styles in `index.html`
- **SEO**: Update meta tags in `index.html` for better SEO

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to Firebase Hosting

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and use it as a template for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shyju M**
- LinkedIn: [@shyjum](https://in.linkedin.com/in/shyjum)
- Instagram: [@shyju.tech](https://www.instagram.com/shyju.tech/)
- YouTube: [@ShyjuTalks](https://www.youtube.com/@ShyjuTalks)
- GitHub: [@shyjum](https://github.com/shyjum)
- Telegram: [@dev2earn](https://t.me/dev2earn)

---

Built with ❤️ using React and TypeScript
