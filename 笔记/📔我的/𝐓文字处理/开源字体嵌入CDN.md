---
tags:
  - 互联网技术/HTML
  - 
comment: true
---

# 开源字体嵌入CDN
---
## 1. Inter
1. 在html`<head>`中添加：
```html
<link rel="preconnect" href="https://rsms.me/">
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
```
2. 在CSS`body {`中添加：
```css
font-family: InterVariable, sans-serif;
```

## 2. # Sarasa Gothic 更纱黑体
1. 在html`<head>`中添加：
```html
<link rel="preload" href="https://fontsapi.zeoseven.com/161/main/sarasa-gothic-sc.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```
2. 在CSS`body {`中添加：
```css
font-family: Sarasa Gothic SC, sans-serif;
```