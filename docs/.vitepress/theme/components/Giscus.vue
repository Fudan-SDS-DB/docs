<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const giscusScript = document.createElement('script')
  giscusScript.src = 'https://giscus.app/client.js'
  giscusScript.setAttribute('data-repo', 'Fudan-SDS-DB/docs')  // Replace with your repo
  giscusScript.setAttribute('data-repo-id', 'R_kgDOOUP-aA')     // Replace with your repo ID
  giscusScript.setAttribute('data-category', 'Q&A')
  giscusScript.setAttribute('data-category-id', 'DIC_kwDOOUP-aM4CpB5l')
  giscusScript.setAttribute('data-mapping', 'pathname')
  giscusScript.setAttribute('data-strict', '0')
  giscusScript.setAttribute('data-reactions-enabled', '1')
  giscusScript.setAttribute('data-emit-metadata', '0')
  giscusScript.setAttribute('data-input-position', 'bottom')
  giscusScript.setAttribute('data-theme', 'preferred_color_scheme')
  giscusScript.setAttribute('data-lang', 'zh-CN')
  giscusScript.setAttribute('crossorigin', 'anonymous')
  giscusScript.async = true

  const el = document.getElementById('giscus-container')
  if (el) el.appendChild(giscusScript)
})
</script>

<template>
  <div id="giscus-container" class="giscus-wrapper"></div>
</template>
