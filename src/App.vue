<template>
    <section class="relative w-full h-screen">
        <Inicio v-if="!iniciado" :iniciar="iniciar" />
        <Cuadricula v-else />
    </section>
</template>

<script>
    import { ref }      from 'vue'
    import Inicio       from './pages/Inicio.vue'
    import Cuadricula   from './components/Cuadricula.vue'

    export default {
        name: 'App',
        setup() {
            const iniciado  = ref(false)
            const iniciar   = val => iniciado.value = val

            return {
                iniciado,
                iniciar
            }
        },
        components: {
            Inicio,
            Cuadricula,
        }
    }
</script>
