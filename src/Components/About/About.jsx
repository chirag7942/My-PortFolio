import React from 'react'
import './About.css'
import theme_patten from '../../assets/theme_pattern.svg'
import myimage from '../../assets/myimage.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_patten} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
            <img src={myimage} alt="" />
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>I am chirag,a 4th year B.TECH student, pursuing my degree from Maharishi Dayanand University, Rohtak (Haryana). I took this field because of my undoubted interset in things like DEVELOPMENT, PROGRAMMING,GAME DESIGNING,etc. I born and brought up in Faridabad and did my schooling from Rawal Convent School, Faridabad (Haryana). 
                <br></br>
                <br></br>
                I am maintaining my GPA 8 above till date while focusing on other practical skills like programming, development and many of such. I have also worked on a PROJECT(fully mobile/smartphone controlled wheelchair) in my first year of college and also certified for that project from my college. Currently, I am seeing for internships/training programs to execute my skills practically for some company/organisation and to understand where I am stand right now in my field while working on some other projects. As I am a student of electronics branch so i am also familiar with the different electronics projects which made me better in both the fields. Also, at programming point of view,I have mastered C,C++ and OOPS skills and in development I know about HTML, C & CSS</p>
              </div>


              {/*SKILL-SET */}

              <div className="about-skills">

                <div className="about-skill">
                  <p>HTML & CSS</p>
                  <hr style={{width:"80%"}}/>
                </div>
                
                <div className="about-skill">
                  <p className='title-js'>JAVASCRIPT</p>
                  <hr style={{width:"70%"}}/>
                </div>

                <div className="about-skill">
                  <p className='title-react'>REACT JS</p>
                  <hr style={{width:"60%"}}/>
                </div>

                <div className="about-skill">
                  <p className='title-c'>C++</p>
                  <hr style={{width:"80%"}}/>
                </div>
              </div>
              </div>
              </div>


              {/*ACHIEVEMENTS */}

              <div className="about-achievements">

                <div className="about-achievement">
                  <h1>2</h1>
                  <p>CERTIFICATES OF INTERNSHIP</p>
                </div>

                <hr/>

                <div className="about-achievement">
                  <h1>5</h1>
                  <p>PROJECTS COMPLETED</p>
                </div>

                <hr/>

                <div className="about-achievement">
                  <h1>1</h1>
                  <p>CERTFICATE FOR REAL-LIFE PROJECT</p>
                </div>


                
              </div>

     </div> 
  );
}

export default About
