import { useState } from 'react';
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSetup, SetupState, setSkyVessel, setSkyDiscoveryDeck, setCombatMap, setEncounterCards } from '../../app/slices/setupSlice';

export default function JourneySetup() {
  const setupStore = useAppSelector(selectSetup)
  const dispatch = useAppDispatch();
  const [setup, setSetup] = useState<SetupState>(setupStore)

  const goNext = () => {
    dispatch(setSkyVessel(setup.skyVessel))
    dispatch(setSkyDiscoveryDeck(setup.discoveryDeck))
    dispatch(setCombatMap(setup.combatMap))
    dispatch(setEncounterCards(setup.encounterCards))
  };

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
            name="skyVessel"
            onChange={() => setSetup(prevState => ({
              ...prevState,
              skyVessel: !prevState.skyVessel
            }))}
            checked={setup.skyVessel}
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
            name="discoveryDeck"
            onChange={() => setSetup(prevState => ({
              ...prevState,
              discoveryDeck: !prevState.discoveryDeck
            }))}
            checked={setup.discoveryDeck}
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
            name="combatMap"
            onChange={() => setSetup(prevState => ({
              ...prevState,
              combatMap: !prevState.combatMap
            }))}
            checked={setup.combatMap}
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
            name="encounterCards"
            onChange={() => setSetup(prevState => ({
              ...prevState,
              encounterCards: !prevState.encounterCards
            }))}
            checked={setup.encounterCards}
          />
          <br />
          done
        </Styled.SectionCheckboxLabel>
      </Styled.Section>


      {Object.values(setup).every(Boolean) && <Styled.GoNext
        to="/the-turn"
        onClick={() => goNext()}
      >
        ⤜ Start Journey →
      </Styled.GoNext>}
    </Screen>
  );
}
