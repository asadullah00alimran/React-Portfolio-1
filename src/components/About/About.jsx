import './About.css';
import themePattern from './../../assets/images/theme_pattern.svg';
import profileImage from './../../assets/images/about_profile.svg';

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={themePattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profileImage} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                        <p>Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '80%'}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: '20%'}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: '50%'}} /></div>
                        <div className="about-skill"><p>PHP</p><hr style={{width: '70%'}} /></div>
                        <div className="about-skill"><p>Laravel</p><hr style={{width: '75%'}} /></div>
                        <div className="about-skill"><p>jQuery</p><hr style={{width: '60%'}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF PROFESSIONAL EXPRIENCES</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;