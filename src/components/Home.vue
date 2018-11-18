<template>
  <div class="home">
    <ul>
      <Tiplink
        v-for="id in Object.keys(this.$tiplijst).sort( (a,b) => this.$tiplijst[b].datum - this.$tiplijst[a].datum)"
        :key="id"
        :id="id"
        @click.native="showModal = true"
      />
    </ul>
    <Modal v-if="showModal && id" @close="showModal = false">
      <Tip :tip="this.$tiplijst[id]" />
    </Modal>
  </div>
</template>

<script>
import Tiplink from './Tiplink'
import Modal from './Modal'
import Tip from './Tip'

export default {
  props: {
    id: String
  },
  data: function() {
    return {
      showModal: true
    }
  },
  components: { Tiplink, Modal, Tip }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 20px 0 0;
  max-width: 700px;
}
</style>
