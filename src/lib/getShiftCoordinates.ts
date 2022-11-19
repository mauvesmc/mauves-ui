export const getShiftCoordinates = (
  e: MouseEvent | TouchEvent,
  bounding: DOMRect
) => {
  let clientX = 0;
  let clientY = 0;
  if ("touches" in e) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  const [boundingX, boundingY] = [bounding.left, bounding.top];
  return [clientX - boundingX, clientY - boundingY];
};
