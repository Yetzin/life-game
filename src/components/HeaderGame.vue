<template>
    <header class="relative flex items-center justify-between w-full h-8 bg-black select-none draggable-area">
        <div class="px-4">
            <span class="text-sm text-white whitespace-nowrap font-extralight">El juego de la vida</span>
        </div>
        <div class="flex justify-between px-2 disalow-draggable-area">
            <div class="relative flex items-center justify-center w-5 h-5 hover:bg-violet-900">
                <div class="w-2.5 transform translate-y-0.5 h-0.5 bg-white"></div>
            </div>
            <div class="relative flex items-center justify-center w-5 h-5 hover:bg-violet-900">
                <div class="w-2.5 h-2.5 border-2 border-white"></div>
            </div>
            <div class="relative flex items-center justify-center w-5 h-5 hover:bg-red-900">
                <div class="w-3 h-0.5 absolute m-auto top-0 bottom-0 right-0 left-0 transform rotate-45 bg-white"></div>
                <div class="w-3 h-0.5 absolute -rotate-45 m-auto top-0 bottom-0 right-0 left-0 bg-white"></div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderGame'
    }
</script>
