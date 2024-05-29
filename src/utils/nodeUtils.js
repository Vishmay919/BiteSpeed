import { v4 as uuidv4 } from 'uuid';

export const createTextNode = () => ({
  id: uuidv4(),
  type: 'textNode',
  position: { x: 250, y: 5 },
  data: { label: 'New Text Node' },
});

export const createImageNode = () => ({
  id: uuidv4(),
  type: 'imageNode',
  position: { x: 250, y: 5 },
  data: { label: 'New Image Node', src: 'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg' },
});
