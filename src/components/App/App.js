import React from 'react';
import './App.css';
import Atom from '../../shapes/atom';
import Rectangles from '../../shapes/rectangles';
import Engine from '../../shapes/engine';
import ShoppingCart from '../../shapes/shopping-cart';
import SoccerBall from '../../shapes/soccer-ball';
import ZoomgView from '../zoomg_view/ZoomgView';
import ZoomgView2 from '../zoomg_view_2/ZoomgView2';

function App() {
  const metadata = {
    Atom: {
      type: Atom,
      percentSize: 1
    },
    Rectangles: {
      type: Rectangles,
      percentSize: 3
    },
    Engine: {
      type: Engine,
      percentSize: 1
    },
    ShoppingCart: {
      type: ShoppingCart,
      percentSize: 5
    },
    SoccerBall: {
      type: SoccerBall
    }
  };
  const data = [];
  for (let i=0; i<1; i++) {
    let x = Math.floor(Math.random() * 90 + 5);
    let y = Math.floor(Math.random() * 90 + 5);
    data.push({
      id: `Atom${i}`,
      x: x,
      y: y,
      typeName: "Atom"
    });
    x = Math.floor(Math.random() * 90 + 5);
    y = Math.floor(Math.random() * 90 + 5);
    data.push({
      id: `Engine${i}`,
      x: x,
      y: y,
      typeName: "Engine"
    });
    x = Math.floor(Math.random() * 90 + 5);
    y = Math.floor(Math.random() * 90 + 5);
    data.push({
      id: `Rectangle${i}`,
      x: x,
      y: y,
      typeName: "Rectangles"
    });
    x = Math.floor(Math.random() * 90 + 5);
    y = Math.floor(Math.random() * 90 + 5);
    data.push({
      id: `ShoppingCart${i}`,
      x: x,
      y: y,
      typeName: "ShoppingCart",
      subShapes: [{
        id: `SoccerBall${i}1`,
        x: 10,
        y: 10,
        typeName: "SoccerBall"
      },
      {
        id: `SoccerBall${i}2`,
        x: 60,
        y: 60,
        typeName: "SoccerBall"
      }]
    });
  }

  let zoomgRef = React.createRef();
  let zoomg2Ref = React.createRef();

  function view1ShapeDragEvent(event) {
    zoomg2Ref.current && zoomg2Ref.current.moveShape(event);
  }

  function view2ShapeDragEvent(event) {
    zoomgRef.current && zoomgRef.current.moveShape(event);
  }

  function view1ZoomEvent(event) {
    zoomg2Ref.current && zoomg2Ref.current.zoomView(event);
  }

  function view2ZoomEvent(event) {
    zoomgRef.current && zoomgRef.current.zoomView(event);
  }

  function view1PanEvent(event) {
    zoomg2Ref.current && zoomg2Ref.current.panView(event);
  }

  function view2PanEvent(event) {
    zoomgRef.current && zoomgRef.current.panView(event);
  }

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <div style={{marginLeft: '20px'}}>
        &nbsp;
        <ZoomgView ref={zoomgRef} metadata={metadata} data={data} onZoom={view1ZoomEvent} onShapeDrag={view1ShapeDragEvent} onPan={view1PanEvent}></ZoomgView>
      </div>
      <div style={{marginLeft: '50px'}}>
       &nbsp;
       <ZoomgView2 ref={zoomg2Ref} metadata={metadata} data={data} onZoom={view2ZoomEvent} onShapeDrag={view2ShapeDragEvent} onPan={view2PanEvent}></ZoomgView2>
     </div>
     <h1>Zoomg</h1>
    </React.Fragment>
  );
}

export default App;

