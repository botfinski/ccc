import { useState } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Heroes, selectHeroes, HeroesState, setHeroes, setInitiativeTokens } from '../../app/slices/heroesSlice';

export default function PickHeroes() {
  const heroesStore = useAppSelector(selectHeroes)
  const dispatch = useAppDispatch();
  const [selectedHeroesState, setSelectedHeroesState] = useState<HeroesState>(heroesStore)

  const selectHero = (hero: string) => {
    if (!selectedHeroesState.heroes.includes(hero)) {
      setSelectedHeroesState(prevState => ({
        ...prevState,
        heroes: [...prevState.heroes, hero]
      }));
    } else {
      setSelectedHeroesState(prevState => ({
        ...prevState,
        heroes: selectedHeroesState.heroes.filter(arrayId => arrayId !== hero)
      }));
    }
  }

  const goNext = () => {
    dispatch(setHeroes(selectedHeroesState.heroes))
    dispatch(setInitiativeTokens(selectedHeroesState.initiativeTokens))
  };

  return (
    <Screen>
      <Text variant="h1">Pick Heroes</Text>

      <Styled.FlexContainer>
        {Heroes.map(hero => {
          return (
            <label key={hero}>
              <Styled.PlayerInputCheckbox
                type="checkbox"
                name="hero"
                value={hero}
                onChange={() => selectHero(hero)}
                checked={selectedHeroesState.heroes.includes(hero)}
                disabled={selectedHeroesState.heroes.length === 4 && !selectedHeroesState.heroes.includes(hero)}
              />
              {hero}
            </label>
          )
        })}
      </Styled.FlexContainer>

      {selectedHeroesState.heroes.length === 4 && <>
        <label>
          <Styled.PlayerInputCheckbox
            type="checkbox"
            name="init"
            onChange={() => setSelectedHeroesState(prevState => ({
              ...prevState,
              initiativeTokens: !prevState.initiativeTokens
            }))}
            checked={selectedHeroesState.initiativeTokens}
          />
          pick initiative tokens
        </label>
      </>}

      {selectedHeroesState.heroes.length === 4 && selectedHeroesState.initiativeTokens && <Styled.GoNext
        to="/journey-setup"
        onClick={() => goNext()}
      >⤜ Next →</Styled.GoNext>}
    </Screen>
  );
}
