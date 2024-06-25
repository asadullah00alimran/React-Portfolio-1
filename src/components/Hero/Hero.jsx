import './Hero.css';
import profImage from './../../assets/images/profile_img.svg';

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profImage} alt="" />
            <h1>Hi, <span>I am Asadullah Al Imran,</span> Software Engineer based on Bangladesh.</h1>
            <p>I am a Software Engineer from Bangladesh with 2 years of professional expriences in different companies like AmaderCode Lab, Techsolutions and Jolshiri Abashon.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">Download Resume</div>
            </div>
        </div>
    );
};

export default Hero;