import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';

export default function TitleScren() {
  return (
    <Screen>
      <Text variant="h1">Cursed City</Text>

      <Text variant="h2" textAlign="center">
        <Styled.AppLink to="continue-journey">Continue Journey</Styled.AppLink>
      </Text>
      <br />
      <Text variant="h2" textAlign="center">
        <Styled.AppLink to="new-journey">New Journey</Styled.AppLink>
      </Text>
    </Screen>
  );
}
