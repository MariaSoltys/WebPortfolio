/* Edit this file to update the portfolio. See README.md for examples. */
window.PORTFOLIO = {
  profile: {
    name: "Mariia Soltys",
    initials: "MS",
    role: "Data Science & AI",
    bio: "I’m a curious and motivated engineer with a passion for building practical AI-driven applications that solve real-world problems. I enjoy exploring new technologies, turning ideas into working solutions, and using data and intelligent systems to create meaningful value for people",
    location: "Grenoble, France",
    email: "mariia.soltys@pm.me",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/mariia-soltys", mark: "in" },
      { label: "GitHub", href: "https://github.com/MariaSoltys", mark: "⌘" }
    ],
    skills: ["Problem solving", "Communication", "Teamwork", "Autonomy"]
  },
  /* Add projects here. Skills used on projects are added to the sidebar automatically. */
  projects: [

    {
      date: "2024-05",
      name: "Age and Gender Prediction Model Based on Text",
      category: "ACADEMIC PROJECT",
      kind: "MODEL TRAINING / TRANSFER LEARNING",
      description: "This is an NLP project for computer linguistics class. This project features deep data analysis and training of an NLP model to extract the information about the author of the text, age and gender in this project.",
      skills: ["Python", "Data processing", "Data Visualization", "Evaluation", "NLP"],
      image: "projects/AgeGender/project_result.json",/*TODO */
      imageAlt: "The card with an example of project input, output and the answer",/*TODO */
      link: "https://github.com/MariaSoltys/Age-and-Gender-prediction-model-based-on-text", 
      note: "Built as a Lviv Polytechnic University project"
    },

    {
      date: "2023-04",
      name: "Survival Rate Prediction DLBCL",
      category: "ACADEMIC PROJECT",
      kind: "MODEL TRAINING / TRANSFER LEARNING",
      description: "The aim of this project was to predict the survival rate of patients with DLBCL by extracting relevant features from histopathological images using AI and, more specifically, CNNs. To build our dataset, we then combined these features with the patients' clinical data. We then used various methods such as PCA, UMAP or simply selecting the variables with the highest variances to try and reduce the number of features extracted. Once we had selected the features, we fitted a Cox proportional hazards model in order to demonstrate the usefulness of these extracted features in predicting the outcome of survival.",
      skills: ["Python", "Data processing", "Data Visualization", "Evaluation", "NLP"],
      image: "projects/SurvivalRate/project_doc.md",/*TODO */
      imageAlt: "The description of the work with provided sources",
      link: "", 
      note: "Built as a group project in Junia ISEN"
    },

    {
      date: "2023-06",
      name: "Question answering model on a PDF file",
      category: "ACADEMIC PROJECT",
      kind: "SYSTEM ARCHITECTURE AND DEVELOPMENT",
      description: "The main goal of the project was to develop the system that would allow to answer questions about the uploaded PDF document for a quick information search. The project is featuring a system that contains multilingual NLP, RAG system and PDF reading system.",
      skills: ["Python", "PyTorch", "Data processing", "RAG", "Evaluation", "LLM", "NLP"],
      image: "projects/CourseWork/project_result.json",
      imageAlt: "The card with an example of project input, output and the answer",
      link: "https://github.com/MariaSoltys/ML_CourseWork",
      note: "Built as a Lviv Polytechnic University project"
    },

    {
      date: "2023-09",
      name: "Movie Review Sentiment Analysis",
      category: "PERSONAL PROJECT",
      kind: "MODEL TRAINING / TRANSFER LEARNING",
      description: "This is a training project that features a Distilbert model fine-tuned for the movie review sentiment analysis. This project consists of a few main parts: data cleaning, data analysis, model training and evaluation. Obrained results: Accuracy:  0.866; Precision:  0.8610567514677103; Recall:  0.8747514910536779; F1:  0.8678500986193293; Log-loss:  0.5053610053707243. Kaggle IMBD movie reviews dataset was used",
      skills: ["Python", "Transformers", "Data processing", "Data Visualization", "Evaluation"],
      image: "projects/SentimentAnalysis/results.jpg",
      imageAlt: "The graphs of ROC and Precision-recall curves",
      link: "https://github.com/MariaSoltys/MUNI_Project",
      note: "Built for a MUNI Datacamp"
    }

  ]
};
