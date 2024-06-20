import {
    starfoods,
    addressLLC,
    trade,
    education,
    microvers,
    starfood,
    crm,
    math,
    air_pollution,
    awesome_books,
    book_store,
    online_academy,
    accounting,
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
      title: "Frontend Developer",
      company_name: "Artam Almas Alborz",
      icon: starfoods,
      iconBg: "#383E56",
      date: "Apr 2022 - PRESENT",
      points: [
        "Develop and maintain 3 responsive web applications to enhance the user experience for over 1K+ customers.",
        "Collaborate with back-end developers to integrate front-end and back-end functionalities.",
        "Translate design concepts into functional code by working with UI/UX designers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ADRAS (Afghanistan Development and Registry and Addressing Services)",
      icon: addressLLC,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Aug 2021",
      points: [
        "Developed, with a team of 10 developers, a centralized system for managing employee records and official correspondence in governmental civil organizations.",
        "Independently developed two modules and collaborated on three projects, enabling efficient management of letters, employee attendance, records, tasks, and salary payments.",
        "Played an essential role in deploying the software to over 3,000 active users as part of a 189-member IT and web development team.",
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
      { "backEnd": "PHP", "percentage": 55 },
      { "backEnd": "Laravel", "percentage": 60 },
      { "backEnd": "SQL", "percentage": 50 },
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
  ];
  
  const projects = [
    {
      name: "Kasbstar",
      description:"The KasbStar accounting web application offers a user-friendly interface for customers to manage their financial operations. The application includes automated bookkeeping, invoicing and billing, tracking orders, tracking cheque operation, and expense tracking features. It also offers financial reporting and project or inventory management capabilities.",
      tags: [
        { name: "TypeScript",
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
      image: accounting,
      source_code_link: "https://github.com/akbarsazish/str-admin-panel",
      see_live_link: "https://starfoods.ir/loginAdmin",
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

    {
      name: "Math",
      description: "Math magicians is a website for all fans of mathematics. It allows user to make simple calculations and read random math related qoutes.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: math,
      source_code_link: "https://github.com/akbarsazish/Math-Magicians",
      see_live_link: "https://math-magicians-9om6.onrender.com/",
    },
    {
      name: "Air Pollution",
      description: "Presenting a straightforward air pollution application that offers historical air quality data for various countries worldwide. Users can easily search for specific locations to access air pollution information.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
      ],
      image: air_pollution,
      source_code_link: "https://github.com/akbarsazish/Air-Pollution-API",
      see_live_link: "https://akbarsazish.github.io/Air-Pollution-API/",
    },
    {
      name: "Books",
      description: "Awesome Books website lets you add books with their titles and authors to a list and remove them when needed. The data is stored in the browser memory using localStorage for easy access. It is a simple tool for keeping track of your books.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
      ],
      image: awesome_books,
      source_code_link: "https://github.com/akbarsazish/Awesome-Books-ES6",
      see_live_link: "https://akbarsazish.github.io/Awesome-Books-ES6/",
    },
    {
      name: "Book Store",
      description: "An online small project which developed by react and redux toolkit that enable users that they can add their books and authors, see list of books and they are able edit and delete the book from the list.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "Redux Toolkit",
            color: "green-text-gradient",
          },
          {
            name: "CSS",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
        ],
      image: book_store,
      source_code_link: "https://github.com/akbarsazish/Bookstore-React",
      see_live_link: "https://akbarsazish.github.io/Bookstore-React/",
    },
    {
      name: "X Academy",
      description: "X Academy is an online platform for web development and programming. I will be enhancing in the future and include tutorials on HTML, CSS, JavaScript, PHP, ASP.NET, and more, spanning front-end, back-end, mobile app development, and web design.",
        tags: [
          {
            name: "JavScript",
            color: "blue-text-gradient",
          },
          {
            name: "CSS",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
        ],
      image: online_academy,
      source_code_link: "https://github.com/akbarsazish/Sazish-Academy",
      see_live_link: "https://akbarsazish.github.io/Sazish-Academy/",
    },
  ];
  
  export {experiences, frontEndSkills, backEndSkills, toolsAndMethods, softSkills, projects };