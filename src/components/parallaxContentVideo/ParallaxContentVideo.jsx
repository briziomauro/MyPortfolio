import React from 'react'
import StickyVideo from '../stickyVideo/StickyVideo';
import Overlay from '../overlay/Overlay';

const ParallaxContentVideo = ({ videoUrl, subheading, heading, children }) => {
    const imgPadding = 12;

    return (
        <div
            id='home'
            style={{
                paddingLeft: imgPadding,
                paddingRight: imgPadding,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyVideo videoUrl={videoUrl} imgPadding={imgPadding} />
                <Overlay heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    )
}

export default ParallaxContentVideo