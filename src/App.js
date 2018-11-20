import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faCoffee, faPlus)

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <BurgerBuilder/>
          </Layout>
      </div>
    );
  }
}

export default App;
