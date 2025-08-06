<script setup lang="ts">
// 背景效果组件
</script>

<template>
  <div class="background-effect">
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>
    <div class="gradient-blob blob-3"></div>
    <div class="gradient-blob blob-4"></div>
  </div>
</template>

<style scoped>
.background-effect {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  opacity: 0.5;
}

.gradient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.4;
  animation: float 15s ease-in-out infinite;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #8d73bf, #4fc4d8);
  top: 10%;
  left: 15%;
  animation-delay: 0s;
}

.blob-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #d6c0e8, #8d73bf);
  top: 60%;
  left: 75%;
  animation-delay: -2s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #4fc4d8, #d6c0e8);
  top: 70%;
  left: 20%;
  animation-delay: -5s;
}

.blob-4 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #8d73bf, #d6c0e8);
  top: 20%;
  left: 70%;
  animation-delay: -7s;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0) rotate(0);
  }
  33% {
    transform: translateY(-20px) translateX(20px) rotate(5deg);
  }
  66% {
    transform: translateY(20px) translateX(-20px) rotate(-5deg);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0);
  }
}

/* 暗色模式下调整颜色 */
:root.dark .blob-1 {
  background: linear-gradient(135deg, #6d53af, #3fa4b8);
}

:root.dark .blob-2 {
  background: linear-gradient(135deg, #b6a0d8, #6d53af);
}

:root.dark .blob-3 {
  background: linear-gradient(135deg, #3fa4b8, #b6a0d8);
}

:root.dark .blob-4 {
  background: linear-gradient(135deg, #6d53af, #b6a0d8);
}
</style>