import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch  } from '../../app/hooks';
import { selectPlayers, changeInput1, changeInput2, changeInput3, changeInput4 } from '../../app/slices/playersSlice';

export default function PickPlayers() {
  const dispatch = useAppDispatch();
  
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputNr = e.target.name.charAt(e.target.name.length - 1);

    switch (inputNr) {
    case '1':
      dispatch(changeInput1(e.target.value));
      break;
    case '2':
      dispatch(changeInput2(e.target.value));
      break;
    case '3':
      dispatch(changeInput3(e.target.value));
      break;
    case '4':
      dispatch(changeInput4(e.target.value));
      break;
    default:
      console.log('Sorry');
    }
  };

  const players = useAppSelector(selectPlayers);

  return (
    <Screen>
      <Text variant='h1'>
        Pick Players
      </Text>

      <Styled.FormWrapper>
        <Text>player1</Text>
        <Styled.PlayerInput 
          type='text' 
          minLength={3} 
          maxLength={50} 
          name='player1' 
          onChange={e => onChange(e) }
          value={players.player1}
        />
        <Text>player2</Text>
        <Styled.PlayerInput 
          type='text' 
          minLength={3} 
          maxLength={50} 
          name='player2' 
          onChange={e => onChange(e) } 
          disabled={Boolean(!players.player1)}
          value={players.player2}
        />
        <Text>player3</Text>
        <Styled.PlayerInput 
          type='text' 
          minLength={3} 
          maxLength={50} 
          name='player3' 
          onChange={e => onChange(e) } 
          disabled={Boolean(!players.player2)}
          value={players.player3}
        />
        <Text>player4</Text>
        <Styled.PlayerInput 
          type='text' 
          minLength={3} 
          maxLength={50} 
          name='player4' 
          onChange={e => onChange(e) } 
          disabled={Boolean(!players.player3)}
          value={players.player4}
        />
      </Styled.FormWrapper>

      {players.player1 && <Styled.GoNext to="/">
          ⤜ Next →
      </Styled.GoNext>}
    </Screen>
  );
}