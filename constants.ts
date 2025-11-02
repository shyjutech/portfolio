import { ExperienceItem, Project, BlogPost, OfficialProject } from './types';
import { LinkedInIcon, InstagramIcon, YouTubeIcon, TelegramIcon, GithubIcon } from './components/icons';

export const PROFILE_IMAGE_URL = 'https://raw.githubusercontent.com/shyjutech/portfolio/main/circleimg.png';

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://in.linkedin.com/in/shyjum', icon: LinkedInIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/shyju.tech/', icon: InstagramIcon },
  { name: 'YouTube', url: 'https://www.youtube.com/@ShyjuTalks', icon: YouTubeIcon },
  { name: 'Telegram', url: 'https://t.me/dev2earn', icon: TelegramIcon },
  { name: 'Github', url: 'https://github.com/shyjum', icon: GithubIcon },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Lead Software Engineer',
    company: 'Jiffy.ai, Technopark, Thiruvananthapuram',
    duration: '2019 - Present',
    description: 'Leading product development for a no-code/low-code platform. Responsible for system architecture, scaling infrastructure, and mentoring a team of engineers to deliver enterprise-grade solutions.',
    technologies: ['Golang', 'Spring Boot', 'Kubernetes', 'AWS', 'Microservices', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer',
    company: 'Founding Minds Inc, Infopark, Cochin',
    duration: '2018 - 2019',
    description: 'Contributed to the development of backend systems and APIs for web and mobile applications. Worked in an agile environment to design, build, and maintain efficient, reusable, and reliable code.',
    technologies: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Associate - Mobile Developer',
    company: 'Cognizant, Infopark, Cochin',
    duration: '2014 - 2018',
    description: 'Developed and maintained cross-platform mobile applications for enterprise clients using Xamarin. Focused on delivering high-quality user experiences and robust application performance.',
    technologies: ['Xamarin', 'C#', '.NET', 'Mobile Development', 'SQLite'],
  },
];

export const OFFICIAL_PROJECTS_DATA: OfficialProject[] = [
  {
    title: 'No-code Application Platform',
    company: 'Jiffy.ai',
    description: 'Currently immersed in a no-code platform, I utilize expertise in microservices, Kubernetes, Java, Golang, and PostgresQL to create innovative solutions. Employing drag-and-drop functionality and pre-built components streamlines development, fostering efficiency and creativity.',
    technologies: ['GoLang', 'Spring Boot', 'Kubernetes' , 'AWS', 'Jenkins', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Mobile & Backend Development',
    company: 'Eventurbo',
    description: 'Fluent in dynamic mobile app development using Flutter. Experienced in Python back end development with the Tornado web framework. Proficient in utilizing Python, PostgreSQL, Tornado, and Momoko for robust coding.',
    technologies: ['Flutter', 'Python', 'Elasticsearch', 'Firebase', 'Tornado'],
  },
  {
    title: "Schwan’s Route Book Application",
    company: 'Cognizant Client Project',
    description: "Schwan's Field Sales app empowers RSRs, managing product inventory, order processing, promotions, and payments. Streamlined for door-to-door service, it handles discounts, gifts, coupons, returns, and refunds efficiently.",
    technologies: ['Xamarin Forms', 'PCL', 'Shared Code', 'SQLite', 'MVVM Pattern'],
  },
  {
    title: "UPS Access Point App",
    company: 'Cognizant Client Project',
    description: 'Developed a mobile app for access point users on Android and iOS, focusing on an efficient parcel service system with barcode scanning and printing functionalities. Integrated SOAP services for enhanced functionality, contributing to diverse modules like driver delivery, customer drop-off, customer pick-up, and label-less returns.',
    technologies: ['Xamarin Android', 'Xamarin iOS', 'PCL', 'SQLite', 'SOAP'],
  },
  {
    title: "Assurant Hubb Insurance App",
    company: 'Cognizant Client Project',
    description: 'Contributed actively to an insurance app exclusively for Halifax customers, offering convenient access to policy information. The app, crafted with Xamarin, allows medical screening for coverage eligibility and features reminders for payment due dates.',
    technologies: ['Xamarin Forms', 'SQLite', 'MVVM Pattern', 'Android', 'iOS'],
  },
];


export const PROJECTS_DATA: Project[] = [
  {
    title: 'DevRoad AI',
    description: 'Crafts actionable learning plans with curated resources based on your goals and experience.',
    imageUrl: 'https://picsum.photos/seed/devroadai/600/400',
    link: 'https://devroadai.web.app/',
    techStack: ['React', 'Gemini API', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: 'PSC Civil Engineering App',
    description: 'A highly-rated educational app on the Google Play Store for civil engineering students preparing for PSC exams.',
    imageUrl: 'https://picsum.photos/seed/psccivilapp/600/400',
    link: 'https://play.google.com/store/apps/details?id=com.psc.civil&hl=en_IN',
    techStack: ['Flutter', 'Firebase', 'AdMob', 'Python'],
  },
  {
    title: 'PSC Guru & PSC Winner',
    description: 'Educational apps designed to help users prepare for competitive exams, featuring quizzes, study materials, and progress tracking.',
    imageUrl: 'https://picsum.photos/seed/pscapp/600/400',
    techStack: ['Flutter', 'Firebase', 'Mobile UI/UX'],
  },
  {
    title: 'Daily Wallpaper App',
    description: 'A simple yet elegant app delivering high-quality daily wallpapers to users, focusing on a clean UI and efficient background services.',
    imageUrl: 'https://picsum.photos/seed/wallpaperapp/600/400',
    techStack: ['Flutter', 'Firebase Storage', 'Dart'],
  },
  {
    title: 'AI Automation Tools',
    description: 'Exploring and building AI-based automation tools for creators and developers to streamline workflows and increase productivity.',
    imageUrl: 'https://picsum.photos/seed/aiautomation/600/400',
    techStack: ['n8n', 'OpenAI', 'Firebase Extensions', 'Python'],
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
    {
        title: "How I Built a Profitable Flutter App",
        excerpt: "A deep dive into the strategies, tech stack, and monetization models I used to turn a side project into a source of passive income.",
        imageUrl: "https://picsum.photos/seed/blog1/600/400",
        link: "#"
    },
    {
        title: "The Reality of IT Life: Balancing a Job, Family, and Side Hustles",
        excerpt: "An honest look at the challenges and rewards of managing a full-time tech career while pursuing personal projects and family life.",
        imageUrl: "https://picsum.photos/seed/blog2/600/400",
        link: "#"
    },
    {
        title: "Top 5 AI Tools That Will 10x Your Developer Productivity",
        excerpt: "Discover the AI-powered tools that I use daily for coding, debugging, and project management to save time and effort.",
        imageUrl: "https://picsum.photos/seed/blog3/600/400",
        link: "#"
    }
];