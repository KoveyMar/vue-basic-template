<template>
  <div id='ts-group'>
      <a-row :gutter="16">
        <a-col :span="6"><a-button type="primary" @click.stop="add">添加</a-button></a-col>
        <a-col :span="6"><a-button type="danger" @click.stop="remove">移除</a-button></a-col>
        <a-col :span="6"><a-button @click.stop="onLoop">轮询</a-button></a-col>
        <a-col :span="6"><a-button @click.stop="onStop">停止</a-button></a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
            <transition-group name='list'>
                <div 
                    class='ts-item' 
                    v-for='(v, k) in list' 
                    :key='v.text' :style='{background:v.color}'>
                    <p>{{v.text}}</p>
                    <span>{{k}}</span>
                </div>
            </transition-group>
        </a-col>
        <a-col :span="12">
            <div 
                class='ts-item' 
                v-for='(v, k) in list' 
                :key='v.text'>
                <p>{{v.text}}</p>
                <span>{{k}}</span>
            </div>
        </a-col>
      </a-row>
  </div>
</template>

<script lang='ts'>
interface TransitionTypes {
    color: string;
    text: number;
}
import {Vue, Component } from 'vue-property-decorator';

@Component
export default class TransitionTypesList extends Vue {
    protected list: TransitionTypes[] = [];
    protected timer: number = -1;

    mounted(): void {
        this.list = this.createData( 10 );
    }

    private getColor(): string {
        return `#${Math.floor( Math.random() * 0xffffff ).toString(16)}`;
    }

    private getIndex(): number {
        return parseFloat(( Math.random() * 10).toFixed(5));
    }

    private createItem(): TransitionTypes {
        let j: TransitionTypes = { 
            color: this.getColor(), 
            text: this.getIndex()
        };
        return j;
    }

    private onLoop(): void {
        this.timer = setInterval(() => {
            this.add();
            this.remove();
        }, 2e3);
    }

    private onStop(): void {
        clearInterval(this.timer);
    }

    private add(): any {
        return this.list.push( this.createItem() );
    }

    private remove(): any {
        return this.list.shift();
    }

    private createData(dataLength: number): Array<TransitionTypes> {
        let j: TransitionTypes[] = [];
        for (let h: number = 0 ; h < dataLength; h++ ) {
            j.push( this.createItem() );
        }
        return j;
    }
}
</script>

<style lang='scss' scoped>
#ts-group {
    margin: 10px auto;
    width: 1000px;
    .ts-item {
        margin: 10px 0;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 8px;
        transition: all 1s;
    }
    .list-leave-active, .list-enter-active,
    .list-fade-leave-active, .list-fade-enter-active {
        transition: all 1s;
    }
    .list-enter-to, .list-leave ,
    .list-fade-enter-to, .list-fade-leave {
        opacity: 1;
        transform: translateX(0);
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }
    .list-fade-enter, .list-fade-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
}
</style>
