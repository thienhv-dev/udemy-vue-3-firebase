<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title</label>
    <input type="text" v-model="title" required>
    <label for="details">Details</label>
    <textarea v-model="details" required></textarea>
    <button type="submit">Add Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/' + this.id
    }
  },
  mounted() {
    fetch(this.uri)
        .then(response => response.json())
        .then(data => {
          this.title = data.title;
          this.details = data.details;
        })
        .catch(error => console.error('Error:', error.message));
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        completed: false
      }

      fetch(this.uri, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      })
          .then(() => this.$router.push('/'))
          .catch(error => console.error('Error:', error.message));
    }
  }
}
</script>

<style scoped>

</style>