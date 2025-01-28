import { WorkProps } from "./types";

export const Works: WorkProps[] = [
  {
    start: "July 11, 2022",
    end: "Present",
    post: "Software Engineer at Microsoft",

    description: [
      "Identified and facilitated fraud detection algorithms to identify abuse patterns, uncovering fraud tenants and clearing 350 petabytes of storage and saving $104 million annually.",
      "Built a Tenant Remediation Lifecycle Dashboard to reduce tenant takedown time by 90% (from days to hours) and eliminating human errors in review processes.",
      "Collaborated and developed key services in building a real-time content scanning solution for SharePoint, processing 2.62 billion daily events to detect and remove phishing and spam links, reducing takedown time by 96% (from hours to 5 minutes) and enabling quicker identification of phishing, spam, and delayed weaponization.",
      "Led the migration of five microservices from Azure Functions to Azure Kubernetes Service (AKS), achieving high availability through multi-region deployments and ensuring zero downtime during the transition.",
      "Implemented approval-based workflows for fraudulent storage clearance, ensuring compliance and secure operations.",
      "Built a data lake using Azure pipelines, reducing data fetching time by 99% (from hours to seconds), enabling real-time investigations and improving investigator efficiency by 50%.",
    ],
    url: ["https://www.microsoft.com/en-in/"],
    logo: require("../../Shared/Assets/microsoft.png"),
  },
  {
    start: "Oct 01, 2021",
    end: "May 31, 2022",
    post: "Software Development Engineer Intern at Cloudwiry (acquired by Apptio, later acquired by IBM)",

    description: [
      "Contributed to key features like Budgeting, Alerting, and Multi-Cloud Financial Management, enabling Fortune 500 companies to manage actual, budgeted, and forecasted costs for AWS, GCP, and Azure. Designed and implemented approval-based workflows for budget approvals and forecasting, driving financial and operational excellence across multi-cloud environments. Worked closely with financial executives to deliver tailored solutions and execute at pace.",
      "Collaborated on the development of an internal AWS Redshift and DocumentDB SDK, supporting 10+ internal microservices to query, analyze, and process data efficiently. Improved developer productivity by 50% through streamlined database integration.",
      "Built critical components for a React-based UI library, ensuring consistency and seamless user experience across the platform. Reduced technical debt and improved front-end development speed by 40%, enabling faster feature rollouts.",
      "Worked on core services for Subscription and Alerting features, allowing customers to receive daily, weekly, or monthly cost summaries across cloud platforms via email notifications. Empowered clients to make informed decisions, reducing cloud expenses by 20%.",
    ],
    url: ["https://www.ibm.com/products/apptio"],
    logo: require("../../Shared/Assets/cloudwiry.png"),
  },
  {
    start: "May 17, 2021",
    end: "Aug 31, 2021",
    post: "Google Summer of code Student Developer at CDLI",

    description: [
      "Innovating and developing containerization of Transliterations editor and API to convert atf data to jtf format.",
      "Integrate web-app and library to existing docker-infrastructure and nginx.",
      "Implementation of crowd-sourcing functions within a framework to update and change jtf data of artifacts.",
    ],
    url: ["https://summerofcode.withgoogle.com/projects/#4934990535589888"],
    logo: require("../../Shared/Assets/gsoc.png"),
  },
  {
    start: "May 11, 2020",
    end: "Sep 11, 2020",
    post: "Fronted Developer at Listnr",
    description: [
      "Built entire frontend using React with end-to-end Payment recurring service which led to $1100 revenue on a launch.",
      "Constructed complex components like SSML editor (for Google and Azure Text-to-Speech API) to convert plain text into SSML text and a Customizable Audio Player to play and share generated podcasts.",
      "Worked closely with CEO to Migrating and redesigning components to reduce cost by 18% and increase the platform's performance by 15%. ",
      "Built end-to-end CI/CD workflow and redesigned and implemented the release process to reduce engineering effort from days to seconds.",
    ],
    url: ["https://www.listnr.tech"],
    logo: require("../../Shared/Assets/listnr.png"),
  },
  {
    start: "June 1, 2018",
    end: "May 1, 2019",
    post: "Software Engineer Intern at SilverWing Technologies Pvt Ltd",
    description: [
      "Developing and creating web applications as per the specifications utilizing WAMP stack - Windows with apache with Kohana 2, PHP, CSS, JavaScript/Jquery, and MySql.",
      "Writing, testing, and debugging code and help the websites operate flawlessly.",
      "Feature implementation for multiple different legacy platforms using web forms and Implement core features such as chat messaging, and payment systems with senior developers",
      "Streamlined the review and analysis of detailed program specifications and in program design to meet changes required in the work processes.",
    ],
    url: ["https://www.silverwingtechnologies.com/"],
    logo: require("../../Shared/Assets/silverwing.jpg"),
  },
];
