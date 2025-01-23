import React from 'react';
import "./video.css"; 

const Video = () => {
  return (
    <div className="video-container">
      <video controls preload="none" style={{ width: '100%' }}>
        <source src="/video/burg.mp4" type="video/mp4" />
        <track
          src="/path/to/subtitles.vtt" /* Replace with a valid .vtt file */
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
