import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// 导入样式文件
import '../styles/main.css'
import '../styles/vars.css'
// 使用统一的 Backdrop Filter 主题样式（不影响布局）
import './styles/backdrop-theme.css'

const ExtendedTheme: Theme = {
  extends: DefaultTheme,
  // 使用VitePress默认布局，只添加样式增强
}

export default ExtendedTheme
