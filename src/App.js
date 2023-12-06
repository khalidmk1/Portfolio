// File: App.js
import React from 'react';
import TabsContainer from './Component/tabsContainer';
import Navigation from './Component/navigation';
import Scroll from './Component/scroll_top';
import './App.css'


const App = () => {

  return (
    <div>
      {/* ... (other code) */}
      <Navigation />
      <TabsContainer />
      {/* ... (other code) */}
      <Scroll/>
    </div>
    
  );
};

export default App;
