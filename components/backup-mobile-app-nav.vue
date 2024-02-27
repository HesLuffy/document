<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const main = ref();
const spanMenu = ref();
const headerElement = ref();
let tween;

const menuListAnimation = () => {
  tween = gsap.from('.menuList > li', {
    opacity: 0,
    x: -50,
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
    document.documentElement.classList.remove('overflow-hidden');
    document.body.classList.remove('overflow-hidden');
    headerElement.value.classList.add('invisible')
    headerElement.value.classList.remove('visible');
  }
}

function openMenu() {
  if (headerElement.value.classList.contains('invisible')) {
    headerElement.value.classList.remove('invisible');
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
    menuListAnimation();
  } else {
    closeMenu();
  }
}

</script>
<template>
  <aside class="block laptop:hidden fixed left-[1rem] top-1/2 -etranslate-y-1/2 z-50 bg-[#c1bcbc] p-2 rounded-[0.3rem]">
    <div @click.stop="openMenu" ref="spanMenu">
      <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block"></span>
      <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block my-2"></span>
      <span class="w-[1.8rem] h-[0.2rem] bg-[#646363] block"></span>
    </div>
  </aside>

  <header ref="headerElement" class="block laptop:hidden invisible transition-all">

    <nav ref="main" class="mobile-app-nav fixed top-0 left-0 right-0 bottom-0 z-40 bg-red-700">
      <ContentNavigation v-slot="{ navigation }">
        <ul class="menuList absolute top-[16vw] left-[16vw]">
          <li @click.stop="subMenuListAnimation(index, $event)"
            class="opacity-100 translate-x-0 my-8 text-[2rem] tablet:text-[2.8rem]"
            v-for=" (nav, index)  in  navigation " :key="nav._path">
            {{ nav.title }}
            <ul class="submenuList ml-[4vw] h-0 overflow-hidden">
              <li @click.stop="closeMenu" v-for="link in nav.children " :key="link._path">
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