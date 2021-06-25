const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}

svgStrings[SVGComplexity.Pixels120] = [
  `<text x="10" y="25" fill="none"`,
  `>Hello</text>
  `];

  svgStrings[SVGComplexity.Pixels60] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.Pixels30] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.BarelyVisible] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];

export default class Hello extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "Hello";
  }

  renderContents(svg, svgComplexity) {
    const strs = svgStrings[svgComplexity];
    svg.innerHTML = `${strs[0]} stroke="rgb(${this.red},${this.green},${this.blue})" ${strs[1]} ${this.getAttr('name')} ${strs[2]}`;
  }

  getRenderString(detailLevel) {
    const strs = svgStrings[detailLevel];
    return `${strs[0]} stroke="rgb(${this.red},${this.green},${this.blue})" ${strs[1]} ${this.getAttr('name')} ${strs[2]}`;
 }
}
