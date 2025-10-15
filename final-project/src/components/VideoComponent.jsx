import React, { useRef, useEffect } from 'react';

function VideoComponent() {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrap = wrapperRef.current,
      vid = videoRef.current;

    if (!wrap || !vid) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (e) => {
          try {
            if (e.isIntersecting && e.intersectionRatio >= 0.5) {
              await vid.play();
            } else {
              vid.pause();
            }
          } catch {}
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    io.observe(wrap);
    return () => {
      io.disconnect();
      vid.pause();
    };
  }, []);

  return (
    <div className='my-4'>
      <div
        ref={wrapperRef}
        className='aspect-video  overflow-hidden shadow-md'
      >
        <video
          ref={videoRef}
          className='w-full h-full object-cover'
          muted
          playsInline
          preload='auto'
          loop
        >
          <source
            src='https://res.cloudinary.com/dhabf8kqn/video/upload/v1760533717/3163534-hd_1920_1080_30fps_wct6qf.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoComponent;
