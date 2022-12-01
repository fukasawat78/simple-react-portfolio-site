import resumeData from '../resumeData';
import MotionHoc from "./MotionHoc";

const AboutComponent = () => {
  return (
    <section id="about">
       <div className="row">

          <div className="three columns">

             <img className="profile-pic"  src="../assets/profilepic.jpg" alt="" />

          </div>

          <div className="nine columns main-col">

             <h1>About Me</h1>
             <p>
             {
               resumeData.aboutme
             }
             </p>

             <div className="row">

                <div className="columns contact-details">

                <h1>Contact Details</h1>
                <p className="address">
                 <span>{resumeData.name}</span>
                   <br></br>
                    <span>
                   {resumeData.address}
                  </span>
                  <br></br>
                  <span>{resumeData.website}</span>
                  </p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const About = MotionHoc(AboutComponent);

export default About;
