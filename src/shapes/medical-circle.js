const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {};
svgStrings[SVGComplexity.Pixels120] = [
  `<g transform="translate(0, 0) scale(0.19, 0.19)"`,
  `><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
  </g>`];

svgStrings[SVGComplexity.Pixels60] = svgStrings[SVGComplexity.Pixels120];
svgStrings[SVGComplexity.Pixels30] = svgStrings[SVGComplexity.Pixels120];
svgStrings[SVGComplexity.BarelyVisible] = svgStrings[SVGComplexity.Pixels120];
svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];
svgStrings[SVGComplexity.Pixels150] = svgStrings[SVGComplexity.Pixels120];

export default class MedicalCircle extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "MedicalCircle";
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

