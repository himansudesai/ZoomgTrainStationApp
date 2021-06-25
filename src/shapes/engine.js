const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {}
svgStrings[SVGComplexity.Pixels120] = `
<g transform="scale(0.5, 0.5) translate(-120, -70)">
  <path 
    d="m 127.83279,205.48743 h 28.158 c 2.489,7.6975 9.655,12.91 17.743,12.91 10.2995,0 18.6475,-8.3485 18.6475,-18.6475 0,-0.3845 -0.011,-0.7655 -0.0345,-1.1475 h 8.677 c -0.0235,0.382 -0.0355,0.763 -0.0355,1.1475 0,10.299 8.3485,18.6475 18.648,18.6475 10.2945,0 18.6425,-8.3485 18.6425,-18.6475 0,-0.3845 -0.011,-0.7655 -0.0345,-1.1475 h 8.677 c -0.0235,0.382 -0.035,0.763 -0.035,1.1475 0,10.299 8.3475,18.6475 18.6475,18.6475 10.298,0 18.6475,-8.3485 18.6475,-18.6475 0,-0.3845 -0.0125,-0.7655 -0.036,-1.1475 h 24.995 v -24.0985 h -165.8165 v 8.0325 h -15.4915 z m 30.123,-5.737 c 0,-8.7165 7.0645,-15.78 15.7785,-15.78 8.7155,0 15.7795,7.0655 15.7795,15.78 0,8.715 -7.0645,15.7785 -15.7795,15.7785 -8.7145,0 -15.7785,-7.0645 -15.7785,-15.7785 z m 45.9015,0 c 0,-8.7165 7.0645,-15.78 15.7795,-15.78 8.71,0 15.7735,7.0655 15.7735,15.78 0,8.715 -7.0645,15.7785 -15.7735,15.7785 -8.7155,-5e-4 -15.7795,-7.0645 -15.7795,-15.7785 z m 45.8975,0 c 0,-8.7165 7.0645,-15.78 15.7795,-15.78 8.714,0 15.7785,7.0655 15.7785,15.78 0,8.715 -7.0645,15.7785 -15.7785,15.7785 -8.7165,-5e-4 -15.7795,-7.0645 -15.7795,-15.7785 z"
    style="stroke-width:0.5">
  </path>
  <circle cx="174.00426" cy="198.84883" r="5.7379999" style="stroke-width:0.5"></circle>
  <path d="m 219.90575,193.11082 c 3.1685,0 5.7335,2.5705 5.7335,5.7395 0,3.169 -2.565,5.738 -5.7335,5.738 -3.1695,0 -5.7385,-2.569 -5.7385,-5.738 0,-3.169 2.569,-5.7395 5.7385,-5.7395 z"
    style="stroke-width:0.5">
  </path>
  <circle cx="265.80325" cy="198.84883" r="5.7379999" style="stroke-width:0.5"></circle>
  <path fill="red" d="m 256.62275,121.96332 h -82.6185 V 98.438822 h -17.2125 v 23.524498 h -7.315 c -6.318,5.962 -9.898,14.2645 -9.898,22.95 0,8.6865 3.58,16.9895 9.898,22.949 h 107.146 z"
    style="stroke-width:0.5">
  </path>
  <path d="m 262.35975,101.30782 v 66.5565 h 47.049 v -55.081 h 5.7375 v -11.4755 h -5.7375 z m 11.476,10.327 h 21.8025 v 24.0985 h -21.8025 z"
    style="stroke-width:0.5">
  </path>
  <path d="m 172.48525,94.724322 c -22.8415,4.861 -17.9205,-18.536 3.7085,-12.64 16.2985,4.443 26.5355,-6.7415 47.2735,-4.888 6.4735,0.5785 0.648,26.326498 -12.5215,24.111998 -13.2335,-2.225498 -25.4215,-11.197498 -38.4605,-6.583998 z"
    style="stroke-width:0.5">
  </path>
  <text
    xml:space="preserve"
    style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none"
    x="147.13869"
    y="154.16788">
    <tspan
      x="100.13869"
      y="154.16788"
      style="font-size:26.6667px;fill:#ffffff">
      Thomas
    </tspan>
  </text>
</g>`;

