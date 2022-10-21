import React from 'react'
import anime from 'animejs/lib/anime.es.js';

export default function Slider() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
        return images;
    }
    
    const images = importAll(require.context('../../assets/img/', false, /\.jpeg$/));
    anime({
        targets: '.dish',
        translateX: window.screen.width,
        duration: 4000,
        loop: true,
        easing: 'linear',
        autoplay: true,
    });
    return (
        <div id='slider' className='flex flex-row justify-evenly'>
            {Object.keys(images).map((key, indx) =>
                <img className='dish rounded-full h-32 w-32' src={images[key]} alt={key} />
            )}
        </div>
    )

}
