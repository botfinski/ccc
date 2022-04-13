// import { useState, useEffect } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
// import { useAppSelector } from '../../app/hooks';
// import { selectPlayers, PlayersState } from '../../app/slices/playersSlice';
// import { selectLeader, LeaderState } from '../../app/slices/leaderSlice';
import * as Styled from '../../components/styles';


export default function JourneysEnd() {


  return (
    <Screen>
      <Text variant="h1">Journey&apos;s End</Text>

      <Styled.BorderedSection>
        <Text variant="turnLeaderInfo">Determine success</Text>
        <Text>consult journeys victory condition</Text>
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
        <Text>spend realmstone to buy empowerments p36, trade, disccard the rest</Text><br />
      </Styled.BorderedSection>

      <Styled.GoNext
        to="/"
      >⤜ End →</Styled.GoNext>
    </Screen>
  );
}
