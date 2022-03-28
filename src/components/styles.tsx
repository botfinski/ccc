import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppLink = styled(Link)`
  color: ${props => props.theme.textColor};
  text-decoration: none;
`;

export const GoNext = styled(AppLink)`
  width: 100%;
  margin-top: auto;
  justify-self: center;
  align-self: center;
  background: transparent;
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.textColor};
  text-transform: uppercase;
  font-family: ${props => props.theme.typography.h1};
  font-size: 1.2em;
  padding: 0.5em;
  text-align: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
`;

export const PlayerInputText = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 0.5em;
`;

export const PlayerInputRadio = styled.input`
  width: 50px;
  height: 50px;
  margin-bottom: 3em;
`;

export const PlayerInputCheckbox = styled.input`
  width: 50px;
  height: 20px;
  margin-bottom: 3em;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > * {
    width: 50%;
  }
`;

