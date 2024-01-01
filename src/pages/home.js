import React from 'react';

function sendVote() {
    fetch('/api/vote')
      .then(response => response.json())
      .then(json => alert(json.text));
  }

const Home = () =>{
  return (
    <div>
      <h3>Home</h3>
      <div>
        <h2>Please press vote button after login for registering your vote!</h2>
        <button onClick={sendVote}>Vote</button>
      </div>
    </div>
  );
}
export default Home;
