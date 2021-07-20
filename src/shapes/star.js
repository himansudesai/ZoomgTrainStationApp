const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}

svgStrings[SVGComplexity.BarelyVisible] = [
  [
    `<polygon points="0,80 50,0 100,80" fill="none" stroke-width="15"`,
    `></polygon>`
  ],
  [
    `<polygon points="0,20 100,20 50,100" fill="none" stroke-width="15"`,
    `></polygon>`
  ]
];

svgStrings[SVGComplexity.Pixels30] = [
  [
    `<polygon points="0,80 50,0 100,80" fill="none" stroke-width="2"`,
    `></polygon>`
  ],
  [
    `<polygon points="10,75 50,10 90,75" fill="none" stroke-width="2"`,
    `></polygon>`
  ],
  [
    `<polygon points="0,20 100,20 50,100" fill="none" stroke-width="2"`,
    `></polygon>`
  ],
  [
    `<polygon points="10,25 90,25 50,90" fill="none" stroke-width="2"`,
    `></polygon>`
  ]
];
svgStrings[SVGComplexity.Pixels60] = [
  [
    `<polygon points="0,80 50,0 100,80" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="10,75 50,10 90,75" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="20,70 50,20 80,70" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="0,20 100,20 50,100" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="10,25 90,25 50,90" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="20,30 80,30 50,80" fill="none" stroke-width="1"`,
    `></polygon>`
  ]
];
svgStrings[SVGComplexity.Pixels120] = [
  [
    `<polygon points="0,80 50,0 100,80" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="10,75 50,10 90,75" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="20,70 50,20 80,70" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="30,65 50,30 70,65" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="0,20 100,20 50,100" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="10,25 90,25 50,90" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="20,30 80,30 50,80" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="30,35 70,35 50,70" fill="none" stroke-width="1"`,
    `></polygon>`
  ]
];

svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];
svgStrings[SVGComplexity.Pixels150] = svgStrings[SVGComplexity.Pixels120];

export default class Star extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "Triangle";
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
