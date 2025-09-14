---
tags:
  - 字体
  - 信息技术
comment: true
---

# 开源字体嵌入CDN

## 1. Inter
- 来源：[Download Inter — Inter](https://rsms.me/inter/download/)
### 原版代码：
```html
<!-- HTML in your document's head -->
<link rel="preconnect" href="https://rsms.me/">
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
```css
/* CSS */
:root {
  font-family: Inter, sans-serif;
  font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
}
@supports (font-variation-settings: normal) {
  :root { font-family: InterVariable, sans-serif; }
}
```
Global CDN sponsored by [Cloudflare](https://cloudflare.com/)
### 修改版：
1. 在html`<head>`中添加：
```html
<link rel="preconnect" href="https://rsms.me/">
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
```
2. 在CSS`body {`中添加：
```css
font-family: InterVariable, sans-serif;
```

## 2. Sarasa Gothic 更纱黑体
- 来源：[Sarasa Gothic 更纱黑体 - ZeoSeven Fonts, 释放字体自由 | WebFontsAPI & FontsPKG](https://fonts.zeoseven.com/items/161/#embed))
### 全部版本
```
SC Bold
	https://fontsapi.zeoseven.com/161/sc-bold/result.css
SC Bold Italic
	https://fontsapi.zeoseven.com/161/sc-bold-italic/result.css
SC Extra Light
	https://fontsapi.zeoseven.com/161/sc-extra-light/result.css
SC Extra Light
	Italic https://fontsapi.zeoseven.com/161/sc-extra-light-italic/result.css
SC Italic
	https://fontsapi.zeoseven.com/161/sc-italic/result.css
SC Light
	https://fontsapi.zeoseven.com/161/sc-light/result.css
SC Light Italic
	https://fontsapi.zeoseven.com/161/sc-light-italic/result.css
SC Regular
	https://fontsapi.zeoseven.com/161/main/result.css
SC Semi Bold
	https://fontsapi.zeoseven.com/161/sc-semi-bold/result.css
SC Semi Bold Italic
	https://fontsapi.zeoseven.com/161/sc-semi-bold-italic/result.css
```
1. 在html`<head>`中添加：
```html
<link rel="preload" href="https://fontsapi.zeoseven.com/161/main/sarasa-gothic-sc.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```
2. 在CSS`body {`中添加：
```css
font-family: Sarasa Gothic SC, sans-serif;
```