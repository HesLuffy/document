<script setup>
const route = useRoute();

</script>
<template>
  <main class="">
    <div class="container mx-auto content">
      <article class="bg-white rounded-2xl ">
        <ContentDoc :path="`${route.path}`" v-slot="{ doc }">
          <header>
            <div class="text-center p-5">
              <h1>{{ doc.title }}</h1>
              <div class="text-gray-50">
                {{ doc.date }}
              </div>
            </div>
            <img v-if="doc.thumbnail" :src="doc.thumbnail" class="w-full object-cover" alt="">
          </header>

          <div class="pt-5 px-10 pb-[80px]">
            <ContentRenderer :value="doc"></ContentRenderer>
          </div>

        </ContentDoc>
      </article>
    </div>
  </main>
</template>
<style>
h1 {
  @apply text-[4rem];
}

.content h1 {
  text-shadow: 5px 5px 3px lightgreen;
}

.content h2,
.content h3,
.content h4,
.content h5 {
  margin-top: 2.5rem;
  border-bottom: 1px solid rgb(216, 211, 211);
  margin-bottom: 2rem;
}

.content h2:hover::before,
.content h3:hover::before,
.content h4:hover::before,
.content h5:hover::before {
  content: "#";
  margin-right: 0.8rem;
  color: rgb(162, 205, 162);
}

pre {
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: #f9f9f9;
  overflow-x: scroll;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.content p {
  margin: 1rem 0;
}

.content a {
  margin: 1rem 0;
  display: inline-block;
}

.content ul {
  /* margin-top: 1rem; */
  margin-left: 1rem;
  list-style: inside;
}

.content table thead th {
  background-color: rgb(178, 173, 173);
  padding: 0.8rem 1rem;
}

.content table td {
  padding: 0.8rem 1rem;
}

.content table tbody tr:nth-of-type(even) {
  background-color: #ddd;
}

.content .external-link {
  color: #61e1b2;
  text-decoration: underline;
}

.content .nd {
  position: relative;
  display: inline-block;
}

.content .nd::before {
  content: "";
  position: absolute;
  bottom: 0.3rem;
  left: 0;
  right: 0;
  height: 0.7rem;
  background-color: rgb(126, 215, 126);
  opacity: 0.7;
  transform: skew(-30deg);
}
</style>