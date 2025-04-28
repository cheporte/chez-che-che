import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/pages/about.sass';

import RestaurantButton from '@components/RestaurantButton';

import AboutIntro from '@components/About/AboutIntro';
import ContactInfo from '@components/About/ContactInfo';
import MapEmbed from '@components/About/MapEmbed';
import CommentForm from '@components/About/CommentForm';

const About: React.FC = () => {
    return (
        <div className='about'>
            <Link to='/'>
                <RestaurantButton variant='ghost' size='md'>Go Back</RestaurantButton>
            </Link>
            <AboutIntro />
            <ContactInfo />
            <MapEmbed />
            <CommentForm />
        </div>
    );
}

export default About;