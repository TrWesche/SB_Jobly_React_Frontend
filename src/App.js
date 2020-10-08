import React from 'react';
import './App.css';
import JoblyNavBar from "./components/NavBar";
import Routes from "./routes/Routes";
import SessionContext from "./SessionContext";

function App() {
  return (
    <div className="App">
      <SessionContext.Provider value={{loggedIn: true, username:"testuser"}}>
        <JoblyNavBar />
        <Routes />
      </SessionContext.Provider>
    </div>
  );
}

export default App;
