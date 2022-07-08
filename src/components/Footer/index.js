import React from 'react';
import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default function Footer() {
  return (
    <IconContext.Provider value={ { size: 48 } }>
      <section className="container mt-5 mb-5">
      
            <div id="reach-out-div" className="row">
                <h3 id="contact" className="text-center">Reach Out</h3>
            </div>
            <div className="row mt-5">
              <BsLinkedin className='col-sm d-flex justify-content-end' width="48" height="48" />
              <BsGithub className='col-sm d-flex justify-content-center' width="48" height="48" />
              <BsMailbox  className='col-sm d-flex justify-content-start' width="48" height="48" />
            </div>
      </section>
    </IconContext.Provider>
  );
}