<script>
export default {
  methods: {
    handleScroll() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<template>
  <div class="pagenation">
    <div class="page">더보기</div>
    <div class="page" @click="handleScroll()">맨위로</div>
  </div>
</template>

<style lang="scss" scoped>
  .pagenation {
    display: grid;
    grid-template-columns: 2fr 1fr;
    text-align: center;
    margin: 12px;
    gap: 20px;
    .page {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 10px;
      height: 35px;
      background: #e0e0e0;
    }
  }
</style>