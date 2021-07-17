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
import Spokes from '../../shapes/spokes';
import Star from '../../shapes/star';
import Triangle from '../../shapes/triangle';

import ZoomgView from '../zoomg_view/ZoomgView';
import ZoomgView2 from '../zoomg_view_2/ZoomgView2';

import Circle from '../../shapes/circle';
import Hello from '../../shapes/hello';
import Rect from '../../shapes/rect';

function App() {
  const astronautId = React.createRef();
  const astronautName = React.createRef();

  const metadata = {
    Atom: {
      type: Atom,
      percentSize: 3.3
    },
    Circle: {
      type: Circle,
      percentSize: 1.2
    },
    Rect: {
      type: Rect,
      percentSize: 1.39
    },
    Triangle: {
      type: Triangle,
      percentSize: 1.5
    },
    Octagon: {
      type: Octagon,
      percentSize: 1.62
    },
    Star: {
      type: Star,
      percentSize: 1.31
    },
    Spokes: {
      type: Spokes,
      percentSize: 1.45
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
      for (let j=0; j<4; j++) {
        let bottom = {
          id: `${bottomtype}${Math.floor(Math.random() * 1000000)}`,
          x: Math.floor(Math.random() * 95),
          y: Math.floor(Math.random() * 95),
          size: Math.floor(Math.random() * 2) + 7,
          typeName: bottomtype
        };
        bottoms.push(bottom);
        if ((j === 1) && (!alertShape)) {
          alertShape = bottom;
          console.log(`============ SETTING ALERT SHAPE TO ${alertShape.id}`);
        }
      }
      return bottoms;
    }

    function createSubSubShapes(subsubtype) {
      let subsubs = [];
      for (let j=0; j<4; j++) {
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
        let bottomShapes = [];
          ['Beer', 'GlassMartini', 'GlassWine', 'Hourglass', 'Glasses'].forEach(bottomtype => {
          bottomShapes = bottomShapes.concat(createBottomShapes(bottomtype));
        })
        subsub["subShapes"] = bottomShapes;
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
        let subsubShapes = [];
          ['Ninja', 'Graduate', 'Detective', 'Doctor', 'ShoppingCart', 'Astronaut'].forEach(subsubtype => {
          subsubShapes = subsubShapes.concat(createSubSubShapes(subsubtype));
        })
        
        sub["subShapes"] = subsubShapes;
        subs.push(sub);
      }
      return subs;
    }

    let topShapes = [];
    for (let i=0; i<50; i++) {
      let topShape = {
        id: `${type}${Math.floor(Math.random() * 1000000)}`,
        x: Math.floor(Math.random() * 9999) / 100,
        y: Math.floor(Math.random() * 9999) / 100,
        typeName: type,
        colors: [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
      };

      let subShapes = [];
      ['Car', 'Bicycle', 'Ambulance', 'Pram', 'Bus', 'Plane'].forEach(subtype => {
        subShapes = subShapes.concat(createSubShapes(subtype));
      })
      topShape["subShapes"] = subShapes;
      topShapes.push(topShape);
    }
    return topShapes;  
  }

  let alertShape;
  let data = [];
  ['Octagon', 'Triangle', 'Circle', , 'Spokes', 'Rect', 'Star'].forEach(type => data = data.concat(createTopLevelShape(type)));
//  ['Church', 'Hospital', 'Hotel', 'Landmark', 'Building', 'Fort'].forEach(type => data = data.concat(createTopLevelShape(type)));

  let zoomgRef = React.createRef();
  let zoomg2Ref = React.createRef();

  function view1ZoomgEvent(event) {
    zoomg2Ref.current && zoomg2Ref.current.zoomgEvent(event);
  }

  function view2ZoomgEvent(event) {
    zoomgRef.current && zoomgRef.current.zoomgEvent(event);
  }

  function changeNinjaName() {
    zoomgRef.current && zoomgRef.current.changeAstronautName(astronautId.current.value, astronautName.current.value);
  }

  function createAlert() {
    // zoomgRef.current && zoomgRef.current.createAlert((data[Math.floor(Math.random() * data.length)]).id);
    console.log(`================ ALERTING ${alertShape.id} @(${alertShape.x},${alertShape.y})`);
    zoomgRef.current && zoomgRef.current.createAlert(alertShape.id);
    zoomg2Ref.current && zoomg2Ref.current.createAlert(alertShape.id);
  }

  function zoomToAlert() {
    zoomgRef.current && zoomgRef.current.zoomToAlert();
  }

  function zoomAndPanToAlert() {
    zoomgRef.current && zoomgRef.current.zoomAndPanToAlert();
  }

  function zoomAndPanToSelectedShape() {
    zoomgRef.current && zoomgRef.current.zoomAndPanToSelectedShape();
  }

  return (
    <>
      <h2>
      <span style={{color: 'deeppink'}}>S</span>
      <span style={{color: 'forestgreen'}}>V</span>
      <span style={{color: 'deepskyblue'}}>G</span>
      <span style={{color: 'goldenrod'}}>&nbsp;Wiz<sup style={{fontSize: '50%'}}>&#9733;</sup></span>
      </h2>      <div style={{marginLeft: '30px'}}>
        <div>
          &nbsp;
          <ZoomgView ref={zoomgRef} metadata={metadata} data={data} onZoomgEvent={view1ZoomgEvent}></ZoomgView>
        </div>
        <br/>
        <button onClick={createAlert}>Create Alert</button>
        <input ref={astronautId}></input>
        <button onClick={changeNinjaName}>=&gt;&gt;</button>
        <input ref={astronautName}></input>
        <button onClick={zoomAndPanToAlert}>Z/P To Alert</button>
        <div>
          &nbsp;
          <ZoomgView2 ref={zoomg2Ref} metadata={metadata} data={data} onZoomgEvent={view2ZoomgEvent}></ZoomgView2>
        </div>
      </div>
      <br/>
      <hr style={{borderTop: '0.5px solid lightgray'}}></hr>
    </>
  );
}

export default App;
