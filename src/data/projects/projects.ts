
export interface Project {
  id: string;
  title: string;
  context: string;
  tldr: string;
  problemOpportunity: string;
  keyActions: string[];
  impact: string[];
  toolsMethods: string[];
  industry: string;
  reference?: string;
  images: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: "typhoon",
    title: "Typhoon",
    context: "Open source Thai large language models (LLMs)",
    tldr: "Created Thailand's largest open-source language model ecosystem, now used by the country's largest bank.",
    problemOpportunity: "Thai LLMs lagged behind English models with limited high-quality training data and tools.",
    keyActions: [
      "Led data collection and curation from diverse Thai language sources",
      "Coordinated model training and fine-tuning across distributed teams"
    ],
    impact: [
      "Developed comprehensive ecosystem from data collection to deployment platforms",
      "Created Thailand's largest open-source language model",
      "Deployed at the country's largest bank for customer support",
      "Reduced response time by 45% while improving accuracy"
    ],
    toolsMethods: ["LLM Model Training and Fine-tuning", "API Development", "Salesforce Integration"],
    industry: "AI/ML",
    reference: "https://opentyphoon.ai",
    images: ["/images/typhoon-logo.png"],
    date: "May 2023 - Present",
  },
  {
    id: "rag-customer-support",
    title: "RAG-based Customer Support Copilot",
    context: "GenAI integration for customer support in financial services enterprise",
    tldr: "Created a proof of concept application that utilizes a fine-tuned LLM to streamline customer support workflows.",
    problemOpportunity: "Thai LLMs lagged behind English models with limited high-quality training data and tools.",
    keyActions: [
      "Integrated LLMs with Salesforce using LangChain for orchestration and Pinecone for vector databases",
      "Coordinated model training and fine-tuning across distributed teams"
    ],
    impact: [
      "Developed comprehensive ecosystem from data collection to deployment platforms",
      "Created Thailand's largest open-source language model",
      "Deployed at the country's largest bank for customer support",
      "Reduced response time by 45% while improving accuracy"
    ],
    toolsMethods: ["LLM Fine-tuning", "RAG", "Salesforce Integration"],
    industry: "AI/ML, Financial Services",
    images: ["/images/rag-logo.png"],
    date: "Jan - Jun 2024",
  },
  {
    id: "lingthai",
    title: "LingThai",
    context: "Data collection and annotation platform",
    tldr: "Created an open registry of publicly available Thai datasets and corpora",
    problemOpportunity: "Thai LLMs lagged behind English models with limited high-quality training data and tools.",
    keyActions: [
      "Led data collection and curation from diverse Thai language sources",
      "Fostered partnership and collaboration with academic institutions, universities, and community contributors to create high-quality datasets",
      "Developed open source platform for high-quality datasets",
      "Collaborated with linguists to understand challenges and limitation of local dialects to design annotation platform that support those constraints"
    ],
    impact: [
      "Curated 100+ publicly available datasets and consolidated into the central platform",
      "Built data annotation platform used for Thai dialect data collection"
    ],
    toolsMethods: ["Data Collection", "Data Annotation", "Strategic Partnership"],
    industry: "AI/ML, Data Science",
    reference: "https://lingthai.ai",
    images: ["/images/lingthai-logo.png"],
    date: "Feb 2023 - Sep 2024",
  },
  {
    id: "prompthub",
    title: "PromptHub",
    context: "Prompt engineering marketplace",
    tldr: "Built a marketplace connecting prompt engineers with businesses, creating a thriving community.",
    problemOpportunity: "Organizations struggled to create effective prompts for LLMs, while prompt engineers had no central marketplace.",
    keyActions: [
      "Designed two-sided marketplace architecture and incentive structure",
      "Implemented prompt testing and evaluation frameworks"
    ],
    impact: [
      "Built a two-sided marketplace connecting prompt engineers with businesses",
      "Created a thriving community with thousands of prompts",
      "Attracted hundreds of active users",
      "Generated $120K in first-year revenue"
    ],
    toolsMethods: ["Prompt Engineering", "UX/UI Design", "Marketplace Development", "Community Building"],
    industry: "AI/ML, Marketplace",
    images: ["/images/prompthub-logo.jpg"],
    date: "Jan - June 2023",
  },
  {
    id: "finnomena",
    title: "Finnomena",
    context: "FinTech Wealth Management Platform",
    tldr: "Developed ML-based investment engine to offer portfolio recommendations to retail investors and financial advisors",
    problemOpportunity: "Financial advisors seek data-driven tools to provide optimal and efficient investment recommendations.",
    keyActions: [
      "Built ML-based portfolio optimization algorithms in collaboration with Franklin Templeton for 2.2K+ financial advisors",
      "Led product discovery and wireframe validation through usability testing and user interviews",
      "Analyzed behavior of 150K+ users to inform feature prioritization and enhance UX"
    ],
    impact: [
      "Developed ML-based investment optimization engine",
      "Increased early user adoption by 25%%",
      "Reduce user drop-off rate by 12%"
    ],
    toolsMethods: ["ML Algorithms", "Financial Analysis", "Portfolio Optimization", "User Research"],
    industry: "AI/ML, FinTech, Wealth Management, Financial Services",
    reference: "https://www.finnomena.com",
    images: ["/images/finnomena-logo.png"],
    date: "Jul 2021 - Jan 2022",
  },
  {
    id: "conversational-ai",
    title: "Conversational AI Chatbot",
    context: "Commerce-focused chatbot that enabled conversational commerce",
    tldr: "Built a commerce-focused NLP chatbot as part of a digital transformation initiative, integrated into their mobile app alongside a product recommendation engine.",
    problemOpportunity: "Major retail chain with 14K+ branches nationwide aimed to unlock digital sales channels.",
    keyActions: [
      "Designed conversational flows for 3 distribution channels",
      "Integrated with multiple backend systems for omnichannel support",
      "Translated business requirements into PRDs and user stories"
    ],
    impact: [
      "Led development of conversational AI system in mobile app with 16M+ monthly active users (MAUs)",
      "Improved customer satisfaction scores by 15%"
    ],
    toolsMethods: ["Conversational AI", "NLP", "Omnichannel Integration", "Customer Experience"],
    industry: "E-commerce, Retail",
    images: ["/images/product-recs-logo.png"],
    date: "Oct 2019 - Jul 2021",
  },
  {
    id: "product-recommendation",
    title: "Product Recommendation Systems",
    context: "",
    tldr: "Implemented product recommendation systems and integrated in e-commerce mobile platform",
    problemOpportunity: "Major retail chain with 13M+ daily transaction had low sales conversion rates from product views in mobile app.",
    keyActions: [
      "Designed recommendation algorithm based on content-based and collaborative filtering models",
      "Implemented A/B testing framework for recommendation optimization"
    ],
    impact: [
      "Implemented advanced recommendation algorithms based on user behavior patterns",
      "Increased sales conversion rates by 14%",
      "Improved average order value by 17%",
    ],
    toolsMethods: ["Recommendation System", "A/B Testing", "Data Science", "User Behavior Modeling"],
    industry: "E-commerce, Retail",
    images: ["/images/product-recs-logo.png"],
    date: "Oct 2019 - Jul 2021",
  },
  {
    id: "speedboat",
    title: "Speedboat Studio",
    context: "No-code NFT platform",
    tldr: "Created no-code platform that enabled creators to generate over $2M in NFT sales volume.",
    problemOpportunity: "Artists and creators faced technical barriers to entering the NFT marketplace.",
    keyActions: [
      "Built visual interface for NFT creation and management",
      "Developed smart contract templates for different use cases"
    ],
    impact: [
      "Created no-code platform for NFT creation, distribution, and management",
      "Enabled 18K+ creators to launch successful NFT collections",
      "Generated over $2M in total NFT sales volume",
      "Reduced NFT creation time from days to minutes"
    ],
    toolsMethods: ["No-code Tools", "Creator Economy"],
    industry: "Blockchain, NFT, Web3",
    reference: "https://speedboat.studio",
    images: ["/images/speedboat-logo.png"],
    date: "Sep 2021 - Aug 2023",
  }
]; 
