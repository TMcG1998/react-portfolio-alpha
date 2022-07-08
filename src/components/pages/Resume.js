import React from "react";
import ResumePdf from "../../assets/pdf/Resume Template 1.pdf";

const projectList = [
    // project 1
    {
        image: 'https://user-images.githubusercontent.com/85321444/173249017-dad11953-a67d-4e36-98de-f76dbf34a39f.jpg',
        title: 'Tech-Blog',
        deployLink: 'https://immense-anchorage-51967.herokuapp.com/',
        gitLink: 'https://github.com/TMcG1998/tech-blog-challenge'
    },
    // project 2
    {
        image: '',
        title: 'E-Commerce Backend',
        deployLink: '',
        gitLink: 'https://github.com/TMcG1998/ecommerce-website'
    },
    // project 3
    {
        image: '',
        title: 'Employee Tracker Database',
        deployLink: '',
        gitLink: 'https://github.com/TMcG1998/employee-tracker-database'
    },
    // project 4
    {
        image: 'https://user-images.githubusercontent.com/85321444/173248243-9efa2d31-4dc0-467d-bf13-4f4e7ba5d8f9.jpg',
        title: 'Socialmoodia',
        deployLink: 'https://sheltered-eyrie-00891.herokuapp.com/',
        gitLink: 'https://github.com/infojunkie01/socialmoodia'
    },
    // project 5
    {
        image: 'https://user-images.githubusercontent.com/85321444/163284766-0b438f68-3555-4aca-aad8-9b07e340009f.jpg',
        title: 'Off the Hook',
        deployLink: 'https://jonghwa101.github.io/off-the-hook/',
        gitLink: 'https://github.com/jonghwa101/off-the-hook'
    },
    // project 6
    {
        image: 'https://user-images.githubusercontent.com/85321444/178082435-8b02c37a-43b1-4b02-b7c3-4126d15bee88.jpg',
        title: 'Note Taker',
        deployLink: 'https://warm-atoll-27132.herokuapp.com/notes',
        gitLink: 'https://github.com/TMcG1998/note-taker'
    }
]

export default function Resume() {
    return (
        <div>
            <p>
                Due to school and personal side-quests I've been exposed to many different libraries, but here are some that I've worked with recently:
            </p>
            <ul>
                <li>
                    JavaScript
                </li>
                <li>
                    Node.js
                </li>
                <li>
                    Express.js
                </li>
                <li>
                    Sequelize
                </li>
                <li>
                    React
                </li>
            </ul>
            Click <a href={ResumePdf}>here</a> to see my full resume.
        </div>
    )
}