export const getPath = (path) =>
  `/magnit-front/build${path[0] === "/" ? path : `/${path}`}`;
