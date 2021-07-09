import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import './ZoomgView.css';

const ZoomgView = forwardRef((props, ref) => {

  let thisView;
  useImperativeHandle(ref, (event) => ({
    zoomgEvent(event) {
      thisView.apiZoomgEvent(event);
    },
    changeAstronautName(id, name) {
      thisView.setShapeAttr(`Astronaut${id}`, 'name', name, true);
    },
    createAlert(shapeId) {
      thisView.createAlert(shapeId);
    },
    zoomToAlert() {
      thisView.zoomToAlertShape();
    },
    zoomAndPanToAlert() {
      thisView.zoomAndPanToAlertShape();
    },
    zoomAndPanToSelectedShape() {
      thisView.zoomAndPanToSelectedShape();
    }
  }))

  useEffect(() => {
    const Zoomg = window['Zoomg'];
    
    const zoomgContainer = document.getElementById("zoomg-container");

    const onZoomgEvent = function(event) {
      props.onZoomgEvent && props.onZoomgEvent(event);
    }

    Zoomg.createView(zoomgContainer, onZoomgEvent).then( (view) => {
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

      view.initialize(shapes, zoomgContainer.offsetLeft, zoomgContainer.offsetTop, zoomgContainer.clientWidth, zoomgContainer.clientHeight);
    }).catch(err => {
      console.log(`ERROR occured during the process of initializing Zoomg View.  The error is:\n${err}`);
    })
  }, []);


    // background: linear-gradient("90deg", rgba(250,228,163,1) "0%", rgba(251,233,176,1) "5%", rgba(185,240,251,1) "100%")

  return (
    <div id="zoomg-container"
    style={
      {
        width: 800,
        height: 400,
        background: "rgba(232,250,250, 0.3)"
      }
    }>
    </div>
  );
})

export default ZoomgView;


