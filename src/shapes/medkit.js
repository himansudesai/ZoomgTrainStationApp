const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {};
svgStrings[SVGComplexity.Pixels120] = [
    `<g transform="translate(0, 0) scale(0.19, 0.21)"`,
    `>
    <path d="M96 480h320V128h-32V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H96v352zm96-384h128v32H192V96zm320 80v256c0 26.51-21.49 48-48 48h-16V128h16c26.51 0 48 21.49 48 48zM64 480H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v352zm288-208v32c0 8.837-7.163 16-16 16h-48v48c0 8.837-7.163 16-16 16h-32c-8.837 0-16-7.163-16-16v-48h-48c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h48v-48c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16v48h48c8.837 0 16 7.163 16 16z"/>
    </g>`];

  svgStrings[SVGComplexity.Pixels60] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.Pixels30] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.BarelyVisible] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.Pixels150] = svgStrings[SVGComplexity.Pixels120];

export default class Medkit extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "Medkit";
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


