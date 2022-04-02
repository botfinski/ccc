import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ScreenWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 1em;
  font-size: 18px;
  color: ${props => props.theme.textColor};
  background: linear-gradient(229deg, #9c0101, #660200, #2c0403);
`;

const theme = {
  main: 'mediumseagreen',
  textColor: '#fff',
  typography: {
    h1: 'willowregular',
    h2: 'nhl_phoenixregular'
  }
};

const Screen: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ScreenWrapper>
        {children}
      </ScreenWrapper>
    </ThemeProvider>
  );
};

export default Screen;
