import React from 'react';
import Header from '../import/Header';
import Hero from '../import/Hero';
import Slider from '../import/Slider';

export default function Home() {
    return (
        <div id="bg" className='bg-eggshell'>
            <Header></Header>
            <main id="site-main">
                <Hero></Hero>
                <Slider></Slider>
            </main>
        </div>
    )
}
