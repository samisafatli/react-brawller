import { Route, Switch } from 'react-router-dom'
import AllBrawllers from './pages/AllBrawllers'
import NewBrawller from './pages/NewBrawller'
import Favorites from './pages/Favorites'
import Layout from './components/layout/Layout'
const App = () => {
  return (
    <div className="App">
    <Layout>
      <Switch>
          <Route path='/' exact>
            <AllBrawllers/>
          </Route>
          <Route path='/new-brawller'>
            <NewBrawller/>
          </Route>
          <Route path='/favorites'>
            <Favorites/>
          </Route>
        </Switch>
    </Layout>
    </div>
  );
}

export default App;
