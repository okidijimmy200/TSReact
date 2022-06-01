import React from "react";
import ReactDOM from "react-dom/client";
// import GuestList from './state/GuestList'
// import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";

const App = () => {
    return (
        <div>
        {/* <GuestList /> */}
        <UserSearch />
    </div>
    )
}

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

