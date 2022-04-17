# 使用 TypeScript 来写 Vue[转]

Vue 和 TypeScript 的结合使我们在编写的代码的时候能更及时的避免各种错误，要想更优雅的去编写 Vue 组件，我们可以使用官方维护的 vue-class-component，这个库给我们提供了各种装饰器去结合 TypeScript 来编写我们的 Vue 组件，使用它的好处是我们能通过基于类的 API 去声明组件。
  而 vue-property-decorator 是一个基于 vue-class-component 的库，它提供更多结合 Vue 特性的装饰器，加快开发效率。

#### 1.安装

```node.js
$ npm i -S vue-class-component 
$ npm i -S vue-property-decorator
```

#### 2.一个基本的 vue 组件模

```html
<template>
  <div class="content-wrapper" >

  </div>
</template>

<script lang = "ts" >
	import { Component, Vue } from "vue-property-decorator";
	
	@Component({})
	export default class Foo extends Vue {
	
	}
</script>

<style scoped >
</style>
```

#### 3.声明响应式属性 data

```javascript
export default class App extends Vue {
  private name: string = 'kaelyn';   // 声明响应式属性
}
```

这样的写法等同于之前的：

```javascript
export default {
  name: 'App',
  data() {
    return {
      name: 'kaelyn'
    }
  }
}
```

#### 4.计算属性 computed

```javascript
<template>
  <div id="app">
     <button @click="age = number + 1">+</button>
     <p>{{age}}</p>
     <button @click="age = number - 1">-</button>
  </div>
</template>

<script>
	import { Component, Vue } from 'vue-property-decorator';
	@Component({})
	export default class App extends Vue {
	  private number: number = 0;
	
	  get age(): string {   // 计算属性的get
	    return `I am ${this.number} years old`;
	  }
	  set age(value) {      // 计算属性的set
	    this.number = Number(value);
  	  }
	}
</script>
```

