import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';

function NewJourney() {
  return (
    <Screen>
      <Text variant='h1'>
        New Journey
      </Text>

      <Text variant='h3'>
        Pick ruleset
      </Text>
      <div>
        <input type="radio" id="default" name="ruleset" value="default" defaultChecked />
        <label htmlFor="default">Default</label>
      </div>
      <br/>

      <div>
        <input type="radio" id="hard" name="ruleset" value="hard" disabled />
        <label htmlFor="hard">Hard</label>
      </div>
      <br/>

      <Styled.GoNext to="/pick-players">
          ⤜ Next →
      </Styled.GoNext>
    </Screen>
  );
}

export default NewJourney;
