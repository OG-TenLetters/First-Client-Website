"use client";

import React, { useEffect, useRef } from "react";

interface VideoBgProps {
  webmSrc: string;
  mp4Src: string;
  posterSrc: string;
}

const VideoBg = ({ webmSrc, mp4Src, posterSrc }: VideoBgProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  return (
    <video
      ref={videoRef}
      className="absolute z-0 h-full w-full object-cover brightness-80 saturate-170"
      autoPlay
      loop
      muted
      playsInline
      poster={posterSrc}
    >
      <source src={webmSrc} type="webm" />
      <source src={mp4Src} type="video/mp4" />
      Sorry, your browser doesn&rsquo;t support embedded videos.
    </video>
  );
};

export default VideoBg;
