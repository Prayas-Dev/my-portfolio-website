// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import djangoLogo from './assets/tech_logo/django.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Django', logo: djangoLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [  
  {
    id: 0,
    // img: aspiringLogo,
    role: "Web Developer Intern",
    company: "Aspiring Media Tech",
    date: "June 2024 - September 2024",
    desc: "Automated WhatsApp campaign delivery to over 2,000 users, reducing manual effort by 90%. Built a cron-based scheduler for seamless batch execution and developed real-time analytics dashboards for campaign insights. Implemented Role-Based Access Control (RBAC) for secure user management and integrated RESTful APIs for data exchange.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "PostgreSQL",
      "RESTful APIs",
      "Cron Jobs",
      "RBAC"
    ],
  },
  {
    id: 1,
    // img: vcetLogo, // optional if you want to highlight college-related work
    role: "Core Member - Bitbytego Committee",
    company: "Vidyavardhini’s College of Engineering and Technology",
    date: "2023 - Present",
    desc: "Organized and led 4+ technical contests, boosting student engagement by 40%. Contributed to the college’s tech community through leadership, event coordination, and mentorship for junior developers in web technologies and hackathon participation.",
    skills: [
      "Leadership",
      "Team Coordination",
      "Event Management",
      "Web Technologies",
      "Communication"
    ],
  },
  {
    id: 2,
    // img: coherenceHackathonLogo, // optional logo for hackathon participation
    role: "Backend Developer (Hackathon Project)",
    company: "Coherence Hackathon",
    date: "March 2024",
    desc: "Developed scalable backend modules for an AI productivity suite using Node.js and Express.js, leading the team to secure a top-3 finish among 60+ teams. Focused on optimizing data handling and API performance for real-time AI integrations.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Team Collaboration",
      "AI Integration"
    ],
  },
];

  
  export const education = [
  {
    id: 0,
    school: "Vidyavardhini’s College of Engineering and Technology, Mumbai University",
    date: "Sept 2022 - July 2026",
    grade: "7.4 CGPA (Current)",
    desc: "Pursuing a Bachelor of Engineering in Computer Engineering. Developed a strong foundation in operating systems, DBMS, data structures, machine learning, and web technologies. Actively participating in hackathons and projects involving AI and blockchain to strengthen technical and problem-solving skills.",
    degree: "Bachelor of Engineering - Computer Engineering",
  },
  {
    id: 1,
    school: "Adarsh Education Society, Mumbai",
    date: "Apr 2020 - Mar 2022",
    grade: "82%",
    desc: "Completed Higher Secondary Education in Science stream with focus on Physics, Chemistry, Mathematics, and Computer Science. Developed logical reasoning and analytical thinking through active participation in academic projects.",
    degree: "HSC (XII) - Science with Computer Science",
  },
  {
    id: 2,
    school: "Morning Star English High School, Mumbai",
    date: "Apr 2018 - Mar 2020",
    grade: "85%",
    desc: "Completed Secondary School Education under the SSC Board, excelling in Science and Mathematics. Built early programming interest through school-level computer projects and science fairs.",
    degree: "SSC (X) - Science and Mathematics",
  },
];

export const projects = [
  {
    id: 0,
    title: "MindSync – AI Journaling Assistant",
    icon: "FaBrain",
    description:
      "An AI-powered journaling assistant that analyzes user entries to generate personalized insights and reflections. Features semantic search using PGVector and contextual AI summaries powered by Gemini API. Includes JWT-based secure authentication.",
    tags: ["React JS", "Node.js", "PostgreSQL", "PGVector", "Gemini API", "JWT"],
    github: "https://github.com/Prayas-Dev/ai_journaling",
  },
  {
    id: 1,
    title: "Animated 3D Website – GSAP Demo",
    icon: "FaGlobe",
    description:
      "A visually stunning 3D animated website demonstrating scroll-triggered GSAP animations with optimized performance and responsiveness across 15+ devices.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP", "SVG"],
    github: "https://github.com/Prayas-Dev/3D-Demo-Website-clone-of-twogood-",
  },
  {
    id: 2,
    title: "E-Commerce Chatbot Platform",
    icon: "FaShoppingCart",
    description:
      "A full-stack intelligent chatbot system designed to assist users in shopping queries. Includes product search, order management, and natural language understanding with Flask/Django backend.",
    tags: ["React JS", "Python", "Flask", "REST API", "PostgreSQL"],
    github: "https://github.com/Prayas-Dev/E-Commerce-Chatbot",
  },
  {
    id: 3,
    title: "Decentralized Digital Identity (DID) System",
    icon: "FaLock",
    description:
      "A blockchain-based digital identity system implementing Self-Sovereign Identity and Zero-Knowledge Proofs using Solidity, Polygon, and Anon Aadhaar integration.",
    tags: ["Solidity", "Polygon", "ZKP", "Anon Aadhaar", "Blockchain"],
    github: "https://github.com/Prayas-Dev/DID-System",
  },
];
