import React, { Component } from 'react';

class Tracks extends Component {
    state = {
        playing: false,
        audio: null,
        playingPreviewUrl: null,
    }

    trackIcon = track =>{
        if(!track.preview_url){
            return <span>N/A</span>
        }
        if(this.state.playing && this.state.playingPreviewUrl === track.preview_url){
            return <span>| |</span>
        }
        return <sapn>&#9654;</sapn>
        
    }

    playAudio = previewUrl => () => {

        const audio = new Audio(previewUrl);

        if (!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                audio
            })
        } else {
            this.state.audio.pause()
            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({
                    playing: false,
                })
            } else {
                audio.play()
                {
                    this.setState({
                        audio,
                        playingPreviewUrl: previewUrl,
                    })
                }
            }
        }
    }

    render() {
        const { tracks } = this.props;

        return (
            <div >
                {tracks.map(track => {
                    const { id, name, album, preview_url } = track;
                    return (
                        <div key={id}
                            onClick={this.playAudio(preview_url)}
                            className="tracks"
                        >
                            <img src={album.images[0].url}
                                alt='trackImage'
                                className="track_image"
                            />
                            <p className="track_name">{name}</p>
                            <p className="track_icon">{this.trackIcon(track)}</p>
                        </div>
                    )
                })}
            </div>
        )

    }
}

export default Tracks;