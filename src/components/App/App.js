import React from 'react';
import './App.css';
import ZoomgView from '../zoomg_view/ZoomgView';
import ZoomgView2 from '../zoomg_view_2/ZoomgView2';
import SmallZoomgView from '../small_zoomg_view/SmallZoomgView';
import SecondZoomg from '../second_zoomg/SecondZoomg';

function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <div style={{marginLeft: '20px'}}>
        &nbsp;
        <ZoomgView></ZoomgView>
      </div>
      <div style={{marginLeft: '20px'}}>
        &nbsp;
        <ZoomgView2></ZoomgView2>
      </div>
      <h1>Zoomg</h1>
    </React.Fragment>
  );
}

export default App;

{/* <SmallZoomgView></SmallZoomgView>
<SecondZoomg></SecondZoomg> */}
