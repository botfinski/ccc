// import { useState, useEffect } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import { useAppSelector } from '../../app/hooks';
// import { selectPlayers, PlayersState } from '../../app/slices/playersSlice';
// import { selectLeader, LeaderState } from '../../app/slices/leaderSlice';
import { JourneyTypes, selectJourneyType } from '../../app/slices/journeyTypeSlice';
import * as Styled from '../../components/styles';


export default function JourneysEnd() {

  const { journeyType } = useAppSelector(selectJourneyType);

  console.log(journeyType);



  return (
    <Screen>
      <Text variant="h1">Journey&apos;s End</Text>

      <Styled.BorderedSection>
        <Text variant="turnLeaderInfo">Determine success</Text>
        <Text>consult journeys victory condition<br /><br />{`${journeyType} victory conditions`}<br /><br /></Text>

        {journeyType === JourneyTypes.HUNT && (
          <Text>
            If the journey ends while there is at least one hero not out of action, and 10 or more hostile champions have been slain, the heroes are successful.<br />
            Any other result is a failure
          </Text>
        )}




        <br />
        <br />
        <Text variant="turnLeaderInfo">Resolve Extraction event</Text>
        <Text>Leader: quest dice roll - see rules p.34</Text><br />
        <Text>rules p34</Text><br />
        <Text>--extraction event input--</Text>
        <br />
        <br />
        <Text variant="turnLeaderInfo">Determine survival</Text>
        <Text>--heroes dead? checkboxy--</Text>
        <br />
        <br />
        <Text variant="turnLeaderInfo">Remove tokens and counters</Text>
        <Text>keep treasure and empowerment cards</Text>
        <br />
        <br />
        <Text variant="turnLeaderInfo">Resolve consequences</Text>
        <Text>fear/influence change</Text><br />
        <Text>gain experience and/or traits</Text><br />

        {journeyType === JourneyTypes.HUNT && (
          <>
            <Text>{`${journeyType} consequences`}</Text>
            <Text>Gain experience /p34 rulebook/</Text>
            <Text>influence -2, fear +1</Text>
          </>
        )}

        <Text>spend realmstone to buy empowerments p36, trade, disccard the rest</Text><br />

      </Styled.BorderedSection>

      <Styled.GoNext
        to="/"
      >⤜ End →</Styled.GoNext>
    </Screen>
  );
}
