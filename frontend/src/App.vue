<script setup lang="ts">
    import { ref } from 'vue'

    const server_status = ref('...')

    async function get_server_status() {
        const status_url = 'http://localhost:8081/status'
        const response = await fetch(status_url)
        const result = await response.json()
        server_status.value = result['status']
    }
</script>

<template>
    <h2>Hello world!</h2>
    <div>Status response from server: {{ server_status }}</div>
    <button @click="get_server_status">Fetch</button>
</template>

<style scoped></style>
