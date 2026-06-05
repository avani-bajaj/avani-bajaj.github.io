const timelineItems = [
  {
    year: "Now",
    role: "Applied Scientist",
    company: "Amazon",
    meta: "Sunnyvale, California",
    summary:
      "Current work is centered on applied AI and product-facing machine learning, building systems that connect technical capability to business outcomes.",
    bullets: [
      "Focus on applied AI, experimentation, and decision-support workflows.",
      "Combines model thinking with product judgment rather than treating ML as isolated research.",
    ],
  },
  {
    year: "2025",
    role: "Staff Analyst",
    company: "Intuit",
    meta: "Mountain View, California",
    summary:
      "Worked on growth analysis around GenAI-powered product experiences and internal product metrics, helping teams sharpen where to invest and how to measure impact.",
    bullets: [
      "Performed deep-dive analysis around GenAI-powered RAG chatbot opportunities.",
      "Defined key product metrics, built dashboards, and communicated findings to leadership.",
    ],
  },
  {
    year: "2024",
    role: "Staff Data Scientist",
    company: "AlchemyTech",
    meta: "United States",
    summary:
      "Built scalable ML infrastructure for real-time data and content workflows, connecting backend systems design with practical product performance gains.",
    bullets: [
      "Implemented ML infrastructure using FastAPI, PostgreSQL, and FAISS.",
      "Drove a 30% increase in system performance while improving decision support.",
    ],
  },
  {
    year: "2023",
    role: "Senior Data Scientist, Partner Solutions",
    company: "Tarmac.com",
    meta: "San Jose, California",
    summary:
      "Led experimentation, analytics, and model-tuning work for partner solutions with emphasis on false-positive reduction, large-scale analytics, and product decisions.",
    bullets: [
      "Designed A/B experiments and refined a Financial-BERT-based detection workflow.",
      "Reduced false positives by 15% and improved model accuracy by 12%.",
    ],
  },
  {
    year: "2021",
    role: "Senior Data Scientist",
    company: "Tiger Analytics",
    meta: "Seattle, Washington",
    summary:
      "Delivered enterprise data science work across forecasting, recommendations, and conversational AI measurement for client-facing business problems.",
    bullets: [
      "Built transformer-based demand forecasting models with strong commercial impact.",
      "Improved recommendation metrics and built dashboards for conversational AI performance.",
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
