import React from 'react'
import StickyImage from '../stickyImage/StickyImage'
import Overlay from '../overlay/Overlay'

const ParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    const imgPadding = 12;

    return (
        <div
            style={{
                paddingLeft: imgPadding,
                paddingRight: imgPadding,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} imgPadding={imgPadding} />
                <Overlay heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    )
}

export default ParallaxContent