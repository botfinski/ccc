import { Routes, Route } from 'react-router-dom';
import NewJourney from './screens/NewJourney/NewJourney';
import ContinueJourney from './screens/ContinueJourney/ContinueJourney';
import PickPlayers from './screens/PickPlayers/PickPlayers';
import TitleScren from './screens/TitleScreen/TitleScreen';
import PickLeader from './screens/PickLeader/PickLeader';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TitleScren />} />
      <Route path="/new-journey" element={<NewJourney />} />
      <Route path="/continue-journey" element={<ContinueJourney />} />
      <Route path="/pick-players" element={<PickPlayers />} />
      <Route path="/pick-leader" element={<PickLeader />} />
    </Routes>
  );
}

export default App;
