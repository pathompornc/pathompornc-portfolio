
export interface Project {
  id: string;
  title: string;
  context: string;
  tldr: string;
  problemOpportunity: string;
  keyActions: string[];
  teamComposition: string;
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
    context: "Open source Thai language LLM ecosystem",
    tldr: "Created Thailand's largest open-source language model ecosystem, now used by the country's largest bank.",
    problemOpportunity: "Thai language AI models lagged behind English counterparts with limited high-quality training data and tools.",
    keyActions: [
      "Led data collection and curation from diverse Thai language sources",
      "Coordinated model training and fine-tuning across distributed teams"
    ],
    teamComposition: "Led a team of 5 ML engineers, 3 data scientists, and 2 product managers",
    impact: [
      "Developed comprehensive ecosystem from data collection to deployment platforms",
      "Created Thailand's largest open-source language model",
      "Deployed at the country's largest bank for customer support",
      "Reduced response time by 45% while improving accuracy"
    ],
    toolsMethods: ["LLM Fine-tuning", "RAG", "Data Collection", "API Development", "Salesforce Integration"],
    industry: "AI/ML, Financial Services",
    reference: "https://github.com/typhoon-ai",
    images: ["public/typhoon-logo.png"],
    date: "Jan 2023 - Present",
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
    teamComposition: "Product manager leading 3 engineers and 1 designer",
    impact: [
      "Built a two-sided marketplace connecting prompt engineers with businesses",
      "Created a thriving community with thousands of prompts",
      "Attracted hundreds of active users",
      "Generated $120K in first-year revenue"
    ],
    toolsMethods: ["Prompt Engineering", "UX/UI Design", "Marketplace Development", "Community Building"],
    industry: "AI/ML, Marketplace",
    images: ["/src/assets/images/prompthub-logo.jpg"],
    date: "Mar 2022 - Dec 2022",
  },
  {
    id: "finnomena",
    title: "Finnomena",
    context: "FinTech Wealth Management Platform",
    tldr: "Developed ML-based investment engine that improved portfolio performance by 12%.",
    problemOpportunity: "Financial advisors lacked data-driven tools to provide optimal investment recommendations.",
    keyActions: [
      "Built ML-based portfolio optimization algorithms",
      "Implemented risk profiling system based on behavioral finance"
    ],
    teamComposition: "Product owner with 4 engineers, 2 data scientists, and 1 UX researcher",
    impact: [
      "Developed ML-based investment optimization engine",
      "Increased client retention by 35%",
      "Improved average portfolio performance by 12%",
      "Expanded user base by 28% year-over-year"
    ],
    toolsMethods: ["ML Algorithms", "Financial Analysis", "Portfolio Optimization", "User Research"],
    industry: "FinTech, Wealth Management",
    reference: "https://www.finnomena.com",
    images: ["/src/assets/images/finnomena-logo.png"],
    date: "Jun 2020 - Feb 2022",
  },
  {
    id: "conversational-ai",
    title: "Conversational AI Chatbot",
    context: "Digital transformation for major retail chain",
    tldr: "Created AI system that reduced customer service costs by 28% while improving satisfaction.",
    problemOpportunity: "Retail giant with 14K+ branches struggled to provide consistent customer service across channels.",
    keyActions: [
      "Designed conversational flows for common customer queries",
      "Integrated with multiple backend systems for omnichannel support"
    ],
    teamComposition: "Product lead for team of 6 engineers and 3 conversation designers",
    impact: [
      "Led development of conversational AI system",
      "Handled customer queries across e-commerce platforms",
      "Reduced customer service costs by 28%",
      "Improved satisfaction scores by 15%"
    ],
    toolsMethods: ["Conversational AI", "NLP", "Omnichannel Integration", "Customer Experience"],
    industry: "Retail, E-commerce",
    images: ["/placeholder.svg"],
    date: "Jan 2019 - May 2020",
  },
  {
    id: "product-recommendation",
    title: "Product Recommendation Systems",
    context: "Large-scale e-commerce platform",
    tldr: "Implemented algorithms that increased conversion rates by 23% and order value by 17%.",
    problemOpportunity: "Platform with 13M+ daily transactions had low conversion rates from product views.",
    keyActions: [
      "Designed recommendation algorithm based on collaborative filtering",
      "Implemented A/B testing framework for recommendation optimization"
    ],
    teamComposition: "Led 4 data scientists and 3 frontend engineers",
    impact: [
      "Implemented advanced recommendation algorithms based on user behavior patterns",
      "Increased conversion rates by 23%",
      "Improved average order value by 17%",
      "Reduced cart abandonment by 15%"
    ],
    toolsMethods: ["Recommendation Algorithms", "A/B Testing", "Data Analysis", "User Behavior Modeling"],
    industry: "E-commerce",
    images: ["/placeholder.svg"],
    date: "Mar 2018 - Dec 2018",
  },
  {
    id: "speedboat",
    title: "Speedboat Studio",
    context: "Blockchain, no-code NFT management platform",
    tldr: "Created no-code platform that enabled creators to generate over $2M in NFT sales.",
    problemOpportunity: "Artists and creators faced technical barriers to entering the NFT marketplace.",
    keyActions: [
      "Built visual interface for NFT creation and management",
      "Developed smart contract templates for different use cases"
    ],
    teamComposition: "Product manager working with 3 blockchain engineers and 2 designers",
    impact: [
      "Created no-code platform for NFT creation, distribution, and management",
      "Enabled 500+ creators to launch successful NFT collections",
      "Generated over $2M in total sales",
      "Reduced NFT creation time from days to minutes"
    ],
    toolsMethods: ["Blockchain", "NFT", "No-code Tools", "Creator Economy"],
    industry: "Blockchain, Digital Art",
    images: ["/src/assets/images/speedboat-logo.png"],
    date: "Sep 2017 - Feb 2018",
  }
]; 
