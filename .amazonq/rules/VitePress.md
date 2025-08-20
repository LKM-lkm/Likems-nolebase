always answer in Chinese

总是使用VS Code内置简单浏览器打开测试网页

对于项目原有的配置，应该谨慎修改，先检查是否是修改导致的

# 扩展默认主题

VitePress 默认的主题已经针对文档进行了优化，并且可以进行自定义。请参考[默认主题配置概览](https://vitepress.dev/zh/reference/default-theme-config)获取完整的选项列表。

但是有一些情况仅靠配置是不够的。例如：

1. 需要调整 CSS 样式；
2. 需要修改 Vue 应用实例，例如注册全局组件；
3. 需要通过 layout 插槽将自定义内容注入到主题中；

这些高级自定义配置将需要使用自定义主题来“拓展”默认主题。

TIP

在继续之前，请确保首先阅读[自定义主题](https://vitepress.dev/zh/guide/custom-theme)以了解其工作原理。

## 自定义 CSS

可以通过覆盖根级别的 CSS 变量来自定义默认主题的 CSS：

**.vitepress/theme/index.js**

```
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

```
/* .vitepress/theme/custom.css */
:root {
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
}
```

查看[默认主题 CSS 变量](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css)来获取可以被覆盖的变量。

## 使用自定义字体

VitePress 使用 [Inter](https://rsms.me/inter/) 作为默认字体，并且将其包含在生成的输出中。该字体在生产环境中也会自动预加载。但是如果要使用不同的字体，这可能不是很好。

为了避免在生成后的输出中包含 Inter 字体，请从 `vitepress/theme-without-fonts` 中导入主题：

**.vitepress/theme/index.js**

```
import DefaultTheme from 'vitepress/theme-without-fonts'
import './my-fonts.css'

export default DefaultTheme
```

```
/* .vitepress/theme/my-fonts.css */
:root {
  --vp-font-family-base: /* normal text font */
  --vp-font-family-mono: /* code font */
}
```

WARNING

如果你在使用像是[团队页](https://vitepress.dev/zh/reference/default-theme-team-page)这样的组件，请确保也从 `vitepress/theme-without-fonts` 中导入它们！

如果字体是通过 `@font-face` 引用的本地文件，它将会被作为资源被包含在 `.vitepress/dist/asset` 目录下，并且使用哈希后的文件名。为了预加载这个文件，请使用 [transformHead](https://vitepress.dev/zh/reference/site-config#transformhead) 构建钩子：

**.vitepress/config.js**

```
export default {
  transformHead({ assets }) {
    // 相应地调整正则表达式以匹配字体
    const myFontFile = assets.find(file => /font-name\.[\w-]+\.woff2/.test(file))
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  }
}
```

## 注册全局组件

**.vitepress/theme/index.js**

```
import DefaultTheme from 'vitepress/theme'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('MyGlobalComponent' /* ... */)
  }
}
```

如果使用 TypeScript:

**.vitepress/theme/index.ts**

```
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('MyGlobalComponent' /* ... */)
  }
} satisfies Theme
```

因为我们使用 Vite，还可以利用 Vite 的 [glob 导入功能](https://cn.vitejs.dev/guide/features.html#glob-import)来自动注册一个组件目录。

## 布局插槽

默认主题的 `<Layout/>` 组件有一些插槽，能够被用来在页面的特定位置注入内容。下面这个例子展示了将一个组件注入到 outline 之前：

**.vitepress/theme/index.js**

```
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout
}
```

**.vitepress/theme/MyLayout.vue**

```
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
  </Layout>
