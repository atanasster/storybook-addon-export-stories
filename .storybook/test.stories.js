import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const _text = () => (
  <Button>Testing</Button>
);

export const emoji = () => (
  <Button >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);