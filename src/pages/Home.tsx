import Banner from '@/components/Modules/HomeSections/Banner';
import HowItWorks from '@/components/Modules/HomeSections/HowItWorks';
import RideCTA from '@/components/Modules/HomeSections/RideCAT';
import SpecialOffers from '@/components/Modules/HomeSections/SpecialOffers';
import Testimonials from '@/components/Modules/HomeSections/Testimonials';
const Home = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <Testimonials/>
            <RideCTA/>
            <SpecialOffers/>
        </div>
    );
};

export default Home;