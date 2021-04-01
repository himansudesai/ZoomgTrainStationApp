import {useEffect} from 'react';
import Atom from '../../shapes/atom.js';
import Engine from '../../shapes/engine.js';
import Rectangles from '../../shapes/rectangles';
import House from '../../shapes/house';
import './ZoomgView2.css';

function ZoomgView2() {

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("zoomg-container-2");
    console.log(`++++ BEFORE Zoomg.new - client width = ${zoomgContainer.clientWidth}`);

    Zoomg.createView(zoomgContainer).then( (view) => {
      const context = new Rectangle("top-context", 0, 0, view);

      const ATOM_SIZE_PERCENT = 2;
      const ENGINE_SIZE_PERCENT = 0.1;
      const RECTANGLES_SIZE_PERCENT = 0.1;
      const HOUSE_SIZE_PERCENT = 0.6;
      const anAtom = new Atom("dummy", 0, 0, view);
      const anEngine = new Engine("dummy", 0, 0, view);
      const aRectangles = new Rectangles("dummy", 0, 0, view);
      const aHouse = new House("dummy", 0, 0, view);
      const ATOM_SCALE = view.getConfig().registerInitialPercentSizeForShape(anAtom.getTypeName(), ATOM_SIZE_PERCENT);
      const ENGINE_SCALE = view.getConfig().registerInitialPercentSizeForShape(anEngine.getTypeName(), ENGINE_SIZE_PERCENT);
      const RECTANGLES_SCALE = view.getConfig().registerInitialPercentSizeForShape(aRectangles.getTypeName(), RECTANGLES_SIZE_PERCENT);
      const HOUSE_SCALE = view.getConfig().registerInitialPercentSizeForShape(aHouse.getTypeName(), HOUSE_SIZE_PERCENT);
    
      const slots = new Array(2000);
      let filledSlots = 0;
      for (let i=0; i<1; i++) {
        const slot = Math.floor(Math.random() * 4000);
        if (!slots[slot]) {
          ++filledSlots;
          const column = (slot % 80);
          const row = Math.floor(slot / 80);
          // let atom = new Atom(`${Math.random() * 100000}`, column + 3, row * 3, view, ATOM_SCALE);
          let atom = new Atom(`Atom${i}`, 50, 60, view, ATOM_SCALE);
          slots[slot] = atom;
          context.insert(atom);
        }
      }

      let rectangles = new Rectangles(`${Math.random() * 100000}`, 10, 10, view, RECTANGLES_SCALE);
      context.insert(rectangles);

      let house = new House(`${Math.random() * 100000}`, 20, 20, view, HOUSE_SCALE);
      context.insert(house);

      console.log(`++++ FILLED SLOTS = ${filledSlots}`);

      // for (let i=0; i<100; i=i+1) {
      //   for (let j=0; j<100; j=j+1) {
      //     let engine = new Engine(`${Math.random() * 100000}`, i * ENGINE_SIZE_PERCENT * 6, 6 * j * ENGINE_SIZE_PERCENT, view, ENGINE_SCALE);
      //     context.insert(engine);
      //   }
      // }
    
      view.getConfig().sayHello();
      view.initialize(context, zoomgContainer.offsetLeft, zoomgContainer.offsetTop, zoomgContainer.clientWidth, zoomgContainer.clientHeight);
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg View.  The error is:\n${err}`);
    })
  });

  return (
    <div id="zoomg-container-2" style={{width: 300, height: 200, overflow: 'scroll'}}>
    </div>
  );
}

export default ZoomgView2;
