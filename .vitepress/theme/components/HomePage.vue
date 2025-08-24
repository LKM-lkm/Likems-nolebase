<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { creators } from '../../creators'
import { siteName } from '../../../metadata'
</script>

<template>
  <div class="vp-doc" mt-10 flex flex-col items-center>
    <h2 id="meet-the-team" font-normal op50 p="t-10 b-2">
      {{ siteName }} 的创作者
    </h2>
    <div w-full p-10>
      <VPTeamMembers size="small" :members="creators" flex justify-center />
    </div>
  </div>
</template>

<style scoped>
/* 保持简洁的样式，让VitePress默认样式生效 */
.vp-doc {
  text-align: center;
}

h2 {
  background: linear-gradient(135deg, 
    rgb(55, 76, 119) 0%, 
    rgb(232, 167, 178) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
