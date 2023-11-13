/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-X0DKKM55VN",
};

//Home Page
const greeting = {
  title: "Hello World.",
  title2: "Suhas K C",
  logo_name: "suhas.kc",
  nickname: "suhas / thegame",
  full_name: "Suhas Katari Chaluva Kumar",
  subTitle: "Software Engineer, FinTech Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Hv-F4I7tP6exbXKOaIaeG0FTuDBTQ3W3/view?usp=sharing",
  mail: "mailto:suhaskatari1998@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/suhasthegame",
  linkedin: "https://www.linkedin.com/in/suhas-k-c/",
  gmail: "suhaskatari1998@gmail.com",
};

const skills = {
  data: [
    {
      title: "Software Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building highly interactive User Interfaces by leveraging modern technologies like React.js/Vue.js",
        "⚡ Developing full-stack applciations using the MERN(Mongo,Express,Node,React) stack",
        "⚡ Optimizing and Building AIML infrastructure to deploy solutions on a HPC environment",
        "⚡ Developing API's and Microservices that are reusable and scalable",
        "⚡ Leveraging Docker/Kubernetes to deploy scalable and robust solutions",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "fa6-brands:golang",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "PostGreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "API Development",
          fontAwesomeClassname: "eos-icons:api",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "DevSecOps",
          fontAwesomeClassname: "devicon:azuredevops",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "UI/UX ",
          fontAwesomeClassname: "arcticons:one-ui-icon-pack",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "IT Automation",
          fontAwesomeClassname: "vaadin:automation",
          style: {
            color: "#029FCE",
          },
        },

        {
          skillName: "Software Testing",
          fontAwesomeClassname: "logos:testing-library",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "App Development",
          fontAwesomeClassname: "logos:web-dev-icon",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "Linux",
          fontAwesomeClassname: "skill-icons:linux-light",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "skill-icons:redux",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms such as AWS and Azure",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with CI/CD tools and deploying scalable solutions via serverless compute",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon:azure-wordmark",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "devicon:googlecloud",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "vscode-icons:file-type-dockertest",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "logos:netlify-icon",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "devicon:maven",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Florida",
      subtitle: "Master of Science in Computer Science and Engineering",
      logo_path: "UF-logo.png",
      alt_name: "University of Florida",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my Masters in Computer Science expecting to graduate in Spring 2024.",
        "⚡ Completed Coursework include Applied Machine Learning, Analysis of Algorithms, Information Visualization, Advanced Data Structures and Complex Analysis",
        "⚡ Current Cummulative GPA - 3.66/4",
      ],
      website_link: "https://www.ufl.edu",
    },
    {
      title: "REVA University",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "reva-logo.png",
      alt_name: "REVA University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Completed Coursework include core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have implemented several projects such as the AR Car Showroom app, RESA seating app, and Food Ordering System Application",
        "⚡ I have secured 9.33/10 CGPA.",
        "⚡ Was awarded the Best Outgoing student",
      ],
      website_link: "https://www.reva.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsot Technology Associate: Cloud Fundamentals",
      subtitle: "Microsoft",
      logo_path: "mta.png",
      certificate_link:
        "https://drive.google.com/file/d/1e7tDg5oVPjHW3botijAfgbh6YugkfyBx/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#2B7CD3",
    },
    {
      title: "Programming woth Python",
      subtitle: "Internshala",
      logo_path: "py.png",
      certificate_link:
        "https://drive.google.com/file/d/1GloDK0nAHvZ4W4pelVTYTB7J0wOsXdrQ/view?usp=sharing",
      alt_name: "Python Certification",
      color_code: "#E2405F",
    },
    {
      title: "Full Stack Web Development",
      subtitle: "Internshala",
      logo_path: "web_dev.png",
      certificate_link:
        "https://drive.google.com/file/d/1Uf0SrGPUadJorT5R6pvNI9PLNI8ndmty/view?usp=sharing",
      alt_name: "Web development certification",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Unity AR and Cloud Based AI application",
      subtitle: "Udemy",
      logo_path: "unity.png",
      certificate_link:
        "https://drive.google.com/file/d/1uONI857Vm94e0zY_rKOtI9VBt0XDu_kJ/view?usp=sharing",
      alt_name: "Unity AR development",
      color_code: "#2AAFED",
    },
    {
      title: "Hackfest 2019",
      subtitle: "National Level Hackathon",
      logo_path: "hackfest.png",
      certificate_link:
        "https://drive.google.com/file/d/1M-J26U3dNvL9R-bbc-8EpfNEejG22Rln/view?usp=sharing",
      alt_name: "Hackfest National level Hackathon",
      color_code: "#fe0037",
    },
    {
      title: "Cyber Space and Security",
      subtitle: "Workshop",
      logo_path: "sec.png",
      certificate_link:
        "https://drive.google.com/file/d/1rBBpIA_7wJ76lByffbipNmCv3R5O1oEV/view?usp=sharing",
      alt_name: "Cyber Security workshop",
      color_code: "#2AAFED",
    },
    {
      title: "Power Bi Cetification",
      subtitle: "Coursera",
      logo_path: "powerbi.png",
      certificate_link: "",
      alt_name: "PowerBI certification",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Former Amazonian | 2+ years of professional experience as Software Developer, Data Engineer, Platform Engineer and AIML Researcher",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data Engineer",
          company: "Amazon",
          company_url: "https://www.amazon.com/",
          logo_path: "amazon.png",
          duration: "Sep 2020 - Jul 2021",
          location: "Bengaluru, India",
          description: `Spearheaded data mining initiatives across multiple marketplaces, strategically extracting crucial business data from competitor websites to enhance Amazon's competitive positioning.
          Conducted comprehensive analysis and processing of scraped website data, ensuring accuracy and relevance.
          Collaborated effectively with vendor managers and other key stakeholders to continuously update, maintain, and enrich Amazon's website catalog, contributing to improved user experience and product visibility.
          `,
          color: "#0071C5",
        },
        {
          title: "Full Stack Software Engineer",
          company: "Polaris Wireless",
          company_url: "https://www.polariswireless.com/",
          logo_path: "pl.png",
          duration: "Dec 2021 - Jul 2022",
          location: "Bengaluru, India",
          description: `Revamped legacy code to modern development standards, achieving a 40% increase in system performance and a 30% reduction in code base size, while enhancing functionality, security, and reusability.
          ◦ Collaborated with cross-functional teams to resolve bugs and implement new features across applications developed with React.js and Redux.
          ◦ Participated in and contributed to sprint planning meetings, UX documentation reviews, and feature specification meetings, providing valuable insights to optimize application development.
          `,
          color: "#0071C5",
        },
        {
          title: "Graduate Research Assistant",
          company: "University of Florida, College of Medicine",
          company_url: "https://med.ufl.edu/",
          logo_path: "ufcom.png",
          duration: "Jan 2023 - Present",
          location: "Gainesville, Florida",
          description: `Engaged in a high-impact collaborative research project, HUBMAP CONSORTIUM, aimed at constructing high-resolution tissue maps to understand human biology.
          -> Collaborated with esteemed institutions such as Harvard University, Yale University, Carnegie Mellon University, Stanford University, University of Pennsylvania, and others on cutting-edge machine learning and artificial intelligence initiatives to propel advancements in medical science.
          -> Orchestrated the development and optimization of cutting-edge Medical AI/ML methodologies for a heavily NIH-funded project.
          -> Directed the successful deployment of the NaviGator application, overseeing all phases.
          Leveraged a comprehensive skill set to formulate and implement strategies in web development, DevOps, and cloud
          computing.
          `,
          color: "#ee3c26",
        },
        {
          title: "Platform Engineer Intern",
          company: "Steelcase Inc",
          company_url: "https://www.steelcase.com/",
          logo_path: "steelcase.png",
          duration: "May 2023 - Aug 2023",
          location: "Grand Rapids, Michigan",
          description: `• Spearheaded and executed the Azure Cost Transparency Project, utilizing Power BI to analyze and interpret data.
          • Conducted a comprehensive assessment to identify inefficiencies, leading to the elimination of non-working servers
          costing $20k/month.
          • Coordinated the company-wide implementation of the project, effectively optimizing cloud costs.
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteering and Academic Clubs",
      experiences: [
        {
          title: "Navigator",
          company: "University of Florida",
          company_url: "https://www.ufnavigatorsinternational.com/",
          logo_path: "navi.png",
          duration: "Sep 2022 - Present",
          location: "Gaineville, Florida",
          description:
            "Help international studnets navigate their way around the US.",
          color: "#040f26",
        },
        {
          title: "Gator Coder club",
          company: "Affliate Society of UF",
          company_url: "https://cise.ufl.edu/dept/type/about.html",
          logo_path: "gcc.png",
          duration: "Jan 2023 - Present",
          location: "Gainesville, Florida",
          description:
            "Helping create new Gators and help them to learn technology and coding",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: `I am a busy bee and I love to work on projects that enables me to learn something new. So, you'll see a wide range of assorted projects here ranging from 
    web development, Information Visualization, machine learning, Data Base application and many more.
    `,
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "suhas.png",
    description:
      "I'm actively looking for roles post graduation in Spring 2024. If you like my portfolio and think you have a role for me or just want to connect, please feel free to contact me and I'll get back to you as soon as possible",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "CARDv",
      url: "https://cardv-suhasthegame46-gmailcom.vercel.app/",
      description:
        "Cancer and Ancestry Relationship Data Visualization - This application allows us to see how different cancers genes impact different races in a unique way. For example, African-American women are 3x more susceptible to breast cancer.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "devicon:react-wordmark",
        },
        {
          name: "ChartJS",
          iconifyClass: "file-icons:chartjs",
        },
        {
          name: "Python",
          iconifyClass: "devicon:python-wordmark",
        },
        {
          name: "machine Learning",
          iconifyClass: "carbon:machine-learning-modelr",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/suhasthegame/cardv",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://cardv-suhasthegame46-gmailcom.vercel.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "Crime Data Analysis",
      url: "https://github.com/suhasthegame/CrimeDataAnalysis",
      description:
        "A simple application developed using real FBI crime data that showcases the power of SQL and Visualization. (Has more than 5M records) This app can show various crime statistics!",
      languages: [
        {
          name: "OracleSQL",
          iconifyClass: "logos:oracle",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ReactJS",
          iconifyClass: "devicon:react-wordmark",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/suhasthegame/CrimeDataAnalysis",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "Food Ordering System using IoT enabled RFID Reader.",
      url: "http://www.testmagzine.biz/index.php/testmagzine/article/view/8062",
      description:
        "An full-fledged application that leverages IoT and Kiosk Machines to solve the problem associated with food ordering system on REVA university Campus",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Python Flask ",
          iconifyClass: "logos:flask",
        },
        {
          name: "MongoDB",
          iconifyClass: "devicon:mongodb-wordmark",
        },
        {
          name: "C++",
          iconifyClass: "bxl:c-plus-plus",
        },
      ],
      links: [
        {
          name: "Research Publication",
          url:
            "http://www.testmagzine.biz/index.php/testmagzine/article/view/8062",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "3",
      name: "AR CarShowroom App",
      url: "",
      description:
        "A cross-platform AR car showroom app that leverages AI and allows you to view car models in AR. Bonus, has voice commands to perform basic functions",
      languages: [
        {
          name: "Unity",
          iconifyClass: "skill-icons:unity-dark",
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp",
        },
        {
          name: "Wit.AI",
          iconifyClass: "vscode-icons:file-type-ai",
        },
      ],
      links: [],
    },
    {
      id: "4",
      name: "LinkedIn Clone",
      url: "https://github.com/suhasthegame/LinkedIn-Clone",
      description: "A LinkedIn clone application (becuase why not??)",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "devicon:react-wordmark",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/suhasthegame/LinkedIn-Clone",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
