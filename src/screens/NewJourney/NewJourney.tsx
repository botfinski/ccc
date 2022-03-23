import { useState } from 'react';
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setRuleset, RulesetState, Rulesets, selectRuleset } from '../../app/slices/rulesetSlice';

function NewJourney() {
  const rulesetStore = useAppSelector(selectRuleset);
  const dispatch = useAppDispatch();
  const [rulesetState, setRulesetState] = useState<RulesetState>(rulesetStore)

  return (
    <Screen>
      <Text variant="h1">New Journey</Text>

      <Text variant="h3" textAlign='center'>Pick ruleset</Text>

      {
        Rulesets.map(ruleset => {
          return(
            <label key={ruleset}>
              <Styled.PlayerInputRadio
                type="radio"
                name="leader"
                value={ruleset}
                onChange={(e) => setRulesetState({ ...rulesetState, ruleset: e.target.value })}
                defaultChecked={rulesetState.ruleset === ruleset}
              />
              {ruleset}
            </label>
          )
        })
      }

      <Styled.GoNext
        to="/pick-players"
        onClick={() => dispatch(setRuleset(rulesetState.ruleset))}
      >
        ⤜ Next →
      </Styled.GoNext>
    </Screen>
  );
}

export default NewJourney;
