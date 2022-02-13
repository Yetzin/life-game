<template>
    <div class="relative flex flex-col items-center justify-center w-full h-full bg-gray-900 select-none">
        <div class="flex flex-col w-full max-w-lg text-white border border-white rounded-lg">
            <div class="p-4 border-b border-gray-600">
                <span>Seleccione la configuración deseada:</span>
            </div>
            <div class="flex pb-0">
                <div class="flex flex-col w-2/5 p-4 border-r border-gray-600">
                    <span>Tamaño de las celdas:</span>
                    <input class="w-full h-10 text-center bg-gray-900 border border-white rounded" type="number" min="1" v-model="tam">
                </div>
                <div class="flex w-3/5 p-4">
                    <div class="flex flex-col w-1/2">
                        <span>Celdas en X:</span>
                        <input class="w-full h-10 text-center bg-gray-900 border border-white rounded" type="number" v-model="celdas_x">
                    </div>
                    <div class="w-4"></div>
                    <div class="flex flex-col w-1/2">
                        <span>Celdas en Y:</span>
                        <input class="w-full h-10 text-center bg-gray-900 border border-white rounded" type="number" v-model="celdas_y">
                    </div>
                </div>
            </div>
        </div>
        <button @click="setConfig" class="px-4 py-2 mt-8 font-bold text-white border border-white rounded hover:bg-gray-400 hover:text-blue-900">Comenzar</button>
    </div>
</template>

<script>
    export default {
        name: 'Inicio',
        props: [
            'iniciar'
        ],
        data() {
            return {
                tam:        localStorage.getItem('tam')?        parseInt(localStorage.getItem('tam'))       : 4,
                celdas_x:   localStorage.getItem('celdas_x')?   parseInt(localStorage.getItem('celdas_x'))  : 20,
                celdas_y:   localStorage.getItem('celdas_y')?   parseInt(localStorage.getItem('celdas_y'))  : 20,
            }
        },
        methods: {
            setConfig() {
                localStorage.setItem('tam',         this.tam)
                localStorage.setItem('celdas_x',    this.celdas_x)
                localStorage.setItem('celdas_y',    this.celdas_y)

                let validar = (
                    !isNaN(this.tam)                &&
                    !isNaN(this.celdas_x)           &&
                    !isNaN(this.celdas_y)           &&
                    Number.isInteger(this.tam)      &&
                    Number.isInteger(this.celdas_x) &&
                    Number.isInteger(this.celdas_y) &&
                    this.tam > 0                    &&
                    this.celdas_x > 3               &&
                    this.celdas_y > 3
                )

                this.iniciar(validar)
            }
        },
    }
</script>
