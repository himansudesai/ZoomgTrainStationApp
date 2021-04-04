import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import './ZoomgView2.css';


const ZoomgView2 = forwardRef((props, ref) => {

  let thisView;
  useImperativeHandle(ref, (shapeId, percentX, percentY) => ({
    moveShape(shapeId, percentX, percentY) {
      thisView.moveShape(shapeId, percentX, percentY);
    }
  }))

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("zoomg-container-2");

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
    <div id="zoomg-container-2" style={{width: 300, height: 200, overflow: 'scroll'}}>
    </div>
  );
})

export default ZoomgView2;