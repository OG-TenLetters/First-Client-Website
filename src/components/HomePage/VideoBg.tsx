"use client"

import React, { useEffect, useRef } from "react";


const VideoBg = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  return (
    <video
    ref={videoRef}
      className="absolute h-full w-full object-cover z-0 brightness-80 saturate-170"
      autoPlay
      loop
      muted
      playsInline
      src="/Bg_Truck.mp4"
    />
  );
};

export default VideoBg;