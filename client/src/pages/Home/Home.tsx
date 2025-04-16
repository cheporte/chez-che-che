import React from 'react';

import Hero from '@components/Home/Hero';
import MenuPreview from '@components/Home/MenuPreview';
import ChefsHighlight from '@components/Home/ChefsHighlight';
import Testimonial from '@components/Home/Testimonial';
import CallToAction from '@components/Home/CallToAction';

const Home: React.FC = () => {
    return (
        <div id='home'>
            <Hero />
            <MenuPreview />
            <ChefsHighlight />
            <Testimonial />
            <CallToAction />
        </div>
    );
}

export default Home;