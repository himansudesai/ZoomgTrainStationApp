const Zoomg = window.Zoomg;
const Config = Zoomg.Config;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}
svgStrings[SVGComplexity.Pixels120] = `
<g transform="scale(3.8, 3.8) translate(0, 0)">
<rect
   style="fill:#008000;stroke-width:0.0911847"
   width="21.166666"
   height="2.8283043"
   x="3.1749392"
   y="-4.6638648e-05"></rect>
<rect
   style="fill:#00ffff;stroke-width:0.0996982"
   width="26.458332"
   height="7.6637931"
   x="0.91231829"
   y="2.828249"></rect>
<rect
   style="fill:#ff0000;stroke-width:0.0578133"
   width="21.166666"
   height="15.835901"
   x="3.5581517"
   y="10.492043"></rect>
</g>`;

svgStrings[SVGComplexity.Pixels60] = `
<g transform="scale(3.8, 3.8) translate(0, 0)">
<rect
   style="fill:#008000;stroke-width:0.0911847"
   width="21.166666"
   height="2.8283043"
   x="3.1749392"
   y="-4.6638648e-05"></rect>
<rect
   style="fill:#00ffff;stroke-width:0.0996982"
   width="26.458332"
   height="7.6637931"
   x="0.91231829"
   y="2.828249"></rect>
<rect
   style="fill:#ff0000;stroke-width:0.0578133"
   width="21.166666"
   height="15.835901"
   x="3.5581517"
   y="10.492043"></rect>
</g>`;

svgStrings[SVGComplexity.Pixels30] = `
<g transform="scale(3.8, 3.8) translate(0, 0)">
<rect
   style="fill:#008000;stroke-width:0.0911847"
   width="21.166666"
   height="2.8283043"
   x="3.1749392"
   y="-4.6638648e-05"></rect>
<rect
   style="fill:#00ffff;stroke-width:0.0996982"
   width="26.458332"
   height="7.6637931"
   x="0.91231829"
   y="2.828249"></rect>
<rect
   style="fill:#ff0000;stroke-width:0.0578133"
   width="21.166666"
   height="15.835901"
   x="3.5581517"
   y="10.492043"></rect>
</g>`;

svgStrings[SVGComplexity.Pixels15] = `
<g transform="scale(3.8, 3.8) translate(0, 0)">
<rect
   style="fill:#008000;stroke-width:0.0911847"
   width="21.166666"
   height="2.8283043"
   x="3.1749392"
   y="-4.6638648e-05"></rect>
<rect
   style="fill:#00ffff;stroke-width:0.0996982"
   width="26.458332"
   height="7.6637931"
   x="0.91231829"
   y="2.828249"></rect>
<rect
   style="fill:#ff0000;stroke-width:0.0578133"
   width="21.166666"
   height="15.835901"
   x="3.5581517"
   y="10.492043"></rect>
</g>`;

  svgStrings[SVGComplexity.InsideGroups] = `
  <g transform="scale(3.8, 3.8) translate(0, 0)">
  <rect
       style="fill:#008000;stroke-width:0.0911847"
       width="21.166666"
       height="2.8283043"
       x="3.1749392"
       y="-4.6638648e-05"></rect>
    <rect
       style="fill:#00ffff;stroke-width:0.0996982"
       width="26.458332"
       height="7.6637931"
       x="0.91231829"
       y="2.828249"></rect>
    <rect
       style="fill:#ff0000;stroke-width:0.0578133"
       width="21.166666"
       height="15.835901"
       x="3.5581517"
       y="10.492043"></rect>
  </g>`;

export default class Rectangles extends Shape {

  getTypeName() {
    return "Rectangles";
  }

  renderContents(svg, svgComplexity) {
    svg.innerHTML = svgStrings[svgComplexity];
  }

  getRenderString(detailLevel) {
    return svgStrings[detailLevel];
  }

}
