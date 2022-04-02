import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';

export default function TitleScren() {
  return (
    <Screen>
      <Text variant="h1">Continue Journey</Text>

      <Text variant="h3">Empty</Text>

      <Styled.GoNext to="/">⤜ Go back →</Styled.GoNext>
    </Screen>
  );
}
