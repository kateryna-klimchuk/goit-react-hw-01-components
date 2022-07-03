import css from './App.module.css';

import Profile from 'components/Profile';
import Statistics from 'components/Statistics';



import user from 'data/user.json';
import data from 'data/data.json';



const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
