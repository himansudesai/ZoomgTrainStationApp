const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}
svgStrings[SVGComplexity.Pixels120] = [
  `<g transform="matrix(0.19,0,0,0.19,-1.52,-1.52)"`,
  `>
  <path d="M 504,256 C 504,392.967 392.967,504 256,504 119.033,504 8,392.967 8,256 8,119.033 119.033,8 256,8 392.967,8 504,119.033 504,256 Z m -48,0 -0.003,-0.282 -26.064,22.741 -62.679,-58.5 16.454,-84.355 34.303,3.072 C 393.122,104.46 358.007,78.587 317.302,65.535 L 330.953,97.474 256,139 181.047,97.475 194.698,65.536 c -40.631,13.028 -75.78,38.87 -100.709,73.141 l 34.565,-3.073 16.192,84.355 -62.678,58.5 L 56.004,255.718 56.001,256 c 0,43.015 13.497,83.952 38.472,117.991 l 7.704,-33.897 85.138,10.447 36.301,77.826 -29.902,17.786 c 40.202,13.122 84.29,13.148 124.572,0 l -29.902,-17.786 36.301,-77.826 85.138,-10.447 7.704,33.897 C 442.503,339.952 456,299.015 456,256 Z M 207.898,325.571 178.004,234.259 256,177.732 l 77.996,56.527 -29.622,91.312 z">
    </path>
  </g>`];

svgStrings[SVGComplexity.Pixels60] = svgStrings[SVGComplexity.Pixels120];
svgStrings[SVGComplexity.Pixels30] = svgStrings[SVGComplexity.Pixels120];
svgStrings[SVGComplexity.BarelyVisible] = svgStrings[SVGComplexity.Pixels120];
svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];

export default class SoccerBall extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "SoccerBall";
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
