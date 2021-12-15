<template>
    <section class="relative w-full h-screen border border-violet-900">
        <HeaderGame />
        <Inicio />
    </section>
</template>

<script>
    import Inicio from './pages/Inicio.vue'
    import HeaderGame from './components/HeaderGame.vue'

    export default {
        name: 'App',
        components: {
            Inicio,
            HeaderGame,
        }
    }
</script>
