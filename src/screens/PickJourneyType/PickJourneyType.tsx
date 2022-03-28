import { useState } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { JourneyTypes, selectJourneyType, JourneyTypeState, setJourneyType } from '../../app/slices/journeyTypeSlice';

export default function PickJourneyType() {
  const journeyTypeStore = useAppSelector(selectJourneyType)
  const dispatch = useAppDispatch();
  const [journeyTypeState, setJourneyTypeState] = useState<JourneyTypeState>(journeyTypeStore)

  return (
    <Screen>
      <Text variant="h1">Pick Journey Type</Text>

      {JourneyTypes.map(journeyType => {
        return(
          <label key={journeyType}>
            <Styled.PlayerInputRadio
              type="radio"
              name="journeyType"
              value={journeyType}
              // TODO - dodac inne warunki disablowania decapitation np. level cap
              onChange={(e) => setJourneyTypeState({ ...journeyTypeState, journeyType: e.target.value })}
              checked={journeyTypeState.journeyType === journeyType}
            />
            {journeyType}
          </label>
        )
      })}
      
      {journeyTypeState.journeyType && <Styled.GoNext to="/" onClick={() => dispatch(setJourneyType(journeyTypeState.journeyType as keyof JourneyTypeState))}>⤜ Next →</Styled.GoNext>}
    </Screen>
  );
}
