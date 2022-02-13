<template>
    <section class="relative w-full h-screen">
        <Inicio v-if="!iniciado" :iniciar="iniciar" />
        <div v-else class="w-full h-full text-white select-none">Comienzo</div>
        <!-- <Cuadricula v-else /> -->
    </section>
</template>

<script>
    import { ref }      from 'vue'
    import Inicio       from './pages/Inicio.vue'

    export default {
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
            // Cuadricula,
        }
    }
</script>
