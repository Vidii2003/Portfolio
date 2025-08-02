import { ecs, pento, pda } from '../assets/images/index'
import {php, css, express, git, github, html, javascript, mongodb, nodejs, react, tailwindcss, contact, linkedin, chatbot, lip, robo, leaf, ams, pat} from '../assets/icons/icon'
import { bootstrap, cplus, dotnet, jquery, mysql, oracle, postgresql, sql, c, java, csharp, python, excel, powerpoint, word } from '../assets/icons/icon';

export const skills = [
    {
        imageurl:html,
        name:"HTML",
        type: "Frontend", 
    },
    {
        imageurl:css,
        name:"CSS",
        type: "Frontend", 
    },
    {
        imageurl:javascript,
        name:"Javascript",
        type: "Frontend", 
    },
    {
        imageurl:react,
        name:"React JS",
        type: "Frontend", 
    },
    {
        imageurl:jquery,
        name:"JQuery",
        type: "Frontend", 
    },
    {
        imageurl:bootstrap,
        name:"Bootstrap",
        type: "Frontend", 
    },
    {
        imageurl:tailwindcss,
        name:"Tailwind CSS",
        type: "Frontend", 
    },
    {
        imageurl:php,
        name:"PHP",
        type: "Backend", 
    },
    {
        imageurl:mongodb,
        name:"MongoDB",
        type: "Backend", 
    },
    {
        imageurl:mysql,
        name:"MySQL",
        type: "Backend", 
    },   
    {
        imageurl:sql,
        name:"SQL",
        type: "Backend", 
    },
    {
        imageurl:oracle,
        name:"Oracle",
        type: "Backend", 
    },
    {
        imageurl:postgresql,
        name:"PostgreSQL",
        type: "Backend", 
    },
    {
        imageurl:dotnet,
        name:".NET",
        type: "Backend", 
    },
    {
        imageurl:express,
        name:"Express Js",
        type: "Backend", 
    },
    {
        imageurl:nodejs,
        name:"Node Js",
        type: "Backend", 
    },
    {
        imageurl:c,
        name:"C",
        type: "Programming", 
    },
    {
        imageurl:cplus,
        name:"C++",
        type: "Programming", 
    },
    {
        imageurl:java,
        name:"Java",
        type: "Programming", 
    },
    {
        imageurl:csharp,
        name:"C#",
        type: "Programming", 
    },
    {
        imageurl:python,
        name:"Python",
        type: "Programming", 
    },
    {
        imageurl:excel,
        name:"Microsoft Excel Advanced",
        type: "Microsoft Office", 
    },
    {
        imageurl:powerpoint,
        name:"Microsoft PowerPoint",
        type: "Microsoft Office", 
    },
    {
        imageurl:word,
        name:"Microsoft Word",
        type: "Microsoft Office", 
    },
    {
        imageurl:git,
        name:"Git",
        type: "Version Control", 
    },
    {
        imageurl:github,
        name:"GitHub",
        type: "Version Control", 
    },
];

export const experiences = [
    {
        title: "Internship Trainee",
        company_name: "ECS Software Solutions",
        icon:ecs,
        iconbg:"#fbeabc",
        date: "Jul 2024 - Dec 2024",
        points: ["Gained practical knowledge of the Software Development Life Cycle (SDLC), including planning, design, development, testing, and deployment.", "Strengthened understanding of software engineering principles through hands-on experience.", "Developed a mobile-optimized community app using React JS for the front end, PostgreSQL for the backend, and Django REST Framework for APIs.", "Enhanced full-stack development skills by working on both client-side and server-side components."]
    },
    {
        title: "Front-end Developer Intern",
        company_name: "Pentafox Technologies",
        icon:pento,
        iconbg:"#efc0c2",
        date: "Jul 2023 - Aug 2023",
        points: ["Proficient in front-end development with HTML, CSS, JavaScript, React.js, and Node.js.", "Gained hands-on experience during an internship at Pentafox, applying these skills to real-world projects.", "Built interactive web applications focused on enhancing user experiences.", "Developed a strong foundation in creating responsive and user-friendly designs."]
    },
    {
        title: "Web Team Lead",
        company_name: "Personality Development Association club, MIT",
        icon:pda,
        iconbg:"#feccaa",
        date: "Aug 2024 - Present",
        points: ["Leading the web team for the Personality Development Association, focusing on developing and maintaining the association's website.", "Ensuring the website is user-friendly, visually appealing, and aligned with the association's goals.", "Coordinating with team members to create engaging content and implement design enhancements.", "Utilizing technical expertise in React.js, Tailwind CSS, and Bootstrap to deliver an optimized and responsive web experience."]
    },
];

