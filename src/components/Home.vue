<template>
  <div class="bevatter">
    <div class="menu-bar">
      <div class="filter-menu">
        <div 
          v-for="(val, key) in this.$catlijst" 
          :key="key" 
          :style="{backgroundColor: val.kleur}"
          class="filter-button"
          :class="{'active-filter': catFilter == key}"
          @click="catFilter = catFilter == key ? '': key">
          {{ key }}
        </div>
      </div>
      <div class="info-menu hidden-xs hidden-sm">
        <span v-if="catFilter">{{tiplijstFilterCat().length}} van </span>
        {{ Object.keys(this.$tiplijst).length }} taaltips
      </div>
      <div class="order-menu">
        <div 
          v-for="choice in [
              { prop: 'title', display:'Titel' }, 
              { prop: 'datum', display: 'Datum' },
            ]" 
            class="order-option"
            :class="{'active-order': choice.prop == orderBy}"
            :key="choice.prop"
            @click="orderBy = choice.prop">
          {{choice.display}}
        </div>
        <div class="up-down" @click="orderUp = !orderUp">
          <span v-if="orderUp">&uarr;</span>
          <span v-else>&darr;</span>
        </div>
      </div>
    </div>
    <ul>
      <Tiplink
        v-for="id in tiplijstSort(tiplijstFilterCat())"
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
      showModal: true,
      catFilter: "",
      orderBy: "datum",  // datum of title
      orderUp: false,
    }
  },
  methods: {
    prepareSortParams(a,b){
      a = this.$tiplijst[a][this.orderBy];
      b = this.$tiplijst[b][this.orderBy];
      if (typeof(a) == "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
      }
      return [a, b];
    },
    sortUp(a,b){
      [a ,b] = this.prepareSortParams(a,b)
      return a > b ? 1 : b > a ? -1 : 0;
    },
    sortDown(a,b){
      [a ,b] = this.prepareSortParams(a,b)
      return a > b ? -1 : b > a ? 1 : 0;
    },
    tiplijstSort(keys=Object.keys(this.$tiplijst)){
      if (this.orderUp) {
        return keys.sort(this.sortUp)
      } else {
        return keys.sort(this.sortDown)
      }
    },
    tiplijstFilterCat(){
      if (this.catFilter) {
        return Object.keys(this.$tiplijst).filter((key)=>this.$tiplijst[key].cat == this.catFilter)
      } else {
        return Object.keys(this.$tiplijst)
      }
    }
  },
  components: { Tiplink, Modal, Tip }
}
</script>

<style scoped>
.bevatter {
  margin: 50px 0 30px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 20px 0 0;
}

.menu-bar{
  display: flex;
  justify-content: space-between
}

.order-menu {
  display: flex;
}

.filter-menu {
  display: flex;
}

.filter-button {
  color: white;
  padding: 3px 6px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 2px;
}

.info-menu {
  padding: 3px 0;
}

.active-filter {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.445);
}

.order-option {
  padding: 3px 6px;
  margin-left: 10px;
  cursor: pointer;
}

.active-order {
  background-color: lightgray;
}

.up-down{
  margin-left: 10px;
  padding: 3px 8px;
  cursor: pointer;
}
</style>
