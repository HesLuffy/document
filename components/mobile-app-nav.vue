<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navElement = ref(null);
const status = ref('false');

const open = () => {
    status.value = navElement.value.getAttribute('isOpen');
    if(status.value === 'true') {
        status.value = 'false';
        navElement.value.setAttribute('isOpen', 'false');
        document.documentElement.classList.add('overflow-hidden');
        document.body.classList.add('overflow-hidden');
    } else {
        status.value = 'true';
        navElement.value.setAttribute('isOpen', 'true');
        document.documentElement.classList.remove('overflow-hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

const subMenuListAnimation = (i, e) => {
    let targets = e.currentTarget

    Array.from(targets.parentElement.children).forEach((target, index) => {
        if (i != index) {
            gsap.to(target.children[0], {
                height: 0,
                ease: "circ.out",
            })
        } else {
            gsap.to(target.children[0], {
                height: target.children[0].style.height === 'auto' ? '0' : 'auto',
                ease: "circ.out",
            })
        }
    })
}

</script>
<template>
  <header
    ref="headerElement"
    class="block laptop:hidden"
  >
    <aside
        class="block laptop:hidden z-50 bg-[#c1bcbc] p-2 rounded-[0.3rem] w-fit fixed top-1/2 left-[1rem] -translate-y-1/2"
    >
        <div @click="open">
            <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block"></span>
            <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block my-2"></span>
            <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block"></span>
        </div>
    </aside>
    <nav
      ref="navElement"
      isOpen="false"
      class="navElement fixed top-0 left-0 bottom-0 right-0 bg-white z-40 border-8 border-solid border-[#a9a4a4] transition-all" :class="status == 'true' ? 'translate-x-0' : '-translate-x-full'"
    >
      <ContentNavigation v-slot="{ navigation }">
        <ul class="menuList absolute top-[16vw] left-[16vw]">
          <li
            class="opacity-100 translate-x-0 my-8 text-[2rem] tablet:text-[2.8rem]"
            v-for="(nav, index) in navigation"
            :key="nav._path"
            @click="subMenuListAnimation(index, $event)"
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
      </ContentNavigation>
    </nav>
  </header>
</template>