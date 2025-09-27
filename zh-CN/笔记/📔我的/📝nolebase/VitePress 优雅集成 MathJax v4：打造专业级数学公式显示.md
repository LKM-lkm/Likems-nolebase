---
tags:
  - 数学
  - 文字渲染
comment: true
description: 目前仅适用于nolebase-template，不适用于原版。
---
# VitePress 优雅集成 MathJax v4：打造专业级数学公式显示

VitePress 是一个强大而简洁的静态站点生成器，非常适合用于构建文档、博客和知识库。然而，对于科技、学术或教育领域的写作者来说，一个常见需求是展示优美的数学公式。虽然 VitePress 内置了对数学公式的支持（通过 KaTeX），但如果我们想要更强大的功能、更丰富的字体选择（比如经典的 Termes 字体）和印刷级的渲染质量，MathJax v4 无疑是最佳选择。

本文将手把手带你完成在 VitePress 中集成 MathJax v4 的全部过程，并提供一份详尽的 Markdown 语法指南，助你轻松写出漂亮的公式。

**我们的目标：**

1. 在 VitePress 中禁用默认的 KaTeX 渲染器。
2. 引入 MathJax v4，并配置使用 `mathjax-termes` 字体。
3. 确保公式在亮色和暗色模式下都能完美显示。
4. 掌握在 Markdown 中书写 LaTeX 公式的正确语法和技巧。

---

### Part 1：配置 VitePress 集成 MathJax

这是一个纯粹的配置过程，只需三步，让你的 VitePress 项目为 MathJax 做好准备。

#### 第 1 步：禁用 VitePress 内置数学渲染

为了避免与我们即将引入的 MathJax 发生冲突，首先需要关闭 VitePress 自带的公式渲染功能。

打开你的项目配置文件 `.vitepress/config.ts`，找到 `markdown` 选项，将 `math` 属性设置为 `false`。

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ... 其他配置 ...

  markdown: {
    // ... 其他 markdown 配置 ...
    math: false, // <-- 关键！禁用内置的 KaTeX
  },

  // ...
})
```

#### 第 2 步：注入 MathJax v4 脚本

接下来，我们需要将 MathJax 的配置和主脚本注入到每个页面的 `<head>` 标签中。这依然在 `.vitepress/config.ts` 文件中完成。

在 `defineConfig` 中找到 `head` 选项，并添加以下两个 `<script>` 块。

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ... title, description 等配置 ...

  head: [
    // ... 你其他的 meta 和 link 标签 ...

     // 注入 MathJax v4 的配置
    [
      'script',
      {}, // 空对象表示没有额外属性
      `window.MathJax = {
        output: {
          font: 'mathjax-termes' // 全局指定使用 mathjax-termes 字体
        },
         tex: {
          inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]
        }
      };`
    ],
    // 注入 MathJax v4 的主脚本 (-nofont 版本以优化性能)
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/mathjax@4.0.0/tex-chtml-nofont.js',
        async: 'true',
      },
    ],

    // ... 你其他的 head 内容 ...
  ],

  // ...
})
```

**配置详解：**

* **第一个脚本**：在 MathJax 主脚本加载前，我们定义了全局配置 `window.MathJax`。
  * `output: { font: 'mathjax-termes' }`: 这是核心，它告诉 MathJax 使用 `mathjax-termes` 字体包来渲染所有公式。
  * `tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }`: 这一行让我们可以方便地使用单个美元符号 `$...$` 来书写行内公式。
* **第二个脚本**：我们从 CDN 加载 MathJax 的主程序。
  * 我们选择了 `tex-chtml-nofont.js` 版本，因为它不包含默认字体，浏览器只会按需下载我们指定的 `termes` 字体，加载速度更快。
  * `async: ''`: 属性值为**空字符串**而不是布尔值 `true`，这是为了通过 VitePress 的 TypeScript 类型检查，它会生成正确的 `<script async>` 标签。

#### 第 3 步：适配暗黑模式

一个常见的疏忽是，在暗黑模式下，公式的文字可能因为是黑色而无法看清。我们只需添加一条简单的 CSS 规则即可解决。

1. **创建/编辑 CSS 文件**

   在你的 `.vitepress/theme/` 目录下，找到或创建一个 CSS 文件，例如 `custom.css`。
