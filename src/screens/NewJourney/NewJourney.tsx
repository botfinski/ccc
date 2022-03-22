import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setRuleset } from '../../app/slices/rulesetSlice';

function NewJourney() {
  const dispatch = useAppDispatch();

  return (
    <Screen>
      <Text variant="h1">New Journey</Text>

      <Text variant="h3">Pick ruleset</Text>
      {/* TODO - zrobić tu inputy zczytujace ilosc rulsetow z typu i sczytywanie z reduxa stanu zaznaczonego radio buttona -> potem to ustawic w dispachu */}
      <div>
        <input
          type="radio"
          id="default"
          name="ruleset"
          value="default"
          defaultChecked
        />
        <label htmlFor="default">Default</label>
      </div>
      <br />

      <div>
        <input type="radio" id="hard" name="ruleset" value="hard" disabled />
        <label htmlFor="hard">Hard</label>
      </div>
      <br />

      <Styled.GoNext
        to="/pick-players"
        onClick={() => dispatch(setRuleset('default'))}
      >
        ⤜ Next →
      </Styled.GoNext>
    </Screen>
  );
}

export default NewJourney;
