import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter,Link } from "react-router-dom";
import { _Signup } from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      (this.state.password === this.state.confirmPassword)
    );
  }

  handleSubmit = event => {
    // console.log(this.validateForm())
    // console.log(this.state)
    event.preventDefault();
    console.log("submmittt")
    if (this.validateForm()) {
      console.log("validatre", this.state)
      const formdata = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      this.props.actions._Signup(formdata).then(res =>{
        if(res.success){
          this.props.history.push('/home')
        }
      }).catch(err =>{
        alert("err in signup component --", err.message)
      })
    }
    // console.log('props',this.props)
  }

  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <MDBContainer >
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h1 text-center mb-4">Signup</p>
              <div className="red-text">
                <MDBInput
                  label="Enter a username"
                  icon="envelope"
                  group
                  validate
                  error="wrong"
                  type="name"
                  id="name"
                  success="right"
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Enter email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  id="email"
                  error="wrong"
                  success="right"
                  onChange={this.handleChange}

                />
                <MDBInput
                  label="Type your password"
                  type="password"
                  icon="lock"
                  group
                  id="password"
                  validate
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Confirm your password"
                  type="password"
                  icon="lock"
                  group
                  id="confirmPassword"
                  validate
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn type='submit'
                  disabled={!this.validateForm()}
                >
                  Create your account</MDBBtn>
              </div>
            </form>
            <p>or <Link to='/login'>Login to continue!</Link> </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      _Signup
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
// export default Signup;