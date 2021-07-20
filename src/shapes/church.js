const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}
  svgStrings[SVGComplexity.Pixels120] = [
    `<g transform="translate(0, 0) scale(0.12, 0.18)"`,
    `><path d="M464.46 246.68L352 179.2V128h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-48V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v48h-48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h48v51.2l-112.46 67.48A31.997 31.997 0 0 0 160 274.12V512h96v-96c0-35.35 28.65-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44zM0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.54A32.024 32.024 0 0 0 0 395.96zm620.61-29.42L512 320v192h112c8.84 0 16-7.16 16-16V395.96c0-12.8-7.63-24.37-19.39-29.42z">
    </path>
    </g>`];

  svgStrings[SVGComplexity.Pixels60] = [
    `<g transform="translate(0, 0) scale(0.12, 0.18)"`,
    `><path d="M464.46 246.68L352 179.2V128h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-48V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v48h-48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h48v51.2l-112.46 67.48A31.997 31.997 0 0 0 160 274.12V512h96v-96c0-35.35 28.65-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44zM0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.54A32.024 32.024 0 0 0 0 395.96zm620.61-29.42L512 320v192h112c8.84 0 16-7.16 16-16V395.96c0-12.8-7.63-24.37-19.39-29.42z">
    </path>
    </g>`];
  
  svgStrings[SVGComplexity.Pixels30] = [
    `<g transform="translate(0, 0) scale(0.12, 0.18)"`,
    `><path d="M464.46 246.68L352 179.2V128h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-48V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v48h-48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h48v51.2l-112.46 67.48A31.997 31.997 0 0 0 160 274.12V512h96v-96c0-35.35 28.65-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44zM0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.54A32.024 32.024 0 0 0 0 395.96zm620.61-29.42L512 320v192h112c8.84 0 16-7.16 16-16V395.96c0-12.8-7.63-24.37-19.39-29.42z">
    </path>
    </g>`];
    
  svgStrings[SVGComplexity.BarelyVisible] = [
    `<g transform="translate(0, 0) scale(0.12, 0.18)"`,
    `><path d="M464.46 246.68L352 179.2V128h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-48V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v48h-48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h48v51.2l-112.46 67.48A31.997 31.997 0 0 0 160 274.12V512h96v-96c0-35.35 28.65-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44zM0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.54A32.024 32.024 0 0 0 0 395.96zm620.61-29.42L512 320v192h112c8.84 0 16-7.16 16-16V395.96c0-12.8-7.63-24.37-19.39-29.42z">
    </path>
    </g>`];

  svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.Pixels150] = svgStrings[SVGComplexity.Pixels120];
    
export default class Church extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "Church";
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
