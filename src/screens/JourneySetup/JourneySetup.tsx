import { useState } from 'react';
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSetup, SetupState, setSkyVessel, setSkyDiscoveryDeck, setCombatMap, setEncounterCards } from '../../app/slices/setupSlice';
import { JourneyTypes, selectJourneyType } from '../../app/slices/journeyTypeSlice';
import { selectQuestCard } from '../../app/slices/questCardSlice';
import { MapDataTypes, MapState, selectMap, setMap } from '../../app/slices/mapSlice';
import { MapData } from '../../app/mapData';

export default function JourneySetup() {
  const dispatch = useAppDispatch()

  const setupStore = useAppSelector(selectSetup)
  const mapStore = useAppSelector(selectMap)
  const { journeyType } = useAppSelector(selectJourneyType)
  const { fear, influence, gravestones } = useAppSelector(selectQuestCard)

  const [setup, setSetup] = useState<SetupState>(setupStore)
  const [localMap, setLocalMap] = useState<MapState>(mapStore)

  const goNext = () => {
    dispatch(setSkyVessel(setup.skyVessel))
    dispatch(setSkyDiscoveryDeck(setup.discoveryDeck))
    dispatch(setCombatMap(setup.combatMap))
    dispatch(setEncounterCards(setup.encounterCards))
    dispatch(setMap(localMap.map))
  };

  return (
    <Screen>
      <Text variant="h1">Journey Setup</Text>

      <Styled.Section>
        <Styled.SectionLabel>
          Setup The Skyvessel Board
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
          Setup The Quest Card
        </Styled.SectionLabel>

        <Styled.SectionDescription>
          <Text>{`Fear: ${fear}`}</Text><br />
          <Text>{`Influence: ${influence}`}</Text><br />
          <Text>Gravestones: {gravestones.length && <Text>boss</Text>}</Text>
        </Styled.SectionDescription>
      </Styled.Section>


      <Styled.Section>
        <Styled.SectionLabel>
          Build The Discovery Deck
        </Styled.SectionLabel>

        <Styled.SectionDescription>
          {journeyType === JourneyTypes.SCAVENGE ?
            (<Text>Scavenge journey - keep all cards</Text>) :
            (<Text>Not Scavenge journey - remove realmstone cards from the deck:<br /> 2x value 1, 3x value 2, 2x value 3</Text>)
          }
          <br />
          <br />
          <Text>Shuffle and place the deck face down nearby</Text>
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

        {
          journeyType !== JourneyTypes.DELIVERANCE ? <>
            <Styled.SectionDescription>
              Leader makes map roll (Destiny Dice)
            </Styled.SectionDescription>

            <Styled.Select
              onChange={(e) => setLocalMap({ map: e.target.value })}
              defaultValue={localMap.map}
            >
              {MapData[journeyType as MapDataTypes].map(map => (
                <option
                  key={map}
                  value={map}
                >
                  {map}
                </option>
              ))}
            </Styled.Select>
          </> : <Styled.SectionDescription>
            Leader builds exploration deck
          </Styled.SectionDescription>
        }

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
          Deploy hostiles next to mysterious objects.
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
