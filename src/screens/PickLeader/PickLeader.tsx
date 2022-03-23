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
        const [key, val] = player

        return (
          val && <label key={key}>
            <Styled.PlayerInputRadio
              type="radio"
              name="leader"
              value={val}
              onChange={e => handleLeaderSelect(e)}
              checked={leaderState.leader === key}
            />
            {`${key}: ${val}`}
          </label>
        )
      })}

      {leaderState.leader && <Styled.GoNext to="/" onClick={() => dispatch(setLeader(leaderState.leader as keyof LeaderState))}>⤜ Next →</Styled.GoNext>}
    </Screen>
  );
}
