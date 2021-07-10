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
import Octagon from '../../shapes/octagon';
import Ninja from '../../shapes/ninja';
import Pram from '../../shapes/pram';
import Plane from '../../shapes/plane';
import Rectangles from '../../shapes/rectangles';
import ShoppingCart  from '../../shapes/shopping-cart';
import SoccerBall from '../../shapes/soccer-ball';
import Triangle from '../../shapes/triangle';

import ZoomgView from '../zoomg_view/ZoomgView';

import Circle from '../../shapes/circle';
import Hello from '../../shapes/hello';
import Rect from '../../shapes/rect';

function App() {

  const metadata = {
    Atom: {
      type: Atom,
      percentSize: 3.3
    },
    Circle: {
      type: Circle,
      percentSize: 0.62
    },
    Rect: {
      type: Rect,
      percentSize: 0.85
    },
    Triangle: {
      type: Triangle,
      percentSize: 0.7
    },
    Octagon: {
      type: Octagon,
      percentSize: 1
    },
    Hello: {
      type: Hello,
      percentSize: 2
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
      percentSize: 0.008
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
      for (let j=0; j<2; j++) {
        let bottom = {
          id: `${bottomtype}${Math.floor(Math.random() * 1000000)}`,
          x: Math.floor(Math.random() * 95),
          y: Math.floor(Math.random() * 95),
          size: Math.floor(Math.random() * 2) + 7,
          typeName: bottomtype
        };
        bottoms.push(bottom);
      }
      return bottoms;
    }

    function createSubSubShapes(subsubtype) {
      let subsubs = [];
      for (let j=0; j<2; j++) {
        const seq = Math.floor(Math.random() * 1000000);
        let subsub = {
          id: `${subsubtype}${seq}`,
          x: Math.floor(Math.random() * 95),
          y: Math.floor(Math.random() * 95),
          size: Math.floor(Math.random() * 2) + 7,
          typeName: subsubtype,
        };
        if (subsubtype === 'Astronaut') {
          subsub.attrs = {
            name: `A:${seq}`
          }
        }
        // let bottomShapes = [];
        //   ['Glasses', 'GlassMartini', 'GlassWine', 'Hourglass', 'Beer'].forEach(bottomtype => {
        //   bottomShapes = bottomShapes.concat(createBottomShapes(bottomtype));
        // })
        // subsub["subShapes"] = bottomShapes;
        subsubs.push(subsub);
      }
      return subsubs;
    }

    function createSubShapes(subtype) {
      let subs = [];
      for (let j=0; j<4; j++) {
        let sub = {
          id: `${subtype}${Math.floor(Math.random() * 1000000)}`,
          x: Math.floor(Math.random() * 95),
          y: Math.floor(Math.random() * 95),
          size: Math.floor(Math.random() * 2) + 7,
          typeName: subtype
        };
        // let subsubShapes = [];
        //   ['Ninja', 'Graduate', 'Detective', 'Doctor', 'ShoppingCart', 'Astronaut'].forEach(subsubtype => {
        //   subsubShapes = subsubShapes.concat(createSubSubShapes(subsubtype));
        // })
        
        // sub["subShapes"] = subsubShapes;
        subs.push(sub);
      }
      return subs;
    }

    let topShapes = [];
    for (let i=0; i<333; i++) {
      let topShape = {
        id: `${type}${Math.floor(Math.random() * 1000000)}`,
        x: Math.floor(Math.random() * 9999) / 100,
        y: Math.floor(Math.random() * 9999) / 100,
        typeName: type
      };

      const effectivePosition = (topShape.x + topShape.y) / 200;
      const rWeight = (1 - effectivePosition);
      const bWeight = effectivePosition;
      const gWeight = (1 - (Math.abs(0.5 - effectivePosition) * 2));
      topShape.colors = [255 * rWeight, 255 * gWeight, 255 * bWeight];

      let subShapes = [];
        ['Car', 'Bicycle', 'Ambulance', 'Pram', 'Bus', 'Plane'].forEach(subtype => {
        subShapes = subShapes.concat(createSubShapes(subtype));
      })
      topShape["subShapes"] = subShapes;
      if ((topShape.x >= 90) && (topShape.y >= 90) && !alertShape) {
        const idx = Math.floor(Math.random() * subShapes.length);
        alertShape = subShapes[idx];
        console.log(`============ SETTING ALERT SHAPE TO ${alertShape.id}`);
      }

      topShapes.push(topShape);
    }
    return topShapes;  
  }

  let alertShape;
  let data = [];
  ['Circle', 'Rect', 'Triangle', 'Circle', 'Octagon'].forEach(type => data = data.concat(createTopLevelShape(type)));
//  ['Church', 'Hospital', 'Hotel', 'Landmark', 'Building', 'Fort'].forEach(type => data = data.concat(createTopLevelShape(type)));

let zoomgRef = React.createRef();
  let zoomg2Ref = React.createRef();

  function view1ZoomgEvent(event) {
    // zoomg2Ref.current && zoomg2Ref.current.zoomgEvent(event);
  }

  function createAlert() {
    // zoomgRef.current && zoomgRef.current.createAlert((data[Math.floor(Math.random() * data.length)]).id);
    console.log(`================ ALERTING ${alertShape.id} @(${alertShape.x},${alertShape.y})`);
    zoomgRef.current && zoomgRef.current.createAlert(alertShape.id);
    zoomg2Ref.current && zoomg2Ref.current.createAlert(alertShape.id);
  }

  function zoomAndPanToAlert() {
    zoomgRef.current && zoomgRef.current.zoomAndPanToAlert();
  }

  return (
    <>
      <h2>ZOOMG</h2>
      <div style={{marginLeft: '30px'}}>
        <div>
          &nbsp;
          <ZoomgView ref={zoomgRef} metadata={metadata} data={data} onZoomgEvent={view1ZoomgEvent}></ZoomgView>
        </div>
        <br/>
        <button onClick={createAlert}>Create Alert</button>
        <button onClick={zoomAndPanToAlert}>Z/P To Alert</button>
      </div>
    </>
  );
}

export default App;
