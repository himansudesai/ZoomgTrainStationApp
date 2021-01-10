import './App.css';
import {useEffect} from 'react';
import Atom from './shapes/atom.js';
import Engine from './shapes/engine.js';


function App() {

  useEffect(() => {
    const Zooomg = window['Zoomg'];
    const Config = Zooomg.Config;
    const ViewStack = Zooomg.ViewStack;
    const Rectangle = Zooomg.Rectangle;
    
    const zoomgContainer = document.getElementById("zoomg-container");

    Zooomg.new('zoomg-container').then( () => {
      const context = new Rectangle("top-context", 0, 0, null, 0, 0);
    
      const ROW_COUNT = 25;
      const COLUMN_COUNT = 120;
    
      const ATOM_SIZE = 8;
      const ENGINE_SIZE = 8;
      const anAtom = new Atom("dummy", 0, 0, null);
      const anEngine = new Engine("dummy", 0, 0, null);
      const ATOM_SCALE = Config.registerInitialSizeForShape(anAtom.getTypeName(), ATOM_SIZE);
      const ENGINE_SCALE = Config.registerInitialSizeForShape(anEngine.getTypeName(), ENGINE_SIZE);
    
      let count = 0;
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 0; j < ROW_COUNT; j++) {
          let atom = new Atom(`${++count}`, (ATOM_SIZE * i), (ATOM_SIZE * j), ATOM_SCALE);
          context.insert(atom);
        }
      }
    
      for (let i = 0; i < COLUMN_COUNT; i++) {
        for (let j = 25; j < ROW_COUNT * 2; j++) {
          let engine = new Engine(`${++count}`, (ENGINE_SIZE * i), (ENGINE_SIZE * j) + 20, ENGINE_SCALE);
          context.insert(engine);
        }
      }
    
      Config.sayHello();
      ViewStack.reset(zoomgContainer.clientWidth, zoomgContainer.clientHeight, context);
    
      window.context = context;
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg svg-element.  The erros is:\n${err}`);
    })


  });

  return (
    <div className="App" id="zoomg-container" style={{width: 1000, height: 600, backgroundColor: 'lightblue', overflow: 'scroll'}}>

    </div>
  );
}

export default App;
