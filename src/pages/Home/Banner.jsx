import bannerImg2 from '../../assets/images/banner2.jpg'
import "./Banner.css";
const Banner = () => {
    return (
        <div className='relative w-full h-full'>
            <div className='banner-main'>
                <img src={bannerImg2} className='max-w-full h-auto' alt="" />
            </div>
            <div className='absolute top-1/3 left-3 md:left-5'>
                <h2 className='text-xl md:text-5xl font-medium text-gray-200'>Best Food Delivery <br /><span className='text-[#FF3131] text-2xl md:text-7xl font-bold italic'>At Night</span><br />In The City !</h2>
            </div>
        </div>
    );
};

export default Banner;