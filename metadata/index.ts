import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = 'Likem\'s Blog'
export const siteShortName = 'Likem\'s Blog'
export const siteDescription = '记录回忆，知识和畅想的地方'

/** 文档所在目录 */
export const include = ['笔记', '生活']

/** Repo */
export const githubRepoLink = 'https://github.com/nolebase/nolebase'
/** Discord */
export const discordLink = 'https://discord.gg/XuNFDcDZGj'

/** 无协议前缀域名 */
export const plainTargetDomain = 'nolebase.ayaka.io'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: '名',
    avatar: 'https://avatars.githubusercontent.com/u/183704833?v=4',
    username: 'LKM-lkm',
    title: 'Likem\'s Blog 创作者',
    desc: '热爱技术和创新，领域涉及文艺、文字乐谱排版，人工智能领域的研究与应用。喜欢探索新技术，用代码创造美好的数字世界。',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LKM-lkm/' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['Ming', '名', 'Likem', 'LKM-lkm', 'L km', 'km L'],
    emailAliases: ['lkm836972@outlook.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
