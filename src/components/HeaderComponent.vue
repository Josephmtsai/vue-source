<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      ></button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="https://flowbite.com"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Docs
        </a>
        <button @click="showHideSideBar()">showHideSideBar</button>
      </div>
      <div>uv {{ outSideNumber }}</div>
    </div>
  </nav>
  <SideBar v-if="showSidebar"></SideBar>
</template>
<script>
import SideBar from './SideBar.vue';
import { ref, watch, onMounted, onUnmounted, watchEffect } from 'vue';
export default {
  components: {
    SideBar,
  },
  setup() {
    const outSideNumber = ref(window.uv.data);
    const url = ref(location.href);
    const showSidebar = ref(false);

    const showHideSideBar = () => {
      showSidebar.value = !showSidebar.value;
    };
    onMounted(() => {
      document.addEventListener('onUserDataUpdate', (event) => {
        console.log(event);
        outSideNumber.value = event.detail.data;
      });
    });

    onUnmounted(() => {
      document.removeEventListener('onUserDataUpdate');
    });
    return {
      url,
      outSideNumber,
      showHideSideBar,
      showSidebar,
    };
  },
};
</script>
