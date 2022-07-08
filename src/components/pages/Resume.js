import React from "react";
import ResumePdf from "../../assets/pdf/Resume Template 1.pdf";

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