// All the content for your portfolio lives here.
// Edit this file and the whole site updates.

export const profile = {
  name: "Opoku Claudious Samuel Mensah",
  title: "Software Developer · Web3 & Mobile",
  tagline:
    "I build web, mobile and onchain apps, from Flutter and Next.js products to Uniswap v4 hooks and DeFi smart contracts.",
  location: "Accra, Ghana",
  email: "claudiouso00@gmail.com",
  highlights: [
    "Atrium Uniswap Hook Incubator, Cohort 8",
    "Coinbase Base Batches 002: Top 50 globally · Incubase",
  ],
  about: [
    "I'm a software developer with a Geological Engineering background. Over the past few years I've shipped cross-platform mobile apps with Flutter, web platforms and dashboards with Next.js and React, and smart contracts in Solidity.",
    "These days my focus is Web3 and DeFi: I completed Atrium Academy's Uniswap Hook Incubator (Cohort 8), built a no-loss raffle on Aave that reached the Top 50 of Coinbase's Base Batches 002 and was accepted into Incubase, and I run a custom Uniswap v4 indexer. My GIS and remote sensing training in Google Earth Engine and QGIS also lets me build geospatial tools.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/claudioussamuel" },
    { label: "LinkedIn", href: "https://linkedin.com/in/claudious" },
    { label: "Twitter / X", href: "https://x.com/laudious" },
  ],
  resumeUrl: "/resume.pdf", // file lives in /public. Set to "" to hide the button.
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Solidity", "TypeScript", "JavaScript", "Dart"] },
  {
    group: "Web & Mobile",
    items: [
      "Flutter",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Riverpod",
      "Bloc",
      "Provider",
      "GetX",
      "Redux",
      "React Query",
      "REST APIs",
    ],
  },
  {
    group: "Web3 & DeFi",
    items: [
      "Smart Contracts",
      "Foundry",
      "Uniswap v4 Hooks",
      "Aave",
      "Envio Indexer",
      "GraphQL",
      "Web3 dApps",
    ],
  },
  { group: "Backend & Tools", items: ["Firebase", "Node.js", "Docker", "Git & GitHub", "Vercel"] },
  {
    group: "Geospatial",
    items: ["Google Earth Engine", "QGIS", "Remote Sensing", "GIS"],
  },
];

export const projects: {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  images?: { src: string; alt: string }[];
  badge?: string;
}[] = [
  {
    title: "No-Loss Raffle (Aave Lottery)",
    badge: "Base Batches 002 · Top 50 · Incubase",
    description:
      "A decentralized no-loss raffle: participants' deposits go into Aave's lending protocol, and the interest they earn becomes the prize pool, so players can win without losing their principal. Built with gas-efficient Solidity contracts and Foundry, with trustless prize distribution and transparent interaction flows. Selected as one of the Top 50 projects globally in Coinbase's Base Batches 002 and accepted into Incubase, its incubation program.",
    tags: ["Solidity", "Foundry", "Aave", "DeFi", "Base"],
    repo: "https://github.com/claudioussamuel/aave-lottory",
    images: [
      { src: "/screens/incubase.jpg", alt: "Base Batches 002 Incubase acceptance card for the no-loss raffle project" },
    ],
  },
  {
    title: "SwapImpact: Uniswap v4 Hook",
    badge: "Atrium Uniswap Hook Incubator · Cohort 8",
    images: [
      { src: "/screens/hook-incubator.jpg", alt: "Acceptance card for the Uniswap Hook Incubator" },
      { src: "/screens/atrium-certificate.jpg", alt: "Atrium Academy certificate for completing Uniswap Hook Incubator Cohort 8 and building SwapNFT" },
    ],
    description:
      "A full-stack web3 app built around a Uniswap v4 hook written in Solidity. The hook prices each swap dynamically based on how much it moves the pool, and swaps with a bigger price impact earn a tiered NFT (Featherweight to Champion). That NFT is redeemed on the next swap for a fee discount of 20% to 90%, taking the effective fee from 0.24% down to 0.03%, and is burned after use. The frontend lets users create pools, mint test tokens and swap with their wallet. Built in Atrium Academy's Uniswap Hook Incubator (Cohort 8), completed in March 2026.",
    tags: ["Solidity", "Uniswap v4 Hooks", "Web3", "NFTs", "Dynamic Fees"],
    href: "https://swapnft-frontend.vercel.app/",
    // repo: "https://github.com/claudioussamuel/your-repo", // TODO: add repo link
  },
  {
    title: "Uniswap v4 Indexer",
    description:
      "A multichain indexer for Uniswap v4, built on Envio and customised to read events from EVM-compatible blockchains and store them locally. It tracks pool volume, TVL, fees, swaps and liquidity changes and exposes the data through a GraphQL API, so it can power trading bots, analytics dashboards and alerts. Hook support is being added.",
    tags: ["Envio", "Uniswap v4", "GraphQL", "Docker", "Indexing"],
    repo: "https://github.com/claudioussamuel/claudious-v4-indexer",
  },
  {
    title: "KRNL Raffle",
    description:
      "A simple raffle web app built on KRNL technologies. TODO: add how entries, the draw and winner selection work, and what KRNL powers in it.",
    tags: ["Web3", "KRNL", "Raffle"], // TODO: add your real tech stack
    href: "https://krnl-ave.vercel.app/",
  },
  {
    title: "EBEFA: Event Ticketing Platform",
    description:
      "A full-fledged platform for buying, selling and managing event tickets. Visitors can browse upcoming and past events, take part in voting, and distributors can sell tickets through the platform. It has a responsive layout and a light and dark theme.",
    tags: ["Web App", "Ticketing", "Full-Stack"], // TODO: add your real tech stack
    href: "https://ebefa-web.vercel.app",
  },
  {
    title: "Joseph Amoako Autoshop: Workshop Management System",
    description:
      "An all-in-one system that runs a mechanic shop end to end: customer records, job cards, appointment booking, tracking of current and completed jobs, employees, materials and parts, and sales orders. Vehicle makes, models and colours are configurable from a settings page, and the app has a light and dark theme. Customer details in the screenshots are blurred for privacy.",
    tags: ["Web App", "Dashboard", "Full-Stack"], // TODO: add your real tech stack
    images: [
      { src: "/screens/job-list.jpg", alt: "Job list showing completed jobs with status, vehicle and activity" },
      { src: "/screens/appointments.jpg", alt: "Appointment booking form and upcoming appointments table" },
      { src: "/screens/job-form.jpg", alt: "New job form with vehicle, colour and task description fields" },
      { src: "/screens/customers.jpg", alt: "Add customer form" },
    ],
  },
  {
    title: "NDVI Change Detection Web App",
    description:
      "An interactive geospatial app on Google Earth Engine that compares vegetation health between two selected years. It combines Sentinel-2 imagery, Cloud Score+ cloud masking, NDVI computation and median composites, with a dual-map split view for side-by-side comparison, dynamic dropdown filters and automatic spatial filtering by GAUL administrative boundaries.",
    tags: ["Google Earth Engine", "Sentinel-2", "NDVI", "Remote Sensing"],
    href: "https://ee-claudiouso00.projects.earthengine.app/view/ndvi-ashanti-region",
  },
  {
    title: "Mining Impact Monitoring in Obuasi",
    description:
      "My final-year project at KNUST (Feb – Aug 2024): monitoring and assessing the environmental impact of mining in Obuasi. I used Google Earth Engine to process large satellite imagery datasets and QGIS for spatial analysis and mapping, to study land use change, vegetation loss and water quality deterioration.",
    tags: ["Google Earth Engine", "QGIS", "GIS", "Remote Sensing"],
  },
];

