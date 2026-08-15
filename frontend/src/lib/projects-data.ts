export interface Project {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  purpose: string;
  techStack: string[];
  /** Rotating visuals shown inside the coach window / hero carousel. Swap these for real screenshot URLs when you have them — the carousel logic doesn't change. */
  images: string[];
  liveDemo: string;
  github: string;
  demoVideo?: string;
  // Additional optional fields for detailed project pages
  features?: string[];
  services?: string[];
  highlights?: string[];
  architecture?: string;
  frontend?: string;
  backend?: string;
  authentication?: string;
  database?: string;
  responsiveDesign?: string;
  role?: string;
  category?: string;
  status?: string;
  challenges?: string[];
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'airbnb-clone',
    title: 'Airbnb Clone',
    tagline: 'Book a stay, list a home, get paid — the full loop.',
    description:
      'A full-featured vacation rental platform with property listings, booking system, user authentication, and payment integration.',
    problem:
      'Independent hosts and small rental operators often can\u2019t justify the cost of enterprise booking software, so they end up juggling spreadsheets, DMs, and manual payment links to manage stays.',
    solution:
      'A self-serve booking platform where hosts list properties with rich media and pricing rules, guests search and book in a few clicks, and Stripe handles payment capture end-to-end — with auth guarding host and guest dashboards separately.',
    purpose:
      'Built to prove out a production-shaped booking flow: real auth, real payments, real listing CRUD — the same core loop that powers marketplaces like Airbnb, Vrbo, and Booking.com.',
    techStack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    images: ['/airbnb.png', '/logoAirbnb.png', '/airbnb2.png'],
    demoVideo: '',
    liveDemo: 'https://airbnb-g0t0.onrender.com/listings',
    github: 'https://github.com/Iqra-hussain235/Project',
    features: [
      'Property Listing Management',
      'User Authentication & Authorization',
      'Search & Filter Functionality',
      'Booking System',
      'Payment Integration with Stripe',
      'Host Dashboard',
      'Guest Dashboard',
      'Image Upload',
      'Rating & Review System',
      'Real-time Availability'
    ],
    highlights: [
      'Full-stack booking platform',
      'Secure payment processing',
      'Role-based access control',
      'Responsive design',
      'Modern UI/UX'
    ],
    architecture: 'MERN stack application with Next.js frontend, Node.js/Express backend, MongoDB database, and Stripe payment integration.',
    frontend: 'Next.js with React, Tailwind CSS for styling, and client-side state management.',
    backend: 'Node.js with Express.js, RESTful APIs, middleware for authentication and validation.',
    database: 'MongoDB with Mongoose for schema modeling and data relationships.',
    authentication: 'JWT-based authentication with role-based access control.',
    role: 'Full-Stack Developer',
    category: 'E-Commerce',
    status: 'Live',
    challenges: [
      'Implementing secure payment flow',
      'Managing complex booking logic',
      'Building user-friendly search interface',
      'Handling image uploads efficiently'
    ],
    outcome: 'A fully functional vacation rental platform that demonstrates full-stack development skills and real-world application architecture.'
  },
    {
    id: 2,
    slug: 'resume-screening-ai',
    title: 'HireSense AI',
    tagline: 'Shortlist candidates in minutes, not days.',
    description:
      'AI-powered resume screening tool that analyzes CVs, matches job requirements, and provides candidate rankings.',
    problem:
      'Recruiters facing hundreds of applications for a single role can\u2019t read every resume closely, so strong candidates get missed and weak ones get through on keyword luck.',
    solution:
      'An NLP pipeline that parses CVs, scores them against a job description\u2019s requirements, and returns a ranked shortlist — served through a Streamlit interface for non-technical recruiters.',
    purpose: 'An applied NLP project connecting a real recruiting pain point to a practical ML pipeline, from raw text to a usable ranking.',
    techStack: ['Python', 'Streamlit', 'NLP', 'Machine Learning', 'Flask', 'MongoDB'],
    images: ['/hiresence1.png', '/hiresence2.png', '/hiresence3.png'],
    demoVideo: '',
    liveDemo: 'https://hiresense-qmpg.onrender.com',
    github: 'https://github.com/Iqra-hussain235/HireSense',
    features: [
      'Resume Parsing',
      'Skill Extraction',
      'Job Description Analysis',
      'Candidate Ranking',
      'Match Scoring',
      'Bulk Processing',
      'PDF Document Support',
      'Export Results'
    ],
    highlights: [
      'NLP-based text analysis',
      'Automated candidate screening',
      'Scoring algorithm',
      'User-friendly interface',
      'Time-efficient recruitment'
    ],
    architecture: 'Python-based ML application with Streamlit frontend, NLP processing pipeline, Flask API backend, and MongoDB storage.',
    frontend: 'Streamlit for interactive UI and real-time results visualization.',
    backend: 'Flask REST API for resume processing and scoring algorithms.',
    database: 'MongoDB for storing resumes, job descriptions, and processing results.',
    role: 'AI/ML Engineer',
    category: 'AI/ML',
    status: 'Live',
    challenges: [
      'Building accurate NLP parsing',
      'Creating fair scoring algorithms',
      'Handling various resume formats',
      'Processing large document volumes'
    ],
    outcome: 'An automated recruitment tool that significantly reduces screening time while improving candidate quality assessment.'
  },
  {
  id: 2,
  slug: 'international-institute-of-language',
  title: 'International Institute of Languages & Study Abroad',
  tagline: 'Your Gateway to Global Education & Opportunities.',
  
  description:
    'A full-stack study-abroad and language training platform designed to help students explore international education opportunities, prepare for language examinations, and receive personalized admission and visa assistance.',

  problem:
    'Students planning to study abroad often have to deal with scattered information about universities, language preparation, admission requirements, visa documentation, and consultation services. The institute needed a modern digital platform where students could discover services, explore courses, understand the study-abroad process, and easily connect with the institute for personalized guidance.',

  solution:
    'Built a modern, responsive web platform for the International Institute of Languages & Study Abroad that brings study-abroad guidance, language training, visa assistance, admission support, and enquiry management into a single digital experience. The platform provides dedicated sections for services and courses while allowing prospective students to quickly submit enquiries and connect with the institute.',

  purpose:
    'The project was developed to create a professional digital presence for an education and immigration consultancy while making it easier for students to discover language courses, understand study-abroad services, and initiate their application journey through online enquiries.',

  techStack: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Redux Toolkit',
    'Firebase',
    'Google OAuth',
    'JWT',
    'Nodemailer',
    'Framer Motion',
    'Swiper',
    'Axios'
  ],

  features: [
    'Study Abroad Guidance',
    'University & Admission Support',
    'Student Visa Assistance',
    'IELTS Preparation',
    'PTE Preparation',
    'TOEFL Preparation',
    'Spoken English Training',
    'In-house Coaching',
    'Online Coaching',
    'Student Enquiry System',
    'Personalized Consultation',
    'SOP Drafting Support',
    'Application Management',
    'Responsive UI',
    'Animated Interactive Sections',
    'Google Authentication',
    'Secure Authentication',
    'Backend API Integration',
    'Database Management',
    'Email Communication'
  ],

  services: [
    'Study Abroad Consulting',
    'Visa Assistance',
    'Admission Support',
    'IELTS Coaching',
    'PTE Coaching',
    'TOEFL Coaching',
    'Spoken English',
    'Online Language Classes',
    'In-house Language Classes'
  ],

  highlights: [
    'Modern study-abroad consultation platform',
    'Responsive design for desktop, tablet, and mobile',
    'Full-stack frontend and backend architecture',
    'REST API integration',
    'MongoDB-based data management',
    'Authentication and authorization',
    'Online enquiry workflow',
    'Professional service and course presentation',
    'Interactive and animated UI'
  ],

  architecture:
    'The application follows a full-stack architecture with a Next.js frontend communicating with an Express.js backend through REST APIs. MongoDB with Mongoose is used for persistent data management, while authentication and supporting services are integrated through Firebase, Google OAuth, JWT, and Nodemailer.',

  frontend:
    'The frontend is built with Next.js and React, with Tailwind CSS used for responsive styling. Redux Toolkit manages application state, while Framer Motion and Swiper are used for interactive animations, transitions, and responsive content presentation.',

  backend:
    'The backend is built with Node.js and Express.js and provides API endpoints for application functionality and enquiry management. Mongoose is used to communicate with MongoDB, while JWT, Google authentication, CORS, dotenv, and Nodemailer support authentication, configuration, security, and communication workflows.',

  authentication:
    'The platform supports authentication using Firebase and Google OAuth, with JWT-based authentication used for secure application-level authorization.',

  database:
    'MongoDB is used as the primary database with Mongoose providing schema modeling and database interaction from the Express backend.',

  responsiveDesign:
    'The interface is designed to work across desktop, tablet, and mobile devices, allowing students to access course information, services, and enquiry functionality from different screen sizes.',

  images: [
    '/iil1.png',
    '/iil2.png',
    '/iil3.png'
  ],

  demoVideo: '',

  liveDemo: 'https://iilstudyabroad.com/',

  github:
    'https://github.com/Iqra-hussain235/InternationalInstituteOfLanguage',

  role:
    'Full-Stack Developer',

  category:
    'Education & Study Abroad',

  status:
    'Live',

  challenges: [
    'Designing a professional platform for an education and immigration consultancy',
    'Creating a clear user journey from service discovery to enquiry submission',
    'Integrating frontend and backend functionality',
    'Managing authentication and user access securely',
    'Building a responsive interface for different devices',
    'Presenting multiple educational and immigration services in a simple interface'
  ],

  outcome:
    'The result is a production-ready digital platform that gives the International Institute of Languages & Study Abroad a professional online presence and provides students with a centralized place to explore language courses, study-abroad services, visa assistance, and admission support.'
},
  {
    id: 3,
    slug: 'ilm-gpt',
    title: 'ILM GPT',
    tagline: 'A study companion that remembers the conversation.',
    description: 'Built a conversational AI system with chat history and session management.',
    problem:
      'Most quick chatbot demos lose all context on refresh, which makes them unusable for anything longer than a single question.',
    solution:
      'ILM GPT persists conversations as sessions in MongoDB, so users can pick up a thread later, switch between chats, and get responses grounded in the ongoing context via the Gemini API.',
    purpose:
      'Built to practice real chat-app architecture — session modeling, history retrieval, and API integration — the same backbone used by production assistants.',
    techStack: ['Gemini API', 'React', 'Node.js', 'MongoDB', 'JavaScript', 'Postman'],
    images: ['/ilm2.png', '/ilm1.png', '/ilm3.png'],
    demoVideo: '',
    liveDemo: 'http://chat-gpt-clone-2.onrender.com/',
    github: 'https://github.com/Iqra-hussain235/Chat-GPT-Clone',
    features: [
      'Persistent Chat History',
      'Session Management',
      'Multiple Chat Sessions',
      'Context-Aware Responses',
      'User Authentication',
      'Chat Export',
      'Real-time Messaging',
      'Clean UI Interface'
    ],
    highlights: [
      'Context preservation across sessions',
      'Multiple conversation support',
      'Clean modern interface',
      'Fast response times',
      'Secure authentication'
    ],
    architecture: 'MERN stack chat application with Gemini API integration, MongoDB for session storage, and React frontend.',
    frontend: 'React with modern UI components and real-time state management.',
    backend: 'Node.js/Express API for chat operations and session management.',
    database: 'MongoDB for storing chat sessions, messages, and user data.',
    authentication: 'JWT-based secure authentication system.',
    role: 'Full-Stack Developer',
    category: 'AI/Chat Application',
    status: 'Live',
    challenges: [
      'Managing conversation context efficiently',
      'Implementing real-time updates',
      'Handling multiple concurrent sessions',
      'Ensuring data security and privacy'
    ],
    outcome: 'A fully functional AI chat companion that maintains context across sessions, providing a seamless conversational experience.'
  },
  
  {
    id: 4,
    slug: 'recipe-app',
    title: 'Recipe App',
    tagline: 'Find dinner by what\u2019s already in the fridge.',
    description:
      'A modern recipe discovery app with smooth search, ingredient-based filters, and a clean UI for browsing delicious meals.',
    problem:
      '\u201cWhat can I cook with what I have\u201d is a search problem most recipe sites answer badly, burying ingredient filters under ads and unrelated results.',
    solution:
      'A fast, focused recipe browser: search and ingredient-based filtering surface relevant meals immediately, with a clean, distraction-free card layout for browsing.',
    purpose: 'A focused UI/API exercise in building fast, pleasant search and filter experiences on top of a public recipe API.',
    techStack: ['React', 'Vercel', 'CSS', 'API', 'Responsive UI'],
    images: ['/foodrecipe1.png', '/cake.png', '/pizza.png'],
    demoVideo: '',
    liveDemo: 'https://recipe-app-eta-sepia.vercel.app/',
    github: 'https://github.com/Iqra-hussain235/recipe-app',
    features: [
      'Recipe Search',
      'Ingredient-Based Filtering',
      'Category Browsing',
      'Recipe Details',
      'Cooking Instructions',
      'Nutrition Information',
      'Responsive Design',
      'Fast Loading'
    ],
    highlights: [
      'Clean distraction-free interface',
      'Fast search functionality',
      'Ingredient-based recommendations',
      'Mobile-responsive design',
      'External API integration'
    ],
    architecture: 'React frontend application consuming public recipe API with client-side filtering and search.',
    frontend: 'React with CSS styling, component-based architecture, and state management.',
    role: 'Frontend Developer',
    category: 'Food & Lifestyle',
    status: 'Live',
    challenges: [
      'Integrating external API effectively',
      'Building efficient search algorithms',
      'Creating responsive recipe cards',
      'Handling API rate limits'
    ],
    outcome: 'A user-friendly recipe discovery app that helps users find meals based on available ingredients with a clean, modern interface.'
  },
  {
    id: 5,
    slug: 'car-showroom',
    title: 'Car Showroom',
    tagline: 'Browse the lot without leaving your couch.',
    description:
      'A polished car showroom experience with featured cars, search filters, and elegant product cards for browsing vehicles.',
    problem:
      'Dealership sites are often cluttered and slow, making it tedious to just browse and compare a few cars visually.',
    solution:
      'A clean, image-forward showroom layout with featured vehicles and filterable listings, built for fast visual comparison rather than a dense spec-sheet grid.',
    purpose: 'An exercise in product-card design and filter UX for a visually-led e-commerce catalog.',
    techStack: ['React', 'Vercel', 'Tailwind CSS', 'UI/UX', 'Responsive Design'],
    images:  ['/car1.png', '/car2.png', '/car3.png'],
    demoVideo: '',
    liveDemo: 'https://carshowroom-ebon.vercel.app/',
    github: 'https://github.com/Iqra-hussain235/car-showroom',
    features: [
      'Car Browse & Search',
      'Brand Filtering',
      'Price Range Filter',
      'Detailed Car Specifications',
      'Image Gallery',
      'Comparison Feature',
      'Responsive Design',
      'Fast Loading'
    ],
    highlights: [
      'Visual-first car browsing',
      'Elegant product cards',
      'Efficient filtering system',
      'Mobile-responsive layout',
      'Clean modern design'
    ],
    architecture: 'React frontend application with component-based architecture and client-side filtering.',
    frontend: 'React with Tailwind CSS for styling and component-based UI development.',
    role: 'Frontend Developer',
    category: 'E-Commerce',
    status: 'Live',
    challenges: [
      'Creating visually appealing car cards',
      'Implementing efficient filters',
      'Optimizing image loading',
      'Ensuring mobile responsiveness'
    ],
    outcome: 'A visually appealing car showroom that provides an excellent browsing experience with efficient filtering and modern design.'
  },
  // {
  //   id: 6,
  //   slug: 'iqbrain-freelancing-platform',
  //   title: 'IQBrain Freelancing Platform',
  //   tagline: 'Post a job, place a bid, get paid safely.',
  //   description:
  //     'Complete freelancing platform with job postings, bidding system, payment escrow, and project management tools.',
  //   problem:
  //     'Freelance marketplaces need to solve a trust problem: clients want to know work will get done before they pay, and freelancers want to know they\u2019ll get paid once it is.',
  //   solution:
  //     'An escrow-backed bidding platform — clients post jobs, freelancers bid, funds are held via Stripe until milestones are approved, and Socket.io powers real-time updates on bids and messages.',
  //   purpose:
  //     'Built to model a two-sided marketplace end-to-end: postings, bidding, real-time messaging, and payment escrow working together.',
  //   techStack: ['MERN Stack', 'Socket.io', 'Stripe', 'JWT', 'Redux', 'MongoDB'],
  //   images: ['💼', '🤝', '💳'],
  //   demoVideo: '',
  //   liveDemo: '#',
  //   github: '#',
  // },
  // {
  //   id: 7,
  //   slug: 'chatgpt-clone',
  //   title: 'ChatGPT Clone',
  //   tagline: 'Multiple models, one clean chat interface.',
  //   description:
  //     'AI chat interface with conversation history, multiple model support, and custom prompt templates.',
  //   problem:
  //     'Switching between different LLM providers usually means switching tabs and interfaces — there\u2019s no single place to compare responses or reuse prompt templates.',
  //   solution:
  //     'A unified chat UI backed by the OpenAI API with Prisma/PostgreSQL for persistent history, model switching per conversation, and saved prompt templates for repeat tasks.',
  //   purpose: 'A reference implementation of a chat product\u2019s data model — conversations, messages, and templates — done properly with a relational schema.',
  //   techStack: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
  //   images: ['💬', '🤖', '⚡'],
  //   demoVideo: '',
  //   liveDemo: '#',
  //   github: '#',
  // },
    {
    id: 6,
    slug: 'mindmesh-ai',
    title: 'MindMesh AI',
    tagline: 'Turn a blank page into a mind map in seconds.',
    description:
      'AI-powered brainstorming and mind mapping tool using Gemini API and LangChain for intelligent idea generation.',
    problem:
      'Brainstorming tools are good at drawing nodes and bad at helping you think — most mind-mapping apps leave the hardest part, coming up with ideas, entirely to the user.',
    solution:
      'MindMesh pairs a familiar mind-map canvas with an LLM co-pilot: Gemini expands any node into related ideas, and LangChain chains those expansions so the map grows in a coherent direction instead of random tangents.',
    purpose:
      'A working example of an AI-augmented creative tool — showing how an LLM can sit inside an existing UI paradigm (mind mapping) as a collaborator rather than a separate chat window.',
    techStack: ['React', 'Gemini API', 'LangChain', 'Node.js', 'Express', 'MongoDB'],
    images: ['🧠', '💡', '🕸️'],
    demoVideo: '',
    liveDemo: '#',
    github: '#',
    features: [
      'AI-Powered Idea Generation',
      'Interactive Mind Mapping',
      'Node Expansion',
      'Visual Organization',
      'Export Functionality',
      'Collaborative Features',
      'Template Library',
      'Real-time AI Suggestions'
    ],
    highlights: [
      'LLM integration for creative assistance',
      'Familiar mind-map interface',
      'Coherent idea expansion',
      'Visual thinking tool',
      'LangChain-powered workflows'
    ],
    architecture: 'React frontend with Gemini API integration, LangChain for AI workflows, Express backend, and MongoDB for data persistence.',
    frontend: 'React with interactive canvas components and real-time AI suggestion display.',
    backend: 'Node.js/Express API for AI processing and data management.',
    database: 'MongoDB for storing mind maps, user data, and AI-generated content.',
    role: 'Full-Stack Developer',
    category: 'AI/Creative Tools',
    status: 'Development',
    challenges: [
      'Integrating LLM effectively into creative workflow',
      'Managing real-time AI suggestions',
      'Building intuitive mind-map interface',
      'Handling LangChain workflow complexity'
    ],
    outcome: 'An AI-augmented mind mapping tool that demonstrates how LLMs can enhance creative processes through intelligent idea generation and organization.'
  },

  // {
  //   id: 9,
  //   slug: 'healthcare-ai',
  //   title: 'Healthcare AI',
  //   tagline: 'A first check-in before you see a doctor.',
  //   description:
  //     'Healthcare assistant with symptom analysis, appointment scheduling, and medical record management.',
  //   problem:
  //     'Patients often don\u2019t know whether a symptom warrants an appointment, and clinics lose time on scheduling and record-keeping overhead.',
  //   solution:
  //     'An assistant that takes a symptom description, offers a preliminary triage read via a TensorFlow model, and lets patients book appointments and access records in the same place.',
  //   purpose:
  //     'A exploration of applying ML responsibly in a health context — as a triage aid and scheduling tool, not a diagnosis engine.',
  //   techStack: ['Next.js', 'AI/ML', 'Node.js', 'Express', 'MongoDB', 'TensorFlow'],
  //   images: ['🏥', '💊', '🩺'],
  //   demoVideo: '',
  //   liveDemo: '#',
  //   github: '#',
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