</template>
```

也可以使用渲染函数。

**.vitepress/theme/index.js**

```
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MyComponent from './MyComponent.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(MyComponent)
    })
  }
}
```

默认主题布局的全部可用插槽如下：

* 当 `layout: 'doc'` (默认) 在 frontmatter 中被启用时：
  * `doc-top`
  * `doc-bottom`
  * `doc-footer-before`
  * `doc-before`
  * `doc-after`
  * `sidebar-nav-before`
  * `sidebar-nav-after`
  * `aside-top`
  * `aside-bottom`
  * `aside-outline-before`
  * `aside-outline-after`
  * `aside-ads-before`
  * `aside-ads-after`
* 当 `layout: 'home'` 在 frontmatter 中被启用时:
  * `home-hero-before`
  * `home-hero-info-before`
  * `home-hero-info`
  * `home-hero-info-after`
  * `home-hero-actions-after`
  * `home-hero-image`
  * `home-hero-after`
  * `home-features-before`
  * `home-features-after`
* 当 `layout: 'page'` 在 frontmatter 中被启用时:
  * `page-top`
  * `page-bottom`
* 当未找到页面 (404) 时:
  * `not-found`
* 总是启用:
  * `layout-top`
  * `layout-bottom`
  * `nav-bar-title-before`
  * `nav-bar-title-after`
  * `nav-bar-content-before`
  * `nav-bar-content-after`
  * `nav-screen-content-before`
  * `nav-screen-content-after`

## 使用视图过渡 API

### 关于外观切换

可以扩展默认主题以在切换颜色模式时提供自定义过渡动画。例如：

**.vitepress/theme/Layout.vue**

```
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      fill: 'forwards',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
```

结果（**注意！**：画面闪烁、快速闪现、强光刺激）:

<details><summary>Demo</summary>

![Appearance Toggle Transition Demo](https://vitepress.dev/appearance-toggle-transition.webp)

</details>

有关视图过渡动画的更多详细信息，请参阅 [Chrome 文档](https://developer.chrome.com/docs/web-platform/view-transitions/)。

### 路由切换时

即将到来。

## 重写内部组件

可以使用 Vite 的 [aliases](https://vitejs.dev/config/shared-options.html#resolve-alias) 来用自定义组件替换默认主题的组件：

```
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

