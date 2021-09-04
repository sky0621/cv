<template>
  <div>{{ basic }}</div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const basic = await $axios.$get('/basic/1')
    return {basic}
  }
}
</script>
