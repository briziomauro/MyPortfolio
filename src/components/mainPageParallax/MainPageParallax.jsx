import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import ParallaxContent from '../parallaxContent/ParallaxContent'
import AboutMe from '../aboutMe/AboutMe'
import Technologies from '../technologies/Technologies'
import 'bootstrap-icons/font/bootstrap-icons.css';
import ParallaxContentVideo from '../parallaxContentVideo/ParallaxContentVideo'
import { t } from 'i18next'
import { HeroParallax } from '../heroParallax/HeroParallax'
import { projects } from '../../data/Data'
import { useTranslation } from 'react-i18next'

const MainPageParallax = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black">
            <div className='fixed flex w-full z-50'>
                <Navbar />
            </div>
            <ParallaxContentVideo
                videoUrl="/video/video-stars.mp4"
                subheading="MAURO BRIZIO"
                heading="FULL-STACK DEVELOPER"
            >
                <AboutMe />
            </ParallaxContentVideo>
            <HeroParallax projects={projects} />
            <ParallaxContent
                imgUrl="/img/stack-bg.jpg"
                subheading={t('stack-text')}
                heading="STACK"
            >
                <Technologies />
            </ParallaxContent>
        </div>
    )
}

export default MainPageParallax