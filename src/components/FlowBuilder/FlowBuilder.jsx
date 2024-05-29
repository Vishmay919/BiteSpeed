import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NodesPanel from '../NodesPanel/NodesPanel';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import { nodeTypes } from './nodeTypes';
import './FlowBuilder.css';
import { createTextNode, createImageNode } from '../../utils/nodeUtils';

const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    // Loading flow data from local storage on initial render
    const storedFlow = JSON.parse(localStorage.getItem('flowData'));
    if (storedFlow) {
      setNodes(storedFlow.nodes || []);
      setEdges(storedFlow.edges || []);
    }
  }, [setNodes, setEdges]);

  const onConnect = useCallback((params) => {
    const existingEdges = edges.filter((edge) => edge.source === params.source);
    if (existingEdges.length >= 1) {
      toast.error('Each node can only have one outgoing connection.');
      return;
    }
    setEdges((eds) => addEdge(params, eds));
  }, [edges, setEdges]);

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    console.log('Node clicked:', node);
  };

  const onPaneClick = () => {
    setSelectedNode(null);
  };

  const addNode = (nodeType) => {
    let newNode;
    if (nodeType === 'textNode') {
      newNode = createTextNode();
    } else if (nodeType === 'imageNode') {
      newNode = createImageNode();
    }
    setNodes((nds) => nds.concat(newNode));
    setSelectedNode(newNode);
  };

  const onSave = () => {
    const nodesWithNoTarget = nodes.filter(
      (node) => !edges.find((edge) => edge.source === node.id)
    );

    if (nodesWithNoTarget.length > 1) {
      toast.error('Error: More than one node has no target handle.');
    } else {
      const flowData = { nodes, edges };
      localStorage.setItem('flowData', JSON.stringify(flowData));
      console.log('Flow saved:', flowData);
      setSelectedNode(null);
      toast.success('Flow saved successfully!');
    }
  };

  const onDeleteNode = (nodeId) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
    setSelectedNode(null);
  };

  return (
    <div>
      <div className='navbar'>
        <button className="save-button" onClick={onSave}>
          Save Flow
        </button>
      </div>
      <div className="flow-builder">
        <ReactFlowProvider>
          <div className="flow-area">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              onPaneClick={onPaneClick}
              fitView
              nodeTypes={nodeTypes}
            />
          </div>
          <div className="sidebar">
            {selectedNode ? (
              <SettingsPanel
                selectedNode={selectedNode}
                setNodes={setNodes}
                nodes={nodes}
                onDeleteNode={onDeleteNode}
              />
            ) : (
              <NodesPanel addNode={addNode} />
            )}
          </div>
        </ReactFlowProvider>
        <ToastContainer />
      </div>
    </div>
  );
};

export default FlowBuilder;