export default defineConfig({
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/CustomNavBar.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
```

想要了解组件的确切名称请参考我们的[源代码](https://github.com/vuejs/vitepress/tree/main/src/client/theme-default/components)。因为组件是内部的，因此在小版本更迭中，它们名字改动的可能性很小。



# Markdown 扩展

VitePress 带有内置的 Markdown 扩展。

## 标题锚点

标题会自动应用锚点。可以使用 `markdown.anchor` 选项配置锚点的渲染。

### 自定义锚点

要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：

```
# 使用自定义锚点 {#my-anchor}
```

这允许将标题链接为 `#my-anchor`，而不是默认的 `#使用自定义锚点`。

## 链接

内部和外部链接都会被特殊处理。

### 内部链接

内部链接将转换为单页导航的路由链接。此外，子目录中包含的每个 `index.md` 都会自动转换为 `index.html`，并带有相应的 URL `/`。

例如，给定以下目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

假设现在处于 `foo/one.md` 文件中：

```
[Home](/) <!-- 将用户导航至根目录下的 index.html -->
[foo](/foo/) <!-- 将用户导航至目录 foo 下的 index.html -->
[foo heading](./#heading) <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->
[bar - three](../bar/three) <!-- 可以省略扩展名 -->
[bar - three](../bar/three.md) <!-- 可以添加 .md -->
[bar - four](../bar/four.html) <!-- 或者可以添加 .html -->
```

### 页面后缀

默认情况下，生成的页面和内部链接带有 `.html` 后缀。

### 外部链接

外部链接带有 `target="_blank" rel="noreferrer"`：

* [vuejs.org](https://cn.vuejs.org/)
* [VitePress on GitHub](https://github.com/vuejs/vitepress)

## frontmatter

[YAML 格式的 frontmatter](https://jekyllrb.com/docs/front-matter/) 开箱即用：

```
---
title: Blogging Like a Hacker
lang: en-US
---
```

此数据将可用于页面的其余部分，以及所有自定义和主题组件。

更多信息，参见 [frontmatter](https://vitepress.dev/zh/reference/frontmatter-config)。

## GitHub 风格的表格

**输入**

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**输出**


| Tables        | Are           | Cool   |
| ------------- | ------------- | ------ |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      | centered      | \$12   |
| zebra stripes | are neat      | \$1    |

## Emoji 🎉

**输入**

```
:tada: :100:
```

**输出**

🎉 💯

这里可以找到[所有支持的 emoji 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)。

## 目录表 (TOC)

**输入**

```
[[toc]]
```

**输出**

* [标题锚点](https://vitepress.dev/zh/guide/markdown#header-anchors)
  * [自定义锚点](https://vitepress.dev/zh/guide/markdown#custom-anchors)
* [链接](https://vitepress.dev/zh/guide/markdown#links)
  * [内部链接](https://vitepress.dev/zh/guide/markdown#internal-links)
  * [页面后缀](https://vitepress.dev/zh/guide/markdown#page-suffix)
  * [外部链接](https://vitepress.dev/zh/guide/markdown#external-links)
* [frontmatter](https://vitepress.dev/zh/guide/markdown#frontmatter)
* [GitHub 风格的表格](https://vitepress.dev/zh/guide/markdown#github-style-tables)
* [Emoji 🎉](https://vitepress.dev/zh/guide/markdown#emoji)
* [目录表 (TOC)](https://vitepress.dev/zh/guide/markdown#table-of-contents)
* [自定义容器](https://vitepress.dev/zh/guide/markdown#custom-containers)
  * [默认标题](https://vitepress.dev/zh/guide/markdown#default-title)
  * [自定义标题](https://vitepress.dev/zh/guide/markdown#custom-title)
  * [raw](https://vitepress.dev/zh/guide/markdown#raw)
* [GitHub 风格的警报](https://vitepress.dev/zh/guide/markdown#github-flavored-alerts)
* [代码块中的语法高亮](https://vitepress.dev/zh/guide/markdown#syntax-highlighting-in-code-blocks)
* [在代码块中实现行高亮](https://vitepress.dev/zh/guide/markdown#line-highlighting-in-code-blocks)
* [代码块中聚焦](https://vitepress.dev/zh/guide/markdown#focus-in-code-blocks)
* [代码块中的颜色差异](https://vitepress.dev/zh/guide/markdown#colored-diffs-in-code-blocks)
* [高亮“错误”和“警告”](https://vitepress.dev/zh/guide/markdown#errors-and-warnings-in-code-blocks)
* [行号](https://vitepress.dev/zh/guide/markdown#line-numbers)
* [导入代码片段](https://vitepress.dev/zh/guide/markdown#import-code-snippets)
* [代码组](https://vitepress.dev/zh/guide/markdown#code-groups)
* [包含 markdown 文件](https://vitepress.dev/zh/guide/markdown#markdown-file-inclusion)
* [数学方程](https://vitepress.dev/zh/guide/markdown#math-equations)
* [图片懒加载](https://vitepress.dev/zh/guide/markdown#image-lazy-loading)
* [高级配置](https://vitepress.dev/zh/guide/markdown#advanced-configuration)

可以使用 `markdown.toc` 选项配置 TOC 的呈现效果。

## 自定义容器

自定义容器可以通过它们的类型、标题和内容来定义。

### 默认标题

**输入**

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

INFO

This is an info box.

TIP

This is a tip.

WARNING

This is a warning.

DANGER

This is a dangerous warning.

<details class="details custom-block"><p></p></details>

</details>

### 自定义标题

可以通过在容器的 "type" 之后附加文本来设置自定义标题。

**输入**

```
::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码
```js
console.log('Hello, VitePress!')
```

:::

```


**输出**

STOP

危险区域，请勿继续


<details class="details custom-block"><div class="language-js"><button title="复制代码" class="copy"></button><pre class="shiki shiki-themes github-light github-dark" tabindex="0" dir="ltr"><code><span class="line"><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></details>

```

```


</details>

此外，可以通过在站点配置中添加以下内容来全局设置自定义标题，如果不是用英语书写，这会很有帮助：

```

// config.ts
export default defineConfig({
// ...
markdown: {
container: {
tipLabel: '提示',
warningLabel: '警告',
dangerLabel: '危险',
infoLabel: '信息',
detailsLabel: '详细信息'
}
}
// ...
})

```


### `raw`

这是一个特殊的容器，可以用来防止与 VitePress 的样式和路由冲突。这在记录组件库时特别有用。可能还想查看 [whyframe](https://whyframe.dev/docs/integrations/vitepress) 以获得更好的隔离。

**语法**

```

::: raw
Wraps in a `<div class="vp-raw">`
:::

```


`vp-raw` class 也可以直接用于元素。样式隔离目前是可选的：

* 使用喜欢的包管理器来安装需要的依赖项：
```

$ npm add -D postcss

```
* 创建 `docs/postcss.config.mjs` 文件并将以下内容添加到其中：
```

import { postcssIsolateStyles } from 'vitepress'

export default {
plugins: [postcssIsolateStyles()]
}

```

你可以像这样传递它的选项：
```

postcssIsolateStyles({
includeFiles: [/custom\.css/] // 默认为 [/vp-doc\.css/, /base\.css/]
})

```

## GitHub 风格的警报

VitePress 同样支持以标注的方式渲染 [GitHub 风格的警报](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)。它们和[自定义容器](https://vitepress.dev/zh/guide/markdown#custom-containers)的渲染方式相同。

```

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

```


NOTE

强调用户在快速浏览文档时也不应忽略的重要信息。


TIP

有助于用户更顺利达成目标的建议性信息。


IMPORTANT

对用户达成目标至关重要的信息。


WARNING

因为可能存在风险，所以需要用户立即关注的关键内容。


CAUTION

行为可能带来的负面影响。


## 代码块中的语法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 在 Markdown 代码块中使用彩色文本实现语法高亮。Shiki 支持多种编程语言。需要做的就是将有效的语言别名附加到代码块的开头：

**输入**

```

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```


```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

```


**输出**

```

export default {
name: 'MyComponent'
// ...
}

```


```

<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

在 Shiki 的代码仓库中，可以找到[合法的编程语言列表](https://shiki.style/languages)。

还可以全局配置中自定义语法高亮主题。有关详细信息，参见 [`markdown` 选项](https://vitepress.dev/zh/reference/site-config#markdown)得到更多信息。

## 在代码块中实现行高亮

**输入**

```
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```


**输出**

```

export default {
data () {
return {
msg: 'Highlighted!'
}
}
}

```


除了单行之外，还可以指定多个单行、多行，或两者均指定：

* 多行：例如 `{5-8}`、`{3-10}`、`{10-17}`
* 多个单行：例如 `{4,7,9}`
* 多行与单行：例如 `{4,7-13,16,23-27,40}`

**输入**

```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```


**输出**

```

export default { // Highlighted
data () {
return {
msg: `Highlighted! This line isn't highlighted, but this and the next 2 are.`,
motd: 'VitePress is awesome',
lorem: 'ipsum',
}
}
}

```


也可以使用 `// [!code highlight]` 注释实现行高亮。

**输入**

```

```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

```


**输出**

```

export default {
data() {
return {
msg: 'Highlighted!'
}
}
}

```


## 代码块中聚焦

在某一行上添加 `// [!code focus]` 注释将聚焦它并模糊代码的其他部分。

此外，可以使用 `// [!code focus:<lines>]` 定义要聚焦的行数。

**输入**

```

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

```


**输出**

```

export default {
data() {
return {
msg: 'Focused!'
}
}
}

```


## 代码块中的颜色差异

在某一行添加 `// [!code --]` 或 `// [!code ++]` 注释将会为该行创建 diff，同时保留代码块的颜色。

**输入**

```

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

```


**输出**

```

export default {
data () {
return {
msg: 'Removed'
msg: 'Added'
}
}
}

```


## 高亮“错误”和“警告”

在某一行添加 `// [!code warning]` 或 `// [!code error]` 注释将会为该行相应的着色。

**输入**

```

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

```


**输出**

```

export default {
data() {
return {
msg: 'Error',
msg: 'Warning'
}
}
}

```


## 行号

可以通过以下配置为每个代码块启用行号：

```

export default {
markdown: {
lineNumbers: true
}
}

```


查看 [`markdown` 选项](https://vitepress.dev/zh/reference/site-config#markdown) 获取更多信息。

可以在代码块中添加 `:line-numbers` / `:no-line-numbers` 标记来覆盖在配置中的设置。

还可以通过在 `:line-numbers` 之后添加 `=` 来自定义起始行号，例如 `:line-numbers=2` 表示代码块中的行号从 2 开始。

**输入**

```

```ts
// 默认禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

```


**输出**

```

// 默认禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'

```


```

// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'

```






```

// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'

```






## 导入代码片段

可以通过下面的语法来从现有文件中导入代码片段：

```

<<< @/filepath

```


此语法同时支持[行高亮](https://vitepress.dev/zh/guide/markdown#line-highlighting-in-code-blocks)：

```

<<< @/filepath{highlightLines}

```


**输入**

```

<<< @/snippets/snippet.js{2}

```


**Code file**

```

export default function () {
// ..
}

```


**输出**

```

export default function () {
// ..
}

```


TIP

`@` 的值对应于源代码根目录，默认情况下是 VitePress 项目根目录，除非配置了 `srcDir`。或者也可以从相对路径导入：

```

<<< ../snippets/snippet.js

```



也可以使用 [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) 来只包含代码文件的相应部分。可以在文件目录后面的 `#` 符号后提供一个自定义的区域名：

**输入**

```

<<< @/snippets/snippet-with-region.js#snippet{1}

```


**Code file**

```

// #region snippet
function foo() {
// ..
}
// #endregion snippet

export default foo

```


**输出**

```

function foo() {
// ..
}

```


也可以像这样在大括号内(`{}`)指定语言：

```

<<< @/snippets/snippet.cs{c#}

<!-- 带行高亮: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#}

<!-- 带行号: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}

```


如果无法从文件扩展名推测出源语言，这将会很有帮助

## 代码组

可以像这样对多个代码块进行分组：

**输入**

```

::: code-group

```js
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

```


**输出**

[X] config.js[ ] config.ts

```

/**

* @type {import('vitepress').UserConfig}
  */
  const config = {
  // ...
  }

export default config

```




也可以在代码组中[导入代码片段](https://vitepress.dev/zh/guide/markdown#import-code-snippets)：

**输入**

```

::: code-group

<!-- 文件名默认用作标题 -->

<<< @/snippets/snippet.js

<!-- 也可以提供定制的代码组 -->

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::

```


**输出**

[X] snippet.js[ ] snippet with region

```

export default function () {
// ..
}

```




## 包含 markdown 文件

可以像这样在一个 markdown 文件中包含另一个 markdown 文件，甚至是内嵌的。

TIP

也可以使用 `@`，它的值对应于源代码根目录，默认情况下是 VitePress 项目根目录，除非配置了 `srcDir`。


例如，可以这样用相对路径包含 Markdown 文件：

**输入**

```

# Docs

## Basics

<!--@include: ./parts/basics.md-->

```


**Part file** (`parts/basics.md`)

```

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.

```


**等价代码**

```

# Docs

## Basics

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.

```


它还支持选择行范围：

**输入**

```

# Docs

## Basics

<!--@include: ./parts/basics.md{3,}-->

```


**Part file** (`parts/basics.md`)

```

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.

```


**等价代码**

```

# Docs

## Basics

### Configuration

Can be created using `.foorc.json`.

```


所选行范围的格式可以是： `{3,}`、 `{,10}`、`{1,10}`

WARNING

如果指定的文件不存在，这将不会产生错误。因此，在使用这个功能的时候请保证内容按预期呈现。


## 数学方程

现在这是可选的。要启用它，需要安装 `markdown-it-mathjax3`，在配置文件中设置`markdown.math` 为 `true`：

```

npm add -D markdown-it-mathjax3

```


**.vitepress/config.ts**

```

export default {
markdown: {
math: true
}
}

```



**输入**

```

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are

$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
$$

**Maxwell's equations:**


| equation                                                                                                                                                                  | description                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of$\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of$\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                |

```


**输出**

When , there are two solutions to  and they are

**Maxwell's equations:**

| equation | description                                        |
| ---------- | ---------------------------------------------------- |
|          | divergence of  is zero                             |
|          | curl of  is proportional to the rate of change of  |
|          | *wha?*                                           |

## 图片懒加载

通过在配置文件中将 `lazyLoading` 设置为 `true`，可以为通过 markdown 添加的每张图片启用懒加载。

```

export default {
markdown: {
image: {
// 默认禁用；设置为 true 可为所有图片启用懒加载。
lazyLoading: true
}
}
}

```


## 高级配置

VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 渲染器。上面提到的很多扩展功能都是通过自定义插件实现的。可以使用 `.vitepress/config.js` 中的 `markdown` 选项来进一步自定义 `markdown-it` 实例。

```

import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

export default defineConfig({
markdown: {
// markdown-it-anchor 的选项
// https://github.com/valeriangalliat/markdown-it-anchor#usage
anchor: {
permalink: markdownItAnchor.permalink.headerLink()
},
// @mdit-vue/plugin-toc 的选项
// https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
toc: { level: [1, 2] },
config: (md) => {
// 使用更多的 Markdown-it 插件！
md.use(markdownItFoo)
}
}
})

```


请查看[配置参考：站点配置](https://vitepress.dev/zh/reference/site-config#markdown)来获取完整的可配置属性列表。
```
