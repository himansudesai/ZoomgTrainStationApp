const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {};
svgStrings[SVGComplexity.Pixels120] = [
  `<g transform="translate(0, 0) scale(0.19, 0.19)"`,
  `><path d="M319.41,320,224,415.39,128.59,320C57.1,323.1,0,381.6,0,453.79A58.21,58.21,0,0,0,58.21,512H389.79A58.21,58.21,0,0,0,448,453.79C448,381.6,390.9,323.1,319.41,320ZM224,304A128,128,0,0,0,352,176V65.82a32,32,0,0,0-20.76-30L246.47,4.07a64,64,0,0,0-44.94,0L116.76,35.86A32,32,0,0,0,96,65.82V176A128,128,0,0,0,224,304ZM184,71.67a5,5,0,0,1,5-5h21.67V45a5,5,0,0,1,5-5h16.66a5,5,0,0,1,5,5V66.67H259a5,5,0,0,1,5,5V88.33a5,5,0,0,1-5,5H237.33V115a5,5,0,0,1-5,5H215.67a5,5,0,0,1-5-5V93.33H189a5,5,0,0,1-5-5ZM144,160H304v16a80,80,0,0,1-160,0Z">
  </path>
  </g>`];

  svgStrings[SVGComplexity.Pixels60] = svgStrings[SVGComplexity.Pixels120];

  svgStrings[SVGComplexity.Pixels30] = svgStrings[SVGComplexity.Pixels120];

  svgStrings[SVGComplexity.BarelyVisible] = svgStrings[SVGComplexity.Pixels120];

  svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];

export default class Nurse extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "Nurse";
  }

  renderContents(svg, svgComplexity) {
    const strs = svgStrings[svgComplexity];
    svg.innerHTML = `${strs[0]} fill="rgb(${this.red},${this.green},${this.blue})" ${strs[1]}`;
  }

  getRenderString(detailLevel) {
    const strs = svgStrings[detailLevel];
    return `${strs[0]} fill="rgb(${this.red},${this.green},${this.blue})" ${strs[1]}`;
 }
}

