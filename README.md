# storybook-addon-export-stories

A storybook addon to save a list of stories into JSON


## Installation
```sh
npm i -D storybook-addon-export-stories
```

## Configuration

in the `main.js` file in your storybook config, register `storybook-addon-export-stories`:

```js
module.exports = {
  ...
  addons: [
    'storybook-addon-export-stories',
  ],
};

```
## Usage

A button will be displayed in the Storybook toolbar - you can click that button to download all your stories to a `stories.json` file.