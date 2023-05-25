import '../index.css';
import PropTypes from 'prop-types';
import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friendlist/friendlist';
import TransactionHistory from './transactionhistory/transactionhistory';
import userData from '../JSON/user.json';
import statisticData from '../JSON/data.json';
import friends from '../JSON/friends.json';
import transactions from '../JSON/transactions.json';

function App() {
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default App;
