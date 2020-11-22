import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const globalFontSize = 16;

export const GlobalStyles = createGlobalStyle`
  body {
  width: 100%;
  height: 100vh;
    margin: 0;
    font-family: Roboto, sans-serif; // FixMe if font-family will be changed
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    user-select: none;
    direction: ${props => props.direction};
    overflow: hidden;
  }
  
  button {
    font-family: Roboto, sans-serif;
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    border: none;
    outline: none;
    margin-top: 5px;
  }
  input {
    border: none;
    outline: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background: #faf8ef;
  text-align: center;
  font-size: 25px;
`;

export const Title = styled.h1`
  color: navy;
  text-align: center;
  font-size: 25px;
`;

export const DrugNDropWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: white;
`;

export const DrugNDropGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border: 3px solid palevioletred;
  flex-direction: column;
  width: 250px;
  padding: 5px;
  margin-right: 5px;
  border-radius: 15px;
  padding-right: 10px;
  min-height: 200px;
  //background: ${({ isDragging }) => isDragging ? 'deepskyblue' : 'darkslateblue'};
  transition: 2s;
  background-image: ${({ isDragging }) => isDragging ? 
  'radial-gradient(circle, #092c89, #004198, #0055a3, #0068ad, #247bb5)' : 
  'radial-gradient(circle, #0a0a63, #130962, #1a0761, #1f065f, #24055e)'};
 
`;


export const DrugNDropItem = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 25px;
  border-radius: 15px;
  margin-bottom: 3px;
  
  width: 50%;
  padding: 2px;
  color: ${({ isDragging }) => isDragging ? 'orange' : 'white'};
  transition: 2s;
`;
