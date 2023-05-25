import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friendlist/friendlist';
import TransactionHistory from './transactionhistory/transactionhistory';
import userData from '../JSON/user.json';
import statisticData from '../JSON/data.json';
import friends from '../JSON/friends.json';
import transactions from '../JSON/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        key={userData.username}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
