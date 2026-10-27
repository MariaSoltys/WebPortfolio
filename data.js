/* Edit this file to update the portfolio. See README.md for guidance. */
window.PORTFOLIO = {
  profile: {
    name: "Mariia Soltys",
    initials: "MS",
    role: "Data Science & AI",
    bio: "I'm a curious and motivated engineer with a passion for building practical AI-driven applications that solve real-world problems. I enjoy exploring new technologies, turning ideas into working solutions, and using data and intelligent systems to create meaningful value for people.",
    location: "Grenoble, France",
    email: "mariia.soltys@pm.me",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/mariia-soltys", mark: "in" },
      { label: "GitHub", href: "https://github.com/MariaSoltys", mark: "GH" }
    ],
    skillGroups: [
      { id: "soft", name: "Soft skills", skills: ["Problem solving", "Communication", "Teamwork", "Autonomy"] },
      { id: "hard", name: "Technical skills", skills: [] },
      { id: "tools", name: "Tools & platforms", skills: [] }
    ]
  },
  /* Project skills appear in the sidebar. Unlisted skills default to Technical skills. */
  skillCategories: {
    "Python": "hard",
    "AI agents": "hard",
    "Docker": "tools",
    "Evaluation": "hard",
    "FastAPI": "tools",
    "NoSQL": "tools",
    "MongoDB": "tools",
    "Neo4j":"tools",
    "Data processing": "hard",
    "Data Visualization": "hard",
    "NLP": "hard",
    "CNN": "hard",
    "PyTorch": "tools",
    "RAG": "hard",
    "LLM": "hard",
    "Transformers": "hard",
    "SQL":"hard"
  },
  projects: [
    {
      date: "2026-08",
      name: "AI Medical Assistant",
      category: "PROFESSIONAL PROJECT",
      kind: "SYSTEM ARCHITECTURE AND DEVELOPMENT",
      goal: "Create an AI medical assistant as part of an internship project at LEXIP.",
      technicalDescription: "The project uses Python, AI agents, FastAPI, MongoDB and Neo4j as NoSQL, Docker, and evaluation. Application runs fully locally to ensure safety of medical data. The demo video shows the prototype of the project, which turned out more complex with more features in the end.",
      result: "A working application with an LLM chat, Speech to Text module with live knowledge graph creation. ",
      skills: ["Python", "AI agents", "Docker", "Evaluation", "FastAPI", "NoSQL", "MongoDB", "Neo4j"],
      image: ["projects/Vitalis/vitalis.png", "projects/Vitalis/diagram.png"],
      imageAlt: "A screenshot of a working application and a diagram",
      link: "https://youtube.com/shorts/qrz33DiW5VA?si=ua73wDhzt58r_zAr",
      note: "Built during an internship at LEXIP"
    },
    {
      date: "2024-05",
      name: "Age and Gender Prediction Model Based on Text",
      category: "ACADEMIC PROJECT",
      kind: "MODEL TRAINING / TRANSFER LEARNING",
      goal: "Predict an author's age and gender from their writing, made for a computer linguistics course.",
      technicalDescription: "Performed in-depth data analysis and trained a natural language processing model (NLP) to infer age and gender from text. Exists in two variants: predict age as a number (less accurate) or predict age as a cathegory",
      result: "The model is able to predict age cathegory and gender with 70% accuracy",
      skills: ["Python", "Data processing", "Data Visualization", "Evaluation", "NLP"],
      image: ["projects/AgeGender/result_number.png", "projects/AgeGender/result_cat.png", "projects/AgeGender/age_features.png", "projects/AgeGender/gender_features.png", "projects/AgeGender/columns.png", "projects/AgeGender/heatmap.png"],
      imageAlt: "Result diagrams and examples",
      link: "https://github.com/MariaSoltys/Age-and-Gender-prediction-model-based-on-text",
      note: "Lviv Polytechnic University project"
    },
    {
      date: "2023-04",
      name: "Survival Rate Prediction DLBCL",
      category: "ACADEMIC PROJECT",
      kind: "MODEL TRAINING / TRANSFER LEARNING",
      goal: "Predict survival outcomes for patients with diffuse large B-cell lymphoma (DLBCL) using histopathology images and clinical data.",
      technicalDescription: "Extracted image features with convolutional neural networks (CNNs) and combined them with clinical data. Compared PCA, UMAP, and variance-based feature selection, then fitted a Cox proportional hazards model. The project materials include survival curves and C-index evaluation.",
      result: "C-index evaluation was used to assess the survival model. The available project summary does not include the numeric score.",
      skills: ["Python", "Data processing", "Data Visualization", "Evaluation", "NLP", "CNN"],
      image: "projects/SurvivalRate/autoencoder.png",
      imageAlt: "A scheme of an autoencoder used in the project",
      note: "Group project at Junia ISEN"
    },
    {
      date: "2023-06",
      name: "Question Answering Model on a PDF File",
      category: "ACADEMIC PROJECT",
      kind: "SYSTEM ARCHITECTURE AND DEVELOPMENT",
      goal: "Make information in an uploaded PDF easier to find by answering questions about its contents.",
      technicalDescription: "Developed a multilingual NLP question-answering system using PDF text extraction and retrieval-augmented generation (RAG).",
      result: "Example from the saved output: asked in Ukrainian about the cost of a new T-90; the system answered, \"70 million roubles per year.\"",
      skills: ["Python", "PyTorch", "Data processing", "RAG", "Evaluation", "LLM", "NLP"],
      link: "https://github.com/MariaSoltys/ML_CourseWork",
      note: "Lviv Polytechnic University project"
    },
    {
      date: "2023-09",
      name: "Movie Review Sentiment Analysis",
      category: "PERSONAL PROJECT",
      kind: "MODEL TRAINING / TRANSFER LEARNING",
      goal: "Classify movie reviews by sentiment using a fine-tuned DistilBERT model.",
      technicalDescription: "Cleaned and analyzed the Kaggle IMDb movie reviews dataset, fine-tuned DistilBERT, and evaluated its predictions.",
      result: "Accuracy: 0.866;  Precision: 0.861;  Recall: 0.875;   F1 score: 0.868;   Log loss: 0.505.",
      skills: ["Python", "Transformers", "Data processing", "Data Visualization", "Evaluation"],
      image: "projects/SentimentAnalysis/results.jpg",
      imageAlt: "ROC and precision-recall evaluation curves",
      link: "https://github.com/MariaSoltys/MUNI_Project",
      note: "Built for a MUNI Datacamp"
    }
  ]
};
