export const projects = [
  {
    id: "ai-interview-agent",
    slug: "ai-interview-agent",
    title: "AI Interview Agent",
    tagline: "AI-Powered Mock Interview Platform with Resume-Based Question Generation",
    shortDesc:
      "A SaaS platform that simulates real technical interviews using multi-agent AI, RAG pipelines, and LLMs — supporting 500+ mock interview sessions.",
    description:
      "InterviewAI is a full-stack MERN application with a Multi-Agent AI Workflow that simulates real technical interviews. Users upload their resume, the AI analyzes their skills and experience, then generates personalized interview questions. After the session, an AI evaluator provides detailed feedback with scores, strengths, weaknesses, and improvement plans.",
    coverImage: "/images/projects/interview-ai-cover.png",
    images: [
      "/images/projects/interview-ai-cover.png",
      // TODO: Add more screenshots
    ],
    github: "https://github.com/vaibhavagrawal420/AI-Interview-Agent",
    liveDemo: null, // TODO: Add live demo URL if available
    status: "Completed",
    year: "2024",
    techStack: [
      "React 18", "Redux Toolkit", "Tailwind CSS", "Framer Motion",
      "Node.js", "Express.js", "MongoDB", "Redis",
      "LangChain", "LangGraph", "RAG", "Vector Embeddings",
      "LLMs (Groq llama-3.1)", "Gemini Embeddings", "ChromaDB",
      "JWT", "FastAPI", "Python", "Razorpay",
    ],
    features: [
      "Resume PDF upload with AI-powered skills extraction",
      "RAG pipeline processing 1,000+ resume chunks for context-aware questions",
      "Multi-Agent AI Workflow: Resume Analyzer, Question Generator, Interview Evaluator, Feedback Agent",
      "Voice-based answering with Speech-to-Text",
      "Automated evaluation with scores, strengths, weaknesses & hiring recommendation",
      "Downloadable PDF interview report",
      "Razorpay credit-based payment system",
      "JWT + Redis token management + RBAC security",
      "MongoDB indexing with ~30% reduced response latency",
      "Python FastAPI microservice for ML features",
    ],
    architecture: {
      description:
        "Multi-Agent AI system with RAG pipeline. Frontend (React) → Express REST API → MongoDB + Redis. Resume chunks stored in ChromaDB. Groq (llama-3.1) for chat completions, Gemini (text-embedding-004) for embeddings. Python FastAPI microservice for skill matching & selection probability.",
      agents: ["Resume Analyzer", "Question Generator", "Interview Evaluator", "Feedback Agent"],
    },
    challenges: [
      "Building a RAG pipeline that generates truly personalized questions from resume content",
      "Orchestrating multiple AI agents in a reliable workflow using LangGraph",
      "Reducing AI response latency while maintaining quality",
      "Secure JWT + Redis token lifecycle management at scale",
    ],
    learnings: [
      "Deep understanding of RAG architecture and vector similarity search",
      "Multi-agent orchestration with LangGraph state machines",
      "Async AI processing patterns for performance optimization",
      "Integrating Python ML microservices with Node.js backends",
    ],
    metrics: [
      { label: "Mock Interview Sessions", value: "500+" },
      { label: "Resume Chunks Processed", value: "1,000+" },
      { label: "Manual Assessment Reduction", value: "~70%" },
      { label: "Response Latency Reduction", value: "~30%" },
    ],
    futureScope: [
      "Real-time video interview with facial emotion analysis",
      "Industry-specific question banks",
      "Interview recording and playback",
      "Team plan for companies",
    ],
    color: "#6366f1",
    gradient: "from-indigo-600/20 to-purple-600/20",
  },
  {
    id: "snacknow",
    slug: "snacknow",
    title: "SnackNow",
    tagline: "AI-Powered Street Food Delivery Platform for India",
    shortDesc:
      "A full-stack street food delivery platform with real-time rider tracking, 8 AI-powered features, vendor management, and Razorpay payments.",
    description:
      "SnackNow is an AI-powered street food ordering platform for India that connects customers with local food stall vendors. It features real-time order tracking with live rider location on maps, AI-powered food recommendations, semantic search, vendor dashboards, and secure payment flows — all built on the MERN stack with Socket.IO, Redis, and Google Gemini AI.",
    coverImage: "/images/projects/snacknow-cover.png",
    images: [
      "/images/projects/snacknow-cover.png",
      // TODO: Add more screenshots
    ],
    github: "https://github.com/vaibhavagrawal420/SanckNow",
    liveDemo: null, // TODO: Add live demo URL if available
    status: "Completed",
    year: "2024",
    techStack: [
      "React 19", "Redux Toolkit", "redux-persist", "Tailwind CSS", "Framer Motion",
      "Node.js", "Express.js", "MongoDB", "Redis (ioredis)",
      "Socket.IO", "Google Gemini API",
      "Razorpay", "OSRM", "Leaflet.js",
      "JWT", "RBAC", "Multer", "OpenCage / Nominatim",
    ],
    features: [
      "Real-time rider tracking on Leaflet.js maps using Socket.IO WebSockets",
      "OSRM-powered road route generation for rider simulation",
      "8 AI features: Food Recommendations, Semantic Search, AI Chatbot, Menu Generation, Demand Prediction, Review Summarization, Image Analysis, Natural Language Ordering",
      "Vendor dashboard with stall management, earnings analytics, and ₹500/month subscription",
      "Razorpay payment gateway for orders and vendor subscriptions",
      "JWT + Redis token blocklisting for secure logout",
      "Role-Based Access Control (Customer / Vendor / Rider)",
      "Location-based food discovery with reverse geocoding",
      "Cart persistence via redux-persist to localStorage",
      "Multer-based stall image uploads",
    ],
    architecture: {
      description:
        "Event-driven MERN architecture. React frontend with Redux state management. Express REST API. Socket.IO for real-time WebSocket communication. Redis for JWT blocklist. MongoDB for all data. Gemini API for 8 AI features. Razorpay for payments. Leaflet + OSRM for mapping.",
    },
    challenges: [
      "Real-time rider location simulation using OSRM road routes with Socket.IO",
      "Integrating 8 different AI features cohesively with Google Gemini API",
      "Building a subscription-based vendor model with Razorpay webhooks",
      "Managing cart state persistence across sessions with redux-persist",
    ],
    learnings: [
      "WebSocket-based real-time event-driven architecture at scale",
      "Multi-role authentication systems (Customer/Vendor/Rider) with RBAC",
      "Integrating multiple AI capabilities via a single LLM provider API",
      "Open-source map stack (Leaflet + OSRM) as a free alternative to Google Maps",
    ],
    metrics: [
      { label: "AI Features Integrated", value: "8" },
      { label: "Real-time Tracking", value: "Live" },
      { label: "Payment Gateway", value: "Razorpay" },
      { label: "User Roles", value: "3" },
    ],
    futureScope: [
      "Mobile app with React Native",
      "Multi-city support with geofencing",
      "AI-powered dynamic pricing",
      "Vendor analytics dashboard with ML insights",
    ],
    color: "#f97316",
    gradient: "from-orange-600/20 to-red-600/20",
  },
]
