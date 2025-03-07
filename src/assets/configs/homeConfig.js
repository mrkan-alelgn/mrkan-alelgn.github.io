import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Mrkan Alelgn</strong>
        </h1>,
    titles: [
        "Full Stack Developer",
        "Software Engineer",
    ],
    about: {
        start: "I'm a computer engineering graduate with 6+ years of web development experience. " +
            "I'm passionate about building robust applications, learning new technologies, " +
            "and delivering high-quality solutions that exceed client expectations.",
        exit: "I'm highly skilled in React/Redux, Next.js, Node/Express, and various databases like MongoDB, MySQL, and PostgreSQL. " +
            "I also work with TailwindCSS, Bootstrap, Material UI, and have experience with testing frameworks."
    },
    workTimeline: [
        {
            id: "work-5",
            title: "Senior Full-stack Developer",
            company: "Superstruct.tech",
            description: "Worked on the Superstruct.tech internal dashboard, developed 2 slack apps, worked on an AI powered disney attractions finder",
            date: "Nov 2023 - Nov 2024",
            icon: <BiRocket/>,
            tags: ["React", "Nodejs", "Express", "Mongodb","Firebase", "Material UI", "react testing library", "jest", "tape"]
        },
        {
            id: "work-4",
            title: "Senior Frontend Developer",
            company: "Outlier.org",
            description: "Added multiple features and fixed bugs across their repos",
            date: "May 2023 - Nov 2023",
            icon: <BiRocket/>,
            tags: ["React", "Bootstrap", "react testing library", "jest", "cypress", "history"]
        },
        {
            id: "work-3",
            title: "Senior Frontend Developer",
            company: "Titan Space Technologies",
            description: "Developed the landing page and experiment builder site for Titan Space Technologies.",
            date: "Nov 2022 - May 2023",
            icon: <DiCodeigniter/>,
            tags: ["React", "Next.js", "Firebase", "Storybook", "react testing library", "jest"]
        },
        {
            id: "work-2",
            title: "Full-stack Developer",
            company: "Paylando",
            description: "Maintained and developed new features for the Paylando admin dashboard.",
            date: "Aug 2021 - Nov 2022",
            icon: <FaMobileAlt/>,
            tags: ["React", "Ant Design", ".NET", "MSSQL", "azure"]
        },
        {
            id: "work-1",
            title: "Full-stack Developer",
            company: "Flo Hiring ",
            description: "Developed 3 iteration of MVPs using React, Node, and Mongodb.",
            date: "Jan 2022 - Oct 2022",
            icon: <GiCommercialAirplane/>,
            tags: ["React", "Node", "Express", "Mongodb", "Ant Design", "Stripe", "Mouseflow"]
        },
        {
            id: "work-0",
            title: ".NET Developer",
            company: "CNET Software Technologies PLC",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "May 2021 - Sep 2021",
            icon: <BsClipboardData/>,
            tags: [".NET", "C#", "MSSQL", "Bootstrap", "Jquery"]
        }
    ]
}


export default homeConfig