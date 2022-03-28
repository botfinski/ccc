import { useState } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import * as Styled from '../../components/styles';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Heroes, selectHeroes, HeroesState, setHeroes } from '../../app/slices/heroesSlice';

export default function PickHeroes() {
  const heroesStore = useAppSelector(selectHeroes)
  const dispatch = useAppDispatch();
  const [selectedHeroesState, setSelectedHeroesState] = useState<HeroesState>(heroesStore)

  const selectHero = (hero: string) => {
    if(!selectedHeroesState.heroes.includes(hero)) {
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

  return (
    <Screen>
      <Text variant="h1">Pick Heroes</Text>

      {Heroes.map(hero => {
        return(
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
      
      {selectedHeroesState.heroes.length === 4 && <Styled.GoNext 
        to="/" 
        onClick={() => dispatch(setHeroes(selectedHeroesState.heroes))}
      >⤜ Next →</Styled.GoNext>}
    </Screen>
  );
}
