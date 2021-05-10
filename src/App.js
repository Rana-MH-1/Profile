
import './style.css';
//import './Component/Profile/Adress.css';
import {ProfileImage} from './Component/Profile/ProfilePhoto';
import {FullName} from './Component/Profile/FullName';
import {Adress} from './Component/Profile/Address';

function App() {
  return (
    <div className="profile">
      <ProfileImage/>
      <div className='note'>
        <FullName/>
        <Adress/>
      </div>
    </div>
  );
}

export default App;
