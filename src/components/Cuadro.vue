<template>
    <div class="flex flex-col items-center justify-center text-center text-red-600 select-none" v-bind:class="{'bg-white': vive}" :style="{height: tam + 'px', width:  tam + 'px'}"></div>
</template>

<script>
    export default {
        props: [
            'tam',
            'vive',
        ],
    }
</script>
