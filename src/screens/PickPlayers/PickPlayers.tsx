import { useState } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectPlayers,
  PlayersState,
  setPlayers
} from '../../app/slices/playersSlice';

export default function PickPlayers() {
  const playersStore = useAppSelector(selectPlayers);
  const [players, setPlayersState] = useState<PlayersState>(playersStore)
  const dispatch = useAppDispatch();

  const handlePlayersForm: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPlayersState({ ...players, [e.target.name]: (e.target as HTMLInputElement).value })
  }

  return (
    <Screen>
      <Text variant="h1">Pick Players</Text>

      <Styled.FormWrapper >
        {Object.keys(playersStore).map((player: string, i) => {

          return (
            <label key={player}>
              {player}
              <Styled.PlayerInputText
                type="text"
                name={player}
                minLength={3}
                maxLength={50}
                onChange={e => handlePlayersForm(e)}
                value={players[player as keyof PlayersState]}
                disabled={player === 'player1' ? false : Boolean(!players[(`player${i}`) as keyof PlayersState])}
                autoComplete="off"
              />
            </label>
          )
        })}
      </Styled.FormWrapper>

      {players.player1 && <Styled.GoNext to="/pick-leader" onClick={() => dispatch(setPlayers(players))}>⤜ Next →</Styled.GoNext>}
    </Screen>
  );
}
