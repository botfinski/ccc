import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectJourneyType, JourneyTypes } from '../../../app/slices/journeyTypeSlice';
import * as Styled from '../../../components/styles'
import Text from '../../../components/Text/Text';

export const Phases = [
  {
    id: 0,
    name: 'Journey Phase',
    desc: 'nightfall step = +1 nightfall\n quest step - not applicable in HUNT'
  },
  {
    id: 1,
    name: 'Destiny Phase',
    desc: 'destiny roll dublet/tri/etc - out!'
  },
  {
    id: 2,
    name: 'Initiative Phase',
    desc: '- activation rolls step - roll white dice and apply to heroes cards \n - initiative step - leader take heroes & hostiles initiative cards, shuffle and deal \n\n\n OPTIONAL \n - gambit step - players can spend one activation dice and make Agility roll \n fail/success/crit rules - see page 24 \n if multiple players want to try gambit they do it in leader order'
  },
  {
    id: 3,
    name: 'Activation Phase',
    desc: '- heroes and hostiles specific \n reactions \n inspiration roll'
  },
  {
    id: 4,
    name: 'Event Phase',
    desc: 'determine journey end \n all heroes dead? / all alive heroes in extraction zone = END \n\n else CONTINUE'
  }
]




export const Phase0 = () => {
  const journeyType = useAppSelector(selectJourneyType).journeyType

  console.log(journeyType);

  return (
    <Styled.BorderedSection>
      <Text variant='phaseTitle' textAlign='center'>
        Journey Phase
      </Text>

      <Text variant="turnLeaderInfo">Nightfall step</Text>
      <Text>Move Nightfall token</Text>

      <Text variant="turnLeaderInfo">Quest step</Text>

      {
        journeyType === 'hunt' ? <Text>Hunt journey - nothing happens</Text> : <Text>not hunt</Text>
      }

    </Styled.BorderedSection>
  );
};


export const Phase1 = () => {
  return (
    <p>1111111111</p>
  );
};

export const Phase2 = () => {
  return (
    <p>22222222</p>
  );
};

export const Phase3 = () => {
  return (
    <p>33333333</p>
  );
};

export const Phase4 = () => {
  return (
    <p>4444444</p>
  );
};