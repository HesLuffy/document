<template>
    <mobile-app-nav />
    <pc-app-nav />
    <main class="mt-[5rem] laptop:mt-[10rem]">
        <slot />
    </main>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(3rem);
  filter: blur(1rem);
}
</style>