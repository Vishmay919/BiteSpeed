# Chatbot Flow Builder

Welcome to the Chatbot Flow Builder project! This project demonstrates a simple yet extensible chatbot flow builder built using React and React Flow. The flow builder allows users to create and connect different types of nodes, forming a flow that determines the order of execution for a chatbot.

## Features

1. **Text Node**: 
   - Supports multiple text nodes in a single flow.
   - Nodes are added via buttons in the Nodes Panel.

2. **Image Node**:
   - Includes an image node with a default link.
   - Easily extendable to add more types of nodes.

3. **Nodes Panel**:
   - Houses all node types supported by the Flow Builder.
   - Designed to be extensible for adding new node types in the future.

4. **Settings Panel**:
   - Appears when a node is selected.
   - Allows users to edit the properties of the selected node.
   - Includes functionality to delete nodes.

5. **Edge**:
   - Connects two nodes together.
   - Ensures each node has only one outgoing connection.

6. **Save Button**:
   - Saves the current flow to local storage.
   - Displays an error if more than one node has no target handle.
   - Shows a success message upon successful save.

7. **Persistent State**:
   - Loads the saved flow from local storage upon refresh.
   - Ensures that the user's work is not lost between sessions.

## Extensibility

The project is designed with extensibility in mind. The code is structured to easily add new node types. Currently, there are two types of nodes: text and image nodes. The addition of these nodes is managed through utility functions that can be easily extended to include new node types.

### Example of Adding a New Node Type:

```javascript
export const createCustomNode = () => ({
  id: uuidv4(),
  type: 'customNode',
  position: { x: 250, y: 5 },
  data: { label: 'New Custom Node' },
});
```

## UX Improvement

A notable UX improvement made during the development was the addition of a delete functionality for nodes. This feature, though not explicitly mentioned in the requirements, was implemented to enhance the user experience by allowing users to remove accidentally added nodes.

## Code Structure and Decisions

### Code Organization

- **FlowBuilder Component**:
  - Manages the overall flow and interaction with React Flow.
  - Handles node addition, deletion, and selection.
  - Saves the flow state to local storage and loads it upon initialization.

- **NodesPanel Component**:
  - Displays available node types.
  - Facilitates the addition of new nodes.

- **SettingsPanel Component**:
  - Displays settings for the selected node.
  - Allows editing of node properties and deletion.

- **Utility Functions**:
  - Functions for creating different node types.
  - Ensures consistent structure and default values for nodes.

### Other Features

1. **Local Storage**:
   - Saves the current flow to local storage to persist data across sessions.
   - Ensures that users do not lose their work upon refreshing the page.

2. **React Toastify**:
   - Provides user feedback through toast notifications.
   - Enhances user experience by displaying success and error messages.
