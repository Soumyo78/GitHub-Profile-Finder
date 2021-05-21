import "./App.css";
import { useState, useEffect, useRef } from "react";
import SearchBarComponent from './components/SearchBarComponent/index';
import ProfileCardComponent from './components/ProfileCardComponent/index';

const debounce = (callback, delay) => {
  let timerId;
  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => callback.call(context, ...args), delay);
  };
};

function App() {
  const debouncedSearch = useRef();

  useEffect(() => {
    debouncedSearch.current = debounce(fetchUser, 800);
  }, []);

  const [profileData, setProfileData] = useState("Enter a Github Id");

  const onChangeUsernameHandler = (e) => {
    const value = e.target.value;
    debouncedSearch.current(value);
  };

  const fetchUser = (username) => {
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProfileData(json);
      });
  };

  return (
    <div className="app-main-container">
      <h1>Github Profile Finder</h1>
      <SearchBarComponent onChangeHandler={onChangeUsernameHandler}/>
      <ProfileCardComponent profileData={profileData}/>
    </div>
  );
}

export default App;
