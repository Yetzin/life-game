<template>
    <div class="flex flex-col items-center text-sm text-white select-none">
        <div>Cuadrícula de {{celdas_x}} x {{celdas_y}}</div>
        <div class="flex flex-col p-4 border">
            <div class="flex flex-row" v-for="celda_y in celdas_y" :key="celda_y">
                <Cuadro v-for="celda_x in celdas_x" :key="celda_x" :tam="tam" :vive="vive(celda_x, celda_y)" />
            </div>
        </div>
    </div>
</template>

<script>
    import Cuadro from './Cuadro.vue'

    export default {
        props: [
            'tam',
            'celdas_x',
            'celdas_y',
        ],
        methods: {
            vive (x, y){
                return (
                    (
                        y % 2 != 0 &&
                        x % 2 != 0
                    ) || (
                        y % 2 == 0 &&
                        x % 2 == 0
                    )
                )
            }
        },
        setup() {
        },
        components: {
            Cuadro,
        },
    }
</script>
