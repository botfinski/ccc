import React from 'react';
import styled from 'styled-components';

interface Props {
  variant?: string;
  className?: string;
  textAlign?: string;
}

interface PropStyles {
  textAlign?: string;
}

const H1 = styled.h1`
  margin: 0 auto 1em;
  font-size: 3em;
  font-family: ${props => props.theme.typography.h1};
  font-weight: normal;
  text-align: center;
`;

const H2 = styled.h2<PropStyles>`
  width: 100%;
  margin: 0 0 0.5em;
  font-size: 2em;
  font-family: ${props => props.theme.typography.h2};
  font-weight: normal;
  text-align: ${props => props.textAlign};
  line-height: 1.3em;
`;

const H3 = styled.h3<PropStyles>`
  width: 100%;
  margin: 0 0 .5em;
  font-size: 1.5em;
  font-family: ${props => props.theme.typography.h2};
  font-weight: normal;
  text-align: ${props => props.textAlign};
  line-height: 1.3em;
`;

const P = styled.p<PropStyles>`
  font-size: 1em;
  margin: 0 0 0.5rem 0;
  color: ${props => props.theme.color};
  text-align: ${props => props.textAlign};
`;

const Span = styled.span<PropStyles>`
  width: 100%;
  color: ${props => props.theme.color};
  text-align: ${props => props.textAlign};
`;

const TurnLeaderInfo = styled.p<PropStyles>`
  margin: 0 auto 1em;
  font-size: 1.5em;
  font-family: ${props => props.theme.typography.h1};
  font-weight: normal;
  text-align: ${props => props.textAlign};
`;

const PhaseTitle = styled.p<PropStyles>`
  margin: 0 auto 1em;
  font-size: 1.5em;
  font-family: ${props => props.theme.typography.h2};
  font-weight: normal;
  text-align: ${props => props.textAlign};
`;

const Text: React.FC<Props> = ({ variant, children, textAlign }) => {
  switch (variant) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2 textAlign={textAlign}>{children}</H2>;
    case 'h3':
      return <H3 textAlign={textAlign}>{children}</H3>;
    case 'turnLeaderInfo':
      return <TurnLeaderInfo textAlign={textAlign}>{children}</TurnLeaderInfo>;
    case 'body':
      return <P textAlign={textAlign}>{children}</P>;
    case 'phaseTitle':
      return <PhaseTitle textAlign={textAlign}>{children}</PhaseTitle>
    default:
      return <Span textAlign={textAlign}>{children}</Span>;
  }
};

export default Text;
