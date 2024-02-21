<script setup>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;


const stickyHandler = () => {
    const TL = gsap.timeline();
    ctx = gsap.context(self => {
        
    }, main.value)
    TL.to('.li1', {
        scrollTrigger: {
            trigger: '.li1',
            top: '20%',
            pin: true
        }
    })
}


onMounted(() => {
    // stickyHandler();
})

</script>
<template>
    <section class="py-[100rem] mb-[1000px]" ref="main">

        <!-- <div class="testDiv w-[80%] h-[600px] bg-[red]"></div> -->

        <ul class="demo1 container mx-auto list-none  flex flex-col items-center">
            <li class="li1 mb-10 w-[90%] h-[80vh] text-[30rem] flex sticky top-[15%] md:top-[10%]">
                <div class="w-1/2 h-full flex flex-col justify-center items-center">
                    <p class="text-[40px] text-[blue]">Task, notes,</p>
                    <p class="text-[40px] m-0">& everything,</p>
                    <p class="text-[40px]">in between</p>
                </div>
                <div class="w-1/2 h-full bg-[yellow]"></div>
            </li>
            <li class="li2 mb-10 bg-[green] w-[90%] h-[80vh] text-[30rem] flex sticky top-[15%] md:top-[10%]">2</li>
            <li class="li3 mb-10 bg-[pink] w-[90%] h-[80vh] text-[30rem] flex sticky top-[15%] md:top-[10%]">3</li>
        </ul>
    </section>
</template>