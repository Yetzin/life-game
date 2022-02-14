<template>
    <div class="flex flex-col items-center text-sm text-white select-none">
        <div class="pb-4">Cuadrícula de {{celdas_x}} x {{celdas_y}}</div>
        <div>
            <div class="overflow-x-auto border max-h-custom max-w-todo">
                <div class="p-4 bg-black-mate w-min">
                    <div class="flex flex-col border-b border-l border-black-mate-claro">
                        <div class="flex flex-row" v-for="celda_y in celdas_y" :key="celda_y">
                            <Cuadro v-for="celda_x in celdas_x" :key="celda_x" :tam="tam" :vive="false" />
                        </div>
                    </div>
                </div>
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
        // methods: {
        //     vive(x, y) {
        //         return (
        //             (
        //                 y % 2 != 0 &&
        //                 x % 2 != 0
        //             ) || (
        //                 y % 2 == 0 &&
        //                 x % 2 == 0
        //             )
        //         )
        //     }
        // },
        setup() {
        },
        components: {
            Cuadro,
        },
    }
</script>
