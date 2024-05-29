import React from 'react';
import { Handle, Position } from 'reactflow';
import './ImageNode.css';

const ImageNode = ({ data }) => {
  return (
    <div className="image-node">
      <div className='node-header'>Image node</div>
      <div className='node-content'>
        <img src={data.src} alt={data.label} className="image-node-img" />
        <div>{data.label}</div>
          <Handle type="source" position={Position.Right} id="a" />
          <Handle type="target" position={Position.Left} id="b" />
      </div>
    </div>
  );
};

export default ImageNode;
