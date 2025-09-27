---
tags:
  - 科学上网
  - 节点
---
# Great Firewall

## 免费软件推荐

1. Android（以下两个软件均可在Google Play下载稳定版本）
- [nthLink](https://www.downloadnth.com/download.html)
- [leafvpn](https://www.kitslabs.com/leafvpn.downloads.html)

2. Windows
- [1.1.1.1——使 Internet 更安全的免费应用。](https://1111-releases.cloudflareclient.com/win/latest)
	- 需科学上网才能访问，可以借助一些免费额度（以上为下载链接，不需要科学上网）
	- MASQUE协议可用，但不稳定，与CF自建节点区别在它可以访问Cloudflare的网站）
	- 版本2025.6.1400.0更新后，虽然能够解除限制，但是会存在地区限制的问题
	- ![[新版变化.png]]
	- 在安装目录创建`mdm.xml`，内容如下：
```xml
<dict>
	<key>warp_tunnel_protocol</key>
	<string>masque</string>
</dict>
```
- [ikuuu](https://ikuuu.boo/)
	- 防失联:发送任意邮件到此邮箱，将会收到最新官网地址（自动回复）[find@ikuuu.pro](mailto:find@ikuuu.pro)
	- 每人每月50G,不够用可以买流量包
	- 大部分节点限速50M(6MB/s)
	- 每月一日重置(仅免费用户,会有延迟)
	- 签到随机赠送流量
	- [邀请链接](https://ikuuu.de/auth/register?code=TAmS)

## Cloudflare自建节点
- YouTube视频：
<iframe width="100%" height="500" src="https://www.youtube.com/embed/HQcLxYbPSgo" title="终极代理方案 | cf worker 节点搭建 | 无需 proxyip | 可固定 IP | 解决看 Twitch 直播报错 ｜跑满家用带宽 ｜ 无限流量" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