2. **添加样式规则**

   在 `custom.css` 中添加以下代码：

   ```css
   /* .vitepress/theme/custom.css */

   /*
    * 修复暗黑模式下 MathJax 公式的颜色。
    * 这条规则让 MathJax 容器的文字颜色继承 VitePress 主题的当前颜色。
    */
   .dark mjx-container {
     color: inherit;
   }
   ```
3. **导入 CSS**

   确保这个 CSS 文件被你的 VitePress 主题加载。编辑 `.vitepress/theme/index.ts` (或 `.js`)：

   ```typescript
   // .vitepress/theme/index.ts
   import DefaultTheme from 'vitepress/theme'
   import './custom.css' // 导入你的自定义 CSS

   export default {
     ...DefaultTheme,
   }
   ```

配置完成！现在重启你的 VitePress 开发服务器 (`npm run docs:dev`)，你已经拥有了一个功能完备的 MathJax 环境。

---

### Part 2：MathJax Markdown 语法指南

配置好了环境，现在来看看如何在 Markdown 中优雅地书写公式。

#### 基础语法：公式定界符


| 类型         | 定界符      | Markdown 示例                                 | 说明                                     |
| :----------- | :---------- | :-------------------------------------------- | :--------------------------------------- |
| **行内公式** | `\( ... \)` | `爱因斯坦的质能方程是 \\( E = mc^2 \\)。`     | 官方推荐，最稳定。需用`\\(` 转义反斜杠。 |
| **行内公式** | `$...$`     | `爱因斯坦的质能方程是 $E = mc^2$。`           | 简洁方便，但需按上文配置启用。           |
| **块级公式** | `$$ ... $$` | `$$ \sum_{i=1}^{n} i = \frac{n(n+1)}{2} $$`   | 默认启用，最常用。                       |
| **块级公式** | `\[ ... \]` | `\\[ \sum_{i=1}^{n} i = \frac{n(n+1)}{2} \\]` | 默认启用，功能同`$$...$$`。              |

#### 关键！处理 Markdown 语法冲突

这是新手最容易踩的坑。Markdown 的一些特殊字符（如 `_`, `*`）与 LaTeX 的语法重叠，可能导致渲染失败。


| 特殊字符 | LaTeX 用途            | Markdown 用途     | 解决方案                                                                          |
| :------- | :-------------------- | :---------------- | :-------------------------------------------------------------------------------- |
| **`_`**  | **下标** (如 `x_1`)   | *斜体*            | 如果下标内容复杂或被错误解析，请用反斜杠转义：`$x\_i$`。                          |
| **`*`**  | **乘法** (如 `a * b`) | *斜体* / **粗体** | 强烈建议转义，尤其当`*` 两侧有空格时：`$a \* b$`。                                |
| **`\`**  | **命令前缀**          | 转义字符          | 在 Markdown 中表示单个`\` 时，通常需要写成 `\\`，如换行命令 `\\` 或定界符 `\\(`。 |

#### 常用 LaTeX 命令速览

* **上下标**: `$x^2$`, `$a_{ij}$`, `$e^{i\pi} + 1 = 0$`
* **分数**: `$\frac{a}{b}$`
* **根号**: `$\sqrt{x}$`, `$\sqrt[3]{x}$`
* **希腊字母**: `$\alpha, \beta, \Omega, \Delta$`
* **求和与积分**: `$$ \sum_{i=1}^{n} f(x_i) \quad \int_{a}^{b} g(x) dx $$`
* **极限**: `$$ \lim_{x \to 0} \frac{\sin x}{x} = 1 $$`
* **矩阵**:
  ```latex
  $$
  \begin{pmatrix}
  1 & 2 \\
  3 & 4
  \end{pmatrix}
  $$
  ```

---

### Part 3：MathJax 渲染效果

[MathJax LaTeX 综合测试页面](MathJax%20LaTeX%20综合测试页面.md)

---

### 结语

恭喜！你已经成功地为你的 VitePress 网站装备了强大而美观的 MathJax v4 渲染引擎。通过简单的几步配置，你不仅可以使用经典的 Termes 字体来展示公式，还了解了如何在 Markdown 环境中避免常见的语法陷阱。
