<template>
  <header
    ref="headerElement"
    class="block laptop:hidden"
  >
    <aside
        class="block laptop:hidden z-50 bg-[#c1bcbc] p-2 rounded-[0.3rem] w-fit fixed top-1/2 left-[1rem] -translate-y-1/2"
    >
        <div ref="spanMenu">
            <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block"></span>
            <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block my-2"></span>
            <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block"></span>
        </div>
    </aside>
    <nav
      class="fixed top-0 left-0 bottom-0 right-0 bg-[grey] z-50"
    >
      <!-- <ContentNavigation v-slot="{ navigation }">
        <ul class="menuList absolute top-[16vw] left-[16vw]">
          <li
            class="opacity-100 translate-x-0 my-8 text-[2rem] tablet:text-[2.8rem]"
            v-for="nav in navigation"
            :key="nav._path"
          >
            {{ nav.title }}
            <ul class="submenuList ml-[4vw] h-0 overflow-hidden">
              <li
                v-for="link in nav.children"
                :key="link._path"
              >
                <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </ContentNavigation> -->
    </nav>
  </header>
</template>