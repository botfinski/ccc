// import { useState } from 'react';
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { setRuleset, RulesetState, Rulesets, selectRuleset } from '../../app/slices/rulesetSlice';

export default function JourneySetup() {
  // const rulesetStore = useAppSelector(selectRuleset);
  // const dispatch = useAppDispatch();
  // const [rulesetState, setRulesetState] = useState<RulesetState>(rulesetStore)

  return (
    <Screen>
      <Text variant="h1">Journey Setup</Text>

      <Styled.Section>
        <Styled.SectionLabel>
          Setup Skyvessel Board
        </Styled.SectionLabel>

        <Styled.SectionDescription>
          Put Nightfall Token and Quest Token at 0
        </Styled.SectionDescription>

        <Styled.SectionCheckboxLabel>
          <Styled.PlayerInputCheckbox
            type="checkbox"
            name="skyvessel"
          // onChange={}
          // checked={selectedHeroesState.initiativeTokens}
          />
          <br />
          done
        </Styled.SectionCheckboxLabel>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionLabel>
          Quest Card
        </Styled.SectionLabel>

        <Styled.SectionDescription>
          Fear/Influence/Gravestones (load data)
        </Styled.SectionDescription>
      </Styled.Section>


      <Styled.Section>
        <Styled.SectionLabel>
          Build Discovery Deck
        </Styled.SectionLabel>

        <Styled.SectionDescription>
          Show here journey specific instructions
        </Styled.SectionDescription>

        <Styled.SectionCheckboxLabel>
          <Styled.PlayerInputCheckbox
            type="checkbox"
            name="skyvessel"
          // onChange={}
          // checked={selectedHeroesState.initiativeTokens}
          />
          <br />
          done
        </Styled.SectionCheckboxLabel>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionLabel>
          Prepare Combat Map
        </Styled.SectionLabel>

        <Styled.SectionDescription>
          Leader makes map roll (Destiny Dice)<br />
          Map select dropdown
        </Styled.SectionDescription>

        <Styled.SectionCheckboxLabel>
          <Styled.PlayerInputCheckbox
            type="checkbox"
            name="skyvessel"
          // onChange={}
          // checked={selectedHeroesState.initiativeTokens}
          />
          <br />
          done
        </Styled.SectionCheckboxLabel>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionLabel>
          Encounter Cards
        </Styled.SectionLabel>
        <Styled.SectionDescription>
          Place Combat Track<br />
          Shuffle and draw Encounter cards.<br />
          Deploy hostiles
        </Styled.SectionDescription>

        <Styled.SectionCheckboxLabel>
          <Styled.PlayerInputCheckbox
            type="checkbox"
            name="skyvessel"
          // onChange={}
          // checked={selectedHeroesState.initiativeTokens}
          />
          <br />
          done
        </Styled.SectionCheckboxLabel>
      </Styled.Section>


      {/* <Styled.GoNext
        to="/pick-players"
        onClick={() => dispatch(setRuleset(rulesetState.ruleset))}
      >
        ⤜ Next →
      </Styled.GoNext> */}
    </Screen>
  );
}
