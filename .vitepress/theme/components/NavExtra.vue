<script setup lang="ts">
import Donate from './Donate.vue'
</script>

<template>
  <div class="nav-extra-container">
    <Donate class="nav-donate" />
  </div>
</template>

<style>
.nav-extra-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 8px;
}

.nav-donate {
  position: relative;
  top: 1px;
}

/* 适配移动端 */
@media (max-width: 768px) {
  .nav-extra-container {
    display: none;
  }
}
</style>
