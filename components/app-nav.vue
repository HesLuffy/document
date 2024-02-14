<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <p class="cursor-default">{{ link.title }}</p>
          <ul class="ml-4">
            <li v-for="child in link.children" :key="child._path">
              <template v-if="child.children">
                <div>{{ child.title }}</div>
                <ul class="ml-4">
                  <li v-for="c in child.children" :key="c._path">
                    <NuxtLink :to="`${c._path}`">{{ c.title }}</NuxtLink>
                  </li>
                </ul>
              </template>
              <template v-else>
                <NuxtLink :to="`${child._path}`">{{ child.title }}</NuxtLink>
              </template>
            </li>
          </ul>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>