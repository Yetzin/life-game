<template>
    <div class="border-t border-r border-black-mate-claro" v-bind:class="{'bg-white': vive}" :style="{height: tam + 'px', width:  tam + 'px'}"></div>
</template>

<script>
    export default {
        props: [
            'tam',
            'vive',
        ],
    }
</script>
