<script lang="ts" setup>
import { ref } from 'vue'

const showQRCode = ref(false)
const donateSuccess = ref(false)

function toggleQRCode() {
  showQRCode.value = !showQRCode.value
  if (showQRCode.value) {
    donateSuccess.value = false
  }
}

function showThanks() {
  showQRCode.value = false
  donateSuccess.value = true
  setTimeout(() => {
    donateSuccess.value = false
  }, 2000)
}
</script>

<template>
  <div class="donate-container">
    <button
      class="donate-button"
      :class="{ success: donateSuccess }"
      @click="toggleQRCode"
    >
      <span class="flex-center">
        <span :class="donateSuccess ? 'i-octicon:checkbox-16' : 'i-octicon:heart-16'" />
        <span>{{ donateSuccess ? '感谢支持' : '赞赏支持' }}</span>
      </span>
    </button>

    <Transition name="fade">
      <div v-if="showQRCode" class="popup">
        <div class="popup-content">
          <header class="popup-header">
            <h3 class="popup-title">感谢您的支持!</h3>
            <button class="close-btn" @click="toggleQRCode">
              <span class="i-octicon:x-16" />
            </button>
          </header>

          <main class="popup-body">
            <p class="popup-desc">如果您觉得内容对您有帮助，可以请作者喝杯咖啡☕</p>
            <div class="qrcode">
              <img 
                class="qrcode-img"
                src="/donate-qrcode.png" 
                alt="赞赏二维码"
                loading="lazy"
              />
            </div>
            <button class="donate-confirm-btn" @click="showThanks">
              我已赞赏
            </button>
          </main>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
.donate-container {
  position: relative;
}

.donate-button {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: var(--vp-c-brand-1);
  color: white;
  border: 1px solid transparent;
  transition: all 0.25s;
  cursor: pointer;
  font-size: 14px;
  font-family: var(--vp-font-family-base);
  font-weight: 500;
  line-height: 20px;
}

.donate-button:hover {
  background-color: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.donate-button.success {
  background-color: var(--vp-c-green-1);
}

.popup {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 100;
  pointer-events: auto;
}

.popup-content {
  background: var(--vp-c-bg);
  border-radius: 8px;
  width: 300px;
  position: relative;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--vp-c-divider);
  transform-origin: top right;
  overflow: hidden;
}

.popup-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.25s;
}

.close-btn:hover {
  color: var(--vp-c-text-1);
}

.popup-body {
  padding: 20px;
  text-align: center;
}

.popup-desc {
  margin: 0 0 20px;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.5;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  word-break: break-all;
  white-space: normal;
}

.qrcode {
  background: var(--vp-c-bg-soft);
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.qrcode-img {
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
}

.donate-confirm-btn {
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 24px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s;
  font-family: var(--vp-font-family-base);
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.donate-confirm-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.flex-center {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* Popup transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* 确保弹窗在小屏幕上也能正确显示 */
@media (max-width: 768px) {
  .popup {
    position: fixed;
    top: auto;
    right: 16px;
    bottom: 16px;
    left: 16px;
  }
  
  .popup-content {
    width: 100%;
    transform-origin: bottom center;
  }
}
</style>