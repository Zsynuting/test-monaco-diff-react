const loadScript = (url: string) => {
  return new Promise((resolve) => {
    const el = document.createElement('script')
    console.log('%c Line:5 🥒 url', 'color:#3f7cff', url)
    el.src = url
    el.onload = () => resolve(void 0)
    document.head.appendChild(el)
  })
}

const appendReact = async (version: string) => {
  await Promise.all([
    loadScript(`https://unpkg.com/react@${version}/umd/react.development.js`),
    loadScript(`https://unpkg.com/react-dom@${version}/umd/react-dom.development.js`),
  ])
}

const load = async () => {
  const version = localStorage.getItem('react-version')
  switch (version) {
    case '16':
      await appendReact('16.8.0')
      break
    case '17':
      await appendReact('17.0.2')
      break
    case '18':
    default:
      await appendReact('18.2.0')
      break
  }
  await import('./main')
}

load()

export {}
