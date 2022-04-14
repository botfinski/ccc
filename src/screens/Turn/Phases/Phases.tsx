import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectJourneyType, JourneyTypes } from '../../../app/slices/journeyTypeSlice';
import * as Styled from '../../../components/styles'
import Text from '../../../components/Text/Text';

export const Phases = [
  {
    id: 0,
    name: 'Journey Phase',
  },
  {
    id: 1,
    name: 'Destiny Phase',
  },
  {
    id: 2,
    name: 'Initiative Phase',
  },
  {
    id: 3,
    name: 'Activation Phase',
  },
  {
    id: 4,
    name: 'Event Phase',
  }
]

export const Phase0 = () => {
  const { journeyType } = useAppSelector(selectJourneyType)

  return (
    <Styled.BorderedSection>
      <Text variant='phaseTitle' textAlign='center'>
        Journey Phase
      </Text>

      <Text variant="turnLeaderInfo">Nightfall step</Text>
      <Text>Move Nightfall token</Text>

      <Text variant="turnLeaderInfo">Quest step</Text>

      {
        journeyType === JourneyTypes.HUNT ? <Text>Hunt journey - nothing happens</Text> : <Text>{`Journey type: ${journeyType}`}</Text>
      }
    </Styled.BorderedSection>
  );
};


export const Phase1 = () => {
  return (
    <Styled.BorderedSection>
      <Text variant='phaseTitle' textAlign='center'>
        Destiny Phase
      </Text>

      <Text variant="turnLeaderInfo">Destiny roll</Text>
      <Text>Remove all doubles, triples etc.</Text>
    </Styled.BorderedSection>
  );
};

export const Phase2 = () => {
  return (
    <Styled.BorderedSection>
      <Text variant='phaseTitle' textAlign='center'>
        Initiative Phase
      </Text>

      <Text variant="turnLeaderInfo">Activation Rolls Step</Text>
      <Text>Roll white dice and apply to heroes cards</Text>

      <Text variant="turnLeaderInfo">Initiative Step</Text>
      <Text>Leader take heroes and hostiles initiative cards, shuffle and deal to combat track</Text>

      <Text variant="turnLeaderInfo">Gambit Step - Optional</Text>
      <Text>
        Players can spend one activation dice and make Agility roll <br />
        fail/success/crit rules - see page 24 <br />
        If multiple players want to try gambit they do it in Leader order
      </Text>
    </Styled.BorderedSection>
  );
};

interface Phase3Props {
  handleQuestToken: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Phase3: React.FC<Phase3Props> = ({ handleQuestToken }) => {
  return (
    <Styled.BorderedSection>
      <Text variant='phaseTitle' textAlign='center'>
        Activation Phase
      </Text>

      <Text>Heroes and hostiles specific <br /> reactions <br /> inspiration roll</Text><br />
      <button onClick={e => handleQuestToken(e as any)}>quest token + 1</button>
    </Styled.BorderedSection>
  );
};

interface Phase4Props {
  handleNightfallToken: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Phase4: React.FC<Phase4Props> = ({ handleNightfallToken }) => {
  return (
    <Styled.BorderedSection>
      <Text variant='phaseTitle' textAlign='center'>
        Event Phase
      </Text>

      <Text>
        determine journey end <br />
        all heroes dead/out of action OR every hero NOT dead/out of action is in the extraction zone = journey ends<br />
        <br />
        If the journey continues the Leader makes a event roll /table p32/ nightfall + 1 button
      </Text>
      <button onClick={e => handleNightfallToken(e as any)}>nightfall token + 1</button>
    </Styled.BorderedSection>
  );
};