svgStrings[SVGComplexity.Pixels60] = `
<g transform="scale(0.5, 0.5) translate(-120, -70)">
  <path
    d="m 127.83279,205.48743 h 28.158 c 2.489,7.6975 9.655,12.91 17.743,12.91 10.2995,0 18.6475,-8.3485 18.6475,-18.6475 0,-0.3845 -0.011,-0.7655 -0.0345,-1.1475 h 8.677 c -0.0235,0.382 -0.0355,0.763 -0.0355,1.1475 0,10.299 8.3485,18.6475 18.648,18.6475 10.2945,0 18.6425,-8.3485 18.6425,-18.6475 0,-0.3845 -0.011,-0.7655 -0.0345,-1.1475 h 8.677 c -0.0235,0.382 -0.035,0.763 -0.035,1.1475 0,10.299 8.3475,18.6475 18.6475,18.6475 10.298,0 18.6475,-8.3485 18.6475,-18.6475 0,-0.3845 -0.0125,-0.7655 -0.036,-1.1475 h 24.995 v -24.0985 h -165.8165 v 8.0325 h -15.4915 z m 30.123,-5.737 c 0,-8.7165 7.0645,-15.78 15.7785,-15.78 8.7155,0 15.7795,7.0655 15.7795,15.78 0,8.715 -7.0645,15.7785 -15.7795,15.7785 -8.7145,0 -15.7785,-7.0645 -15.7785,-15.7785 z m 45.9015,0 c 0,-8.7165 7.0645,-15.78 15.7795,-15.78 8.71,0 15.7735,7.0655 15.7735,15.78 0,8.715 -7.0645,15.7785 -15.7735,15.7785 -8.7155,-5e-4 -15.7795,-7.0645 -15.7795,-15.7785 z m 45.8975,0 c 0,-8.7165 7.0645,-15.78 15.7795,-15.78 8.714,0 15.7785,7.0655 15.7785,15.78 0,8.715 -7.0645,15.7785 -15.7785,15.7785 -8.7165,-5e-4 -15.7795,-7.0645 -15.7795,-15.7785 z"
    style="stroke-width:0.5"></path>
  <path
    d="M 308.38831,121.96332 H 189.22977 V 98.438822 h -24.82515 v 23.524498 h -10.55024 c -9.11229,5.962 -14.27563,14.2645 -14.27563,22.95 0,8.6865 5.16334,16.9895 14.27563,22.949 h 154.53393 z"
    style="stroke-width:0.600474"
    id="path40"></path>
  <path
    d="m 172.48525,94.724322 c -22.8415,4.861 -17.9205,-18.536 3.7085,-12.64 16.2985,4.443 26.5355,-6.7415 47.2735,-4.888 6.4735,0.5785 0.648,26.326498 -12.5215,24.111998 -13.2335,-2.225498 -25.4215,-11.197498 -38.4605,-6.583998 z"
    style="stroke-width:0.5"
    id="path44"></path>
</g>`;

svgStrings[SVGComplexity.Pixels30] = `
<g transform="scale(0.5, 0.5) translate(-120, -70)">
  <path
  d="m 139.13174,198.48026 h 23.10893 c 2.04269,5.95664 7.92375,9.99029 14.56147,9.99029 8.45268,0 15.30378,-6.46041 15.30378,-14.43021 0,-0.29754 -0.009,-0.59238 -0.0283,-0.88798 h 7.1211 c -0.0192,0.2956 -0.0291,0.59044 -0.0291,0.88798 0,7.9698 6.85151,14.43021 15.30418,14.43021 8.44858,0 15.29968,-6.46041 15.29968,-14.43021 0,-0.29754 -0.009,-0.59238 -0.0284,-0.88798 h 7.12111 c -0.0192,0.2956 -0.0287,0.59044 -0.0287,0.88798 0,7.9698 6.8507,14.43021 15.30379,14.43021 8.45144,0 15.30377,-6.46041 15.30377,-14.43021 0,-0.29754 -0.0102,-0.59238 -0.0295,-0.88798 h 20.51309 V 174.50393 H 151.84501 v 6.21589 h -12.71368 z m 24.72158,-4.43953 c 0,-6.74519 5.79776,-12.21123 12.94922,-12.21123 7.15272,0 12.95005,5.46759 12.95005,12.21123 0,6.74403 -5.79775,12.21006 -12.95005,12.21006 -7.15188,0 -12.94922,-5.46681 -12.94922,-12.21006 z m 37.67081,0 c 0,-6.74519 5.79776,-12.21123 12.95005,-12.21123 7.14819,0 12.94512,5.46759 12.94512,12.21123 0,6.74403 -5.79775,12.21006 -12.94512,12.21006 -7.1527,-3.8e-4 -12.95005,-5.46681 -12.95005,-12.21006 z m 37.66753,0 c 0,-6.74519 5.79775,-12.21123 12.95005,-12.21123 7.15147,0 12.94922,5.46759 12.94922,12.21123 0,6.74403 -5.79775,12.21006 -12.94922,12.21006 -7.15353,-3.8e-4 -12.95005,-5.46681 -12.95005,-12.21006 z"
  style="stroke-width:0.39846"></path>
<path
  d="M 285.61021,133.95286 H 182.53017 v -17.37953 h -21.4754 v 17.37953 h -9.12665 c -7.88274,4.40463 -12.34937,10.53838 -12.34937,16.9551 0,6.41745 4.46663,12.55157 12.34937,16.95436 h 133.68209 z"
  style="stroke-width:0.480041"></path>
<path
  style="fill:#280b0b"
  d="m 179.56205,103.74088 a 6.1587596,3.5583937 0 0 1 -6.11547,3.55831 6.1587596,3.5583937 0 0 1 -6.20144,-3.50828 6.1587596,3.5583937 0 0 1 6.02829,-3.60763 6.1587596,3.5583937 0 0 1 6.28619,3.45756 l -6.15633,0.10004 z"></path>
</g>`;

