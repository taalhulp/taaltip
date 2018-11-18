<template>
<div class="hints">
  <transition-group v-on:enter="enter" v-on:beforeEnter="beforeEnter" tag="ul" appear >
    <li 
      v-for="(hint, index) in hints" 
      :key="index" 
      v-html="hint"
      :data-index="index" />
  </transition-group>
</div>
</template>

<script>
export default {
  props: {
    hints: Array,
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
    },
    enter: function (el, done) {
      console.log(el.dataset)
      const delay = el.dataset.index * 500 + 7000;
      setTimeout( () => el.style.opacity = 1, delay)
    },
    
  }
}
</script>

<style scoped>
li {
  padding: 8px 30px;
  background-color: rgb(116, 150, 120);
  color: white;
  margin-top: 1px;
  transition: opacity 1s;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>