const timelineItems = [
  {
    company: "Amazon",
    role: "Applied Scientist",
    period: "Current",
    location: "Sunnyvale, California",
    summary:
      "Current role reflected on LinkedIn, focused on applied AI and product-facing machine learning.",
  },
  {
    company: "Intuit",
    role: "Staff Analyst",
    period: "2025",
    location: "Mountain View, California",
    summary:
      "Performed deep-dive product analyses around growth opportunities and GenAI-powered experiences, while defining product metrics and building dashboards for stakeholders.",
  },
  {
    company: "AlchemyTech",
    role: "Staff Data Scientist",
    period: "2024 – 2025",
    location: "United States",
    summary:
      "Built scalable ML infrastructure with FastAPI, PostgreSQL, and FAISS to support real-time data and content generation, improving system performance and user-facing decision support.",
  },
  {
    company: "Tarmac.com",
    role: "Senior Data Scientist, Partner Solutions",
    period: "2023 – 2024",
    location: "San Jose, California",
    summary:
      "Led experimentation and analytics work including a Financial-BERT detection workflow, large-scale product analytics, and decision intelligence for partner teams.",
  },
  {
    company: "Tiger Analytics",
    role: "Senior Data Scientist",
    period: "2021 – 2023",
    location: "Seattle, Washington",
    summary:
      "Delivered forecasting, recommendation optimization, and conversational AI analytics for enterprise clients across retail and finance.",
  },
];

const projectItems = [
  {
    title: "GenAI Opportunity Analysis",
    org: "Intuit",
    blurb:
      "Analyzed growth opportunities around a GenAI-powered RAG chatbot and translated findings into product decisions and sharper internal spend metrics.",
  },
  {
    title: "Real-Time ML Infrastructure",
    org: "AlchemyTech",
    blurb:
      "Implemented a FastAPI, PostgreSQL, and FAISS-backed ML system for real-time data handling and content generation, driving a 30% performance lift.",
  },
  {
    title: "Financial-BERT Detection Workflow",
    org: "Tarmac.com",
    blurb:
      "Designed and tuned detection models and A/B experiments, reducing false positives by 15% and improving model accuracy by 12%.",
  },
  {
    title: "Demand Forecasting for CPG",
    org: "Tiger Analytics",
    blurb:
      "Used transformer-based time series models to forecast demand across geographic regions, contributing to an estimated $500K increase in annual sales.",
  },
  {
    title: "Recommendation Uplift Program",
    org: "Tiger Analytics",
    blurb:
      "Improved recommendation performance through structured experimentation, increasing CTR by 1.5% and conversions by 4%.",
  },
  {
    title: "Conversational AI Measurement",
    org: "Charles Schwab client work",
    blurb:
      "Built dashboards and metrics to track chatbot interactions and experiment outcomes, helping reduce false positives by 2% month over month.",
  },
];

const skillGroups = {
  ml: [
    "Large Language Models",
    "Semantic Search",
    "A/B Testing",
    "Causal Inference",
    "NLP",
    "Time Series Forecasting",
    "Anomaly Detection",
    "Recommendation Systems",
  ],
  analytics: [
    "Product Analytics",
    "Experiment Design",
    "Opportunity Sizing",
    "Metric Design",
    "Executive Storytelling",
    "Dashboarding",
    "Data Visualization",
    "Stakeholder Communication",
  ],
  tools: [
    "FastAPI",
    "PostgreSQL",
    "FAISS",
    "Tableau",
    "Power BI",
    "Python",
    "SQL",
    "RAG Systems",
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
    const card = document.createElement("article");
    card.className = "timeline-card";
    card.innerHTML = `
      <h3>${item.role}</h3>
      <p class="timeline-meta">${item.company} • ${item.period} • ${item.location}</p>
      <p class="timeline-copy">${item.summary}</p>
    `;
    container.appendChild(card);
  });
}

function renderProjects() {
  const container = document.getElementById("project-list");
  projectItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="project-meta">${item.org}</p>
      <p class="project-copy">${item.blurb}</p>
    `;
    container.appendChild(card);
  });
}

function renderTags(id, items) {
  const container = document.getElementById(id);
  items.forEach((item) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item;
    container.appendChild(tag);
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
renderTags("ml-tags", skillGroups.ml);
renderTags("analytics-tags", skillGroups.analytics);
renderTags("tools-tags", skillGroups.tools);
renderMeta();