svgStrings[SVGComplexity.Pixels15] = `
<g transform="scale(0.5, 0.5) translate(-120, -70)">
    <path
      d="m 139.13174,198.48026 h 23.10893 c 2.04269,5.95664 7.92375,9.99029 14.56147,9.99029 8.45268,0 15.30378,-6.46041 15.30378,-14.43021 0,-0.29754 -0.009,-0.59238 -0.0283,-0.88798 h 7.1211 c -0.0192,0.2956 -0.0291,0.59044 -0.0291,0.88798 0,7.9698 6.85151,14.43021 15.30418,14.43021 8.44858,0 15.29968,-6.46041 15.29968,-14.43021 0,-0.29754 -0.009,-0.59238 -0.0284,-0.88798 h 7.12111 c -0.0192,0.2956 -0.0287,0.59044 -0.0287,0.88798 0,7.9698 6.8507,14.43021 15.30379,14.43021 8.45144,0 15.30377,-6.46041 15.30377,-14.43021 0,-0.29754 -0.0102,-0.59238 -0.0295,-0.88798 h 20.51309 V 174.50393 H 151.84501 v 6.21589 h -12.71368 z m 24.72158,-4.43953 c 0,-6.74519 5.79776,-12.21123 12.94922,-12.21123 7.15272,0 12.95005,5.46759 12.95005,12.21123 0,6.74403 -5.79775,12.21006 -12.95005,12.21006 -7.15188,0 -12.94922,-5.46681 -12.94922,-12.21006 z m 37.67081,0 c 0,-6.74519 5.79776,-12.21123 12.95005,-12.21123 7.14819,0 12.94512,5.46759 12.94512,12.21123 0,6.74403 -5.79775,12.21006 -12.94512,12.21006 -7.1527,-3.8e-4 -12.95005,-5.46681 -12.95005,-12.21006 z m 37.66753,0 c 0,-6.74519 5.79775,-12.21123 12.95005,-12.21123 7.15147,0 12.94922,5.46759 12.94922,12.21123 0,6.74403 -5.79775,12.21006 -12.94922,12.21006 -7.15353,-3.8e-4 -12.95005,-5.46681 -12.95005,-12.21006 z" style="stroke-width:0.39846"
    ></path>
    <rect
    style="fill:#280b0b;fill-opacity:1"
    id="rect65"
    width="123.44891"
    height="24.361315"
    x="150.82117"
    y="144.25183"></rect>
  </g>`;

  svgStrings[SVGComplexity.InsideGroups] = `
  <g transform="scale(0.5, 0.5) translate(-120, -70)">
    <path
      d="m 139.13174,198.48026 h 23.10893 c 2.04269,5.95664 7.92375,9.99029 14.56147,9.99029 8.45268,0 15.30378,-6.46041 15.30378,-14.43021 0,-0.29754 -0.009,-0.59238 -0.0283,-0.88798 h 7.1211 c -0.0192,0.2956 -0.0291,0.59044 -0.0291,0.88798 0,7.9698 6.85151,14.43021 15.30418,14.43021 8.44858,0 15.29968,-6.46041 15.29968,-14.43021 0,-0.29754 -0.009,-0.59238 -0.0284,-0.88798 h 7.12111 c -0.0192,0.2956 -0.0287,0.59044 -0.0287,0.88798 0,7.9698 6.8507,14.43021 15.30379,14.43021 8.45144,0 15.30377,-6.46041 15.30377,-14.43021 0,-0.29754 -0.0102,-0.59238 -0.0295,-0.88798 h 20.51309 V 174.50393 H 151.84501 v 6.21589 h -12.71368 z m 24.72158,-4.43953 c 0,-6.74519 5.79776,-12.21123 12.94922,-12.21123 7.15272,0 12.95005,5.46759 12.95005,12.21123 0,6.74403 -5.79775,12.21006 -12.95005,12.21006 -7.15188,0 -12.94922,-5.46681 -12.94922,-12.21006 z m 37.67081,0 c 0,-6.74519 5.79776,-12.21123 12.95005,-12.21123 7.14819,0 12.94512,5.46759 12.94512,12.21123 0,6.74403 -5.79775,12.21006 -12.94512,12.21006 -7.1527,-3.8e-4 -12.95005,-5.46681 -12.95005,-12.21006 z m 37.66753,0 c 0,-6.74519 5.79775,-12.21123 12.95005,-12.21123 7.15147,0 12.94922,5.46759 12.94922,12.21123 0,6.74403 -5.79775,12.21006 -12.94922,12.21006 -7.15353,-3.8e-4 -12.95005,-5.46681 -12.95005,-12.21006 z" style="stroke-width:0.39846"
    ></path>
    <rect
    style="fill:#280b0b;fill-opacity:1"
    id="rect65"
    width="123.44891"
    height="24.361315"
    x="150.82117"
    y="144.25183"></rect>
  </g>`;

svgStrings[SVGComplexity.Pixels90] = svgStrings[SVGComplexity.Pixels120];

export default class Engine extends Shape {

  getTypeName() {
    return "Engine";
  }

  renderContents(svg, svgComplexity) {
    svg.innerHTML = svgStrings[svgComplexity];
  }

  getRenderString(detailLevel) {
    return svgStrings[detailLevel];
  }

}
