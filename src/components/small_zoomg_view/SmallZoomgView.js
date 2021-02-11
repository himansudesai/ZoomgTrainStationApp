import {useEffect} from 'react';
import Atom from '../../shapes/atom.js';
import Engine from '../../shapes/engine.js';

function SmallZoomgView() {

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("small-zoomg-container");
    console.log(`++++ BEFORE SmallZoomg.new - client width = ${zoomgContainer.clientWidth}`);

    Zoomg.new(zoomgContainer).then( (view) => {
      const context = new Rectangle("top-context", 0, 0, view);

      const ROW_COUNT = 15;
      const COLUMN_COUNT = 50;
    
      const ATOM_SIZE_PERCENT = 0.5;
      const ENGINE_SIZE_PERCENT = 1.5;
      const anAtom = new Atom("dummy", 0, 0, view);
      const anEngine = new Engine("dummy", 0, 0, view);
      const ATOM_SCALE = view.getConfig().registerInitialPercentSizeForShape(anAtom.getTypeName(), ATOM_SIZE_PERCENT);
      const ENGINE_SCALE = view.getConfig().registerInitialPercentSizeForShape(anEngine.getTypeName(), ENGINE_SIZE_PERCENT);
    
      let count = 200000;
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 0; j < ROW_COUNT; j++) {
          let atom = new Atom(`${++count}`, (ATOM_SIZE_PERCENT * i), (ATOM_SIZE_PERCENT * j), view, ATOM_SCALE);
          context.insert(atom);
        }
      }
      const yOffset = ROW_COUNT * ATOM_SIZE_PERCENT;
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 0; j < ROW_COUNT; j++) {
          let engine = new Engine(`${++count}`, (ENGINE_SIZE_PERCENT * i), (ENGINE_SIZE_PERCENT * j) + yOffset, view, ENGINE_SCALE);
          context.insert(engine);
        }
      }
    
      view.getConfig().sayHello();
      view.initialize(context, zoomgContainer.clientWidth, zoomgContainer.clientHeight);
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg View.  The error is:\n${err}`);
    })
  });

  return (
    <div id="small-zoomg-container" style={{width: 500, height: 250, backgroundColor: 'lightyellow', overflow: 'scroll'}}>
    </div>
  );
}

export default SmallZoomgView;
