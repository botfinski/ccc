import { useState } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Heroes, selectHeroes, HeroesState, setSelectedHeroes, setInitiativeTokens } from '../../app/slices/heroesSlice';

export default function PickHeroes() {
  const heroesStore = useAppSelector(selectHeroes)
  const dispatch = useAppDispatch();
  const [selectedHeroesState, setSelectedHeroesState] = useState<HeroesState>(heroesStore)

  const selectHero = (hero: string) => {
    if (!selectedHeroesState.selectedHeroes.includes(hero)) {
      setSelectedHeroesState(prevState => ({
        ...prevState,
        selectedHeroes: [...prevState.selectedHeroes, hero]
      }));
    } else {
      setSelectedHeroesState(prevState => ({
        ...prevState,
        selectedHeroes: selectedHeroesState.selectedHeroes.filter(arrayId => arrayId !== hero)
      }));
    }
  }

  const goNext = () => {
    dispatch(setSelectedHeroes(selectedHeroesState.selectedHeroes))
    dispatch(setInitiativeTokens(selectedHeroesState.initiativeTokens))
  };

  return (
    <Screen>
      <Text variant="h1">Pick Heroes</Text>

      <Styled.FlexContainer marginBottom='100px'>
        {Heroes.filter(hero => !hero.isDead).map(hero => {

          return (
            <label key={hero.id}>
              <Styled.PlayerInputCheckbox
                type="checkbox"
                name="hero"
                value={hero.id}
                onChange={() => selectHero(hero.id)}
                checked={selectedHeroesState.selectedHeroes.includes(hero.id)}
                disabled={selectedHeroesState.selectedHeroes.length === 4 && !selectedHeroesState.selectedHeroes.includes(hero.id)}
              />
              {hero.name}<br />
              level: {hero.level} | experience: {hero.experience}/2
            </label>
          )
        })}
      </Styled.FlexContainer>

      {selectedHeroesState.selectedHeroes.length === 4 && <>
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

      {selectedHeroesState.selectedHeroes.length === 4 && selectedHeroesState.initiativeTokens && <Styled.GoNext
        to="/journey-setup"
        onClick={() => goNext()}
      >⤜ Next →</Styled.GoNext>}
    </Screen>
  );
}
