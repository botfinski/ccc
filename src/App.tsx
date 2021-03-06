import { Routes, Route } from 'react-router-dom';
import NewJourney from './screens/NewJourney/NewJourney';
import ContinueJourney from './screens/ContinueJourney/ContinueJourney';
import PickPlayers from './screens/PickPlayers/PickPlayers';
import TitleScren from './screens/TitleScreen/TitleScreen';
import PickLeader from './screens/PickLeader/PickLeader';
import PickJourneyType from './screens/PickJourneyType/PickJourneyType'
import PickHeroes from './screens/PickHeroes/PickHeroes'
import JourneySetup from './screens/JourneySetup/JourneySetup'
import Turn from './screens/Turn/Turn'
import JourneysEnd from './screens/JourneysEnd/JourneysEnd';
import History from './screens/History/History';



function App() {
  return (
    <Routes>
      <Route path="/" element={<TitleScren />} />
      <Route path="/new-journey" element={<NewJourney />} />
      <Route path="/continue-journey" element={<ContinueJourney />} />
      <Route path="/pick-players" element={<PickPlayers />} />
      <Route path="/pick-leader" element={<PickLeader />} />
      <Route path="/pick-journey-type" element={<PickJourneyType />} />
      <Route path="/pick-heroes" element={<PickHeroes />} />
      <Route path="/journey-setup" element={<JourneySetup />} />
      <Route path="/the-turn" element={<Turn />} />
      <Route path="/history" element={<History />} />
      <Route path="/journeys-end" element={<JourneysEnd />} />
    </Routes>
  );
}

export default App;
