// import { useState, useEffect } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import { useAppSelector } from '../../app/hooks';
// import { selectPlayers, PlayersState } from '../../app/slices/playersSlice';
// import { selectLeader, LeaderState } from '../../app/slices/leaderSlice';
import * as Styled from '../../components/styles';
import { selectHistory } from '../../app/slices/historySlice';


export default function History() {
  const history = useAppSelector(selectHistory).history

  return (
    <Screen>
      <Text variant="h1">History</Text>

      <Styled.GoBack
        to="/"
      >⤜ Go Back →</Styled.GoBack>

      <ul>
        {
          Object.values(history).map((entry, i) => <li key={i}>
            <Text variant="turnLeaderInfo" textAlign='left'>{entry.type}</Text>
            <Text>{`Extraction Event: ${entry.extractionEvent}`}</Text>
            <br />
            <Text>{`Map: ${entry.map}`}</Text>
            <br />
            <Text>{`Times played: ${entry.count}`}</Text>
          </li>
          )
        }
      </ul>
    </Screen>
  );
}
