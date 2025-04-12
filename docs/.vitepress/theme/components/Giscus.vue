<template>
  <div id="giscus-container" class="giscus-wrapper"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const giscusScript = document.createElement('script')
  giscusScript.src = 'https://giscus.app/client.js'
  giscusScript.setAttribute('data-repo', 'Fudan-SDS-DB/docs')
  giscusScript.setAttribute('data-repo-id', 'R_kgDOOUP-aA')
  giscusScript.setAttribute('data-category', 'Announcements') // ← updated
  giscusScript.setAttribute('data-category-id', 'DIC_kwDOOUP-aM4CpB5j') // ← updated
  giscusScript.setAttribute('data-mapping', 'pathname')
  giscusScript.setAttribute('data-strict', '1')
  giscusScript.setAttribute('data-reactions-enabled', '1')
  giscusScript.setAttribute('data-emit-metadata', '0')
  giscusScript.setAttribute('data-input-position', 'bottom')
  giscusScript.setAttribute('data-theme', 'preferred_color_scheme')
  giscusScript.setAttribute('data-lang', 'zh-CN')
  giscusScript.setAttribute('data-loading', 'lazy')
  giscusScript.setAttribute('crossorigin', 'anonymous')
  giscusScript.async = true

  const el = document.getElementById('giscus-container')
  if (el) {
    // clear old giscus if navigating in SPA
    el.innerHTML = ''
    el.appendChild(giscusScript)
  }
})
</script>

<!-- <style scoped>
.giscus-wrapper {
  margin-top: 2rem;
}
</style> -->
