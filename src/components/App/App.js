import React from 'react';
import './App.css';
import Ambulance from '../../shapes/ambulance';
import Astronaut from '../../shapes/astronaut';
import Atom from '../../shapes/atom';
import Beer from '../../shapes/beer';
import Bicycle from '../../shapes/bicycle';
import Building from '../../shapes/building';
import Bus from '../../shapes/bus';
import Car from '../../shapes/car';
import Church from '../../shapes/church';
import Detective  from '../../shapes/detective';
import Doctor from '../../shapes/doctor';
import Engine from '../../shapes/engine';
import Fort from '../../shapes/fort';
import GlassWine  from '../../shapes/glass-wine';
import GlassMartini  from '../../shapes/glass-martini';
import Glasses  from '../../shapes/glasses';
import Graduate from '../../shapes/graduate';
import Hospital from '../../shapes/hospital';
import Hotel from '../../shapes/hotel';
import Hourglass  from '../../shapes/hourglass';
import Landmark from '../../shapes/landmark';
import Ninja from '../../shapes/ninja';
import Pram from '../../shapes/pram';
import Plane from '../../shapes/plane';
import Rectangles from '../../shapes/rectangles';
import ShoppingCart  from '../../shapes/shopping-cart';
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
      percentSize: 0.02
    },
    Building: {
      type: Building,
      percentSize: 3
    },
    Hospital: {
      type: Hospital,
      percentSize: 2
    },
    Church: {
      type: Church,
      percentSize: 4
    },
    SoccerBall: {
      type: SoccerBall,
      percentSize: 10
    },
    Landmark: {
      type: Landmark,
      percentSize: 1
    },
    Hotel: {
      type: Hotel,
      percentSize: 2
    },
    Fort: {
      type: Fort,
      percentSize: 2
    },
    Car: {
      type: Car,
      percentSize: 0.2
    },
    Bicycle: {
      type: Bicycle,
      percentSize: 0.12
    },
    Ambulance: {
      type: Ambulance,
      percentSize: 0.13
    },
    Pram: {
      type: Pram,
      percentSize: 0.14
    },
    Plane: {
      type: Plane,
      percentSize: 0.15
    },
    Bus: {
      type: Bus,
      percentSize: 0.16
    },
    Beer: {
      type: Beer,
      percentSize: 10
    },
    Ninja: {
      type: Ninja,
      percentSize: 0.008
    },
    Graduate: {
      type: Graduate,
      percentSize: 0.009
    },
    Detective: {
      type: Detective,
      percentSize: 0.01
    },
    Astronaut: {
      type: Astronaut,
      percentSize: 0.011
    },
    Doctor: {
      type: Doctor,
      percentSize: 0.012
    },
    GlassWine: {
      type: GlassWine
    },
    GlassMartini: {
      type: GlassMartini,
      percentSize: 0.008
    },
    Glasses: {
      type: Glasses,
      percentSize: 0.008
    },
    Hourglass: {
      type: Hourglass,
      percentSize: 0.008
    }
  };

  function createTopLevelShape(type) {

    function createBottomShapes(bottomtype) {
      let bottoms = [];
      for (let j=0; j<5; j++) {
        let bottom = {
          id: `${bottomtype}${Math.floor(Math.random() * 1000000)}`,
          x: Math.floor(Math.random() * 80),
          y: Math.floor(Math.random() * 80),
          size: Math.floor(Math.random() * 2) + 7,
          typeName: bottomtype
        };
        bottoms.push(bottom);
      }
      return bottoms;
    }


    function createSubSubShapes(subsubtype) {
      let subsubs = [];
      for (let j=0; j<5; j++) {
        let subsub = {
          id: `${subsubtype}${Math.floor(Math.random() * 1000000)}`,
          x: Math.floor(Math.random() * 80),
          y: Math.floor(Math.random() * 80),
          size: Math.floor(Math.random() * 2) + 7,
          typeName: subsubtype
        };
        let bottomShapes = [];
        // ['Glasses'].forEach(bottomtype => {
          ['Glasses', 'GlassMartini', 'GlassWine', 'Hourglass', 'Beer'].forEach(bottomtype => {
          bottomShapes = bottomShapes.concat(createBottomShapes(bottomtype));
        })
        subsub["subShapes"] = bottomShapes;
        subsubs.push(subsub);
      }
      return subsubs;
    }

    function createSubShapes(subtype) {
      let subs = [];
      for (let j=0; j<5; j++) {
        let sub = {
          id: `${subtype}${Math.floor(Math.random() * 1000000)}`,
          x: Math.floor(Math.random() * 80),
          y: Math.floor(Math.random() * 80),
          size: Math.floor(Math.random() * 2) + 7,
          typeName: subtype
        };
        let subsubShapes = [];
        // ['Ninja'].forEach(subsubtype => {
          ['Ninja', 'Graduate', 'Detective', 'Doctor', 'ShoppingCart', 'Astronaut'].forEach(subsubtype => {
          subsubShapes = subsubShapes.concat(createSubSubShapes(subsubtype));
        })
        sub["subShapes"] = subsubShapes;
        subs.push(sub);
      }
      return subs;
    }

    let topShapes = [];
    for (let i=0; i<10; i++) {
      let topShape = {
        id: `${type}${Math.floor(Math.random() * 1000000)}`,
        x: Math.floor(Math.random() * 90),
        y: Math.floor(Math.random() * 90),
        typeName: type,
        colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
      };
      let subShapes = [];
      // ['Bus'].forEach(subtype => {
        ['Car', 'Bicycle', 'Ambulance', 'Pram', 'Bus', 'Plane'].forEach(subtype => {
        subShapes = subShapes.concat(createSubShapes(subtype));
      })
      topShape["subShapes"] = subShapes;
      topShapes.push(topShape);
    }
    return topShapes;  
  }

  let data = [];
  // ['Church'].forEach(type => data = data.concat(createTopLevelShape(type)));
  ['Church', 'Hospital', 'Hotel', 'Landmark', 'Building', 'Fort'].forEach(type => data = data.concat(createTopLevelShape(type)));

  let zoomgRef = React.createRef();
  let zoomg2Ref = React.createRef();

  function view1ZoomgEvent(event) {
    zoomg2Ref.current && zoomg2Ref.current.zoomgEvent(event);
  }

  function view2ZoomgEvent(event) {
    zoomgRef.current && zoomgRef.current.zoomgEvent(event);
  }

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <div style={{marginLeft: '30px'}}>
        &nbsp;
        <ZoomgView ref={zoomgRef} metadata={metadata} data={data} onZoomgEvent={view1ZoomgEvent}></ZoomgView>
      </div>
      <div style={{marginLeft: '30px'}}>
       &nbsp;
       <ZoomgView2 ref={zoomg2Ref} metadata={metadata} data={data} onZoomgEvent={view2ZoomgEvent}></ZoomgView2>
     </div>
     <h1>Zoomg</h1>
    </React.Fragment>
  );
}

export default App;

