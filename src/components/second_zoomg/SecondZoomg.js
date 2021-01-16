import {useEffect} from 'react';
import Atom from '../../shapes/atom.js';
import Engine from '../../shapes/engine.js';

function SecondZoomg() {

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("second-zoomg");

    Zoomg.new(zoomgContainer).then( (view) => {
      const context = new Rectangle("top-context", 0, 0, view);
    
      const ROW_COUNT = 4;
      const COLUMN_COUNT = 12;
    
      const ATOM_SIZE_PERCENT = 4;
      const anAtom = new Atom("dummy", 0, 0, view);
      const anEngine = new Engine("dummy", 0, 0, view);
      const ATOM_SCALE = view.getConfig().registerInitialPercentSizeForShape(anAtom.getTypeName(), ATOM_SIZE_PERCENT);
    
      let count = 99000;
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 0; j < ROW_COUNT; j++) {
          let atom = new Atom(`${++count}`, (ATOM_SIZE_PERCENT * i), (ATOM_SIZE_PERCENT * j), view, ATOM_SCALE);
          context.insert(atom);
        }
      }
    
      view.getConfig().sayHello();
      view.initialize(context, zoomgContainer.clientWidth, zoomgContainer.clientHeight);
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg svg-element.  The erros is:\n${err}`);
    })
  });

  return (
    <div id="second-zoomg" style={{width: 1000, height: 200, backgroundColor: 'pink', marginLeft: 10}}>
    </div>
  );
}

export default SecondZoomg;
