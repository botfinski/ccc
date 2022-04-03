import { useState } from 'react'
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';
import { useAppSelector } from '../../app/hooks';
import { selectPlayers, PlayersState } from '../../app/slices/playersSlice';
import { selectLeader, LeaderState } from '../../app/slices/leaderSlice';
import { Phases, Phase0, Phase1, Phase2, Phase3, Phase4 } from './Phases/Phases';

export default function Turn() {
  const [currentPhase, setCurrentPhase] = useState(0);

  const leaderStore = useAppSelector(selectLeader);
  const playersStore = useAppSelector(selectPlayers);

  return (
    <Screen>
      <Text variant="h1">The Turn</Text>
      <Text variant="turnLeaderInfo" textAlign='center'>{`Leader: ${playersStore[leaderStore.leader as keyof PlayersState]}`}</Text>

      {
        Phases.filter(phase => phase.id === currentPhase).map(phase => {
          switch (phase.id) {
            case 0:
              return <Phase0 key={phase.id} />
            case 1:
              return <Phase1 key={phase.id} />
            case 2:
              return <Phase2 key={phase.id} />
            case 3:
              return <Phase3 key={phase.id} />
            case 4:
              return <Phase4 key={phase.id} />
            default:
              return <Text>error</Text>;
          }
        })
      }

      <button onClick={() => setCurrentPhase(currentPhase === 4 ? 0 : currentPhase + 1)} >next phase</button>
    </Screen>
  );
}
