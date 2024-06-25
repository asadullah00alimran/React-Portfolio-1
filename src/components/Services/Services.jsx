import './Services.css';
import themePattern from './../../assets/images/theme_pattern.svg';
import servicesData from './../../assets/images/services_data.js';
import arrowIcon from './../../assets/images/arrow_icon.svg';

const Services = () => {
    return (
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={themePattern} alt="" />
            </div>
            <div className="services-container">
                {servicesData.map((services, index)=>{
                    return <div key={index} className="services-format">
                        <h3>{services.s_no}</h3>
                        <h2>{services.s_name}</h2>
                        <p>{services.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrowIcon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Services;