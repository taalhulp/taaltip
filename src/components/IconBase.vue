<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 180 180"
    :aria-labelledby="iconName"
    role="presentation"
    overflow="visible"
  >
    <title
      :id="iconName"
      lang="en"
    >{{ iconName }} icon</title>
    <g 
      :fill="fillColor" 
      :stroke="strokeColor" 
      :stroke-width="strokeWidth"
    >
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    fillColor: {
      type: String,
      default: 'currentColor'
    },
    strokeColor: {
      type: String,
      default: 'currentColor'
    },
    strokeWidth: {
      type: Number,
      default: 0
    },
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>