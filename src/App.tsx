import { Routes, Route } from 'react-router-dom';
import NewJourney from './screens/NewJourney/NewJourney';
import ContinueJourney from './screens/ContinueJourney/ContinueJourney';
import PickPlayers from './screens/PickPlayers/PickPlayers';
import TitleScren from './screens/TitleScreen/TitleScreen';
import PickLeader from './screens/PickLeader/PickLeader';
import PickJourneyType from './screens/PickJourneyType/PickJourneyType';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TitleScren />} />
      <Route path="/new-journey" element={<NewJourney />} />
      <Route path="/continue-journey" element={<ContinueJourney />} />
      <Route path="/pick-players" element={<PickPlayers />} />
      <Route path="/pick-leader" element={<PickLeader />} />
      <Route path="/pick-journey-type" element={<PickJourneyType />} />
    </Routes>
  );
}

export default App;
