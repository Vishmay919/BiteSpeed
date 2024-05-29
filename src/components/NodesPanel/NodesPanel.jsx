import React from 'react';
import './NodesPanel.css';

const NodesPanel = ({ addNode }) => {
  return (
    <div className="nodes-panel">
      <h3>Nodes Panel</h3>
      <button onClick={() => addNode('textNode')}>Add Text Node</button>
      <button onClick={() => addNode('imageNode')}>Add Image Node</button>
    </div>
  );
};

export default NodesPanel;