export const sociallinks = [
    {
        name: 'Contact',
        iconurl: contact,
        link: '/Contact',
    },
    {
        name: 'GitHub',
        iconurl: github,
        link: 'https://github.com/Vidii2003',
    },
    {
        name: 'LinkedIn',
        iconurl: linkedin,
        link: 'https://www.linkedin.com/in/vidya-g-s-30b36424a/',
    }
];

export const projects = [
    {
        iconurl: chatbot,
        theme: 'btn-back-red',
        name: 'Aarogiyam Chatbot',
        description: "Aarogiyam is a healthcare chatbot that uses Dijkstra's algorithm in C++ to locate the nearest hospital, assess risk levels based on symptoms, and provide tailored recommendations. It suggests hospital visits for severe cases or online doctor appointments for minor issues, enhancing healthcare accessibility and convenience.",
        link: 'https://github.com/Vidii2003/Aarogiyam-Chatbot/blob/main/README.md'
    },
    {
        iconurl: pat,
        theme: 'btn-back-green',
        name: 'Personality Analysis webpage',
        description: "Personality Analysis Website is built using HTML, CSS, and PHP to help users discover their personality type by answering a series of questions. Based on a calculated score, the website provides results that highlight personality traits, enabling users to identify areas for personal growth and self-improvement.",
        link: 'https://github.com/Vidii2003/Personality-Analysis/blob/main/README.md'
    },
    {
        iconurl: ams,
        theme: 'btn-back-yellow',
        name: 'Accomodation management system',
        description: "Accommodation Management System is a secure website developed with HTML, CSS, JavaScript, PHP, and MySQL. It connects property owners and international tenants by enabling property listings, preference-based searches, rent history management, and online payments, simplifying the process of finding and managing accommodations.",
        link: 'https://github.com/Vidii2003/Accomodation-Management-System/blob/main/README.md'
    },
    {
        iconurl: leaf,
        theme: 'btn-back-blue',
        name: 'Plant Leaf Disease Detection',
        description: "Plant Disease Detection utilizes Convolutional Neural Networks (CNNs) to automatically analyze plant images, achieving over 90% accuracy in identifying diseases. This provides a quick and efficient solution to address agricultural challenges and improve crop health.",
        link: 'https://github.com/Vidii2003/Plant-Leaf-Disease-Detection/blob/main/README.md'
    },
    {
        iconurl: robo,
        theme: 'btn-back-orange',
        name: 'Robo Serve',
        description: "RoboServe is a dynamic website built with Python Flask and MongoDB Atlas to automate hospital robot scheduling. It enables medical professionals to access hospital details, request robots, and input patient data. Using K-Nearest Neighbors (KNN) and Random Forest classifiers, it optimizes robot allocation based on task severity, enhancing efficiency in healthcare delivery.",
        link: 'https://github.com/Vidii2003/Robo-Serves/blob/main/README.md'
    },
    {
        iconurl: lip,
        theme: 'btn-back-pink',
        name: 'Lipsync',
        description: "LipSync Automation integrates audio into video by aligning the speech in the audio track with the lip movements in the video. The system analyzes the provided audio and video inputs, detects facial movements, and synchronizes the lip motions to match the speech, ensuring natural and seamless audio-visual output. This enhances video quality and improves user engagement.",
        link: './Projects'
    },
];