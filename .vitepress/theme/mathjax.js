export default function setupMathJax(router) {
  if (typeof window === 'undefined') return

  // 默认使用官方 CDN Termes 字体
  window.MathJax = {
    loader: { load: ['input/tex', 'output/chtml'] },
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
    },
    output: {
      font: 'https://cdn.jsdelivr.net/npm/@mathjax/mathjax-termes-font@4.0.0'
    }
  }

  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4.0.0/tex-chtml-nofont.js'
  script.async = true
  script.onload = () => {
    setTimeout(() => {
      window.MathJax?.typesetPromise()
    }, 100)
  }
  document.head.appendChild(script)

  // 检测 CDN 字体是否加载成功，否则回退到本地
  document.fonts.ready.then(() => {
    const loaded = [...document.fonts].some(f => f.family.includes('MathJax_Termes'))
    if (!loaded) {
      console.warn('CDN Termes 字体未加载，切换到本地字体')
      window.MathJax.output.font = '/fonts/mathjax-termes'
      window.MathJax.typesetPromise()
    }
  })

  // 路由变化时重新渲染
  if (router && router.onAfterRouteChanged) {
    router.onAfterRouteChanged = () => {
      setTimeout(() => {
        window.MathJax?.typesetPromise()
      }, 100)
    }
  }
  
  // 初始渲染
  setTimeout(() => {
    window.MathJax?.typesetPromise()
  }, 500)
}