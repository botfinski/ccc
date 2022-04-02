import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from './Text/Text';

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

interface PropStyles {
  marginBottom?: string;
}

export const FlexContainer = styled.div<PropStyles>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: ${props => props.marginBottom};

  & > * {
    width: 50%;
  }
`;

export const Section = styled.div`
  display: grid; 
  grid-template-columns: auto .5fr;
  grid-template-rows: 1fr .5fr;
  gap: 0px 0px; 
  grid-template-areas: 
    "label checkbox"
    "desc checkbox"; 
  width: 100%;
  margin-bottom: 2em;
  padding: 1em;
  border: 2px solid ${props => props.theme.textColor};
`;

export const SectionLabel = styled.h2`
  margin: 0 0 .5em;
  font-family: ${props => props.theme.typography.h2};
  font-weight: normal;
  line-height: 1.3em;
  grid-area: label;
`;

export const SectionDescription = styled.span`
  grid-area: desc;
`;

export const SectionCheckboxLabel = styled.label`
  grid-area: checkbox;
  margin: auto;
  text-align: center;

  & > input {
    margin-bottom: 0;
  }
`;


export const BorderedSection = styled.div`
  width: 100%;
  margin-bottom: 1em;
  padding: 1em;
  border: 2px solid ${props => props.theme.textColor};
`;
