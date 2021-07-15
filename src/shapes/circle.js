const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}

svgStrings[SVGComplexity.BarelyVisible] = [
  [
    `<circle cx="50" cy="50" r="50" fill="none" stroke-width="15"`,
    `></circle>`
  ]
];

svgStrings[SVGComplexity.Pixels30] = [
  [
    `<circle cx="50" cy="50" r="50" fill="none" stroke-width="2"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="40" fill="none" stroke-width="2"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="30" fill="none" stroke-width="2"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="20" fill="none" stroke-width="2"`,
    `></circle>`
  ]
];

svgStrings[SVGComplexity.Pixels60] = [
  [
    `<circle cx="50" cy="50" r="50" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="40" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="30" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="20" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="10" fill="none"`,
    `></circle>`
  ]
];

svgStrings[SVGComplexity.Pixels120] = [
  [
    `<circle cx="50" cy="50" r="50" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="45" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="40" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="35" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="30" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="25" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="20" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="15" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="10" fill="none"`,
    `></circle>`
  ],
  [
    `<circle cx="50" cy="50" r="5" fill="none"`,
    `></circle>`
  ]
];

svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];


export default class Circle extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "Circle";
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
