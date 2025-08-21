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

  router.onAfterRouteChanged = () => {
    window.MathJax?.typesetPromise()
  }
}