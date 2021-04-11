const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {};
svgStrings[SVGComplexity.Pixels120] = `
  <svg width="100" height="100" viewBox="0 0 29.458333 26.458333">
    <defs>
      <linearGradient id="linearGradient2888">
        <stop style="stop-color:#800000;stop-opacity:1;" offset="0" id="stop2884" />
        <stop style="stop-color:#800000;stop-opacity:0;" offset="1" id="stop2886" />
      </linearGradient>
      <linearGradient xlink:href="#linearGradient2888" id="linearGradient2890"
          x1="6.5972733" y1="19.33179" x2="19.826439" y2="19.33179" gradientUnits="userSpaceOnUse" />
    </defs>
    <g>
      <rect
        style="opacity:1;fill:url(#linearGradient2890);fill-opacity:1;stroke-width:0.309214"
        id="rect32" width="16.742931" height="14.276759" x="4.2308602" y="12.17158" />
      <path style="fill:#552200;stroke-width:0.264583"
        d="M 13.136038,1.8548409 19.82644,13.194548 6.6607646,13.318752 Z"
        transform="matrix(1.2717107,0,0,1.0674957,-4.2397057,-1.9179312)" />
      <rect style="fill:#552200;stroke-width:0.309214" id="rect46" width="4.084023" height="6.1910434" x="10.856052" y="20.193359"></rect>
    </g>
  </svg>`;

svgStrings[SVGComplexity.Pixels60] = svgStrings[SVGComplexity.Pixels120];

svgStrings[SVGComplexity.Pixels30] = svgStrings[SVGComplexity.Pixels120];

svgStrings[SVGComplexity.Pixels15] = svgStrings[SVGComplexity.Pixels120];

svgStrings[SVGComplexity.InsideGroups] = svgStrings[SVGComplexity.Pixels120];


export default class House extends Shape {

  getTypeName() {
    return "House";
  }

  renderContents(svg, svgComplexity) {
    svg.innerHTML = svgStrings[svgComplexity];
  }

  getRenderString(detailLevel) {
    return svgStrings[detailLevel];
  }

}
