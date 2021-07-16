const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}

svgStrings[SVGComplexity.BarelyVisible] = [
  [
    `<line x1="0" y1="50" x2="100" y2="50" stroke-width="15"`,
    `></line>`
  ],
  [
    `<line x1="50" y1="0" x2="50" y2="100" stroke-width="15"`,
    `></line>`
  ]
];

svgStrings[SVGComplexity.Pixels30] = [
  [
    `<line x1="0" y1="50" x2="100" y2="50" stroke-width="3"`,
    `></line>`
  ],
  [
    `<line x1="50" y1="0" x2="50" y2="100" stroke-width="3"`,
    `></line>`
  ],
  [
    `<line x1="10" y1="10" x2="90" y2="90" stroke-width="3"`,
    `></line>`
  ],
  [
    `<line x1="90" y1="10" x2="10" y2="90" stroke-width="3"`,
    `></line>`
  ]
];
svgStrings[SVGComplexity.Pixels60] = [
  [
    `<line x1="0" y1="50" x2="100" y2="50" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="5" y1="30" x2="95" y2="70" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="25" y1="10" x2="75" y2="90" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="50" y1="0" x2="50" y2="100" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="95" y1="30" x2="5" y2="70" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="75" y1="10" x2="25" y2="90" stroke-width="1"`,
    `></line>`
  ],
];
svgStrings[SVGComplexity.Pixels120] = [
  [
    `<line x1="0" y1="50" x2="100" y2="50" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="3" y1="35" x2="97" y2="65" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="17" y1="20" x2="87" y2="85" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="30" y1="7" x2="70" y2="93" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="50" y1="0" x2="50" y2="100" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="70" y1="5" x2="30" y2="95" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="85" y1="15" x2="15" y2="80" stroke-width="1"`,
    `></line>`
  ],
  [
    `<line x1="97" y1="35" x2="3" y2="65" stroke-width="1"`,
    `></line>`
  ]
];

svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];

export default class Spokes extends Shape {
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
