<template>
  <img class="mask-test-img object-cover mt-[60px] w-[300px] h-[300px]" src="/images/1.webp" alt="">
</template>
<style scoped>
.mask-test-img {
  mask-repeat: no-repeat;
  mask-image: linear-gradient(#fff 50px, #fff 100px), linear-gradient(#fff 50px, #fff 100px);
  mask-size: 100px 100px;
  mask-position: 0 0, 150px 150px;
}
</style>