import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import './ZoomgView2.css';


const ZoomgView2 = forwardRef((props, ref) => {

  let thisView;
  useImperativeHandle(ref, (event) => ({
    zoomgEvent(event) {
      thisView.apiZoomgEvent(event);
    },
    createAlert(shapeId) {
      thisView.createAlert(shapeId);
    },
    autoZoom() {
      thisView.zoomInOnAlertCondition();
    }
  }))

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    
    const zoomgContainer = document.getElementById("zoomg-container-2");

    const onZoomgEvent = function(event) {
      props.onZoomgEvent && props.onZoomgEvent(event);
    }

    Zoomg.createView(zoomgContainer, onZoomgEvent).then( (view) => {
      // Zoomg.createView(zoomgContainer, onZoomgEvent).then( (view) => {
      thisView = view;
      const scalesByType = {};
      for (const [typeName, typeMetadata] of Object.entries(props.metadata)) {
        scalesByType[typeName] = view.getConfig().registerInitialPercentSizeForShape(typeName, typeMetadata.percentSize);
      }

      const shapes = [];
      props.data.forEach(data => {
        const shape = new props.metadata[data.typeName].type(data.id, data.x, data.y, view, scalesByType[data.typeName]);
        const shapeColors = data.colors;
        shape.setColors(shapeColors);
        shapes.push(shape);
        if (data.subShapes) {
          data.subShapes.forEach( (sub) => {
            const subShape = new props.metadata[sub.typeName].type(sub.id);
            subShape.setColors(shapeColors);
            shape.addSubShape(view, subShape, sub.x, sub.y, sub.size);
            if (sub.subShapes) {
              sub.subShapes.forEach( (subsub) => {
                const subsubShape = new props.metadata[subsub.typeName].type(subsub.id);
                subsubShape.setColors(shapeColors);
                if (subsub.attrs) {
                  Object.keys(subsub.attrs).forEach(key => {
                    subsubShape.setAttr(key, subsub.attrs[key]);
                  })
                }
                subShape.addSubShape(view, subsubShape, subsub.x, subsub.y, subsub.size);
                if (subsub.subShapes) {
                  subsub.subShapes.forEach( (bottom) => {
                    const bottomShape = new props.metadata[bottom.typeName].type(bottom.id);
                    bottomShape.setColors(shapeColors);
                    subsubShape.addSubShape(view, bottomShape, bottom.x, bottom.y, bottom.size);
                  })  
                }
              })
            }
          })
        }
      })

      view.initialize(shapes, {
        left: zoomgContainer.offsetLeft,
        top: zoomgContainer.offsetTop,
        width: zoomgContainer.clientWidth,
        height: zoomgContainer.clientHeight
      });
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg View.  The error is:\n${err}`);
    })
  }, []);

  return (
    <div id="zoomg-container-2" style={
      {
        width: 800,
        height: 400,
        background: "rgba(249,231,232, 0.3)"
      }
    }>
    </div>
  );
})

export default ZoomgView2;
