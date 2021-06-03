<template>
  <div id='list'>
      <div v-for='(v, k) in list' :key='k'>{{v}}</div>
  </div>
</template>

<noscript>
export default {
    name: 'RenderDom',
    data() {
        return {
            list: []
        }
    },
    mounted() {
        console.time('vue render')
        this.list = this.createData( 1e4 );
        console.timeEnd('vue render');
    },
    methods: {
        createData( dataLength ) {
            let j = [];
            for (let h = 0 ; h < dataLength; h++ ) {
                j.push(h+1);
            }
            return j;
        }, 
    }
}
</noscript>
<script lang='ts'>
import {Vue, Component } from 'vue-property-decorator';

@Component
export default class RenderDom extends Vue {
    protected list: number[] = [];

    mounted(): void {
        this.list = this.createData( 1e4 );
    }

    protected createData(dataLength: number): Array<number> {
        let j: number[] = [];
        for (let h: number = 0 ; h < dataLength; h++ ) {
            j.push(h+1);
        }
        return j;
    }
}
</script>

<style>
</style>
