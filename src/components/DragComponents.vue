<template>
  <div class="box">
    <draggable  
      tag="transition-group"
      :component-data="{
        tag: 'ul',
        name: !drag ? 'flip-list' : null, 
        type:'transition-group'
      }"
      v-model="list"
      v-bind="dragOptions"
      @start="drag=true" 
      @end="drag=false"
      item-key="name">
      <!-- <template #item='{element}'> -->
          <div class="box-item" v-for='element in list' :key="element.name">
            <div class="pic">
              <img src='https://vuejs.org/images/logo.png'/>
            </div>
            <p class="text">{{element.name}}</p>
          </div>
      <!-- </template> -->
    </draggable >
  </div>
</template>

<script>
import draggable  from 'vuedraggable';

export default {
  name: 'drag-components',
  components: {
    draggable 
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: !1,
        ghostClass: "box-item-active"
      };
    }
  },
  data(){
    return {
            drag: !1,
            list: [
                {
                name: 'JavaScript',
                style: ''
                },
                {
                name: 'JAVA',
                style: ''
                },
                {
                name: 'HTML',
                style: ''
                },
                {
                name: 'CSS',
                style: ''
                },
                {
                name: 'C++',
                style: ''
                },
                {
                name: 'REACT',
                style: ''
                },
                {
                name: 'animation',
                style: ''
                },
                {
                name: 'python',
                style: ''
                }
            ]
        };
    },
    created(){
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 1000px;
  margin: 80px auto;
  padding: 20px;
  border-radius: 10px;
  border: 1px dashed #ccc;
}
  .box-item {
    float: left;
    margin: 5px 10px;
    height: 140px;
    width: 200px;
    background: #fff;
    text-align: center;
    border: 1px solid #409eff;
    cursor: move;
  }
    .pic {
      display: inline-block;
      margin: 10px 0;
      width: 60px;
      height: 60px;
      padding: 5px;
      border-radius: 50%;
      border: thick double #409eff;
      overflow: hidden; 
    }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    .text {
      font-size: 16px;
      margin: 5px 0;
    }
  .box-item-active {
    border-style: dashed;
    border-radius: 10px;
    background: rgba(72, 243, 243, .45);
    transition: transform 0.5s;
  }
.box::after {
  clear: both;
  content: '';
  display: block;
}
</style>
