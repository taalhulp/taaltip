<template>
<transition>
<div class="mask" @click="closeModal">
    <div class="bevatter" @click.stop>
      <div class="content">
        <slot/>
      </div>
      <button class="close-button" @click="closeModal">✕</button>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  methods: {
    closeModal: function() {
      //this.$emit('close');
      this.$router.push({ name: 'home', params: { id: undefined }})
    }
  }
}
</script>

<style scoped>

.mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .6);
  transition: opacity .3s ease;
  padding: 0;
  margin: 0;
}

.bevatter {
  margin: 25px auto;
  width: calc(100vw - 4%);
  max-width: 900px;
  height: calc(100vh - 50px);
  overflow: hidden;
  overflow-y: none;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  position: relative;
}

.content {
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

button {
  cursor: pointer;
  display: inline-block;
  border: none;
  text-decoration: none;
  transition: background-color 250ms ease-in-out, 
                transform 150ms ease,
                opacity 150ms ease;
}

.close-button {
  display: block;
  background-color: transparent;
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  font-size: 22px;
  line-height: 22px;
}

.v-enter { opacity: 0; }
.v-leave-active {
  opacity: 0;
}

.v-enter .bevatter, .v-leave-active .bevatter {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>