// ==========================
// PORTFOLIO DATA
// Edit this file to update your portfolio content
// ==========================

const portfolioData = {
  // Basic Info
  name: "Elijah Phifer",
  title: "The Elijah Review",
  subtitle: "A Portfolio in Progress",
  tagline: "A Portfolio of Research, Innovation, and Academic Pursuits in Computer Science and Robotics",
  email: "elijah.phifer@lsu.edu",
  github: "https://github.com/Elijah-Phifer",
  cv: "assets/Elijah_Phifer_CV.pdf", // Place your CV in an assets folder
  googleScholar: "https://scholar.google.com/citations?hl=en&user=CjHFYXkAAAAJ&view_op=list_works&sortby=pubdate",

  // Overview Section
  overview: {
    intro: "I'm currently a first-year PhD student in Computer Science at Louisiana State University (LSU), focused at the intersection of software engineering and robotics.",
    paragraphs: [
      "My primary interests lie in Human-Robot Interaction (HRI) and human-machine teams, particularly exploring how we can enable more intuitive and effective collaboration. My recent work focuses on conversational robot programming, investigating how natural language and dialogue can empower users to program robots with greater ease and flexibility.",
      "I work as a Research Assistant at LSU under the RISE Lab, led by Dr. Felipe Fronchetti, where I contribute to cutting-edge research in software engineering and robotics. Additionally, I serve as a Graduate STEM Student Intern at the U.S. Naval Research Laboratory, applying my skills to real-world challenges in defense research.",
      "My academic journey began at Southeastern Louisiana University, where I earned my B.S. in Computer Science with a Mathematics minor and an Honors Diploma. Throughout my undergraduate years, I worked as an Undergraduate Research Assistant at The Wright Lab and as a Mathematics Tutor at the Tinsley Learning Center."
    ]
  },

  // Education
  education: [
    {
      degree: "Doctor of Philosophy (PhD) in Computer Science",
      institution: "Louisiana State University",
      period: "Aug. 2025 - Present",
      details: [
        "Department of Computer Science and Engineering. Research focus on Human-Robot Interaction and conversational robot programming under the supervision of Dr. Felipe Fronchetti at the RISE Lab."
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Southeastern Louisiana University",
      period: "Aug. 2021 - May. 2025",
      details: [
        "Mathematics Minor · Honors Diploma",
        "<strong>Honors Thesis:</strong> \"EnlightDen: A Software Solution for Supporting Students Without Established Study Habits\" - Defended April 17, 2025",
        "<strong>Honors & Recognition:</strong> Senior Tutor Leadership Award (2025), Thirteen Club Honors Recognition (2024), Thomas F. Higginbotham Scholarship Award (2024)"
      ]
    }
  ],

  // Experience
  experience: [
    {
      title: "Research Assistant, RISE Lab",
      organization: "Louisiana State University",
      period: "Aug. 2025 - Present",
      description: "Conducting research at the intersection of software engineering and robotics under Dr. Felipe Fronchetti. Focus areas include Human-Robot Interaction (HRI), conversational robot programming, and developing intuitive interfaces for robot control through natural language processing."
    },
    {
      title: "Graduate STEM Student Intern",
      organization: "U.S. Naval Research Laboratory",
      period: "Aug. 2024 - Present",
      description: "Contributing to defense research initiatives at the Stennis Space Center. Applying computer science and robotics expertise to real-world challenges in naval research and development."
    },
    {
      title: "Undergraduate Research Assistant",
      organization: "The Wright Lab, Southeastern Louisiana University",
      period: "Jan. 2023 - May. 2025",
      description: "Conducted research in phylogenetic paleobiology, focusing on character evolution models and Markov-chain Monte Carlo methods. Collaborated with researchers from multiple institutions on publications submitted to peer-reviewed journals."
    },
    {
      title: "Mathematics Tutor",
      organization: "Tinsley Learning Center, Southeastern Louisiana University",
      period: "Jan. 2023 - May. 2025",
      description: "Provided one-on-one and group tutoring for undergraduate mathematics courses. Received the Senior Tutor Leadership Award in 2025 for outstanding service and dedication to student success."
    }
  ],

  // News Items
  news: [
    {
      date: "August 2025",
      title: "Starting PhD at Louisiana State University",
      content: "Thrilled to begin my doctoral journey at LSU, working in the RISE Lab under Dr. Felipe Fronchetti. This new chapter focuses on advancing research in Human-Robot Interaction and conversational robot programming, exploring how we can make robots more accessible through natural language interfaces."
    },
    {
      date: "May 2025",
      title: "Graduation from Southeastern Louisiana University",
      content: "Successfully graduated with an Honors Diploma in Computer Science and a minor in Mathematics. Grateful for the mentorship, research opportunities, and friendships that shaped my undergraduate experience."
    },
    {
      date: "April 2025",
      title: "Honors Thesis Defense",
      content: "Defended my senior honors thesis, \"EnlightDen: A Software Solution for Supporting Students Without Established Study Habits.\" This project addresses educational equity by using AI to provide personalized learning experiences for disadvantaged students."
    },
    {
      date: "August 2024",
      title: "Naval Research Laboratory Internship",
      content: "Started my position as a Graduate STEM Student Intern at the U.S. Naval Research Laboratory at the Stennis Space Center. This opportunity allows me to contribute to important defense research while applying my computer science and robotics knowledge to practical challenges."
    },
    {
      date: "2024",
      title: "Recognition and Awards",
      content: "Received the Thirteen Club Honors Recognition and the Thomas F. Higginbotham Scholarship Award, acknowledging academic excellence and contributions to the university community."
    }
  ],

  // Publications
  publications: [
    {
      authors: "Phifer, E., & Achee, B.",
      year: "2025",
      title: "EnlightDen: A Software Solution for Supporting Students Without Established Study Habits",
      venue: "Submitted to CCSC SE 2025",
      abstract: "With the help of federal student aid, higher education has become more financially attainable, allowing more students than ever the opportunity for economic upward mobility. However, while financial access to higher education may be improving, there is still a systemic void of support for learners of disadvantaged backgrounds. EnlightDen uses AI to provide a personalized learning experience that addresses gaps in a student's academic support system by focusing on individual needs.",
      links: [
        { text: "Code on GitHub", url: "https://github.com/Elijah-Phifer/EnlightDen" }
      ]
    },
    {
      authors: "Phifer, E., Wright, D., Wagner, P., & Wright, A.",
      year: "2024",
      title: "Testing Character Evolution Models in Phylogenetic Paleobiology with Reversible Jump Markov-Chain Monte Carlo",
      venue: "Submitted to Paleobiology",
      abstract: "Modern phylogenetic paleobiology allows for a meaningful synthesis of quantitative paleobiology and phylogenetics. In this manuscript, we explore the idea of incorporating model uncertainty in phylogenetic estimation with reversible jump Markov-chain Monte Carlo (rjMCMC). Using a combination of simulations and an empirical dataset of Cambrian echinoderms, the Cincta, we explore the performance and implications of rjMCMC applied to paleobiological data.",
      links: []
    }
  ],

  // Skills
  skills: "Human-Robot Interaction · Natural Language Processing · Software Engineering · Research Design · Statistical Analysis · Python · Academic Writing · Data Visualization · Project Management · Peer Review",

  // Gallery Images (you can replace these with your own)
  galleryImages: [
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
    "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
    "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=400&q=80"
  ]
};