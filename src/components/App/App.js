import React from 'react';
import './App.css';
import Atom from '../../shapes/atom';
import Rectangles from '../../shapes/rectangles';
import ZoomgView from '../zoomg_view/ZoomgView';
import ZoomgView2 from '../zoomg_view_2/ZoomgView2';

function App() {
  const metadata = {
    Atom: {
      type: Atom,
      percentSize: 8
    },
    Rectangles: {
      type: Rectangles,
      percentSize: 8
    }
  };
  const data = [];
  data.push({
    id: "Atom1",
    x: 15,
    y: 15,
    typeName: "Atom"
  });
  data.push({
    id: "Atom2",
    x: 45,
    y: 45,
    typeName: "Atom"
  });
  data.push({
    id: "Rectangle1",
    x: 65,
    y: 45,
    typeName: "Rectangles"
  });

  let zoomgRef = React.createRef();
  let zoomg2Ref = React.createRef();


  function view1ShapeDragEvent(event) {
//    if (event.name === 'SHAPE_MOVE') {
  // zoomg2Ref.current && zoomg2Ref.current.moveShape(event.details.id, event.details.x, event.details.y);
  zoomg2Ref.current && zoomg2Ref.current.moveShape(event.id, event.x, event.y);
 //   }
  }

  function view2ShapeDragEvent(event) {
    // if (event.name === 'SHAPE_MOVE') {
    //   zoomgRef.current && zoomgRef.current.moveShape(event.details.id, event.details.x, event.details.y);
    zoomgRef.current && zoomgRef.current.moveShape(event.id, event.x, event.y);
    // }
  }

  function view1ZoomEvent(event) {
    zoomg2Ref.current && zoomg2Ref.current.performZoom(event);
  }

  function view2ZoomEvent(event) {
    zoomgRef.current && zoomgRef.current.performZoom(event);
  }

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <div style={{marginLeft: '20px'}}>
        &nbsp;
        <ZoomgView ref={zoomgRef} metadata={metadata} data={data} onZoom={view1ZoomEvent} onShapeDrag={view1ShapeDragEvent}></ZoomgView>
      </div>
      <div style={{marginLeft: '50px'}}>
        &nbsp;
        <ZoomgView2 ref={zoomg2Ref} metadata={metadata} data={data} onZoom={view2ZoomEvent} onShapeDrag={view2ShapeDragEvent}></ZoomgView2>
      </div>
      <h1>Zoomg</h1>
    </React.Fragment>
  );
}

export default App;

