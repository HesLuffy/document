<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;
const spanMenu = ref();
const headerElement = ref();
let tween;

const menuListAnimation = () => {
  tween = gsap.to('.menuList > li', {
    opacity: 1,
    x: 0,
    stagger: 0.1,
    ease: "circ.out",
  })
};


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

function closeMenu() {
  if (!headerElement.value.classList.contains('invisible')) {
    headerElement.value.classList.add('invisible')
    headerElement.value.classList.remove('visible');
    tween.restart();
  }
}

function openMenu() {
  if (headerElement.value.classList.contains('invisible')) {
    headerElement.value.classList.remove('invisible')
    menuListAnimation();
  }
}

</script>
<template>
  <aside class="fixed left-[2rem] top-[6rem] z-50">
    <div @click="openMenu" ref="spanMenu">
      <span class="w-[1.8rem] h-[0.2rem] bg-[#000] block"></span>
      <span class="w-[1.8rem] h-[0.2rem] bg-[#000] block my-2"></span>
      <span class="w-[1.8rem] h-[0.2rem] bg-[#000] block"></span>
    </div>
  </aside>

  <header ref="headerElement" class="invisible transition-all">

    <nav ref="main" class="mobile-app-nav fixed top-0 left-0 right-0 bottom-0 z-50 bg-red-700">
      <ContentNavigation v-slot="{ navigation }">
        <ul class="menuList absolute top-[16vw] left-[16vw]">
          <li @click="subMenuListAnimation(index, $event)"
            class="opacity-0 -translate-x-[5rem] my-8 text-[2rem] tablet:text-[2.8rem]"
            v-for=" (nav, index)  in  navigation " :key="nav._path">
            {{ nav.title }}
            <ul class="submenuList ml-[4vw] h-0 overflow-hidden">
              <li @click="closeMenu" v-for="link in nav.children " :key="link._path">
                <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </header>
</template>
<style scoped>
nav.mobile-app-nav {
  background: linear-gradient(to right, #40e0d0, #ff8c00, #ff0080);
}
</style>