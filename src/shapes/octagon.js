const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}

svgStrings[SVGComplexity.BarelyVisible] = [
    [
      `<polygon points="0,25 25,0 75,0 100,25 100,75 75,100 25,100 0,75" fill="none" stroke-width="15"`,
      `></polygon>`
    ]
  ];
  svgStrings[SVGComplexity.Pixels30] = [
    [
      `<polygon points="0,25 25,0 75,0 100,25 100,75 75,100 25,100 0,75" fill="none" stroke-width="2"`,
      `></polygon>`
    ],
    [
      `<polygon points="10,30 30,10 70,10 90,30 90,70 70,90 30,90 10,70" fill="none" stroke-width="2"`,
      `></polygon>`
    ],
    [
      `<polygon points="20,35 35,20 65,20 80,35 80,65 65,80 35,80 20,65" fill="none" stroke-width="2"`,
      `></polygon>`
    ]
  ];
  svgStrings[SVGComplexity.Pixels60] = [
    [
      `<polygon points="0,25 25,0 75,0 100,25 100,75 75,100 25,100 0,75" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="10,30 30,10 70,10 90,30 90,70 70,90 30,90 10,70" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="20,35 35,20 65,20 80,35 80,65 65,80 35,80 20,65" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="30,40 40,30 60,30 70,40 70,60 60,70 40,70 30,60" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="40,45 45,40 55,40 60,45 60,55 55,60 45,60 40,55" fill="none" stroke-width="1"`,
      `></polygon>`
    ]
  ];
  svgStrings[SVGComplexity.Pixels120] = [
    [
      `<polygon points="0,25   25,0   75,0   100,25  100,75  75,100  25,100  0,75" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="5,27.5 27.5,5 72.5,5 95,27.5 95,72.5 72.5,95 27.5,95 5,72.5" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="10,30   30,10    70,10    90,30    90,70   70,90  30,90  10,70" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="15,32.5 32.5,15  67.5,15  85,32.5  85,67.5 67.5,85 32.5,85 15,67.5" fill="none" stroke-width="1"`,
      `></polygon>`
    ],

    [
      `<polygon points="20,35   35,20     65,20   80,35    80,65    65,80  35,80  20,65" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="25,37.5 37.5,25   62.5,25 75,37.5  75,62.5  62.5,75 37.5,75  25,62.5" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="30,40   40,30     60,30   70,40    70,60    60,70    40,70 30,60" fill="none" stroke-width="1"`,
      `></polygon>`
    ],

    [
      `<polygon points="35,42.5 42.5,35 57.5,35 65,42.5  65,57.5 57.5,65 42.5,65 35,57.5" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="40,45   45,40   55,40   60,45    60,55   55,60   45,60 40,55" fill="none" stroke-width="1"`,
      `></polygon>`
    ],
    [
      `<polygon points="45,47.5 47.5,45 52.5,45 55,47.5  55,52.5 52.5,55 47.5,55 45,52.5" fill="none" stroke-width="1"`,
      `></polygon>`
    ]
  ];
  svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];
  svgStrings[SVGComplexity.Pixels150] = svgStrings[SVGComplexity.Pixels120];


export default class Octagon extends Shape {
  setColors(colors) {
    this.red = colors[0];
    this.green = colors[1];
    this.blue = colors[2];
  }

  getTypeName() {
    return "Octagon";
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
