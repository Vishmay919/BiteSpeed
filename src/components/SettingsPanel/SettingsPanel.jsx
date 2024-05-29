import React, { useState, useEffect } from 'react';
import './SettingsPanel.css';

const SettingsPanel = ({ selectedNode, setNodes, nodes, onDeleteNode }) => {
  const [nodeData, setNodeData] = useState(selectedNode.data);

  useEffect(() => {
    setNodeData(selectedNode.data);
  }, [selectedNode]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setNodeData((prevData) => ({ ...prevData, [name]: value }));
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id ? { ...node, data: { ...node.data, [name]: value } } : node
      )
    );
  };

  const handleDelete = () => {
    onDeleteNode(selectedNode.id);
  };

  return (
    <div className="settings-panel">
      <h3>Settings Panel</h3>
      {selectedNode.type === 'textNode' && (
        <input
          type="text"
          name="label"
          value={nodeData.label}
          onChange={onChange}
          placeholder="Enter text"
        />
      )}
      {selectedNode.type === 'imageNode' && (
        <>
          <input
            type="text"
            name="label"
            value={nodeData.label}
            onChange={onChange}
            placeholder="Enter image label"
          />
          <input
            type="text"
            name="src"
            value={nodeData.src}
            onChange={onChange}
            placeholder="Enter image URL"
          />
        </>
      )}
      <button className="delete-button" onClick={handleDelete}>
        Delete Node
      </button>
    </div>
  );
};

export default SettingsPanel;
