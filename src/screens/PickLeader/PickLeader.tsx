import { useState } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectLeader,
  setLeader,
  LeaderState
} from '../../app/slices/leaderSlice';
import { selectPlayers, PlayersState, selectPickedPlayers } from '../../app/slices/playersSlice';

export default function PickLeader() {
  const leaderStore = useAppSelector(selectLeader);
  const playersStore = useAppSelector(selectPlayers);
  const pickedPlayersStore = useAppSelector(selectPickedPlayers);
  const dispatch = useAppDispatch();
  const [leaderState, setLeaderState] = useState<LeaderState>(leaderStore);

  const handleLeaderSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const selected = Object.keys(playersStore).find(key => playersStore[key as keyof PlayersState] === e.target.value)
    setLeaderState({ ...leaderState, leader: selected })
  }

  return (
    <Screen>
      <Text variant="h1">Pick Leader</Text>

      {Object.entries(pickedPlayersStore).map(player => {
        const [playerKey, playerVal] = player

        return (
          <label key={playerKey}>
            <Styled.PlayerInputRadio
              type="radio"
              name="leader"
              value={playerVal}
              onChange={e => handleLeaderSelect(e)}
              checked={leaderState.leader === playerKey}
            />
            {`${playerKey}: ${playerVal}`}
          </label>
        )
      })}

      {leaderState.leader && <Styled.GoNext to="/pick-journey-type" onClick={() => dispatch(setLeader(leaderState.leader as keyof LeaderState))}>⤜ Next →</Styled.GoNext>}
    </Screen>
  );
}
