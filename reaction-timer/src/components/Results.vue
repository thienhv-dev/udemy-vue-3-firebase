<template>
  <p>Reaction time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score.length < 250) {
      this.rank = "Very Good"
    } else if (this.score.length > 400) {
      this.rank = "Bad"
    } else {
      this.rank = "Good"
    }
  }
}
</script>

<style scoped>
  .rank {
    font-size: 1.4em;
    font-weight: bold;
    color: #0faf87
  }
</style>