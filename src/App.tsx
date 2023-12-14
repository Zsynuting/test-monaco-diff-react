import { CSSProperties } from 'react'
import Editor from './Editor'

const buttonStyle: CSSProperties = {
  margin: '20px',
  height: '30px',
  lineHeight: '30px',
  textAlign: 'center',
  borderRadius: '4px',
  width: '200px',
}

function App() {
  const reactVersion = localStorage.getItem('react-version')
  const renderMode = localStorage.getItem('render-mode')

  const applyReactVersion = (version: number) => {
    localStorage.setItem('react-version', version + '')
    if (version < 18) {
      localStorage.setItem('render-mode', 'legacy')
    }
    document.location.reload()
  }

  const applyRenderMode = (isLegacy: boolean) => {
    localStorage.setItem('render-mode', isLegacy ? 'legacy' : '18')
    document.location.reload()
  }

  return (
    <div>
      <div style={{ margin: '20px' }}>
        <span style={{ display: 'inline-block', width: '200px' }}>React Version:</span>
        <button
          style={{ ...buttonStyle, background: reactVersion === '16' ? 'lightblue' : undefined }}
          onClick={() => applyReactVersion(16)}
        >
          16
        </button>
        <button
          style={{ ...buttonStyle, background: reactVersion === '17' ? 'lightblue' : undefined }}
          onClick={() => applyReactVersion(17)}
        >
          17
        </button>
        <button
          style={{ ...buttonStyle, background: reactVersion === '18' ? 'lightblue' : undefined }}
          onClick={() => applyReactVersion(18)}
        >
          18
        </button>
      </div>
      {reactVersion === '18' ? (
        <div style={{ margin: '20px' }}>
          <span style={{ display: 'inline-block', width: '200px' }}>Render Mode:</span>
          <button
            style={{
              ...buttonStyle,
              background: renderMode === 'legacy' ? 'lightblue' : undefined,
            }}
            onClick={() => applyRenderMode(true)}
          >
            Legacy Mode (use render API)
          </button>
          <button
            style={{
              ...buttonStyle,
              background: renderMode !== 'legacy' ? 'lightblue' : undefined,
            }}
            onClick={() => applyRenderMode(false)}
          >
            18 Concurrent Mode (use createRoot API)
          </button>
        </div>
      ) : (
        ''
      )}
      <Editor />
    </div>
  )
}

export default App
