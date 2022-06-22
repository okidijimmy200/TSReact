import React from 'react';
import DisplayText from './DisplayText';
import './App.css';

function App() {
  const getUserFullname = async (username: string):
    Promise<string> => {
      const userResponse = await fetch('http://jsonplaceholder.typicode.com/users');

      if(userResponse.ok) {
        const users = await userResponse.json();
        const userByName = users.find((usr: any) => {
          return usr.username.toLowerCase() === username;
        });
        return userByName.name;
      }
      return '';
    }
  return (
    <div className="App">
      <DisplayText getUserFullname={getUserFullname} />
    </div>
  );
}

export default App;
