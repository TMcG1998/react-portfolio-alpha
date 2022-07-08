import React from 'react';
import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './style.css';

export default function Footer() {
  return (
    <IconContext.Provider value={ { size: 48 } }>
      <section className="container mt-5 mb-5">
      
            <div id="reach-out-div" className="row">
                <h3 id="contact" className="text-center">Reach Out</h3>
            </div>
            <div className="row mt-5">
              <a href="https://www.linkedin.com/in/thomas-mcgovern-076a4a199/" target="_blank" className='col-sm d-flex justify-content-end'>
                <BsLinkedin />
              </a>
              <a href="https://github.com/TMcG1998" target="_blank" className='col-sm d-flex justify-content-center'>
                <BsGithub />
              </a>
              <a href="mailto: thomasjmcgovern98@gmail.com" className='col-sm d-flex justify-content-start'>
                <BsMailbox />
              </a>
            </div>
      </section>
    </IconContext.Provider>
  );
}