import resumeData from '../resumeData';
import MotionHoc from "./MotionHoc";

const ContactUsComponent = () => {
  return (
    <section id="contact">
        <div className="row section-head">
          <div className="twelve columns collapsed">
            <h1 className="lead">
            Feel free to contact me for any work
            </h1>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :
                {resumeData.linkedinId}
              </h4>
            </div>
          </aside>
        </div>
      </section>
      );
};

const ContactUs = MotionHoc(ContactUsComponent);

export default ContactUs;