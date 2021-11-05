import './App.css';
import Counter from "./components/Counter";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.authentication.isAuthenticated);
  return (
    <div className="App">
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
      <Counter />
    </div>
  );
}

export default App;
