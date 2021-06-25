const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}

svgStrings[SVGComplexity.BarelyVisible] = [
  [
    `<polygon points="0,100 50,0 100,100" fill="none" stroke-width="5"`,
    `></polygon>`
  ]
];

svgStrings[SVGComplexity.Pixels30] = [
  [
    `<polygon points="0,100 50,0 100,100" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="20,90 50,30 80,90" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="40,80 50,60 60,80" fill="none" stroke-width="1"`,
    `></polygon>`
  ]
];
svgStrings[SVGComplexity.Pixels60] = [
  [
    `<polygon points="0,100 50,0 100,100" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="10,95 50,15 90,95" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="20,90 50,30 80,90" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="30,85 50,45 70,85" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="40,80 50,60 60,80" fill="none" stroke-width="1"`,
    `></polygon>`
  ]
];
svgStrings[SVGComplexity.Pixels120] = [
  [
    `<polygon points="0,100 50,0 100,100" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="5,97.5 50,7.5 95,97.5" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="10,95 50,15 90,95" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="15,92.5 50,22.5 85,92.5" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="20,90 50,30 80,90" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="25,87.5 50,37.5 75,87.5" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="30,85 50,45 70,85" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="35,82.5 50,52.5 65,82.5" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="40,80 50,60 60,80" fill="none" stroke-width="1"`,
    `></polygon>`
  ],
  [
    `<polygon points="45,77.5 50,67.5 55,77.5" fill="none" stroke-width="1"`,
    `></polygon>`
  ]
];

svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];

export default class Triangle extends Shape {
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
