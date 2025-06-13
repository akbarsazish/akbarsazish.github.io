import {
    likeCard,
    starfoods,
    accounting,
    trade,
    education,
    microvers,
    starfood,
    tawseel,
    crm,
    sattagydia,

  } from "../assets";

  export const navLinks = [
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];


  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Tawseel E-Commerce and Logistic LLC (Oman)",
      icon: tawseel,
      iconBg: "#383E56",
      date: "March 2025 - PRESENT",
      points: [
        "Design and develop user-friendly front-end interfaces, server-side logic and APIs.",
        "Integrate third-party services and APIs to extend application functionality.",
        "Ensure application security, including authentication, authorization, and data protection.",
        "Test, debug, and troubleshoot issues in both front-end and back-end components.",
        "Collaborate with designers, product managers, and other developers to deliver complete solutions.",
      ],
    },

    {
      title: "Frontend Developer",
      company_name: "Artam Almas Alborz (Iran)",
      icon: starfoods,
      iconBg: "#383E56",
      date: "Apr 2022 - March 2025",
      points: [
        "Develop and maintain 3 responsive web applications to enhance the user experience for over 1K+ customers.",
        "Collaborate with back-end developers to integrate front-end and back-end functionalities.",
        "Translate design concepts into functional code by working with UI/UX designers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },

    {
      title: "General IT Manager",
      company_name: "Ministry of Industry and commerce",
      icon: trade,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Nov 2021",
      points: [
        "Manage and direct all IT operations to ensure systems function efficiently and align with organizational needs.",
        "Lead and supervise the IT team, training, and evaluating staff performance.",
        "Develop and manage the IT budget to ensure cost-effectiveness and alignment with strategic goals.",
        "Establish and enforce policies to protect the organization’s data and IT assets, including disaster recovery and data backup strategies.",
      ],
    },

    {
      title: "Database Manager",
      company_name: "Ministry of industry and Commerce",
      icon: trade,
      iconBg: "#383E56",
      date: "Sep 2018 - Jan 2020",
      points: [
        "Collaborated in designing and developing databases for large data volumes.",
        "Managed and maintained Databases to ensure that the databases are running smoothly.",
        "Implemented data security policies and controls to significantly increase safeguarding against unauthorized access and potential breaches.",
        "Ensured timely backup and recovery processes to minimize data loss and downtime.",
      ],
    },

    {
      title: "Biometric Technical Member",
      company_name: "Ministry of Higher Education of Afghanistan",
      icon: education,
      iconBg: "#E6DEDD",
      date: "Feb 2017 - Aug 2018",
      points: [
        "Registered Kankor Examination volunteers meticulously to ensure their identity by capturing their information, taking their photo, and collecting their fingerprints.",
        "Designed and issued identification cards for the volunteers from scratch.",
        "Consolidated data from multiple sources and integrated it into a centralized database, resulting in significant cost savings for the government.",
      ],
    },
    
    {
      title: "Mentor (Volunteer)",
      company_name: "Microver",
      icon: microvers,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Mentored junior web developers, providing technical support through code reviews.",
        "Proposed improvements to code organization to improve code quality and overall performance.",
        "Provided advice and tips on how to maintain motivation to maintain longevity in the program.",
      ],
    },
  ];
  

  const frontEndSkills = [
      { "front": "JavaScript", "percentage": 85 },
      { "front": "TypeScript", "percentage": 70 },
      { "front": "React & Redux Toolkit", "percentage": 80 },
      { "front": "jQuery & Ajax", "percentage": 75 },
      { "front": "Tailwind & Bootstrap", "percentage": 70 },
      { "front": "HTML & CCS", "percentage": 95 }
  ];

  const backEndSkills = [
      { "backEnd": "PHP", "percentage": 70 },
      { "backEnd": "Laravel", "percentage": 75 },
      { "backEnd": "CodeIgniter", "percentage": 70 },
      { "backEnd": "SQL", "percentage": 70 },
      { "backEnd": "WordPress", "percentage": 70 },
  ];


  const toolsAndMethods = [
      { "tools": "Git & GitHub", "percentage": 80 },
      { "tools": "API", "percentage": 75 },
      { "tools": "Responsive Dev", "percentage": 90 },
      { "tools": "Chrome Dev Tools", "percentage": 80 },
  ];

  const softSkills = [
      { "soft": "Problem solving", "percentage": 80 },
      { "soft": "Team work", "percentage": 80 },
      { "soft": "Mentoring", "percentage": 80 },
      { "soft": "Time Management", "percentage": 80 },
      { "soft": "Leadership", "percentage": 80 },
  ];
  
  const projects = [
    {
      name: "Like Card",
      description:"This project integrates a secure server-to-server API for card-based payments, enabling customers to purchase products seamlessly. It processes transactions directly on the backend, ensuring fast, secure, and customizable checkout without, while maintaining compliance and real-time validation for a smooth payment experience.",
      tags: [
        { name: "React",
          color: "blue-text-gradient",
        },
        { name: "tailwindcss",
          color: "green-text-gradient",
        },
       
        { name: "Laravel",
          color: "pink-text-gradient",
        },
        { name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: likeCard,
      source_code_link: "https://github.com/akbarsazish/likeCard/tree/master",
      see_live_link: "https://likecardu.tawseelonline.om/",
    },

    {
      name: "Kasb Star",
      description:"Starfoods demonstrates my web development skills, emphasizing user-friendly interfaces, smooth shopping experiences, secure payments, and quick shipping. Explore my work to see how I can enhance your next project.",
      tags: [
        { name: "React",
          color: "blue-text-gradient",
        },
        { name: "tailwindcss",
          color: "green-text-gradient",
        },
       
        { name: "CSS",
          color: "pink-text-gradient",
        },
        { name: "Laravel",
          color: "blue-text-gradient",
        },
        { name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: accounting,
      source_code_link: "https://github.com/akbarsazish/starfoods",
      see_live_link: "https://star.starfoods.ir",
    },

    {
      name: "Starfoods",
      description:"Starfoods demonstrates my web development skills, emphasizing user-friendly interfaces, smooth shopping experiences, secure payments, and quick shipping. Explore my work to see how I can enhance your next project.",
      tags: [
        { name: "React",
          color: "blue-text-gradient",
        },
        { name: "Bootstrap",
          color: "green-text-gradient",
        },
       
        { name: "CSS",
          color: "pink-text-gradient",
        },
        { name: "Laravel",
          color: "blue-text-gradient",
        },
        { name: "SQL Server",
          color: "green-text-gradient",
        },
      ],
      image: starfood,
      source_code_link: "https://github.com/akbarsazish/starfoods",
      see_live_link: "https://star.starfoods.ir",
    },

    {
      name: "CRM",
      description: "A CRM (Customer Relationship Management) system, streamlines customer data management, and provides analytics. I specialize in creating adaptable CRM solutions that support sales, customer service, and growth, reflecting my skills in developing, data-driven applications.",
      tags: [
        { name: "JavScript",
          color: "blue-text-gradient",
        },
        { name: "jQuery",
          color: "green-text-gradient",
        },
        {name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {name: "CSS",
          color: "blue-text-gradient",
        },
        {  name: "Laravel",
          color: "green-text-gradient",
        },
        { name: "SQL Server",
          color: "pink-text-gradient",
        },
      ],
      image: crm,
      source_code_link: "https://github.com/akbarsazish/crm-update",
      see_live_link: "https://star4.ir",
    },

    {
      name: "Sattagydia",
      description: "Sattagydia.com is a responsive news website focused on providing the latest updates news. Developed using WordPress, it offers a modern, visually appealing design that adapts seamlessly across devices. The responsive layout ensures an optimal viewing experience on desktops, tablets, and mobiles.",
      tags: [
        { name: "WordPress",
          color: "blue-text-gradient",
        },
        { name: "JavaScript",
          color: "green-text-gradient",
        },
        {name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {name: "CSS",
          color: "blue-text-gradient",
        },
        { name: "MySql",
          color: "pink-text-gradient",
        },
      ],
      image: sattagydia,
      source_code_link: "https://sattagydia.com/",
      see_live_link: "https://sattagydia.com/",
    },
  ];
  
  export {experiences, frontEndSkills, backEndSkills, toolsAndMethods, softSkills, projects };