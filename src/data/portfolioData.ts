import { Project, Experience, Achievement, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Anshuman Verma',
  shortName: 'ANSHUMAN',
  headline: 'Quantitative Finance & Behavioral Economics Researcher | Data Strategist',
  tagline: 'Bridging financial econometrics, behavioral modeling, and data engineering to solve complex economic & market paradigms.',
  email: 'verma.anshuman1133@gmail.com',
  education: [
    {
      degree: 'Integrated Programme in Management (BBA)',
      institution: 'DoMS, NALSAR University of Law, Hyderabad',
      duration: '2023 – 2026',
      score: '8.0 CGPA',
      status: 'Current'
    },
    {
      degree: 'Class XII (Senior Secondary)',
      institution: 'Delhi Public School, R.K. Puram, New Delhi',
      duration: '2022 – 2023',
      score: '83.2%',
      status: 'Completed'
    },
    {
      degree: 'Class X (Secondary School)',
      institution: 'Delhi Public School, R.K. Puram, New Delhi',
      duration: '2020 – 2021',
      score: '97.0%',
      status: 'Completed'
    }
  ],
  interests: [
    'Quantitative Finance & Algorithmic Trading',
    'Behavioral Economics & Risk Modeling',
    'Competitive Basketball (Inter-School Champion)',
    'Higher Mathematics & Game Theory',
    'Public Speaking & Amity MUN Interjection',
    'Applied Artificial Intelligence & Data Architecture'
  ],
  stats: [
    { label: 'Published Peer-Reviewed Papers', value: '1', detail: 'Vol. 29, Issue 4' },
    { label: 'Empirical Studies & Datasets', value: '4+', detail: '270+ Respondents' },
    { label: 'All India Rank (KAMP-NASTA CSIR)', value: 'AIR 27', detail: 'District Topper' },
    { label: 'NALSAR DoMS CGPA', value: '8.0', detail: 'Class of 2026' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'lcoe-renewable-energy',
    title: 'Sustainable Transportation: Economics Driving Towards Environmental Solutions',
    subtitle: 'Peer-Reviewed Empirical Research Paper on Levelized Cost of Energy (LCOE)',
    category: 'Research & Papers',
    year: '2023',
    institution: 'Educational Administration: Theory and Practice',
    paperReference: 'Vol. 29, Issue 4, pp. 1716–1723 (2023)',
    hasInteractiveLab: true,
    labType: 'lcoe',
    colorAccent: '#00F0FF',
    featured: true,
    summary:
      'Published empirical paper applying the Levelized Cost of Energy (LCOE) econometric model to benchmark Solar PV, Onshore Wind, Hydro, and Geothermal energy across Indian states with WWF-India survey data.',
    metrics: [
      { label: 'Solar Surge Analysis', value: '1.6 → 63.15 GW', detail: '2013–2022 growth trajectory' },
      { label: 'Wind Grid Share', value: '36.73%', detail: 'Grid-interactive capacity' },
      { label: 'Model Scope', value: '5 Clean Techs', detail: 'Solar, Wind, Hydro, Geo, Biomass' }
    ],
    methodologies: [
      'Levelized Cost of Energy (LCOE) discount modeling',
      'WWF-India state-wise tariff (Rs./kWh) econometric mapping',
      'Externalities & capital subsidy sensitivity analysis',
      'Payback period & capital expenditure (CAPEX) optimization'
    ],
    findings: [
      'Solar PV and Onshore Wind deliver the lowest LCOE and quickest breakeven across Northern and Western Indian grid zones.',
      'Regional tariff subsidies create significant variances in actual consumer cost parity versus levelized generation costs.',
      'Uncovered clear capital allocation guidelines for clean-tech venture funding and state policy formulation.'
    ],
    tags: ['LCOE Modeling', 'Econometrics', 'Clean Tech Finance', 'Policy Research', 'WWF-India Data']
  },
  {
    id: 'behavioral-risk-tolerance',
    title: 'Risk Tolerance & Influence on Investment Preferences of Individual Investors',
    subtitle: 'Empirical Behavioral Finance Dissertation',
    category: 'Behavioral Finance',
    year: '2024',
    institution: 'DoMS, NALSAR University of Law',
    hasInteractiveLab: true,
    labType: 'risk-tolerance',
    colorAccent: '#FF3366',
    featured: true,
    summary:
      'Spearheaded an extensive 139-investor empirical study under faculty guidance to decode psychological risk preferences and real-world asset allocation variance.',
    metrics: [
      { label: 'Sample Population', value: 'N = 139', detail: 'Active Indian retail investors' },
      { label: 'Model Predictability', value: 'R² = 0.564', detail: '>56% choice variance explained' },
      { label: 'Reliability Metric', value: 'α = 0.845', detail: "Cronbach's Alpha consistency" },
      { label: 'Pearson Correlation', value: 'r = 0.751', detail: 'Strong direct statistical link' }
    ],
    methodologies: [
      'SPSS Regression & Chi-Square contingency testing',
      'Likert-scale risk psychometric questionnaire design',
      'Cluster segmentation (Low: 39.6%, Moderate: 33.8%, High: 26.6%)',
      'Behavioral portfolio construction framework'
    ],
    findings: [
      'Risk tolerance alone accounts for over 56.4% of retail investment portfolio distribution variations.',
      'Statistically validated segmentation allows wealth managers to dynamically calibrate equity vs debt ratios based on psychometrics rather than static age rules.',
      'High-risk profile cohorts demonstrate distinct asymmetric risk tolerance during market pullbacks.'
    ],
    tags: ['Behavioral Finance', 'SPSS', 'Psychometrics', 'Regression Analysis', 'Portfolio Theory']
  },
  {
    id: 'ecommerce-consumer-behavior',
    title: 'Analysing Purchase Behaviour of Consumers in E-Commerce Ecosystems',
    subtitle: 'Moderated-Mediation Structural Model',
    category: 'Corporate Analytics',
    year: '2023',
    institution: 'DoMS, NALSAR (under Prof. Deepti Jog)',
    hasInteractiveLab: true,
    labType: 'ecommerce',
    colorAccent: '#FFE600',
    featured: true,
    summary:
      'Designed and executed a 16-item Likert survey across 131 digital shoppers to evaluate website architecture, checkout friction, and delivery speed on purchase conversions with trust as a mediator.',
    metrics: [
      { label: 'Survey Respondents', value: 'N = 131', detail: 'Multi-demographic dataset' },
      { label: 'Factor Sampling Adequacy', value: 'KMO = 0.732', detail: 'Validated construct validity' },
      { label: 'High-Spender Threshold', value: '>₹4,000/mo', detail: 'Payment convenience pivotal' }
    ],
    methodologies: [
      'Factor Analysis (KMO & Bartlett test)',
      'SPSS Moderated-Mediation modeling (Process Macro)',
      'Customer Trust intermediary path coefficients',
      'Gender & Spending bracket moderator analysis'
    ],
    findings: [
      'UI/UX design quality and delivery turnaround times are the strongest universal predictors of purchase intent.',
      'Payment convenience becomes the decisive factor for high-value spenders (>₹4,000/mo).',
      'Customer trust acts as a vital partial mediator bridging website aesthetics and final cart conversion.'
    ],
    tags: ['Consumer Psychology', 'SPSS Factor Analysis', 'E-Commerce Analytics', 'Conversion Modeling']
  },
  {
    id: 'nuclear-energy-india',
    title: 'Macroeconomic & Grid Contribution Analysis of Nuclear Energy in India',
    subtitle: 'Comprehensive Sectoral Research Report',
    category: 'Research & Papers',
    year: '2023',
    institution: 'Independent Research Initiative',
    colorAccent: '#00FF66',
    featured: false,
    summary:
      'Evaluated nuclear power generation statistics, safety externalities, baseload stability, and capital cost benchmarks relative to coal and renewable alternatives in India.',
    metrics: [
      { label: 'Domestic Power Share', value: '~3.0%', detail: '5th largest power generation pillar' },
      { label: 'Grid Baseload Role', value: '24/7 Stability', detail: 'Zero intermittent disruption' }
    ],
    methodologies: [
      'Secondary statistical database aggregation (CEA & NPCIL)',
      'Levelized cost comparison vs supercritical coal and solar',
      'Environmental footprint and lifecycle emissions index'
    ],
    findings: [
      'Nuclear represents ~3% of domestic electricity production, operating as the 5th largest pillar.',
      'Identified key regulatory, uranium procurement, and CAPEX bottlenecks that constrain scale acceleration.'
    ],
    tags: ['Energy Economics', 'Grid Stability', 'Macro Analysis', 'NPCIL Benchmarks']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'finlyt-solutions',
    role: 'Financial Analytics & Business Strategy Intern',
    organization: 'Finlyt Solutions Pvt. Ltd. (OPDSure)',
    duration: "May '25 – Jun '25",
    location: 'Hyderabad, India',
    type: 'Internship',
    highlights: [
      'Conducted rigorous cost-benefit and variance analysis across multi-year healthcare startup financials, identifying key revenue drivers and advising executive leadership on cost controls.',
      'Dissected balance sheet and P&L statements to calculate real-time liquidity (Current, Quick) and leverage ratios, successfully flagging cost inefficiencies.',
      'Engineered interactive Power BI dashboards integrated with SQL pipelines to visualize real-time ROI, Customer Acquisition Cost (CAC), and asset trend KPIs for the executive finance team.',
      'Standardized large unstructured multi-source datasets with SQL and advanced Excel (Dynamic Arrays, Pivot Tables, VLOOKUP), slashing reporting errors by 10% and saving 5+ hours weekly.',
      'Presented financial audits, burn-rate analyses, and cash-flow projections directly to senior stakeholders to drive FY25 strategic budgeting.'
    ],
    technologies: ['Power BI', 'SQL', 'Financial Modeling', 'Variance Analysis', 'Advanced Excel', 'Cash-Flow Forecasting'],
    impactScore: '10% Error Reduction | 5h/wk Saved'
  },
  {
    id: 'ladli-foundation',
    role: 'Research, Policy & Social Innovation Intern',
    organization: 'Ladli Foundation Trust',
    duration: "May '24 – Jun '24",
    location: 'New Delhi / Bastar, Chhattisgarh',
    type: 'Internship',
    highlights: [
      "Analyzed National Education Policy (NEP 2020) 5+3+3+4 structural transformations to draft tactical execution frameworks for grassroots NGO deployment.",
      'Contributed to the high-impact "Resilient Communities and Urban Health Facilities" project in Bastar, Chhattisgarh, architecting plans for 2 AI-enabled smart aspirational toilets with DRDO Bio Digester tech, solar integration, and smart water loops alongside Serve Seva Kendras.',
      'Conducted legal and behavioral research on POSH Act & Vishakha Guidelines, formulating high-impact corporate gender-sensitization workshops with role-play frameworks.',
      'Synthesized quantitative sanitation metrics, health impact statistics, and public feedback into 4 comprehensive executive workstream dossiers.'
    ],
    technologies: ['Policy Frameworks', 'DRDO Tech Research', 'POSH Compliance', 'Impact Evaluation', 'Public Health Data'],
    impactScore: '2 Smart DRDO Facilities Designed'
  },
  {
    id: 'roku-digital',
    role: 'Growth Marketing & Operations Analytics Intern',
    organization: 'Roku Digital',
    duration: '4 Weeks',
    location: 'Remote',
    type: 'Internship',
    highlights: [
      'Conceptualized and executed cross-channel digital promotional campaigns and visual collateral to amplify brand reach and engagement.',
      'Monitored and synthesized granular operational KPIs including lead turnaround, campaign CAC, and operational bottlenecks.',
      'Coordinated cross-functional workflows between marketing, graphic design, and operational teams for flawless campaign launches.',
      'Conducted post-campaign analytical reviews delivering actionable operational pivots for subsequent growth cycles.'
    ],
    technologies: ['Campaign Analytics', 'Performance Marketing', 'Operational KPIs', 'Cross-Functional Ops'],
    impactScore: 'Cross-Functional Campaign Pipeline'
  },
  {
    id: 'atal-tinkering-lab',
    role: 'Innovation Researcher & Peer Mentor',
    organization: 'Atal Tinkering Lab (NITI Aayog)',
    duration: '2017 – 2019',
    location: 'DPS R.K. Puram',
    type: 'Initiative',
    highlights: [
      'Led STEM innovation projects, prototyping engineering solutions for real-world environmental and structural challenges.',
      'Conducted hands-on technology workshops, CAD orientations, and design thinking workshops for peer student cohorts.'
    ],
    technologies: ['Design Thinking', 'Rapid Prototyping', 'STEM Innovation', 'Robotics Basics']
  },
  {
    id: 'maths-club-coordinator',
    role: 'Senior Coordinator',
    organization: 'Mathematics Club, DPS R.K. Puram',
    duration: '2019 – 2021',
    location: 'DPS R.K. Puram',
    type: 'Leadership',
    highlights: [
      'Curated competitive mathematics workshops, Olympiad preparation seminars, and annual inter-school mathematics symposia.',
      'Represented the institution across regional and national higher-mathematics olympiads.'
    ],
    technologies: ['Advanced Mathematics', 'Event Organization', 'Mentorship', 'Combinatorics']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'kamp-nasta-csir',
    title: 'All India Rank 27 & District Topper',
    organization: 'KAMP-NASTA (Conducted by CSIR)',
    year: '2019',
    category: 'National / Academic',
    description: 'Ranked 27th nationally across thousands of students in the rigorous CSIR National Assessment for Scientific Temperament and Aptitude.',
    badge: 'AIR 27 CSIR'
  },
  {
    id: 'green-olympiad',
    title: 'Certificate of Distinction',
    organization: 'The Green Olympiad (TERI)',
    year: '2020',
    category: 'Distinction',
    description: 'Awarded high honors for advanced environmental economics, ecology, and sustainability knowledge.',
    badge: 'Distinction'
  },
  {
    id: 'helicopter-making-1st',
    title: '1st Position — Helicopter Making Competition',
    organization: 'Interschool Aerodynamics & Engineering League',
    year: '2019',
    category: 'Distinction',
    description: 'Engineered a championship-winning custom scaled rotorcraft aerodynamic prototype.',
    badge: '1st Position 🏆'
  },
  {
    id: 'amity-mun-best-interjector',
    title: 'Best Interjector Award',
    organization: 'Amity Model United Nations',
    year: '2019',
    category: 'Sports & Leadership',
    description: 'Recognized for incisive geopolitical interrogation, rebuttal rhetoric, and parliamentary debate diplomacy.',
    badge: 'Best Interjector'
  },
  {
    id: 'basketball-championship',
    title: '1st Position — Inter-School Basketball Tournament',
    organization: 'Interschool Sports Federation',
    year: '2022',
    category: 'Sports & Leadership',
    description: 'Point guard & team playmaker championing the inter-school tournament.',
    badge: '1st Position 🏀'
  },
  {
    id: 'academic-excellence-pins',
    title: 'Pins for Academic Excellence (Consecutive 2019 & 2020)',
    organization: 'Delhi Public School, R.K. Puram',
    year: '2019 & 2020',
    category: 'National / Academic',
    description: 'Awarded the school’s highest academic honor pin for scholastic standing.',
    badge: 'Dual Excellence Pins'
  },
  {
    id: 'b-school-competitions',
    title: 'National B-School Case Competitions & Equity Challenges',
    organization: 'IIM Kashipur, IIT Madras DoMS, National Building',
    year: '2023',
    category: 'Case Competition',
    description: 'Participated in National Building Case Study, AdHRit (IIT Madras), and Equity Research Challenge (IIM Kashipur).',
    badge: 'IIM & IIT Finalist'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data & Quantitative Analytics',
    iconName: 'BarChart3',
    skills: [
      { name: 'SQL (Data Extraction & Pipelines)', level: 92, highlight: true },
      { name: 'Power BI (KPI & Executive Dashboards)', level: 95, highlight: true },
      { name: 'Python (Pandas, NumPy, Matplotlib)', level: 88, highlight: true },
      { name: 'SPSS (Regression, Mediation, Factor Analysis)', level: 90, highlight: true },
      { name: 'Microsoft Excel (Advanced, VBA, Modeling)', level: 96, highlight: true },
      { name: 'Data Cleaning & Statistical Inference', level: 91 }
    ]
  },
  {
    title: 'Finance & Econometrics',
    iconName: 'TrendingUp',
    skills: [
      { name: 'Financial Analysis & Ratio Evaluation', level: 93, highlight: true },
      { name: 'Equity Research & Fundamental Valuation', level: 89, highlight: true },
      { name: 'Levelized Cost of Energy (LCOE) Modeling', level: 95, highlight: true },
      { name: 'Behavioral Finance & Risk Psychometrics', level: 94, highlight: true },
      { name: 'Cash Flow & Variance Forecasting', level: 88 },
      { name: 'Technical Analysis & Market Structures', level: 85 }
    ]
  },
  {
    title: 'Business & Strategy',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Strategic Analysis & Corporate Planning', level: 90, highlight: true },
      { name: 'Operations & Process Optimization', level: 87 },
      { name: 'Empirical Research Methodology', level: 94, highlight: true },
      { name: 'Executive Presentation & Deck Design', level: 92 },
      { name: 'Cross-Functional Team Alignment', level: 88 }
    ]
  },
  {
    title: 'Creative & Digital Suite',
    iconName: 'Palette',
    skills: [
      { name: 'Adobe Photoshop', level: 85 },
      { name: 'Adobe Illustrator', level: 83 },
      { name: 'Adobe Premiere Pro', level: 80 },
      { name: 'Adobe InDesign', level: 82 },
      { name: 'Canva Pro & Visual Branding', level: 90 }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Trading Basics Certification',
    issuer: 'Financial Markets Institute',
    focus: 'Technical & fundamental equity strategies, market microstructure, and risk management in live trading environments.'
  },
  {
    title: 'Advanced Digital Transformation',
    issuer: 'Executive Tech Program',
    focus: 'Leveraging AI, automation, cloud computing, and disruptive innovation for enterprise operational scale.'
  },
  {
    title: 'Python Programming for Everybody',
    issuer: 'University Specialization',
    focus: 'Data structures, OOP, file handling, algorithmic problem solving, and computational thinking.'
  }
];
