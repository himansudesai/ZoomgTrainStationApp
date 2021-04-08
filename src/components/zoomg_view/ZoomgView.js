import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import './ZoomgView.css';

const ZoomgView = forwardRef((props, ref) => {

  let thisView;
  useImperativeHandle(ref, (event) => ({
    moveShape(event) {
      thisView.apiMoveShape(event);
    },
    zoomView(event) {
      thisView.apiZoomView(event);
    },
    panView(event) {
      thisView.apiPanView(event);
    }
  }))

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    const Rectangle = Zoomg.Rectangle;
    
    const zoomgContainer = document.getElementById("zoomg-container");

    const onZoom= function(event) {
      props.onZoom && props.onZoom(event);
    }

    const onPan= function(event) {
      props.onPan && props.onPan(event);
    }

    const onShapeDrag= function(event) {
      props.onShapeDrag && props.onShapeDrag(event);
    }

    Zoomg.createView(zoomgContainer, onZoom, onPan, onShapeDrag).then( (view) => {
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
    <div id="zoomg-container" style={{width: 800, height: 400}}>
    </div>
  );
})

export default ZoomgView;
