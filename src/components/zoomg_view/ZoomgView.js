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
      const svgElement = view.getSVGElement();

      const ROW_COUNT = 8;
      const COLUMN_COUNT = 10;
    
      const ATOM_SIZE_PERCENT = 1;
      const ENGINE_SIZE_PERCENT = 2;
      const anAtom = new Atom("dummy", 0, 0, view);
      const anEngine = new Engine("dummy", 0, 0, view);
      const ATOM_SCALE = view.getConfig().registerInitialPercentSizeForShape(anAtom.getTypeName(), ATOM_SIZE_PERCENT);
      const ENGINE_SCALE = view.getConfig().registerInitialPercentSizeForShape(anEngine.getTypeName(), ENGINE_SIZE_PERCENT);
    
      let count = 0;
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 0; j < ROW_COUNT; j++) {
          let atom = new Atom(`${++count}`, (ATOM_SIZE_PERCENT * i), (ATOM_SIZE_PERCENT * j), view, ATOM_SCALE);
          context.insert(atom);
        }
      }

      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = ROW_COUNT; j < ROW_COUNT * 2; j++) {
          let engine = new Engine(`${++count}`, (ENGINE_SIZE_PERCENT * i), (ENGINE_SIZE_PERCENT * j), view, ENGINE_SCALE);
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
    <div id="zoomg-container" style={{width: 1000, height: 450, backgroundColor: 'lightblue', overflow: 'scroll'}}>
    </div>
  );
}

export default ZoomgView;
