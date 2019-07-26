import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { _Login } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter,Link } from "react-router-dom";

  class Login extends Component {
    constructor(props){
        super(props);
      this.state={
        email: '',
        password: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this);       
    }

    validateForm() {
      return (
        this.state.email.length > 0 &&
        this.state.password.length > 0 
      );
    }

    handleChange = event => {
      event.persist();
      // console.log(this.state)
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      
      event.preventDefault();
      console.log("submmittt")
      if (this.validateForm()) {
      //  console.log(this.state);
       const loginData={
         email:this.state.email,
         password:this.state.password
       }
       this.props.actions._Login(loginData).then(res => {
         console.log("responseeeeeeeeeeeeee",res)
         if(res.success){
           console.log("histrouuu",this.props)
           this.props.history.push('/home')
         }
       }).catch(err =>{
        console.log("err in Login --", err)
      })
       
    }
  }
  
    render(){
        return (
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6" >
                  <form onSubmit={this.handleSubmit}>
                    <p className="h1 text-center mb-4">Login To Music Master</p>
                    <div >
                   
                        <MDBInput
                        label="enter your email"
                        placeholder="enter your email"
                        id="email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                      />
                      <MDBInput
                        label="Type your password"
                        id="password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn 
                      type='submit'
                      disabled={!this.validateForm()}
                      >
                        Login
                      </MDBBtn>
                    </div>
                  </form>
                  <p>Don't have an account? <Link to= '/signup'>Register now!</Link></p>
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
      _Login
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

// export default Login;