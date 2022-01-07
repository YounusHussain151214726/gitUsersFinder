import logo from './logo.svg';
import './App.css';
import Users from './Components/Users'
import Inputfield from './Components/Inputfield'
import {Provider} from 'react-redux'
import store from './Redux/istore';
import Nav from './Components/Nav'
function App() {
  return (
    <div className="App">
<Nav />
      <Provider store={store}>

     <Users />
     <Inputfield />
     </Provider >
    </div>
  );
}

export default App;
