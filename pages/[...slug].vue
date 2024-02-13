<script setup>
const route = useRoute();

</script>
<template>
  <main class="">
    <div class="container mx-auto ">
      <article class="bg-white rounded-2xl ">
        <ContentDoc :path="`${route.path}`" v-slot="{ doc }">
          <header>
            <div class="text-center p-5">
              <h2 class="text-4xl font-semibold">{{ doc.title }}</h2>
              <div class="text-gray-50">
                {{ doc.date }}
              </div>
            </div>
            <img v-if="doc.thumbnail" :src="doc.thumbnail" class="w-full  object-cover" alt="">
          </header>

          <div class="pt-5 px-5 pb-[80px] content">
            <ContentRenderer :value="doc"></ContentRenderer>
          </div>

        </ContentDoc>
      </article>
    </div>
  </main>
</template>
<style scoped>
.content h1 {
  @apply text-3xl font-bold;
}

.content h2 {
  @apply text-2xl font-bold;
}

.content h3 {
  @apply text-xl font-bold;
}

.content h4 {
  @apply text-lg font-bold;
}

.content h5 {
  @apply text-base font-bold;
}
</style>