---
tags:
  - 互联网技术
---

# CloudFlare Workers 被墙解决方案

由于近期zf的GFW力度加大，workers的域名已经被污染了。只是利用workers.dev的域名大概率出现无法访问。这里讲解一下在域名workers路由反代访问workers.dev的方法  
1. 首先cloudfaare要有运行良好的域名  
2. DNS里开启小云朵，添加cname，内容随意，但是不要是cf的ip
![[Pasted image 20250927102323.png]]
3. 去workers里添加路由，域名为刚刚添加的域名，注意后面的"/*"不可以省略  
![[Pasted image 20250927102521.png]]
4. 服务选择你需要反代的workers.dev,然后点保存  
![[Pasted image 20250927102538.png]]
5. 如果反代涉及到节点，请在代理软件中讲host地址更新为刚刚的新域名