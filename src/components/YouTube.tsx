/**
 * The YouTube component is used to embed a YouTube video in a web page.
 * You are required to provide the video ID (i.e. the part at the end of the 
 * YouTube URL) as well as the title to display at the top of the embedded video.
 * 
 * Properties (? = optional, * = required):
 * - id: String (*)     = The YouTube video ID (from the video's URL)
 * - title: String (?)  = The title to display for the embedded video (default: "")
 * 
 * Example Usage:
 * (1) <YouTube id="w-PRhPMp-h8"/>
 * (2) <YouTube id="w-PRhPMp-h8" title="SEMS - Ocean Inspection & Maintenance"/>
 */

import React, { useState } from 'react';

/**
 * Creates a static embed for a YouTube video. Pulls the image ahead of time,
 * and adds a button that switches to an auto-play embed.
 */
export const YouTube: React.FunctionComponent<{
  id: string;
  title?: string;
}> = ({ id, title }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      // Be compatible with gatsby-remark-responsive-iframe
      className="gatsby-resp-iframe-wrapper"
      style={{
        // HD aspect ratio with adjustment for border
        paddingBottom: 'calc(56.25% - 4px)',
        height: 0,
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid #000',
      }}
    >
      {playing ? (
        <PlayingVideo id={id} />
      ) : (
        <Placeholder id={id} title={title} setPlaying={setPlaying} />
      )}
    </div>
  );
};

export default YouTube;

const Placeholder: React.FunctionComponent<{
  id: string;
  title?: string;
  setPlaying: (val: boolean) => unknown;
}> = ({ id, title, setPlaying }) => {

  const videoPageUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <React.Fragment>
      <a
        href={videoPageUrl}
        onClick={ev => {
          ev.preventDefault();
          setPlaying(true);
        }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 45%), url(https://i.ytimg.com/vi/${id}/0.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'block',
        }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280.000000 1126.000000"
          preserveAspectRatio="xMidYMid meet"
          aria-labelledby="youtube-player-play-button-title"
          style={{
            position: 'absolute',
            // Vertically center our 4em self
            width: '4em',
            top: '50%',
            left: '50%',
            marginTop: '-2em',
            marginLeft: '-2em',
            transform: 'rotate(90deg)',
            filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.8))'
          }}
        >
          <title id="youtube-player-play-button-title">
            Click to play video
          </title>
          <g
            transform="translate(0.000000,1126.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
          >
            <path
              d="M6270 11244 c-36 -7 -103 -32 -150 -55 -115 -57 -243 -184 -316 -314
                -27 -49 -331 -576 -674 -1170 -343 -594 -909 -1575 -1258 -2180 -1345 -2331
                -2486 -4306 -3132 -5420 -766 -1322 -733 -1257 -733 -1465 -1 -109 3 -135 26
                -206 71 -213 255 -367 502 -419 61 -13 795 -15 5865 -15 5070 0 5804 2 5865
                15 286 60 479 251 526 519 21 122 -6 298 -63 411 -12 22 -323 564 -693 1205
                -4249 7363 -5082 8803 -5129 8861 -149 188 -407 283 -636 233z"
            />
          </g>
        </svg>
      </a>

      {title && (
        <a
          href={videoPageUrl}
          style={{
            position: 'relative',
            display: 'inline-block',
            color: 'white',
            textShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
            padding: '1em',
            fontWeight: 'bold',
          }}
        >
          {title}
        </a>
      )}
    </React.Fragment>
  );
};

const PlayingVideo: React.FunctionComponent<{ id: string }> = ({ id }) => (
  <iframe
    src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    frameBorder={0}
  ></iframe>
);