export const experience: {
  role: string;
  company: string;
  period: string;
  summary: string;
}[] = [
  {
    role: "Mobile App Developer",
    company: "Ayzen Engineering LTD, Accra",
    period: "Mar 2025 – Mar 2026",
    summary:
      "Built and maintained Flutter apps for Android and iOS, including the Ghana Institute of Geoscientists (GhIG) mobile app. Integrated REST APIs and backend services for real-time data and secure authentication, managed state with Riverpod, Bloc, Provider and GetX, and profiled and optimized apps for production.",
  },
  {
    role: "Web Developer",
    company: "IKOLILU, Accra",
    period: "Sep 2024 – Mar 2025",
    summary:
      "Developed web applications and dashboards for an educational technology platform using Next.js, React, TypeScript and Tailwind CSS. Integrated backend services and third-party APIs, handled state with Context API, Redux and React Query, and improved loading speed, accessibility and reliability through testing and optimization.",
  },
  {
    role: "National Service Personnel, Mobile App Developer",
    company: "Really Great Tech, Accra",
    period: "Nov 2023 – Sep 2024",
    summary:
      "Developed cross-platform Flutter apps for iOS and Android with responsive interfaces and REST API integration. Managed state with Provider, Riverpod, Bloc and GetX, and improved performance with lazy loading, caching and memory management.",
  },
  {
    role: "Intern, Geotechnical Research",
    company: "Building and Road Research Institute, Fumesua",
    period: "Nov 2022 – Dec 2023",
    summary:
      "Collected geotechnical and structural data from construction and road project sites, ran soil sampling and testing, organized field and lab data in Excel, and prepared charts and presentations for government and industry stakeholders.",
  },
  {
    role: "Intern",
    company: "Ghana Water Company, Mampong Ashanti",
    period: "Nov 2021 – Dec 2021",
    summary:
      "Assisted with water sample collection and analysis (pH, turbidity, bacterial contamination), monitored treatment processes from filtration to distribution, and analyzed flow rate and chemical dosage data.",
  },
];

export const education: { degree: string; school: string; period: string }[] = [
  {
    degree: "BSc Geological Engineering",
    school: "Kwame Nkrumah University of Science and Technology, Kumasi",
    period: "Sep 2019 – Aug 2023",
  },
];

export const credentials: { title: string; issuer: string; note?: string }[] = [
  {
    title: "Uniswap Hook Incubator, Cohort 8",
    issuer: "Atrium Academy",
    note: "Completed March 27, 2026",
  },
  {
    title: "Base Batches 002: Top 50 project, Incubase",
    issuer: "Coinbase / Base",
  },
  { title: "Blockchain Basics", issuer: "Cyfrin Updraft" },
  {
    title: "Geological Engineering President, 2021 – 2022",
    issuer: "KNUST, Obuasi Campus",
    note: "Leadership",
  },
];