![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAE6AhoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooqOWVYxz1PQUASUVVLXbnKBQP9qkxff8ATOgC3RVTF9/0zoxff9M6ALdFVMX3/TOjF9/0zoAt0VVWWePmZRt7lRVkEMAQcg0ALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFQKN105/uACp6gi/4+Z/+A0AT0UUUAFFFFABRRRQAnWq1q2JpYv7lWqpW3/IQufqKALtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVBF/wAfM/8AwGp6gi/4+Z/+A0AT0UUUARvPDEcSSoh9GYCuK8Ia9cXnjLxVbXeoeZb21yi26PJ8qAhs7f0rT8SeBdP8TXyXd1d3sLomwLBLtGM5rzrwr8P9N1Pxb4lsJby+SOwuESNo5sMwIP3j36UAe0pIki7kdWHqpzTqzNA0K38O6YthbTTSxqxIaZ9zcnPWtOgAqlbf8hC5+oq7VK2/5CFz9RQBdooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACq6ELdyKerAEVYqtcwOzLLEcSL60AWaKpfa7lOHtSx9VOKPt03/Pm/wD30KALtUrTSLCwvLq8tbWOKe8YNO6jBkI6E/nR9um/583/AO+hR9um/wCfN/8AvoUAXaKpfbpv+fN/++hR9um/583/AO+hQBcqnaDddTyj7rEYpDNdTgosPlg9yc4q1DEIYwo9KAJKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAQqD2pNi+gp1FADdi+go2L6CnUUAN2L6CjYvoKdRQAgAHQUtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFMkljhjMkrqiDqzHAFAD6KZHIksYkjdXRuQynINPoAKKKilubeBlWaeOMucKHYDcfagCWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCtqUjw6XdyxttdIXZT6EKcVznw61S91fQJri/uDPKtyyBiAMABeOPrXQav/yBr3/r3k/9BNcp8KP+RYuP+vx//QVqlsT1O3oooqSgormdV8e6Ppl01oonu51+8tum7affmqll8SNMmult722urEucK80eFp8rFdHY0U0MrIHU5BGQR3rnI/Hmiul6zNNF9jcxuHUZdgcYUA80WC50tFcSvxO09ZwLjT76CBjgSvFgfjzWzqvjDSdKtIZ2laczruijhG5nH0oswujdorjbT4laZJcpDeWl3ZbzhXljwv412COsiK6MGVhkEdxQ00CaY6oLy4NrZyziJ5TGhYIgyW9hU9FIZ5rbr408YSPcpdHSrPcVRSuD/jTrm78VeB5Yri/vF1PTmYLIduCnv616KzxxLlmVB7nAriviLq9rPo39j2rrcXl26qqR/MRznP6Vad3YhqyOytbmO8tYrmI5SVAy/Q1NWdoFnJYaDZ2spy8cQDfXrWjUFhRWL4g8UWPhoQNfRzlJjhXjUEA+/IrXjkWWNZEOVYZBoAfRWR4g8SWHhq2jnvhIwkbaqxKCxP4kVow3KS2i3JBiRl3Yk4IHvRYCaiuSv/iLpNtcPb2kNzfSIcEwR5XP1qzo/jnSdXuRa/vrS4I4juE27vpT5WK6OkopCQqlicADJNcpf/ETR7S5e2t47m9kTg/Z49yg+mc0JNg3Y6yiuT0r4haXf3iWdxDcWMznCidMBj6ZrqyQFLdgM0NNAncWiuZXx9ohs7m6dpoxbyeUUdRudvRQDz0p/h7xhD4hupYYrK5gWNd2+VcAiizC6OjorkdR+ImmWl09taW9zfPGcO0EeVH41c0LxtpWvXP2SLzYLkD/AFU67SfpzRZhdHRUUUUhhRWdrGu6doVt59/OIx/Co5ZvoK5v/hZun79w0vUfI/56eT/9emk2K6R2tc948/5E6/8A90fzFX9G8Qabr1v51hOHx95Dwy/UVQ8ef8idf/7o/mKFuD2JPBP/ACJ2mf8AXH+prdrC8E/8idpn/XH+pqfW/EumaBEGvp8O33YkGXb6Ch7gtjWrz/4j/wDIZ0D/AK+l/wDQqtD4m2PmAvpeoJAf+Whh/wDr1k+M9VstYvfD11YzrLGbpeR1HzdDVRTTJbTR6ZRRRUFhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFPV/+QNe/9e8n/oJrlPhR/wAixcf9fj/+grXV6v8A8ga9/wCveT/0E1ynwo/5Fi4/6/H/APQVql8JPU7eiiq2ozSW+nXE0K7pEjJUepxUlGTc3Hhjw1cSzTG1tp5jvbgbz9B1rlPGfi7wtrmhT20UxkugMwkwsMMPfFL8PdJ07XIbjVNTxeX3mkESnO0fStjx9Lpul+FbmFIYUlmXZGqqM896vRMjdGn4KuHufCOnySEs3lAEk8muK8EaLb6j4z1e6ukEiWtzIURuRuLnnFdh4B/5E2w/3Kwvh1/yHPEH/X2//oRo7h2Ov1zT7bUNFubeeJWTyiRkdCB29K4b4U6VHPb3Go3S+bJE/lRb+dg74z0r0O9/48Lj/rk38jXG/Cr/AJAFz/18Gkn7rG90a3jrToL7wpeNJGpkhTfG2OVI96XwHcvd+D7GSQkkKUyfQHH9Kt+LP+RW1H/riazvhz/yJVl9X/8AQjR9kOp1FFFZmv6wNC0qS/a3knWPGVSpKI/Efh9PEVitq93NbBW3boTgmuEu/DWo+AZv7asXjv7dCPNEqAuo9c9vwrv9D12z17TY7y2kUbx80ZblT6Gszx3q9nYeGbqGWRWlnXZHGDkk5qk3sS0tza0nUodX0u3v4D8ky7gPT1H51crnPAVnLZeD7KOYFXZS209sk4ro6T3GtjnvHGjf214ZuYUXdNEvmR+uRzj8arfDvVjqfhiKORszWh8p/Xjoa6nrXmFveL4H8aalbSHZZ3UTSRDtu6r/AFprVWE9Hcta3/xVHxHtNMX5rbTwHl9CfvH/AArR+JeqvYaLBYQyeV9skCMwOCEHX+lRfDSwkkt7zXrlf31/KxUn+7n/ABzTvifpklzpVtqEcXmfY5dzr/sHr/IVX2khdLljQtX8H6Fp8Vta31qrKo3vkbmPck1k+OdT8N6ppDXNneW51C3IeJoyAx9vet/RNO8La3psN3bafatvUblxyp7ijV7LwhokKy31lbRhm2qoXJJ+lLS4dDR8M6gdX8N2l1Nh2kiAkz3OMGqUuo+FfCrPEZLW2kJ3MqAF/wDGptZlTS/B9zNpMaoiwFotg4AI6j881z/w/wBB0i+0ZNUuUW7vZWPmNIclT6UvMfkY3jzxT4b13S1+wzM19DIGjfymU/nivR9Jma40K1lb7zQDP5Vx3xOuNPs/D4soY4lnmccIoyoBzk/lXW6F/wAi5Z/9cB/Km9kC3OA8C6Dbal4j1O7u0EsdrMQkbcruJ64+ma9E1K1Z9JuYbNVjlaIqm0YwcVyPw2/4/Ne/6+x/Wu3uLiG0geeeQRxRjLMegFKT1COx5p4E8S6T4etZdL1VDaXglO53Q/Nz0J7YrtbGz8PalqQ1ixFtPcquPMiYHH1A7037F4c8V2wufIt7tG6PjkVxWoaXD4S8b6WmiTvi6kUSQFs8E4p7i2PUqKQdBmlqCzzbRbVfGPje/wBQv8S2tgQkUR+7znH8jXooghEXlCJPL6bdox+Ved+GrlfCvjXUtKvv3MV6weFz0OM4/ma9G3rt3bht9c8VUiYnm/iS0Twf4w0/VtOAihvGKTRLwvUfzz+ldR4858HX/wDuj+YrmfF90nifxZpui2B80Wzl5nXkDkfyx+tdN47GPBt+B/cH8xT7C7jvB7iLwRp8h/hgJ/U1y/gqyj8Va3f+ItSUT7JNsCOMqvpx7Cuo8IR+b4HsI/71uR+prmfAF2nh/VNQ8O6gRDL5u6EscBh7fzo7h2PQnghki8p4kaPGNpUEflXlHjDw9Dovi/S5rMeXbXVwjeUPuqwYdK9ZLoq7iwC+pPFeV+Ntet9V8YaVa2j+ZHa3CBnHQsWFEL3HLY9WoooqCgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCK6gF1aTW7EqJUZCR2yMVmeGvDsPhrTnsoJ5JleUyFnAByQBjj6VsUUXAKQgEEEZBpaKAOKvPhzD9ve80nU7nTWkOWSFiB+lTwfD6yENx9tvrq9uJ4miE07bjGCMcZrrqKrmYrIztC0iPQtKi0+KZ5Ui6M4AP6VV0LwxBoN5fXMNxJK17KZGDgYUk54rbopXCwyaMTQvETgOpUke4rK8N+HIPDVlJawTyTLJIXJcAEflWxRSGVdTsU1PTZ7KR2RZ02ll6ioNB0aLQdIi06GV5Uizh3ABOTntWjRQAUyaGO4haKVFeNxhlYZBFPooA4a6+GVuty8+k6ndafvOSkbkCptO+G1jBeJealeXGoyocr5zEgH+tdnRVczFyoRQFUKoAAGAB2paKKkYV5t8ULaC/1TSbKJd15KxX5ey8ZzXXeJNX1LSY4H07SpNQ3sQ4Q42+lYHhvQtV1LxJJ4k16DyHUbbeA9V9/8+tVHTUl66HYabZR6dp1vZxABYYwvHfA5NTyRpNG0ciB0YYKkZBFPoqSji7r4cW63UlxpGpXWms5yUhchc0/T/h3aRXiXmq31xqcycqJ3JArsaKrmYuVEckMcsDQOitGylSpHBHpXFP8ADYW908uk6zeWEchy0cbkCu5opJtA1c5EfDvTm065t57u4uLi5ADXUp3OACDxn6V0lhZLYadDZLIzrEmwM3U1aoobbCyRi6B4ag8Py3skNxJKbyXzGDgDafbH1rWuIIrqB4J41kjkGGVhkEVJRSuM4eX4bR28zSaRrF5YBjny45CFFX9C8C2ekX/9o3NzNf3g6SznO36V1NFPmYrIKKKKQzI17w1pviK3Ed7F86/clXhl/Gud/wCFdXQ/cjxNqItv7nmH8q7mimm0KyMbQPC+m+HYStnFulb78z8u341a1rS49a0qbT5ZGjSYYLKORzV+ii4WKWkaamkaVb6fHI0iQLtDN1PNUPEPhLTPEQV7hDFcJ92ePhh/jW5RRcLHCn4dXTnypfEuoPbf3DIeRV6T4eaTssUtnktxZyCT5QCZCDnkmusop8zDlQUUUVIwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoqJp41O3JJ9AM0n2lf7kn/fBoAmoqH7Sv9yT/vg0faV/uSf98GgCaioftK/3JP8Avg0faV/uSf8AfBoAmopiSpJwrAn0p9ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFQXTMIwq/eY4FT1BP/AK6D/f8A6GgB8MYSMDHPc1JRRQAUUUUAFFFFAEFxGAvmKMMpycelTKcqD60yf/j3k/3D/Kli/wBUn0FAD6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqCf/AF0H+/8A0NT1BP8A66D/AH/6GgCeiiigAorJ8RWGp6jphg0nUPsFxuB8327iuXi8J+OEmRn8YbkDAsuDyPTpQB31FNUEIAxyQOT606gCOf8A495P9w/ypYv9Un0FJP8A8e8n+4f5UsX+qT6CgB9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVXuTiSFj0D8/kasVDcxGaLapwwOQaAJQcjNLVFdQSAeXc/Iy8buxp39rWP/AD8L+RoAuUVT/tax/wCfhfyNH9rWP/Pwv5GgC5RVP+1rH/n4X8jR/a1j2uAfwNAE9wQLeTP90inRcRL9BVM3DXpEcSERk8se4q8BgAelAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBFJbRS8ugP4VF/Z9r/zyX8qtUUAVf7Otf8Ankv5Uf2da/8APJfyq1RQBV/s61/55L+VKNPth/yyX8qs0UAMSJIxhVA+lPoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z)

当点击 button 的时候会执行`set age(value)`去改变 number 的值，同时计算出新的 age 值，这样的写法等于之前的：

```javascript
computed: {
  age: {
    get: function () {
      return `I am ${this.number} years old`;
    },
    set: function (value) {
      this.number = Number(value);
    }
  }
}
```

分享个小技巧，如果想要传参给 computed，可以令计算属性返回一个函数：

```javascript
get foo() {
  // ...
  return (params: any) => {
  	let returnValue;
    // ...
    return returnValue; 
  }
}
```

#### 5.侦听属性 watch

```javascript
import { Component, Vue, Watch } from 'vue-property-decorator';
@Component({})
export default class App extends Vue {
  private number: number = 0;
  @Watch('number')
  changeAge(newValue: number, oldValue: number)  {
    console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);
  }
}
```

这样的写法等同于之前的：

```javascript
watch: {
  changeAge: function (newValue, oldValue) {
    console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);          	
  }
}
```

#### 6.生命周期

声明周期还是原来的写法：

```javascript
// 生命周期
beforeCreate() {
  console.log('before create');
}
created() {
  console.log('created');：
}
beforeMount() {
  console.log('before mount');
}
mounted() {
  console.log('mounted');
}
```

#### 7.组件注册与传递 Prop

父组件：

```javascript
<!-- App.vue -->
<template>
  <div id="app">
    <Son msg="msg from parent"/>
  </div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Son from './components/Son.vue';
	@Component({
 	  components: { Son }
    })
    export default class App extends Vue { }
</script>
```

子组件：

```javascript
<!-- Son.vue -->
<template>
  <div class="son">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class Son extends Vue {
  		@Prop() private msg!: string;
	}
</script>
```

#### 8.父子组件通信 Emit

父组件：

```javascript
<!-- App.vue -->
<template>
  <div id="app">
    <Son v-on:methodFromParent="methodFromParent"/>
  </div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Son from './components/Son.vue';
	@Component({
 	  components: { Son }
    })
    export default class App extends Vue { 
      methodFromParent(val: string) {
        console.log('data from sub:', val);
      }
    }
</script>
```

子组件：

```javascript
// Son.vue
mounted() {
  this.$emit('methodFromParent', 'hello my parent');
}
```

这样子组件挂载好之后父组件就回被触发事件打印出`data from sub: hello my parent`。
也可以使用 **Vue Property Decorator** 官方提供的 **Emit** 的装饰器来实现通信和传参：

```javascript
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  count = 0

  @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  @Emit()
  returnValue() {
    return 10
  }

  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}
```

这种写法相对于之前的：

```javascript
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCount(n) {
      this.count += n
      this.$emit('add-to-count', n)
    },
    resetCount() {
      this.count = 0
      this.$emit('reset')
    },
    returnValue() {
      this.$emit('return-value', 10)
    },
    promise() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve(20)
        }, 0)
      })

      promise.then(value => {
        this.$emit('promise', value)
      })
    }
  }
}
```

#### 9.混入对象 Mixins

在一个 ts 文件中定义 Mixins：

```javascript
// mixins.ts
import { Vue, Component } from 'vue-property-decorator';

declare module 'vue/types/vue' {
  interface Vue {
    methodFromMixins(value: number | string): void;  // 记得声明一下，要不然会报错 Property 'methodFromMixins' does not exist on type 'App'.
  }
}

@Component
export default class Mixins extends Vue {
  public methodFromMixins(value: number | string): void {
    console.log('method from mixins', value);
  }
}
```

在想使用 Mixins 的组件中：

```javascript
// App.vue
import { Component, Vue } from 'vue-property-decorator';
import mixins from "./common/mixins";
@Component({
  mixins: [mixins]
})
export default class App extends Vue { 
  created() {
    this.methodFromMixins('hello');	// method from mixins hello
  }
}
```





