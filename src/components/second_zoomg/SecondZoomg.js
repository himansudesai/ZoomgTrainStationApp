import {useEffect} from 'react';
import Atom from '../../shapes/atom.js';
import Engine from '../../shapes/engine.js';

function SecondZoomg() {

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Config = Zoomg.Config;
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("second-zoomg");

    Zoomg.new('second-zoomg').then( (view) => {
      const context = new Rectangle("top-context", 0, 0, null, 0, 0);
      const svgElement = view.getSVGElement();
    
      const ROW_COUNT = 5;
      const COLUMN_COUNT = 12;
    
      const ATOM_SIZE = 8;
      const ENGINE_SIZE = 8;
      const anAtom = new Atom("dummy", 0, 0, svgElement);
      const anEngine = new Engine("dummy", 0, 0, svgElement);
      const ATOM_SCALE = Config.registerInitialSizeForShape(anAtom.getTypeName(), ATOM_SIZE);
      const ENGINE_SCALE = Config.registerInitialSizeForShape(anEngine.getTypeName(), ENGINE_SIZE);
    
      let count = 99000;
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 0; j < ROW_COUNT; j++) {
          let atom = new Atom(`${++count}`, (ATOM_SIZE * i), (ATOM_SIZE * j), svgElement, ATOM_SCALE);
          context.insert(atom);
        }
      }
    
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 25; j < ROW_COUNT * 2; j++) {
          let engine = new Engine(`${++count}`, (ENGINE_SIZE * i), (ENGINE_SIZE * j) + 20, svgElement, ENGINE_SCALE);
          context.insert(engine);
        }
      }
    
      Config.sayHello();
      view.initialize(context, zoomgContainer.clientWidth, zoomgContainer.clientHeight);
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg svg-element.  The erros is:\n${err}`);
    })
  });

  return (
    <div id="second-zoomg" style={{width: 1000, height: 50, backgroundColor: 'pink'}}>
    </div>
  );
}

export default SecondZoomg;
