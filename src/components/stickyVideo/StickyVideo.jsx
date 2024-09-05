import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const StickyVideo = ({ videoUrl, imgPadding }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

    return (
        <motion.div
            style={{
                height: `calc(100vh - ${imgPadding * 2}px)`,
                top: imgPadding,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.video
                src={videoUrl}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
            />
        </motion.div>
    );
};

export default StickyVideo;
