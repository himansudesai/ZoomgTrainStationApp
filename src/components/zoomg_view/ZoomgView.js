import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import './ZoomgView.css';

const ZoomgView = forwardRef((props, ref) => {

  let thisView;
  useImperativeHandle(ref, (shapeId, percentX, percentY) => ({
    moveShape(shapeId, percentX, percentY) {
      thisView.moveShape(shapeId, percentX, percentY);
    }
  }))

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    // const ZoomEvent = Zoomg.ZoomEvent;

    // console.log(`**** ZOOM EVENT = ${ZoomEvent}`);
    // for (var att in ZoomEvent) {
    //   console.log(`        __ ${att}`);
    // }
    // const ze = new ZoomEvent(7, 7);
    // console.log(`delta x/y = ${ze.getDeltaX()}/${ze.getDeltaY()}`);

    // const ET = Zoomg.EventType;
    // console.log(`**** ET = ${JSON.stringify(ET)}`);
    // const z_type = ET.DRAG;
    // console.log(`**** DRAG TYPE = ${z_type}`);
    // console.log(`**** INVERSE = ${ET['4']}`);
    
    const zoomgContainer = document.getElementById("zoomg-container");

    const onEvent = function(event) {
      props.onEvent(event);
    }

    Zoomg.createView(zoomgContainer, onEvent).then( (view) => {
      thisView = view;
      const context = new Rectangle("top-top", 0, 0, view);
      const scalesByType = {};
      for (const [typeName, typeMetadata] of Object.entries(props.metadata)) {
        scalesByType[typeName] = view.getConfig().registerInitialPercentSizeForShape(typeName, typeMetadata.percentSize);
      }

      props.data.forEach(data => {
        let shape = new props.metadata[data.typeName].type(data.id, data.x, data.y, view, scalesByType[data.typeName]);
        context.insert(shape);
      })

      view.initialize(context, zoomgContainer.offsetLeft, zoomgContainer.offsetTop, zoomgContainer.clientWidth, zoomgContainer.clientHeight);
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg View.  The error is:\n${err}`);
    })
  });

  return (
    <div id="zoomg-container" style={{width: 400, height: 300, overflow: 'scroll'}}>
    </div>
  );
})

export default ZoomgView;
