<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: 'HomeView',
  setup() {
    const search = ref('');
    const names = ref(['thien', 'hieu', 'viet', 'hoa']);

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value));
    });

    return { names, search, matchingNames };
  },
}
</script>
