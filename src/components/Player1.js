import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPlayer1 = styled.div`
  width: 0;
  height: 0;
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  font-size: 12px;
  border-left: 1.4em solid transparent;
  border-right: 1.4em solid transparent;
  border-top: 2em solid red;
`;

const StyledText = styled.div`
  position: absolute;
  margin-top: -2em;
`;

class Player1 extends Component {
  render = () => {
    return (
      <StyledPlayer1>
        <StyledText>P1</StyledText>
      </StyledPlayer1>
    );
  };
}

export default Player1;