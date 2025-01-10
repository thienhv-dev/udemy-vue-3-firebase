<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
            :project="project"
            @delete="handleDetele"
            @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
import FilterNav from "@/components/FilterNav.vue";

export default {
  name: 'HomeView',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
        .then(response => response.json())
        .then(data => this.projects = data)
        .catch(error => console.error('Error:', error.message));
  },
  methods: {
    handleDetele(id) {
      this.projects = this.projects.filter(project => project.id !== id);
    },
    handleComplete(id) {
      const project = this.projects.find(project => project.id === id);
      project.completed = !project.completed;
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'all') {
        return this.projects;
      }
      return this.projects.filter(project => {
        return this.current === 'completed' ? project.completed : !project.completed;
      });
    }
  }
}
</script>
