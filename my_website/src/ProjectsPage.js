import React from 'react';
import Fridgenerate from './fridgenerate.jpg';
import Punchstarter from './punchstarter.jpg';
import $ from 'jquery';

const Projects = () => {

  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 1000);
});

  return (
    <section id="Projects">
      <div className="Projects-left">
        <div className="Project-title">
          <h1>Projects</h1>
        </div>
        <nav className="Project-nav">
            <ul>
                <li><a className="underlined-white"href="#Profile">Profile</a></li>
                <li><a className="underlined-white"href="#Skills">Skills</a></li>
                <li><a className="underlined-white"href="#Projects">Projects</a></li>
                <li><a className="underlined-white"href="#Contact">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="Projects-right">
      <a href="https://github.com/BrodyCur/Fridgenerate" target="_blank"><img src={Fridgenerate} alt="screenshot of Fridgenerate project" /></a>
      <a href="https://github.com/kevinpatel22/crowdfunder" target="_blank"><img src={Punchstarter} alt="screenshot of Punchstarter project" /></a>
      </div>
    </section>
    
  );
}

export default Projects;