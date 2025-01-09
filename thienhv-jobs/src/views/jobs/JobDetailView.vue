<template>
  <div v-if="job">

  </div>
  <h1>{{ job.title }}</h1>
  <p>The job id is {{ id }}</p>
  <p>{{ job.details }}</p>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: {}
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
        .then(response => response.json())
        .then(data => this.job = data)
        .catch(error => console.error(error.message))
  }
}

</script>

<style scoped>

</style>