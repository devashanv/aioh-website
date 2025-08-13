import * as React from 'react';

import GradientText from '../../blocks/TextAnimations/GradientText/GradientText';

import NavBar from '../common/NavBar';
import HeroTitle from './HeroTitle';


const HeroSection: React.FC = () => {
    return (
        <>
            {/* navbar */}
            <section
                className='w-full h-[100dvh] bg-[linear-gradient(125deg,_#011524_0%,_#002D5A_50%,_#010A12_100%)] rounded-xl'>
                <NavBar currentPath="/" />

                <div
                    className='mt-30'>
                    <GradientText
                        colors={["#078BD6","#02ec97","#02ec97","#02ec97","#078BD6",]}
                        animationSpeed={5}
                        showBorder={false}
                        className="custom-class text-[90px]">
                        Live. Love. Laugh.
                    </GradientText>

                    <p 
                        className='text-white/80 text-2xl font-thin'>
                        Delivering <span className='text-primary'>Digital Solutions</span> with Proven Expertise.
                    </p>
                </div>

                <HeroTitle children="Live. Love. Laugh."/>
            </section>

        </>
    );
};

export default HeroSection;

