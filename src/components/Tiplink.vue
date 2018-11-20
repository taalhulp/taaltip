<template>
  <li>
    <router-link :to="{ name: 'home', params: { id: id }}">
      <h3>{{ this.$tiplijst[id].title }}</h3>
      <small>{{ this.$tiplijst[id].datum.toLocaleDateString("nl-NL") }}</small>
      <p>{{ this.$tiplijst[id].intro }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
  },
}
</script>

<style scoped>
li {
  margin-bottom: 20px;
}

a {
  display: block;
  padding: 8px 20px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.4s cubic-bezier(.25,.8,.25,1);
}

h3 {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover, a:focus {
  color: inherit;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

</style>