/**
 * https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 * shadeColor("#63C6FF", 40);
 * shadeColor("#63C6FF",-40);
 *
 * Does not work with solid colors: etc: '#ff0000'
 *
 * @param color Hex value format: #ffffff or ffffff
 * @param decimal lighten or darken decimal value, example 0.5 to lighten by 50% or 1.5 to darken by 50%.
 *
 */
export function shadeColor(color: string, percent: number) {
  let R: number = parseInt(color.substring(1, 3), 16);
  let G: number = parseInt(color.substring(3, 5), 16);
  let B: number = parseInt(color.substring(5, 7), 16);

  console.log(R, G, B);

  R = Math.round((R * (100 + percent)) / 100);
  G = Math.round((G * (100 + percent)) / 100);
  B = Math.round((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

/*
 * https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
 * Convert a solid hex color into RGBA
 *
 */
export function convertHexToRGBA(color: string, opacity: number = 1) {
  let hex = color.replace('#', '');

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
}

/*
 * Standardize any named CSS color string into hex or rgba
 *
 */
export function standardizeColor(str: string) {
  const ctx = document.createElement('canvas').getContext('2d');

  if (ctx) {
    ctx.fillStyle = str;
    return ctx.fillStyle;
  }

  return '#000000';
}
