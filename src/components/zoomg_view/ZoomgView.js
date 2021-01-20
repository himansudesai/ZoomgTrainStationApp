import {useEffect} from 'react';
import Atom from '../../shapes/atom.js';
import Engine from '../../shapes/engine.js';

function ZoomgView() {

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("zoomg-container");
    console.log(`++++ BEFORE Zoomg.new - client width = ${zoomgContainer.clientWidth}`);

    Zoomg.new(zoomgContainer).then( (view) => {
      const context = new Rectangle("top-context", 0, 0, view);

      const ROW_COUNT = 4;
      const COLUMN_COUNT = 12;
    
      const ATOM_SIZE_PERCENT = 5;
      const ENGINE_SIZE_PERCENT = 6;
      const anAtom = new Atom("dummy", 0, 0, view);
      const anEngine = new Engine("dummy", 0, 0, view);
      const ATOM_SCALE = view.getConfig().registerInitialPercentSizeForShape(anAtom.getTypeName(), ATOM_SIZE_PERCENT);
      const ENGINE_SCALE = view.getConfig().registerInitialPercentSizeForShape(anEngine.getTypeName(), ENGINE_SIZE_PERCENT);
    
      let count = 0;
      for (let i = 0; i < COLUMN_COUNT; i=i+3) {
        for (let j = 0; j < 4; j=j+2) {
          let atom = new Atom(`${++count}`, (ATOM_SIZE_PERCENT+1) * i, (ATOM_SIZE_PERCENT+1) * j, view, ATOM_SCALE);
          context.insert(atom);
        }
      }
      const yOffset = ROW_COUNT * ATOM_SIZE_PERCENT + 5;
      // const yOffset = ROW_COUNT * 0;
      for (let i = COLUMN_COUNT-1; i >= 0; i--) {
        for (let j = ROW_COUNT-1; j >= 0; j--) {
          let engine = new Engine(`${++count}`, (ENGINE_SIZE_PERCENT * i), (ENGINE_SIZE_PERCENT * j) + yOffset, view, ENGINE_SCALE);
          context.insert(engine);
        }
      }
    
      view.getConfig().sayHello();
      view.initialize(context, zoomgContainer.clientWidth, zoomgContainer.clientHeight);
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg View.  The erros is:\n${err}`);
    })
  });

  return (
    <div id="zoomg-container" style={{width: 500, height: 250, backgroundColor: 'oldlace', overflow: 'scroll'}}>
    </div>
  );
}

export default ZoomgView;
