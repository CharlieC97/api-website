<script setup>
import { useStore } from "vuex";

const store = useStore();

const menuLink = [
  {
    linkTo: "home",
    icon: "fas fa-home",
    text: "Homepage",
  },
  {
    linkTo: "books",
    icon: "fas fa-book",
    text: "Books",
  },
  {
    linkTo: "movies",
    icon: "fas fa-film",
    text: "Movies",
  },
];
</script>

<template>
  <div
    class="float-left fixed z-50 top-0 left-o bottom-0 flex flex-col ease-linear duration-200 bg-white drop-shadow-md p-0 m-0"
    :style="{ width: store.getters.sidebarWidth + 'px' }"
  >
    <img :src="store.getters.collapsedImage" class="pt-4" />

    <ul class="text-left whitespace-nowrap pt-4 pb-4">
      <li v-for="item in menuLink">
        <router-link :to="item.linkTo"
          ><i :class="item.icon" class="icon"></i
          ><span v-if="!store.state.collapsed">{{
            item.text
          }}</span></router-link
        >
      </li>
    </ul>

    <span
      class="absolute bottom-0 p-3 ease-linear duration-200 cursor-pointer"
      :class="{ 'rotate-180': store.state.collapsed }"
      @click="store.commit('toggleCollapse')"
    >
      <i class="fas fa-angle-double-left fill" />
    </span>
  </div>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.test {
  transition: 0.2s linear;
}

li {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: black;
}

li:hover {
  background-color: var(--stressless-grey);
  color: white;
  border-radius: 8px;
}

.icon {
  margin-left: 10px;
  margin-right: 1rem;
}

/* TODO: UPDATE THE BACKGROUND ON HOVER WHEN MENU IS COLLAPSED

.is-collapsed:hover {
}
.not-collapsed:hover {
  border-radius: 20px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
*/
</style>
