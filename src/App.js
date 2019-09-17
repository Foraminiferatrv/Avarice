import React from 'react';
import {Provider} from 'react-redux'

import store from './redux'
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
 
    <div className="App">
      <Layout>
        <p>Tracker</p>
      </Layout>
    </div>
  
  );
}

export default App;
