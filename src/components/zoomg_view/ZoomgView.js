import {useEffect} from 'react';
import Atom from '../../shapes/atom.js';
import Engine from '../../shapes/engine.js';

function ZoomgView() {

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("zoomg-container");

    Zoomg.new('zoomg-container').then( (view) => {
      const context = new Rectangle("top-context", 0, 0, 0, 0, view);
      const svgElement = view.getSVGElement();

      const ROW_COUNT = 2;
      const COLUMN_COUNT = 12;
    
      const ATOM_SIZE = 25;
      const ENGINE_SIZE = 50;
      const anAtom = new Atom("dummy", 0, 0, view);
      const anEngine = new Engine("dummy", 0, 0, view);
      const ATOM_SCALE = view.getConfig().registerInitialSizeForShape(anAtom.getTypeName(), ATOM_SIZE);
      const ENGINE_SCALE = view.getConfig().registerInitialSizeForShape(anEngine.getTypeName(), ENGINE_SIZE);
    
      let count = 0;
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 0; j < ROW_COUNT; j++) {
          let atom = new Atom(`${++count}`, (ATOM_SIZE * i), (ATOM_SIZE * j), view, ATOM_SCALE);
          context.insert(atom);
        }
      }

      // for (let i = 0; i < COLUMN_COUNT; i++) {
      //   for (let j = 25; j < ROW_COUNT * 2; j++) {
      //     let engine = new Engine(`${++count}`, (ENGINE_SIZE * i), (ENGINE_SIZE * j) + 20, view, ENGINE_SCALE);
      //     context.insert(engine);
      //   }
      // }
    
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
