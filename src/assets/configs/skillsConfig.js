import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiStorybook,
    SiRedux,
    SiCsharp,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiFirebase,
    SiJest
} from "react-icons/si";
import { BiTestTube } from "react-icons/bi";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiNextdotjs size={50}/>,
            text: "Next.js"
        },
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiNodedotjs size={50}/>,
            text: "Node.js"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiExpress size={50}/>,
            text: "Express"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiRedux size={50}/>,
            text: "Redux"
        }
    ],
    complementarySkills: [
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML5"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS3"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiTailwindcss size={50}/>,
            text: "TailwindCSS"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiBootstrap size={50}/>,
            text: "Bootstrap"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiStorybook size={50}/>,
            text: "Storybook"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiCsharp size={50}/>,
            text: "C#"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiMongodb size={50}/>,
            text: "MongoDB"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "PostgreSQL"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiGit size={50}/>,
            text: "Git"
        },
        {
            id: "skills-19",
            className: "skill-icon",
            icon: <SiFirebase size={50}/>,
            text: "Firebase"
        },
        {
            id: "skills-20",
            className: "skill-icon",
            icon: <SiJest size={50}/>,
            text: "Jest"
        },
        {
            id: "skills-21",
            className: "skill-icon",
            icon: <BiTestTube size={50}/>,
            text: "Testing Library"
        }
    ]
}

export default skillsConfig
