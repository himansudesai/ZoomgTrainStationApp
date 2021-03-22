import {useEffect} from 'react';
import Atom from '../../shapes/atom.js';
import Engine from '../../shapes/engine.js';
import Rectangles from '../../shapes/rectangles';

function ZoomgView() {

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("zoomg-container");
    console.log(`++++ BEFORE Zoomg.new - client width = ${zoomgContainer.clientWidth}`);

    Zoomg.createView(zoomgContainer).then( (view) => {
      const context = new Rectangle("top-context", 0, 0, view);

      const ATOM_SIZE_PERCENT = 4;
      const ENGINE_SIZE_PERCENT = 0.5;
      const RECTANGLES_SIZE_PERCENT = 0.1;
      const anAtom = new Atom("dummy", 0, 0, view);
      const anEngine = new Engine("dummy", 0, 0, view);
      const aRectangles = new Rectangles("dummy", 0, 0, view);
      const ATOM_SCALE = view.getConfig().registerInitialPercentSizeForShape(anAtom.getTypeName(), ATOM_SIZE_PERCENT);
      const ENGINE_SCALE = view.getConfig().registerInitialPercentSizeForShape(anEngine.getTypeName(), ENGINE_SIZE_PERCENT);
      const RECTANGLES_SCALE = view.getConfig().registerInitialPercentSizeForShape(aRectangles.getTypeName(), RECTANGLES_SIZE_PERCENT);
    
      const slots = new Array(2000);
      let filledSlots = 0;
      for (let i=0; i<20; i++) {
        const slot = Math.floor(Math.random() * 4000);
        if (!slots[slot]) {
          ++filledSlots;
          const column = (slot % 80);
          const row = Math.floor(slot / 80);
          let atom = new Atom(`${Math.random() * 100000}`, column + 3, row * 3, view, ATOM_SCALE);
          slots[slot] = atom;
          context.insert(atom);
        }
      }

      let rectangles = new Rectangles(`${Math.random() * 100000}`, 10, 10, view, RECTANGLES_SCALE);
      context.insert(rectangles);

        for (let i=0; i<2; i++) {
        const slot = Math.floor(Math.random() * 4000);
        if (!slots[slot]) {
          ++filledSlots;
          const column = (slot % 80);
          const row = Math.floor(slot / 80);
          let engine = new Engine(`${Math.random() * 100000}`, column * ENGINE_SIZE_PERCENT + 3, row * ENGINE_SIZE_PERCENT + 3, view, ENGINE_SCALE);
          slots[slot] = engine;
          context.insert(engine);
        }
      }
      console.log(`++++ FILLED SLOTS = ${filledSlots}`);
      // let count = 0;
      // for (let i = 0; i < COLUMN_COUNT; i=i+3) {
      //   for (let j = 0; j < 4; j=j+2) {
      //     let atom = new Atom(`${++count}`, (ATOM_SIZE_PERCENT+1) * i, (ATOM_SIZE_PERCENT+1) * j, view, ATOM_SCALE);
      //     context.insert(atom);
      //   }
      // }
      // const yOffset = ROW_COUNT * ATOM_SIZE_PERCENT + 5;
      // // const yOffset = ROW_COUNT * 0;
      // for (let i = COLUMN_COUNT-1; i >= 0; i--) {
      //   for (let j = ROW_COUNT-1; j >= 0; j--) {
      //     let engine = new Engine(`${++count}`, (ENGINE_SIZE_PERCENT * i), (ENGINE_SIZE_PERCENT * j) + yOffset, view, ENGINE_SCALE);
      //     context.insert(engine);
      //   }
      // }
    
      view.getConfig().sayHello();
      view.initialize(context, zoomgContainer.clientWidth, zoomgContainer.clientHeight);
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg View.  The error is:\n${err}`);
    })
  });

  return (
    <div id="zoomg-container" style={{width: 500, height: 300, overflow: 'scroll'}}>
    </div>
  );
}

export default ZoomgView;
