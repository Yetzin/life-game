<template>
    <div class="relative flex items-center justify-center w-full h-full bg-gray-900 select-none">
        <div class="flex flex-col p-4 text-white border border-white rounded">
            <div class="border-b border-gray-600">
                <span>Seleccione el tamaño de las celdas</span>
            </div>
            <div class="flex justify-start p-4 pb-0">
                <span>txt</span>
                <input class="h-10 text-center bg-gray-900 border border-white rounded" type="number" :value="tam">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Inicio',
        data() {
            return {
                tam: 4
            }
        }
    }
</script>
