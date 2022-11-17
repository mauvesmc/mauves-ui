export const getShiftCoordinates = (e: MouseEvent, bounding: DOMRect) => {
  const [clientX, clientY] = [e.clientX, e.clientY];
  const [boundingX, boundingY] = [bounding.left, bounding.top];
  return [clientX - boundingX, clientY - boundingY];
};
