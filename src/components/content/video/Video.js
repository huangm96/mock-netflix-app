import React from "react";
import "./Video.css";
import { BsPlayFill, BsInfoCircleFill } from "react-icons/bs";

function Video() {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="movie-video">
        <source src="video/M3GAN.mp4" type="video/mp4" />
      </video>
      <div className="video-info">
        <p className="video-name">M3GAN</p>
        <div className="video-buttons">
          <div className="video-button video-play-button">
            <BsPlayFill />
            <p>Play</p>
          </div>
          <div className="video-button video-info-button">
            <BsInfoCircleFill />
            <p>More Info</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
