<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { creators, siteName } from '../../../metadata'
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" mt-10 flex flex-col items-center>
          <h2 id="meet-the-team" font-normal op50 p="t-10 b-2">
            {{ siteName }} 的创作者
          </h2>
          <div w-full p-10>
            <VPTeamMembers size="small" :members="creators" flex justify-center />
          </div>

          <!-- 
            赞助商和贡献者区域 - 已注释，便于后期重新创建
            
            此区域包含：
            1. 赞助商区域：居中标题和来自 JSDelivr CDN 的赞助商图片
            2. 贡献者区域：中文感谢信息
            3. 来自 contrib.rocks 的贡献者图片，显示 GitHub 贡献者
            
            重新创建时需要：
            - 添加赞助商区域，h2 标题为 "Sponsors"
            - 包含赞助商图片：https://cdn.jsdelivr.net/gh/nolebase/sponsors/sponsors.wide.svg
            - 添加贡献者区域，h2 标题为 "💕 感谢所有贡献者！"
            - 链接到 GitHub 贡献者页面：https://github.com/nolebase/nolebase/graphs/contributors
            - 包含贡献者图片：https://contrib.rocks/image?repo=nolebase/nolebase
          -->
          <!-- 
          <div>
            <h2 mt-11 pb-2 text-center>
              Sponsors
            </h2>
            <div flex justify-center>
              <img src="https://cdn.jsdelivr.net/gh/nolebase/sponsors/sponsors.wide.svg">
            </div>

            <h2 text="center lg" my-5 font-bold>
              💕 感谢所有贡献者！
            </h2>

            <a href="https://github.com/nolebase/nolebase/graphs/contributors">
              <img src="https://contrib.rocks/image?repo=nolebase/nolebase">
            </a>
          </div>
          -->
        </div>
      </main>
    </div>
  </div>
</template>
