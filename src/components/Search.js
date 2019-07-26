import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class Search extends Component {
    state={
        artistQuery:''
    }

    updateArtistQuery = event => {
        this.setState({
          artistQuery: event.target.value
        })
      }

      handleKeyPress = event => {
        if (event.key === 'Enter') {
          this.searchArtist();
        }
      }

      searchArtist=()=>{
          this.props.searchArtist(this.state.artistQuery);
      }
    render() {
        return (
            <div style={{display:"-webkit-inline-box"}} >
              
                <MDBInput
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search Artist" />
                <MDBBtn  onClick={this.searchArtist}>Search</MDBBtn>
            </div>
        )
    }
}
export default Search;