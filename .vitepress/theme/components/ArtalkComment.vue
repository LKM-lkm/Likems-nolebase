<template>
  <div v-if="showComments" class="comments-container">
    <div class="comment-form">
      <input v-model="form.nick" placeholder="昵称" />
      <input v-model="form.email" placeholder="邮箱（可选）" />
      <textarea v-model="form.content" placeholder="说点什么..."></textarea>
      <button @click="submitComment">发表评论</button>
    </div>
    
    <div class="comments-list">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <div class="comment-header">
          <strong>{{ comment.nick }}</strong>
          <span class="comment-date">{{ formatDate(comment.date) }}</span>
        </div>
        <div class="comment-content">{{ comment.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const { page, frontmatter } = useData()

const showComments = computed(() => frontmatter.value.comment === true)
const comments = ref([])
const form = ref({
  nick: '',
  email: '',
  content: ''
})

const API_BASE = 'https://artalk-comments.lkm836972.workers.dev'

async function loadComments() {
  try {
    const response = await fetch(`${API_BASE}/api/comments?page_key=${page.value.relativePath}`)
    comments.value = await response.json()
  } catch (error) {
    console.error('加载评论失败:', error)
  }
}

async function submitComment() {
  if (!form.value.content.trim()) return
  
  try {
    const response = await fetch(`${API_BASE}/api/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form.value,
        page_key: page.value.relativePath
      })
    })
    
    if (response.ok) {
      form.value = { nick: '', email: '', content: '' }
      await loadComments()
    }
  } catch (error) {
    console.error('发表评论失败:', error)
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleString('zh-CN')
}

onMounted(() => {
  loadComments()
})
</script>

<style scoped>
.comments-container {
  margin-top: 2rem;
  padding: 1rem;
}

.comment-form {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.comment-form input,
.comment-form textarea {
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.comment-form textarea {
  height: 100px;
  resize: vertical;
}

.comment-form button {
  background: #007acc;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.comment {
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.comment-date {
  color: #666;
  font-size: 0.9rem;
}

.comment-content {
  line-height: 1.6;
}
</style>