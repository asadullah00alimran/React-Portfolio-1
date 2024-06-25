import './MyWorks.css';
import themePattern from './../../assets/images/theme_pattern.svg';
import myWorksData from './../../assets/images/mywork_data.js';
import arrowIcon from './../../assets/images/arrow_icon.svg';

const MyWorks = () => {
    return (
        <div className='myworks'>
            <div className="myworks-title">
                <h1>My Latest Works</h1>
                <img src={themePattern} alt="" />
            </div>
            <div className="myworks-container">
                {myWorksData.map((myworks, index)=>{
                    return <img key={index} src={myworks.w_img} alt="" />
                })}
            </div>
            <div className="myworks-showmore">
                <p>Show More</p>
                <img src={arrowIcon} alt="" />
            </div>
        </div>
    );
};

export default MyWorks;