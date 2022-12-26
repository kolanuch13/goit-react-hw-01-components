import './App.css';
// components
import Profile from './Profile/Profile';
import Statistic from './Statistic/Statistic';
import FriendList from './FriendList/Friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
// data
import user from './Profile/user.json'
import data from './Statistic/data.json'
import friends from "./FriendList/friends.json";
import transactions from "./TransactionHistory/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <div className="wrapper">  
        <Statistic title="Upload stats" data={data}/>
        <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </div>
    </div>
  )
}

export default App;
