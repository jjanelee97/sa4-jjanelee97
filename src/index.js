import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';
import youtubeSearch from './youtube-api';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    youtubeSearch('pixar').then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
    this.search('pixar');
    this.search = debounce(this.search, 300);
  }
  search(text) {
    youtubeSearch(text).then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }


  render() {
    return (
      <div id="view">
        <SearchBar onSearchChange={text => this.search(text)} />
        <div id="video-layout">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }); }} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
