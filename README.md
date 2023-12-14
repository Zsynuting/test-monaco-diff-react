### 问题描述

使用 React 18 的 render API 渲染 @monaco-editor/react 的时候，在 editor 中输入较快的时候会导致光标飘到最后。

使用 React18 的 createRoot api 渲染的时候，就不会有这个问题。

使用 React 17 的 render API 渲染时候，也没有这个问题。

React 官方声称，使用 render API 会以 17 的 legacy mode 渲染，使用 createRoot API 会使用 18 的 concurrent mode 渲染，但实际观察行为是不同的

### 为什么光标会飘到最后

@monaco-editor/react 的 effect 检测到 value 修改，并且和 editor 中当前的内容不一致时候，会触发发一次 executeEdits，并将光标移动到最后
https://github.com/suren-atoyan/monaco-react/blob/637551552862d3eddffc7e9bb0b84058b8e0275c/src/Editor/Editor.tsx#L102

### 核心问题

所以问题就是 `为什么使用 React 18 的 render API 渲染 @monaco-editor/react 的时候value 会和 editor 的内容不一致`
