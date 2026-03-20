/**
 * N M AMLAN — portfolio data (resume + your edits).
 * Optional: put `N_M_Amlan_Intern_Resume_2026.pdf` in /public and set resumeUrl below.
 */
export const portfolio = {
  brandName: 'AMLAN',
  fullName: 'N M AMLAN',
  /** Resume PDF in /public (copied from your file when available) */
  resumeUrl: '/N_M_Amlan_Intern_Resume_2026.pdf',

  social: {
    github: 'https://github.com/Amlan-0001',
    linkedin: 'https://www.linkedin.com/in/n-m-amlan-a05b3027a',
    instagram: 'https://www.instagram.com/n.m.amlan?igsh=Mmpvc2h3bGw3bHVq',
    x: 'https://x.com/nmamlan',
  },

  hero: {
    greeting: "HELLO, I'M",
    /** react-type-animation sequence: text, ms pause, ... */
    roles: [
      'Aspiring Entrepreneur',
      3500,
      'B.Tech CSE @ IIIT Bhubaneswar',
      3500,
      'AI/ML & Generative AI Enthusiast',
      3500,
    ],
    tagline:
      'Computer Science undergraduate (2027) with a strong focus on Machine Learning, Deep Learning, and Generative AI, building NLP-driven applications, scalable backends, and data pipelines with Python. Aspiring entrepreneur driven by innovation and real-world impact.',
    showQuote: true,
    quote: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।',
  },

  about: `I am a Computer Science undergraduate at IIIT Bhubaneswar, building AI-driven systems across Machine Learning, Generative AI, and LLM-based applications. My work focuses on creating scalable, real-world solutions through NLP, backend development, and data pipelines.

With a strong interest in innovation, psychology, and first-principles thinking, I aspire to build impactful products and evolve into an entrepreneur shaping technology at scale.`,

  education: [
    {
      degree: 'B.Tech — Computer Science and Engineering (2023 - 2027)',
      institute: 'IIIT Bhubaneswar — CGPA: 8.18',
    },
    {
      degree: 'Class 12th',
      institute: 'BJB Higher Secondary School, Bhubaneswar — Percentage: 92.1%',
    },
  ],

  experience: {
    title: 'Summer Research Intern — IIT Bhubaneswar',
    intro:
      'May – July 2025. Worked on a Microsoft-funded LLM / NLP-based travel planning application called TripCraft.',
    bullets: [
      'Contributed to database accuracy and data quality for the travel-planning workflow.',
      'Improved prompt reliability and validation of LLM-generated content for safer, more useful outputs.',
      'Collaborated on enhancing end-user experience through structured evaluation of model responses.',
    ],
    closing:
      'Strengthened practical skills in LLM application development, NLP product workflows, and rigorous validation of generative AI outputs.',
    certificateUrl: 'https://drive.google.com/file/d/1dhnQGG-kQ_4X23We0pDiD5-hKjgrYb6i/view',
    certificateLabel: 'View Internship Certificate',
  },

  skillsIntro:
    "Technologies and areas I've applied through coursework, research, internships, and projects.",

  skillCategories: [
    { title: 'Programming Languages', items: ['C', 'C++', 'Python'] },
    {
      title: 'AI & Data Science',
      items: [
        'Machine Learning Algorithms',
        'EDA',
        'Feature Engineering',
        'Scikit-learn',
        'Deep Learning',
        'NLP Basics',
        'Generative AI (ongoing)',
      ],
    },
    { title: 'Backend & Frameworks', items: ['Streamlit', 'FastAPI'] },
    {
      title: 'Core & Problem Solving',
      items: ['OOPs', 'SQL', 'DBMS', 'OS', 'Computer Networks', 'Data Structures & Algorithms'],
    },
  ],

  /** FraudVision removed per your request */
  projects: [
    {
      title: 'MediSage — Disease Diagnosis using NLP',
      lines: [
        'Stack: Python, NLP, spaCy, Scikit-learn, LDA/LSA, CorEx, Logistic Regression, Data Preprocessing.',
        '',
        'Designed an AI-powered medical assistant that predicts diseases from user-described symptoms using NLP and machine learning.',
        'Implemented text preprocessing, tokenization, and topic modeling (LSA, LDA, CorEx) to extract key medical indicators.',
        'Built a two-stage classification pipeline (body system → disease) using logistic regression, achieving 91% accuracy.',
      ],
    },
    {
      title: 'DocuMind — Conversational PDF Q&A using RAG',
      lines: [
        'Stack: GenAI, Python.',
        '',
        'Built a conversational GenAI application for document-based Q&A using a retrieval-augmented generation (RAG) pipeline.',
        'Implemented PDF ingestion, semantic retrieval with embeddings, and chat history–aware responses for grounded answers.',
      ],
    },
    {
      title: 'Academic Information Chatbot — IIIT Bhubaneswar Website',
      lines: [
        'Stack: GenAI, RAG, Python — Ongoing.',
        '',
        "Developing a GenAI-based assistant for the institute's main website to answer academic queries (syllabus, curriculum, placements) using retrieval-based contextual responses.",
      ],
    },
  ],

  research: [
    {
      title: 'Application of Evolutionary Techniques for Neural Network Training',
      desc: 'Ongoing research toward a paper on training neural networks using evolutionary methods such as Genetic Algorithms and Particle Swarm Optimization.',
    },
    {
      title: 'AI-Based Indian Mango Variety Classifier',
      desc: 'Built a deep learning system to classify Indian mango varieties using image features such as color, texture, and shape, achieving high accuracy on a curated dataset.',
    },
  ],

  achievements: [
    {
      title: 'Finalist — Cybersecurity Innovation Challenge (Ongoing)',
      desc: 'Organized by C-DAC, DSCI, ISEA (Govt. of India). Team Lead of Intellicrypt; built a privacy-preserving ZKP-based eKYC system—designed the cryptographic proof circuit and backend verification architecture. Selected among the Top 20 teams nationwide.',
    },
  ],

  leadership: [
    {
      title: 'Placement Coordinator — IIIT Bhubaneswar',
      desc: 'Present. Facilitating student–recruiter coordination and supporting placement activities for the institute.',
    },
    {
      title: 'Startup & Incubation Executive — E-Cell, IIIT Bhubaneswar',
      desc: '2024 – 2025. Mentored student startups and coordinated incubation activities including product validation and pitching.',
    },
  ],

  contact: {
    email: 'nmamlan633@gmail.com',
    phone: '+91-7749968693',
    contactIntro: 'Feel free to connect for opportunities, research, or collaborations.',
  },

  footerYear: 2026,

  /** Sanskrit verse above footer copyright */
  footerSloka: `उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।
आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥`,
}

export default portfolio
