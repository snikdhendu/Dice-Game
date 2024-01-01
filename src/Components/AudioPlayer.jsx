import React, { Component } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import play and pause icons

class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.audioRef = React.createRef();
  }

  togglePlay = () => {
    this.setState(
      (prevState) => ({
        isPlaying: !prevState.isPlaying,
      }),
      () => {
        if (this.state.isPlaying) {
          this.audioRef.current.play();
        } else {
          this.audioRef.current.pause();
        }
      }
    );
  };

  render() {
    return (
      <div className="flex items-center">
        <audio ref={this.audioRef} src="your-audio-file.mp3" />
        <button
          onClick={this.togglePlay}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          {this.state.isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    );
  }
}

export default AudioPlayer;
