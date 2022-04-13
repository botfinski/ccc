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

export const GoBack = styled(GoNext)`
  margin-top: 0;
`

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
    margin-bottom: 2em;
  }
`;

export const Section = styled.div`
  display: grid; 
  grid-template-columns: 1fr .2fr;
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

export const Select = styled.select`
  max-width: 300px;
  padding: 0.5em;
  margin: 0.5em 0;
`