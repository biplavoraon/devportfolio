export const siteConfig = {
  name: "Biplav Oraon",
  title: "Master's student Computer Science and Automation, IISc Bangalore",
  description: "Portfolio website of Biplav Oraon",
  accentColor: "#1d4ed8",
  social: {
    email: "biplavoraon@gmail.com",
    linkedin: "https://www.linkedin.com/in/biplav-oraon-81243490",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/biplavoraon",
  },
  aboutMe:
    "Currently doing my Master's in Computer Science from Indian Institute of Science, Bangalore. Prior to that I completed my Bachelor's in Electrical Engineering from Indian Institute of Technology, Kharagpur. I also have a work experience of more than one and a half years at Robert Bosch as a Software Developer. Looking forward to exploring research in Machine Learning.",
  skills: ["Java", "Python", "C", "JavaScript", "SQL", "PyTorch", "Spring Boot"],
  projects: [
    {
      name: "Website for Open Day CSA, IISc",
      description:
        "Built the frontend of the website",
      link: "https://events.csa.iisc.ac.in/openday2025/",
      skills: ["Astro JS", "Javascript", "CSS"],
    },
    {
      name: "Project Management Web Application",
      description:
        "Developed a responsive application where users can sign up and manage tasks. It has a List view and Kanban Board.",
      link: "https://github.com/biplavoraon/projectmanager",
      skills: ["ReactJS", "Spring Boot", "PostgreSQL"],
    },
    {
      name: "Design and Synthesis of Constant Phase Element | Prof. Siddhartha Sen | B. Tech. Project",
      description:
        "Designed a fractional order element using the multiplication of bilinear immittances. Developed an Algorithm in MATLAB to find the poles and zeroes of the transfer function. Designed and simulated a circuit in PSpice to physically realise the obtained transfer function. Obtained a CPE that provided an operating range of 2 decades and lay within a 10% error threshold.",
      link: "https://drive.google.com/file/d/11kRhAwp5Gmpr2NDqDNSlWzuLMuDOXnqh/view?usp=sharing",
      skills: ["MATLAB", "PSpice"],
    },
    {
      name: "Long Range (Up to 1 km) Wireless Communication with IoT | Prof A. Routray",
      description:
        "Transmitted Wi-Fi data (initial range of 20 meters) over Radio Frequency using Arduino, Wi-Fi and RF transmitters. Developed an algorithm to transfer data through SPI and UART protocols and implemented HTTP requests to Cloud APIs. Increased the wireless communication range by 300 meters in an environment with few barriers.",
      link: "https://drive.google.com/file/d/1GQBswahOVTJv7GituE_hn73tBRuTgUPa/view?usp=sharing",
      skills: ["Arduino", "Wi-Fi", "RF", "SPI", "UART", "Cloud API"],
    },
  ],
  experience: [
    {
      company: "Robert Bosch",
      title: "Senior Engineer",
      dateRange: "Aug 2018 - April 2020",
      bullets: [
        "Performed Requirements Analysis to translate business requirements to technical specification, Low-Level Design, Coding and Unit Testing of Device Drivers.",
        "Removed 2 false positive errors in supply voltage monitoring by revamping the error detection Software logic.",
        "Optimized emission control system by implementing an independent virtual switch for DEF motor control. The implemented switch provided more flexibility in obtaining the desired emission treatment.",
        "Owned 2 Software modules and resolved related queries from 8 Software Integration teams. Thus, facilitating the timely deployment of the Software.",
        "Supported a cross-functional team in the identification of 3 potential risks in the vehicle in case of a Software failure.",
        "Trained 2 freshers about Bosch Internal coding libraries and coding guidelines and documented a detailed V-model workflow for them."
      ],
    },
    // {
    //   company: "Startup Inc",
    //   title: "Full Stack Developer",
    //   dateRange: "Jun 2020 - Dec 2021",
    //   bullets: [
    //     "Built and launched MVP product from scratch using React and Node.js",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%",
    //     "Collaborated with product team to define technical requirements",
    //   ],
    // },
    // {
    //   company: "Digital Agency",
    //   title: "Frontend Developer",
    //   dateRange: "Aug 2018 - May 2020",
    //   bullets: [
    //     "Developed responsive web applications for 20+ clients",
    //     "Improved site performance scores by 35% on average",
    //     "Introduced modern JavaScript frameworks to legacy codebases",
    //   ],
    // },
  ],
  education: [
    {
      school: "Indian Institute of Science, Bangalore",
      degree: "Master of Technology (Research) in Computer Science",
      dateRange: "2027",
      achievements: [
        "Reinforcement Learning | Theory of Multi-Armed Bandits | Random Processes | Game Theory | Design and Analysis of Algorithms"
      ],
    },
    {
      school: "Indian Institute of Technology, Kharagpur",
      degree: "Bachelor of Technology (Honours) in Electrical Engineering",
      dateRange: "2018",
      achievements: [
        "Programming and Data Structure | Signals and Networks | Transform Calculus | Control Systems | Matrix Algebra | Probability and Stochastic Processes | Digital Signal Processing"
      ],
    },
  ],
};
