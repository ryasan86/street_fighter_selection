import styled from 'styled-components';

const StyledGrid = styled.div`
  border: 2px solid blue;
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-gap: 15px;
  padding: 5px;
  justify-items: center;
  outline: none;
`;

export { StyledGrid };
