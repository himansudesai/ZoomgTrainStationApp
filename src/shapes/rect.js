const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}

svgStrings[SVGComplexity.BarelyVisible] = [
    [
    `<rect width="100" height="100" fill="none" stroke-width="15"`,
    `></rect>
    `]
  ];

  svgStrings[SVGComplexity.Pixels30] = 
    [
      [
      `<rect width="100" height="100" fill="none" stroke-width="2"`,
      `></rect>
      `],
      [
        `<rect x="10" y="10" width="80" height="80" fill="none" stroke-width="2"`,
        `></rect>
      `],
      [
        `<rect x="20" y="20" width="60" height="60" fill="none" stroke-width="2"`,
        `></rect>
      `],
      [
        `<rect x="30" y="30" width="40" height="40" fill="none" stroke-width="2"`,
        `></rect>
      `],
      [
        `<rect x="40" y="40" width="20" height="20" fill="none" stroke-width="2"`,
        `></rect>
      `]
    ];

  svgStrings[SVGComplexity.Pixels60] = 
  [
    [
      `<rect width="100" height="100" fill="none"`,
      `></rect>
      `],
      [
        `<rect x="5" y="5" width="90" height="90" fill="none"`,
        `></rect>
      `],
      [
        `<rect x="10" y="10" width="80" height="80" fill="none"`,
        `></rect>
      `],
      [
        `<rect x="15" y="15" width="70" height="70" fill="none"`,
        `></rect>
      `],
      [
        `<rect x="20" y="20" width="60" height="60" fill="none"`,
        `></rect>
      `],
      [
        `<rect x="25" y="25" width="50" height="50" fill="none"`,
        `></rect>
      `],
      [
        `<rect x="30" y="30" width="40" height="40" fill="none"`,
        `></rect>
      `],
      [
        `<rect x="35" y="35" width="30" height="30" fill="none"`,
        `></rect>
      `],
      [
        `<rect x="40" y="40" width="20" height="20" fill="none"`,
        `></rect>
      `]  
  ]

  svgStrings[SVGComplexity.Pixels120] =
  [
    [
    `<rect width="100" height="100" fill="none"`,
    `></rect>
    `],
    [
      `<rect x="3" y="3" width="94" height="94" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="6" y="6" width="88" height="88" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="9" y="9" width="82" height="82" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="12" y="12" width="76" height="76" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="15" y="15" width="70" height="70" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="18" y="18" width="64" height="64" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="21" y="21" width="58" height="58" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="24" y="24" width="52" height="52" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="27" y="27" width="46" height="46" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="30" y="30" width="40" height="40" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="33" y="33" width="34" height="34" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="36" y="36" width="28" height="28" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="39" y="39" width="22" height="22" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="42" y="42" width="16" height="16" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="45" y="45" width="10" height="10" fill="none"`,
      `></rect>
    `],
    [
      `<rect x="48" y="48" width="4" height="4" fill="none"`,
      `></rect>
    `]
  ];

  svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.Pixels150] = svgStrings[SVGComplexity.Pixels120];

export default class Rect extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "Rect";
  }

  renderContents(svg, svgComplexity) {
    let html = ``;
    svgStrings[svgComplexity].forEach(svgStr => {
      html += `${svgStr[0]} stroke="rgb(${this.red},${this.green},${this.blue})" ${svgStr[1]} ${this.getAttr('name')} ${svgStr[2]}`;
    })
    svg.innerHTML = html;
  }

  getRenderString(detailLevel) {
    const strs = svgStrings[detailLevel];
    return `${strs[0]} stroke="rgb(${this.red},${this.green},${this.blue})" ${strs[1]} ${this.getAttr('name')} ${strs[2]}`;
 }
}
