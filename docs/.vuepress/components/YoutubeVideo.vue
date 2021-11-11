<template>
  <div>
    <iframe :src="url" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
  </div>
</template>

<script>
export default {
  props: ['url']
}
</script>

<style scoped>
div {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
};

iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
};
</style>