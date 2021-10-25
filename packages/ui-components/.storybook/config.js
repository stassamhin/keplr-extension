// import { withInfo } from '@storybook/addon-info';
import { configure } from '@storybook/react';

// addDecorator(withInfo({ inline: true, header: false }));

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);