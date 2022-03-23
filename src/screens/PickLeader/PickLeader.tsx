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
import { selectPlayers, PlayersState } from '../../app/slices/playersSlice';

export default function PickLeader() {
  const leaderStore = useAppSelector(selectLeader);
  const playersStore = useAppSelector(selectPlayers);
  const dispatch = useAppDispatch();
  const [leaderState, setLeaderState] = useState<LeaderState>(leaderStore)

  const handleLeaderSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const selected = Object.keys(playersStore).find(key => playersStore[key as keyof PlayersState] === e.target.value)

    setLeaderState({ ...leaderState, leader: selected })
  }

  return (
    <Screen>
      <Text variant="h1">Pick Leader</Text>

      {Object.entries(playersStore).map(player => {
        const [playerKey, playerVal] = player

        return (
          playerVal && <label key={playerKey}>
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

      {leaderState.leader && <Styled.GoNext to="/" onClick={() => dispatch(setLeader(leaderState.leader as keyof LeaderState))}>⤜ Next →</Styled.GoNext>}
    </Screen>
  );
}
