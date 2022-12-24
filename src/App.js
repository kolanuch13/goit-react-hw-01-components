import './App.css';
// components
import Profile from './Components/Profile';
import Statistic from './Components/Statistic';
import Elements from './Components/Elements';
import FriendList from './Components/Friends';
import TransactionHistory from './Components/TransactionHistory';
// data
import user from './data/user.json'
import data from './data/data.json'
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

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
        <Statistic title="Upload stats">
          <Elements elements={data}/>
        </Statistic>
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App;
