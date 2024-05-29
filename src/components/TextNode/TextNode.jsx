import React from 'react';
import { Handle, Position } from 'reactflow';
import './TextNode.css';

const TextNode = ({ data }) => {
  return (
    <div className="text-node">
      <div className='node-header'>Text node</div>
      <div className='node-content'>
        <div>{data.label}</div>
          <Handle type="source" position={Position.Right} id="a" />
          <Handle type="target" position={Position.Left} id="b" />
        </div>
    </div>
  );
};

export default TextNode;
