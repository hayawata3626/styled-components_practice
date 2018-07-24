import React, { Component } from 'react';
import styled from 'styled-components';
import Child from './Child';
import logo from './logo.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      status: true
    }
  }
  changeBtnStatus(state) {
    this.setState({status: !this.status})
  }
  render() {
    return (
      <Wrapper>
        <Logo><img src={logo} alt=""/></Logo>
        <Title>Hello, styled-components!!!</Title>
        <Child status={this.state.status} changeBtnStatus={this.changeBtnStatus}/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: #323232;
  padding: 20px;
  height: 100vh;
  text-align: center;
`;

const Logo = styled.p`
  width : 100px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-family: "Meiryo";
  text-align: center;
  margin: 0;
  font-weight: lighter;
`;


export default App;
