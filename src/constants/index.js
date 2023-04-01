import {
  backend,
  creator,
  web,
  javascript,
  mobile,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  sql,
  python,
  kubernetes,
  azure,
  kafka,
  spark,
  shell,
  microsoft,
  walmart,
  nttdata,
  churn,
  flower,
  seattle,
  stock,
  linkedin,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "shell",
    icon: shell,
  },
  {
    name: "spark",
    icon: spark,
  },
  {
    name: "kafka",
    icon: kafka,
  },
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const contacts = [
  {
    name: "linkedin",
    icon: linkedin,
  },
  {
    name: "github",
    icon: github,
  },
]

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56",
    date: "Feb 2022 - March 2023",
    points: [
      "Build and manage back-end data flatform (Data Lakehouse) on Azure and AWS for Flip, a video-powered social learning platform owned by Microsoft."
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Walmart Global Tech",
    icon: walmart,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2022",
    points: [
      "Build and maintain back-end data solution for an end-to-end analytical Supply Chain web application to track inventory and transportation from Suppliers to Stores for international markets",
    ],
  },
  {
    title: "Tableau Systems Analyst",
    company_name: "NTT Data",
    icon: nttdata,
    iconBg: "#383E56",
    date: "Oct 2027 - Jan 2020",
    points: [
      "Delivered analytical projects to provide data democratization to the healthcare account IT service team. Designed and distributed ~50 operations and financial KPI reports to executives and leadership team",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Anh is an amazing person and engineer. In her time on my team, she had immediate impact in moving critical projects forward. Anh was an engineering lead on Data Lake and analytics infrastructure projects, she quickly took charge and was able to work effectively with the various engineering and leadership stakeholders in the project to deliver a high-quality product. Anh would be a high-performing addition to any engineering team, and I cannot recommend her enough.",
    name: "Kevin Marx",
    designation: "Principal Engineering Manager",
    company: "Microsoft Flip",
    image: "https://media.licdn.com/dms/image/C4D03AQF8TjkYbntuBQ/profile-displayphoto-shrink_200_200/0/1586530852511?e=1684368000&v=beta&t=EewTX3GXxjYrpXD9pau0rj69LPreTRHyS-DPnQGkcjE",
  },
  {
    testimonial:
      "Anh is one of the most tenacious engineers I’ve worked with. A Big Data expert who is unafraid to challenge the status quo, break conventional boundaries, and raise the engineering standards. Anh is a creative thinker, team player, and one of those engineers that not only deliver results but uplift their entire team. As one of her mentors, any EM will be lucky to have Anh be part of their team.",
    name: "Omar Venado",
    designation: "Head of ML and backend services",
    company: "Microsoft Flip",
    image: "https://media.licdn.com/dms/image/D4D03AQGmY71vM_6WFg/profile-displayphoto-shrink_200_200/0/1674180805594?e=1684368000&v=beta&t=4TDSFJ5sTfqdbfMp3CAikX_xasCTKWwPp9L_B9pMsDE",
  },
  {
    testimonial:
      "Anh is one of the most resourceful engineers I’ve worked with outside of my team, she came to us and redesigned our data syncing pipeline and migrated our analytics stack from AWS into a data lakehouse on Azure. She is not just knowledgeable about data engineering but also super curious about backend engineering and product making in general. Any team would be lucky to have her",
    name: "Shaomeng Zhang",
    designation: "Principal Engineering Manager",
    company: "Microsoft Flip",
    image: "https://media.licdn.com/dms/image/C4D03AQGSL_H2L7fTdA/profile-displayphoto-shrink_100_100/0/1516620949433?e=1684368000&v=beta&t=4iL9Td5qiKCwWp-aZYb2w_XAEPiz7-L92_ZGYtSC5nU",
  },
];

const projects = [
  {
    name: "Flower Classification with Pytorch",
    description:
      "A neural network model to classify 102 flower species using 3 Torchvision pre-trained models: VGG16, VGG19 and DenseNet121",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: flower,
    source_code_link: "https://github.com/anhhchu/Deep-Learning-Image-Classifier-Application-with-Pytorch/blob/master/Image%20Classifier%20Application%20Project%20using%20Pytorch.ipynb",
  },
  {
    name: "Python Stock Price Prediction",
    description:
      "Time series deep learning models using Recurrent Neural Network (RNN), Long Short-term Memory Network (LSTM) and Gated Recurrent Unit (GRU) for stock price prediction.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      }
    ],
    image: stock,
    source_code_link: "https://github.com/anhhchu/PythonTrading/blob/master/DeepLearningStrategy.ipynb",
  },
  {
    name: "Predict Churn of Music Hosting Service",
    description:
      "Built ML Pipeline with Spark ML to predict churn of a music hosting service using Spark Dataframe and SparksQL",
    tags: [
      {
        name: "pyspark",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      }
    ],
    image: churn,
    source_code_link: "https://github.com/anhhchu/Sparkify/blob/master/Sparkify.ipynb",
  },
  {
    name: "Seattle Airbnb Data Analysis",
    description:
      "Analyze few aspects of the Airbnb renting scene in Seatle such as: the effect of location on price, occupancy pattern, earnings and reviews by host, and what guests say about their experience, etc using Python TextBlob and VaderSentiment, data visualization with Tableau, Seaborn and Wordcloud",
    tags: [
      {
        name: "tableau",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      }
    ],
    image: seattle,
    source_code_link: "https://github.com/anhhchu/Seattle-Airbnb",
  }
];

export { services, technologies, experiences, testimonials, projects };
