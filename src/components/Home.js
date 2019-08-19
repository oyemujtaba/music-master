import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';
import { getArtist , getTracks} from './../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import NavbarPage from './Navbar';
import Navbar from './Navbar';
class Home extends Component {

  // state = { artist: null, tracks: [] }

  componentDidMount() {
    this.searchArtist('bruno mars');
  }

  searchArtist = (artistQuery) => {
    this.props.actions.getArtist(artistQuery)
    .then(res=>{
      if(res.artists.items.length > 0)
      {
        this.props.actions.getTracks(res.artists.items[0].id)
      }
    
    })
  }


 

  render() {
    const {artist,tracks} = this.props;
    return (
      <div>
       
        <div className="example1">
          <h1 style={{ fontSize: 40 }}>MUSIC MASTER BY MUJJI</h1>
        </div>
        <hr />
        <div style={{display:'inline-flex',textAlign:'end'}}>
        <Search searchArtist={this.searchArtist} />
        <Navbar/>
        <hr/>
        </div>
             <br/>
             

        {
          artist && artist.id ? 
          <Artist artist={artist} />
          : null
        }
        <Tracks tracks={tracks} /> 
      </div>
    )

  }
}

const mapStateToProps =(state) => ({
  artist: state.artist,
  tracks: state.tracks
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getArtist, getTracks
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);