<template>
  <!-- 顶部栏按钮 -->
  <button
    h-full ws-nowrap px3 text-sm font-medium
    text="$vp-c-text-1"
    :class="[
      donated ? '!text-green-400' : '',
      !donated ? 'hover:sm:text-$vp-c-brand' : '',
    ]"
    :disabled="donated"
    @click="toggleModal" 
    title="赞赏支持"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition-all duration-250 ease-out"
      leave-active-class="transition-all duration-250 ease-out"
      enter-from-class="transform translate-y-30px opacity-0"
      leave-to-class="transform translate-y--30px opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
    >
      <span v-if="donated" flex items-center space-x-1>
        <span class="i-octicon:heart-fill-16" />
        <span>感谢支持</span>
      </span>
      <span v-else flex items-center space-x-1>
        <span class="i-octicon:heart-16" />
        <span>赞赏支持</span>
      </span>
    </Transition>
  </button>
  
  <!-- 下拉弹窗 -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="transform translate-y--10px opacity-0 scale-95"
    leave-to-class="transform translate-y--10px opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-from-class="opacity-100 scale-100"
  >
    <div v-if="showModal" class="sponsor-dropdown">
      <div class="sponsor-content">
        <button class="close-btn" @click="closeModal">×</button>
        
        <h3 class="modal-title">感谢您的支持！</h3>
        
        <p class="modal-description">
          如果您觉得内容对您有帮助，可以请作者喝杯咖啡☕
        </p>
        
        <div class="qr-container">
          <img 
            src="/donate-qrcode.png" 
            alt="赞赏二维码" 
            class="qr-image"
            @error="handleImageError"
          />
        </div>
        
        <p class="qr-tip">
          "如果您觉得内容对您有帮助，可以请作者喝杯咖啡 ☕"
        </p>
        
        <div class="modal-actions">
          <button class="action-btn done-btn" @click="handleDonated">
            我已赞赏
          </button>
        </div>
      </div>
    </div>
  </Transition>
  
  <!-- 遮罩层 -->
  <div v-if="showModal" class="sponsor-overlay" @click="closeModal"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
const donated = ref(false)

const toggleModal = () => {
  if (!donated.value) {
    showModal.value = !showModal.value
  }
}

const closeModal = () => {
  showModal.value = false
}

const handleDonated = () => {
  donated.value = true
  showModal.value = false
  
  // 3秒后重置状态
  setTimeout(() => {
    donated.value = false
  }, 3000)
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

<style scoped>
/* 按钮基础样式 */
button {
  border: none;
  background: transparent;
  cursor: pointer;
}

button:disabled {
  cursor: default;
}

/* 下拉弹窗样式 */
.sponsor-dropdown {
  position: fixed;
  top: 60px;
  right: 20px;
  z-index: 1000;
}

.sponsor-content {
  background: var(--vp-c-bg);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  position: relative;
  width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid var(--vp-c-divider);
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--vp-c-text-3);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 16px 0;
}

.modal-description {
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.5;
}

.qr-container {
  margin: 24px 0;
  display: flex;
  justify-content: center;
}

.qr-image {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  object-fit: cover;
}

.qr-tip {
  color: var(--vp-c-text-3);
  font-size: 12px;
  margin: 16px 0 24px 0;
  font-style: italic;
}

.modal-actions {
  display: flex;
  justify-content: center;
}

.action-btn {
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 100px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.done-btn {
  background: var(--vp-c-brand-1);
  color: white;
}

.done-btn:hover {
  background: var(--vp-c-brand-2);
}

/* 遮罩层 */
.sponsor-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 999;
}

/* 暗色模式适配 */
.dark .sponsor-content {
  background: var(--vp-c-bg-alt);
}

.dark .done-btn {
  background: var(--vp-c-brand-1);
}

.dark .done-btn:hover {
  background: var(--vp-c-brand-2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sponsor-dropdown {
    right: 10px;
    left: 10px;
    top: 60px;
  }
  
  .sponsor-content {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    padding: 24px;
  }
  
  .qr-image {
    width: 160px;
    height: 160px;
  }
}

@media (max-width: 480px) {
  .sponsor-content {
    max-width: 280px;
    padding: 20px;
  }
  
  .qr-image {
    width: 140px;
    height: 140px;
  }
}
</style>