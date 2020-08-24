/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './index.css';

const VisualContentWithVideoYoutube : React.FC = () => {
  const [player, setPlayer] = useState<any>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      enablejsapi: 1,
      fs: 0,
      autoplay: 1,
      controls: 0,
      // 'autohide': 1,
      showinfo: 0,
      // 'wmode': 'opaque',
      rel: 0,
      loop: 1,
      playlist: 'TgOu00Mf3kI',
      start: 20,
    } as any,
  };

  const onPlayerReady = (event:any) => {
    event.target.playVideo();
    event.target.mute();
    setPlayer(event.target);
  };
  const act = (play:string) => {
    if (play === 'pause') player.pauseVideo();
    if (play === 'play') player.playVideo();
    const playButton = document.getElementById('play-button');
        playButton?.classList.toggle('on');
        setPlayVideo(!playVideo);
  };

  const volumeMute = () => {
    if (player.isMuted() === true) {
      player.unMute();
    } else if (player.isMuted() === false) {
      player.mute();
    }
    const volumeMute = document.getElementById('volume-mute');
        volumeMute?.classList.toggle('on');
        if (volumeMute?.classList.contains('on')) {
          player.isMuted();
        }
  };

  return (
    <div className="visual_content visual_3">
      <a href="#" tabIndex={-1} />
      <div className="buttons">
        <div className="button on" id="play-button" onClick={playVideo ? () => act('play') : () => act('pause')} />
        <div id="volume-mute" onClick={() => volumeMute()} />
      </div>
      <div className="video-container">
        <YouTube videoId="TgOu00Mf3kI" opts={opts} onReady={onPlayerReady} />
      </div>
    </div>
  );
};
export default VisualContentWithVideoYoutube;
