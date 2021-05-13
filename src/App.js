import { Route, Switch } from 'react-router-dom'
import AllBrawlers from './pages/AllBrawlers'
import NewBrawler from './pages/NewBrawler'
import Favorites from './pages/Favorites'
import Layout from './components/layout/Layout'
const App = () => {
  return (
    <div className="App">
    <Layout>
      <Switch>
          <Route path='/' exact>
            <AllBrawlers/>
          </Route>
          <Route path='/new-brawler'>
            <NewBrawler/>
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
