# exaxmple-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Project Vue 2.6

TypeScript + Vue-Property-Decorator + Ant-design-Vue + Sass + Less

## Dependencies

vue ^2.6.11

TypeScript  ^4.2.3

Vue-Property-Decorator  ^9.1.2

Antdv   ^1.7.4

Sass    ^1.32.8

Less    ^4.1.1


## Template Demo

### default
```
<script>
export default {
    name: 'RenderDom',
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.list = this.createData( 1e4 );
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
</script>
```

### TS + Vue-Property-Decorator

```
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
```
