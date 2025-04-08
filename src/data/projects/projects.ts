export interface Project {
  id: string;
  title: string;
  context: string;
  problem: string;
  solution: string;
  results: string;
  images: string[];
  industry: string;
  skills: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: "typhoon",
    title: "Typhoon",
    context: "Open source Thai language LLM ecosystem",
    problem: "Thai language AI models lagged behind English counterparts with limited high-quality training data and tools.",
    solution: "Developed comprehensive ecosystem from data collection to deployment platforms.",
    results: "Created Thailand's largest open-source language model ecosystem, now used by the country's largest bank for customer support.",
    images: ["src/assets/images/typhoon-logo.png"],
    industry: "AI/ML, Financial Services",
    skills: ["LLM Fine-tuning", "RAG", "Data Collection", "API Development", "Salesforce Integration"],
    date: "Jan 2023 - Present",
  },
  {
    id: "prompthub",
    title: "PromptHub",
    context: "Prompt engineering marketplace",
    problem: "Organizations struggled to create effective prompts for LLMs, while prompt engineers had no central marketplace.",
    solution: "Built a two-sided marketplace connecting prompt engineers with businesses.",
    results: "Created a thriving community with thousands of prompts and hundreds of active users.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "AI/ML, Marketplace",
    skills: ["Prompt Engineering", "UX/UI Design", "Marketplace Development", "Community Building"],
    date: "Mar 2022 - Dec 2022",
  },
  {
    id: "finnomena",
    title: "Finnomena",
    context: "FinTech Wealth Management Platform",
    problem: "Financial advisors lacked data-driven tools to provide optimal investment recommendations.",
    solution: "Developed ML-based investment optimization engine for portfolio recommendations.",
    results: "Increased client retention by 35% and improved average portfolio performance by 12%.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "FinTech, Wealth Management",
    skills: ["ML Algorithms", "Financial Analysis", "Portfolio Optimization", "User Research"],
    date: "Jun 2020 - Feb 2022",
  },
  {
    id: "conversational-ai",
    title: "Conversational AI Chatbot",
    context: "Digital transformation for major retail chain",
    problem: "Retail giant with 14K+ branches struggled to provide consistent customer service across channels.",
    solution: "Led development of conversational AI system to handle customer queries across e-commerce platforms.",
    results: "Reduced customer service costs by 28% while improving satisfaction scores by 15%.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "Retail, E-commerce",
    skills: ["Conversational AI", "NLP", "Omnichannel Integration", "Customer Experience"],
    date: "Jan 2019 - May 2020",
  },
  {
    id: "product-recommendation",
    title: "Product Recommendation Systems",
    context: "Large-scale e-commerce platform",
    problem: "Platform with 13M+ daily transactions had low conversion rates from product views.",
    solution: "Implemented advanced recommendation algorithms based on user behavior patterns.",
    results: "Increased conversion rates by 23% and average order value by 17%.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "E-commerce",
    skills: ["Recommendation Algorithms", "A/B Testing", "Data Analysis", "User Behavior Modeling"],
    date: "Mar 2018 - Dec 2018",
  },
  {
    id: "speedboat",
    title: "Speedboat Studio",
    context: "Blockchain, no-code NFT management platform",
    problem: "Artists and creators faced technical barriers to entering the NFT marketplace.",
    solution: "Created no-code platform for NFT creation, distribution, and management.",
    results: "Enabled 500+ creators to launch successful NFT collections with over $2M in total sales.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "Blockchain, Digital Art",
    skills: ["Blockchain", "NFT", "No-code Tools", "Creator Economy"],
    date: "Sep 2017 - Feb 2018",
  }
]; 