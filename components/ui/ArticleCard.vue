<template>
  <nuxt-link class="block text-gray-800 rounded-lg shadow-lg p-6" :to="slug">
    <header class="text-2xl font-bold">{{ title }}</header>
    <p class="mt-4">{{ description }}</p>
    <footer class="flex items-center mt-6">
      <img
        class="w-20 rounded-full border-4 border-main"
        :src="author.content.Avatar.filename"
        :alt="author.content.Name"
      />
      <div class="ml-6">
        <p class="text-xl font-bold">{{ author.content.Name }}</p>
        <p class="text-sm mt-1">{{ date }}</p>
      </div>
    </footer>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    slug: String,
    description: String,
    author: Object,
    date: String,
  },
}
</script>
