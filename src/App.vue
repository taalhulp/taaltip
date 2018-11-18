<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: 'Bordkrijt';
  src: url('./assets/Bordkrijt.woff2') format('woff2'),
      url('./assets/Bordkrijt.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: 'Open Sans', sans-serif;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  color: rgb(231, 135, 9)
}
</style>
