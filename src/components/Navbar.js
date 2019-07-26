import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _onLogout } from '../actions';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }
    onLogout() {
        this.props.actions._onLogout()
            .then(res => {
                if (res) {
                    this.props.history.push('/login')
                }
            })
    }

    render() {

        return (
            <MDBContainer >
                <MDBRow>

                <MDBCol>
                    <MDBBtn onClick={this.onLogout} >
                        Signout
                    </MDBBtn>
                </MDBCol>

                </MDBRow>
               

            </MDBContainer >

        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            _onLogout
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));