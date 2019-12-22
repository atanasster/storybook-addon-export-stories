import React from 'react';
import { Icons, IconButton } from '@storybook/components';
import { Combo, Consumer } from '@storybook/api';


const saveToFile = (json: object, filename: string) => {
  console.log(json);
  const content = JSON.stringify(json, null, 2);
  const blob = new Blob([content], { type: 'text/csv' });

  /* taken from react-csv */
  if (navigator && navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const dataURI = `data:text/json;charset=utf-8,${content}`;

    const URL = window.URL || window.webkitURL;
    const downloadURI = typeof URL.createObjectURL === 'undefined' ? dataURI : URL.createObjectURL(blob);

    let link = document.createElement('a');
    link.setAttribute('href', downloadURI);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

const mapper = ({ state }: Combo): { items: object } => {
  return { items: state.storiesHash };
};


export const ExportButton: React.FC = () => {
  return (
    <Consumer filter={mapper}>
      {({ items }: ReturnType<typeof mapper>) => (
        <IconButton
          active={false}
          title="Save all stories to a .json file"
          onClick={() => saveToFile(items, 'stories.json')}
        >
          <Icons icon="download" />
        </IconButton>
      )}
    </Consumer>    
  );
};
