import {Route, Routes, Switch} from 'react-router-dom';
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

function App() {
  return (
      <div>
          <Routes>
              <Route path='/' element={<AllMeetup />}/>
              <Route path='/new-meetup' element={<NewMeetup />}/>
              <Route path='/favorites' element={<Favorites />}/>
          </Routes>
      </div>
  );
}

export default App;
