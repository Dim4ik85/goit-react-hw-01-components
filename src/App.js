import React from "react";

import Profile from "./components/Profile/Profile";
import user from "./data/user.json" ;

import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/Statistics/Statistics";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";

import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={statisticalData} />;
            
        <FriendList friends={friends} />
      
        <TransactionHistory items={transactions} />;

    </div>
    
    
  );
};
 export default App;














// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
