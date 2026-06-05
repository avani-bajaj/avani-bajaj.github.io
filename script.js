const timelineItems = [
  {
    year: "Mar 2025 - Present",
    role: "Staff Analyst",
    company: "Intuit",
    meta: "Latest LinkedIn resume PDF",
    summary:
      "Performed deep-dive analyses to identify growth opportunities through a GenAI-powered RAG chatbot and defined product metrics and dashboards for stakeholders.",
    bullets: [
      "Analyzed growth opportunities around GenAI-powered product experiences.",
      "Defined and maintained key product metrics and communicated insights to leadership.",
    ],
  },
  {
    year: "Sept 2024 - Mar 2025",
    role: "Staff Data Scientist",
    company: "AlchemyTech",
    meta: "Latest LinkedIn resume PDF",
    summary:
      "Led implementation of scalable ML infrastructure for real-time data and content generation, with a strong focus on decision-making systems and experimentation.",
    bullets: [
      "Built infrastructure using FastAPI, PostgreSQL, and FAISS.",
      "Conducted experimentation and causal inference analysis to improve product functionality.",
    ],
  },
  {
    year: "Nov 2023 - July 2024",
    role: "Senior Data Scientist, Partner Solutions",
    company: "Tarmac.com",
    meta: "Latest LinkedIn resume PDF",
    summary:
      "Designed, implemented, and analyzed A/B experiments and managed large-scale analytics projects tied to decision-making and partner solutions.",
    bullets: [
      "Fine-tuned trend detection models using Financial-BERT.",
      "Integrated data-driven decision-making into product processes.",
    ],
  },
  {
    year: "May 2021 - Sept 2023",
    role: "Senior Data Scientist",
    company: "Tiger Analytics Consulting",
    meta: "Latest LinkedIn resume PDF",
    summary:
      "Delivered enterprise data science work spanning demand forecasting, recommendation optimization, experimentation, and conversational AI analytics.",
    bullets: [
      "Built transformer-based forecasting models and analyzed A/B experiments.",
      "Developed dashboards and metrics for conversational AI and recommendation systems.",
    ],
  },
];

const projectItems = [
  {
    title: "GenAI Opportunity Analysis",
    org: "Intuit",
    copy:
      "Mapped product-growth opportunities around a GenAI-powered RAG chatbot, turning exploratory analysis into clearer product priorities and stronger spend visibility.",
    impact: "Influenced product decisions and internal spend metrics.",
  },
  {
    title: "Real-Time ML Infrastructure",
    org: "AlchemyTech",
    copy:
      "Built a FastAPI, PostgreSQL, and FAISS-backed architecture for real-time data handling and content generation, improving responsiveness and decision quality.",
    impact: "Resulted in a 30% increase in system performance.",
  },
  {
    title: "Financial-BERT Detection Program",
    org: "Tarmac.com",
    copy:
      "Designed experiments and tuned detection models in a partner-solutions environment where accuracy and false-positive control directly affected workflow quality.",
    impact: "Reduced false positives by 15% and improved accuracy by 12%.",
  },
  {
    title: "Demand Forecasting for CPG",
    org: "Tiger Analytics",
    copy:
      "Used transformer-based time-series modeling to forecast demand across geographies, helping improve planning quality and commercial decision-making.",
    impact: "Contributed to an estimated $500K increase in annual sales.",
  },
  {
    title: "Recommendation Uplift",
    org: "Tiger Analytics",
    copy:
      "Ran structured experimentation to improve recommendation performance, connecting model optimization with measurable engagement and conversion outcomes.",
    impact: "Improved CTR by 1.5% and conversions by 4%.",
  },
  {
    title: "Conversational AI Measurement",
    org: "Charles Schwab client work",
    copy:
      "Developed dashboards and measurement logic to monitor chatbot interactions, evaluate experiments, and create clearer product strategy feedback loops.",
    impact: "Achieved a 2% reduction in false positives month over month.",
  },
];

const skillGroups = {
  ml: [
    "Large Language Models",
    "Semantic Search",
    "Causal Inference",
    "Time-Series Forecasting",
    "NLP",
    "Recommendation Systems",
    "Anomaly Detection",
    "RAG Systems",
  ],
  analytics: [
    "A/B Testing",
    "Experiment Design",
    "Opportunity Sizing",
    "Metric Design",
    "Product Analytics",
    "Dashboarding",
    "Executive Storytelling",
    "Stakeholder Communication",
  ],
  tools: [
    "Python",
    "SQL",
    "FastAPI",
    "PostgreSQL",
    "FAISS",
    "Tableau",
    "Power BI",
    "Data Visualization",
  ],
  meta: [
    "Languages: English, Hindi, Tamil",
    "Certification: Machine Learning by Stanford University",
    "Certification: Large Language Models with Semantic Search",
    "Certification: Pretraining LLMs",
  ],
};

function renderTimeline() {
  const container = document.getElementById("timeline-list");
  timelineItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-card";
    article.innerHTML = `
      <div class="timeline-side">
        <span class="timeline-year">${item.year}</span>
      </div>
      <div class="timeline-body">
        <h3 class="timeline-role">${item.role}</h3>
        <p class="timeline-meta">${item.company} • ${item.meta}</p>
        <p>${item.summary}</p>
        <ul>
          ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
      </div>
    `;
    container.appendChild(article);
  });
}

function renderProjects() {
  const container = document.getElementById("project-list");
  projectItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "project-card";
    article.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p class="project-org">${item.org}</p>
        <p class="project-copy">${item.copy}</p>
      </div>
      <p class="project-impact">${item.impact}</p>
    `;
    container.appendChild(article);
  });
}

function renderPills(id, items) {
  const container = document.getElementById(id);
  items.forEach((item) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = item;
    container.appendChild(pill);
  });
}

function renderMeta() {
  const container = document.getElementById("meta-list");
  skillGroups.meta.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

renderTimeline();
renderProjects();
renderPills("ml-tags", skillGroups.ml);
renderPills("analytics-tags", skillGroups.analytics);
renderPills("tools-tags", skillGroups.tools);
renderMeta();
