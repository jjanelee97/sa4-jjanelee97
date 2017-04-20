import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <div id="video-item">
      <li onClick={() => props.onVideoSelect(props.video)}>
        <img src={imgUrl} alt="video" />
        <div>{props.video.snippet.title}</div>
      </li>
    </div>
  );
};

export default VideoListItem;
