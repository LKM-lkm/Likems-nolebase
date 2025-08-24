<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { creators } from '../../creators'
import { siteName } from '../../../metadata'
</script>

<template>
  <div class="home-page-container">
    <div class="content-wrapper">
      <main class="main-content">
        <div class="creator-section">
          <h2 class="creator-title">
            {{ siteName }} 的创作者
          </h2>
          <div class="creator-members">
            <VPTeamMembers size="small" :members="creators" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.home-page-container {
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.main-content {
  width: 100%;
}

.creator-section {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg,
    rgba(55, 76, 119, 0.08) 0%,
    rgba(232, 167, 178, 0.08) 50%,
    rgba(55, 76, 119, 0.05) 100%);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(55, 76, 119, 0.1);
  margin: 2rem 0;
}

.creator-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
  background: linear-gradient(135deg, 
    rgb(55, 76, 119) 0%, 
    rgb(232, 167, 178) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.creator-members {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* 确保团队成员卡片居中 */
.creator-members :deep(.VPTeamMembers) {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.creator-members :deep(.VPTeamMembersItem) {
  margin: 0 auto;
  text-align: center;
}

/* 暗色模式适配 */
.dark .creator-section {
  background: linear-gradient(135deg,
    rgba(55, 76, 119, 0.15) 0%,
    rgba(232, 167, 178, 0.15) 50%,
    rgba(55, 76, 119, 0.10) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home-page-container {
    padding: 1rem 0.5rem;
  }
  
  .creator-section {
    padding: 2rem 1rem;
    margin: 1rem 0;
    border-radius: 15px;
  }
  
  .creator-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .creator-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  .creator-section {
    padding: 1.5rem 0.8rem;
  }
}
</style>
