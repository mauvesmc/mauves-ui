const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replaceAll('#', '');
  if (hex.match('^([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$') === null)
    return [255, 0, 0];
  let red = 0;
  let blue = 0;
  let green = 0;

  if (hex.length === 3) {
    red = Number.parseInt(hex.substring(0, 1), 16);
    blue = Number.parseInt(hex.substring(1, 2), 16);
    green = Number.parseInt(hex.substring(2, 3), 16);
  }
  if (hex.length === 6) {
    red = Number.parseInt(hex.substring(0, 2), 16);
    blue = Number.parseInt(hex.substring(2, 4), 16);
    green = Number.parseInt(hex.substring(4, 6), 16);
  }

  return [red, blue, green];
};

export default hexToRgb;
