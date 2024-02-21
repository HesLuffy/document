<script setup>
const mouseoverHandler = (e) => {
  const target = e.srcElement.children[1];
  target.classList.remove("invisible");
  target.classList.remove("opacity-0");
  target.classList.add("translate-y-0");
};
const mouseoutHandler = (e) => {
  const target = e.srcElement.children[1];
  target.classList.add("invisible");
  target.classList.add("opacity-0");
  target.classList.remove("translate-y-0");
};
</script>
<template>
  <header class="fixed top-0 left-0 right-0 bg-white z-50" style="box-shadow: 0 0 10px 3px grey">
    <ContentNavigation v-slot="{ navigation }">
      <nav class="container mx-auto flex justify-between px-6">
        <h1 class="mr-[20rem]">
          <NuxtLink to="/">D</NuxtLink>
        </h1>
        <ul class="flex">
          <li
            v-for="link of navigation"
            :key="link._path"
            class="ml-2 p-4 relative flex justify-center items-center cursor-pointer"
            @mouseenter="mouseoverHandler"
            @mouseleave="mouseoutHandler"
          >
            <p class="linkTitle cursor-pointer px-2">{{ link.title }}</p>
            <ul
              class="bg-white w-fit whitespace-nowrap absolute top-[6rem] left-[1.4rem] invisible border border-solid border-[#ddd] rounded-md p-4 -translate-y-[1rem] transition-all opacity-0"
            >
              <li v-for="child in link.children" :key="child._path">
                <template v-if="child.children">
                  <div>{{ child.title }}</div>
                  <ul class="ml-4">
                    <li v-for="c in child.children" :key="c._path">
                      <NuxtLink
                        class="block hover:text-[#73a294] py-1"
                        :to="`${c._path}`"
                        >{{ c.title }}</NuxtLink
                      >
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <NuxtLink
                    class="block hover:text-[#73a294] py-1"
                    :to="`${child._path}`"
                    >{{ child.title }}</NuxtLink
                  >
                </template>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </ContentNavigation>
  </header>
</template>
<style scoped>
li:hover > .linkTitle {
  text-shadow: 5px 5px 3px grey;
}
</style>