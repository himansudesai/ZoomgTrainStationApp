import React from 'react';
import './App.css';
import Atom from '../../shapes/atom';
import Rectangles from '../../shapes/rectangles';
import Engine from '../../shapes/engine';
import ShoppingCart  from '../../shapes/shopping-cart';
import GlassWine  from '../../shapes/glass-wine';
import Hourglass  from '../../shapes/hourglass';
import GlassMartini  from '../../shapes/glass-martini';
import Glasses  from '../../shapes/glasses';
import Detective  from '../../shapes/detective';
import Building from '../../shapes/building';
import Bus from '../../shapes/bus';
import Beer from '../../shapes/beer';
import Car from '../../shapes/car';
import Ninja from '../../shapes/ninja';
import Bicycle from '../../shapes/bicycle';
import Landmark from '../../shapes/landmark';
import Hospital from '../../shapes/hospital';
import Hotel from '../../shapes/hotel';
import Astronaut from '../../shapes/astronaut';
import Church from '../../shapes/church';
import Ambulance from '../../shapes/ambulance';
import Fort from '../../shapes/fort';
import SoccerBall from '../../shapes/soccer-ball';
import Graduate from '../../shapes/graduate';
import Doctor from '../../shapes/doctor';
import Pram from '../../shapes/pram';
import Plane from '../../shapes/plane';
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
      percentSize: 10
    },
    Building: {
      type: Building,
      percentSize: 10
    },
    Bus: {
      type: Bus,
      percentSize: 10
    },
    Hospital: {
      type: Hospital,
      percentSize: 10
    },
    Church: {
      type: Church,
      percentSize: 10
    },
    SoccerBall: {
      type: SoccerBall,
      percentSize: 10
    },
    Landmark: {
      type: Landmark,
      percentSize: 10
    },
    Hotel: {
      type: Hotel,
      percentSize: 10
    },
    Fort: {
      type: Fort,
      percentSize: 10
    },
    Car: {
      type: Car,
      percentSize: 10
    },
    Bicycle: {
      type: Bicycle,
      percentSize: 10
    },
    Ambulance: {
      type: Ambulance,
      percentSize: 10
    },
    Pram: {
      type: Pram,
      percentSize: 10
    },
    Plane: {
      type: Plane,
      percentSize: 10
    },
    Beer: {
      type: Beer,
      percentSize: 10
    },
    Ninja: {
      type: Ninja,
      percentSize: 10
    },
    Graduate: {
      type: Graduate,
      percentSize: 10
    },
    Detective: {
      type: Detective,
      percentSize: 10
    },
    Astronaut: {
      type: Astronaut,
      percentSize: 10
    },
    Doctor: {
      type: Doctor,
      percentSize: 10
    },
    GlassWine: {
      type: GlassWine,
      percentSize: 10
    },
    GlassMartini: {
      type: GlassMartini,
      percentSize: 10
    },
    Glasses: {
      type: Glasses,
      percentSize: 10
    },
    Hourglass: {
      type: Hourglass,
      percentSize: 10
    }
  };


  const data = [];
  for (let i=0; i<1; i++) {
    data.push({
      id: `Church${Math.floor(Math.random() * 1000000)}`,
      x: 0,
      y: 0,
      typeName: "Church",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Hospital${Math.floor(Math.random() * 1000000)}`,
      x: 10,
      y: 0,
      typeName: "Hospital",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Building${Math.floor(Math.random() * 1000000)}`,
      x: 20,
      y: 0,
      typeName: "Building",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Landmark${Math.floor(Math.random() * 1000000)}`,
      x: 30,
      y: 0,
      typeName: "Landmark",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Hotel${Math.floor(Math.random() * 1000000)}`,
      x: 40,
      y: 0,
      typeName: "Hotel",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Fort${Math.floor(Math.random() * 1000000)}`,
      x: 50,
      y: 0,
      typeName: "Fort",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Bus${Math.floor(Math.random() * 1000000)}`,
      x: 0,
      y: 20,
      typeName: "Bus",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Car${Math.floor(Math.random() * 1000000)}`,
      x: 10,
      y: 20,
      typeName: "Car",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Bicycle${Math.floor(Math.random() * 1000000)}`,
      x: 20,
      y: 20,
      typeName: "Bicycle",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Ambulance${Math.floor(Math.random() * 1000000)}`,
      x: 30,
      y: 20,
      typeName: "Ambulance",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Pram${Math.floor(Math.random() * 1000000)}`,
      x: 40,
      y: 20,
      typeName: "Pram",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Plane${Math.floor(Math.random() * 1000000)}`,
      x: 50,
      y: 20,
      typeName: "Plane",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `ShoppingCart${Math.floor(Math.random() * 1000000)}`,
      x: 0,
      y: 40,
      typeName: "ShoppingCart",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Ninja${Math.floor(Math.random() * 1000000)}`,
      x: 10,
      y: 40,
      typeName: "Ninja",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Graduate${Math.floor(Math.random() * 1000000)}`,
      x: 20,
      y: 40,
      typeName: "Graduate",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Detective${Math.floor(Math.random() * 1000000)}`,
      x: 30,
      y: 40,
      typeName: "Detective",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Astronaut${Math.floor(Math.random() * 1000000)}`,
      x: 40,
      y: 40,
      typeName: "Astronaut",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Doctor${Math.floor(Math.random() * 1000000)}`,
      x: 50,
      y: 40,
      typeName: "Doctor",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Beer${Math.floor(Math.random() * 1000000)}`,
      x: 0,
      y: 60,
      typeName: "Beer",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Hourglass${Math.floor(Math.random() * 1000000)}`,
      x: 10,
      y: 60,
      typeName: "Hourglass",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `SoccerBall${Math.floor(Math.random() * 1000000)}`,
      x: 20,
      y: 60,
      typeName: "SoccerBall",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `GlassWine${Math.floor(Math.random() * 1000000)}`,
      x: 30,
      y: 60,
      typeName: "GlassWine",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `GlassMartini${Math.floor(Math.random() * 1000000)}`,
      x: 40,
      y: 60,
      typeName: "GlassMartini",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    });
    data.push({
      id: `Glasses${Math.floor(Math.random() * 1000000)}`,
      x: 50,
      y: 60,
      typeName: "Glasses",
      colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
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
      <div style={{marginLeft: '20px'}}>
       &nbsp;
       <ZoomgView2 ref={zoomg2Ref} metadata={metadata} data={data} onZoom={view2ZoomEvent} onShapeDrag={view2ShapeDragEvent} onPan={view2PanEvent}></ZoomgView2>
     </div>
     <h1>Zoomg</h1>
    </React.Fragment>
  );
}

export default App;

