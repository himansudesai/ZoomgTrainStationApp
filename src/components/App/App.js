import React from 'react';
import './App.css';
import ZoomgView from '../zoomg_view/ZoomgView';
import SecondZoomg from '../second_zoomg/SecondZoomg';

function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <ZoomgView></ZoomgView>
      <SecondZoomg></SecondZoomg>
      <h1>Zoomg</h1>
    </React.Fragment>
  );
}

export default App;
