import React, { Component } from 'react';
import styled from 'styled-components';

class Child extends Component {
  render() {
    return (
      <Button {...this.props}>Click</Button>
    );
  }
}

const Button = styled.button`
  margin: 0 auto;
  width: 150px;
  border: none;
  padding: 18px;
  border-radius: 56px;
  background: ${(props) => {
    return props.status === "standard" ? "green" : "red"
  }};
  color: #fff;
  font-size: 18px;
  font-weight: lighter;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export default Child;
