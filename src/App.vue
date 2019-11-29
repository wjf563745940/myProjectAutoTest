<template>
  <div id="app">
    <div :style="{height:`${this.contentHeight}px`}">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="text" v-model="input" class='input'>
    <button type="button" @click="change" class="button">转大写</button>
    <div class='result'>{{result}}</div>
    <ul class="ooo">
      <li v-for="(item,index) in list" :key="index">

        {{item}}
      </li>
    </ul>
    <button type="button" @click="add">add</button>
    </div>
    <div class="test-con">
      <div contenteditable="true" 
      @keydown.enter="_onEnter"
                    @input="_watchInput"
                    @click='focus' 
                    type="text"
                    @focus="testfocus"
                    @blur='inputblur'
       class="test" ref='input'></div><button @click="send">send</button>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {changeUpperCase} from '@/common/utils.js'
export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data(){
    return {
      input:'',
      result:'',
      list:[0],
      contentHeight:0,
      message:{},
      isFocus:false
    }
  },
  created(){

  },
  mounted() {
    this.contentHeight=document.documentElement.clientHeight-44;
  },
  methods: {
    testfocus(){
  this.list.push('testfocus')
    },
       inputblur(){
                this.isFocus=false;
                
                   //对外部客户端 ios的键盘弹窗单独处理
                // if(systemUtil.getString(systemUtil.KEYS.SOURCE)==='b_zhengquan_guangda'){
                //     if(DeviceInfoUtil.getDeviceType() === 'iphone'){
                        clearInterval(this.interval);
                    // } 
                // }
            },
      /**
             * 将输入框设置为聚焦状态.
             * @public
             * */
            focus() {
                this.isFocus=true;
                const input = this.$refs.input;
                //对外部客户端 ios的键盘弹窗单独处理
                // if(systemUtil.getString(systemUtil.KEYS.SOURCE)==='b_zhengquan_guangda'){
                //     if(DeviceInfoUtil.getDeviceType() === 'iphone'){
                        this.interval=setInterval(()=>{
                        input.scrollIntoViewIfNeeded();
                        input.scrollIntoView(true);
                        },500)
                //     } 
                // }
               
                input.focus();
              
                //将光标移到末尾.
                this.$nextTick(() => {
                    const range = document.createRange();
                    range.selectNodeContents(input);
                    range.collapse(false);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    //chatManager.execute(chatManager.ID.VIEW, 'scrollToBottom');
                });
            },
    send(){
      this.list.push(this.message.question)
      this.$refs.input.innerHTML=''
    },
       //回车按下.
    _onEnter(e) {
        e.returnValue = false;
        this.send();
    },
    _watchInput() {
        //实现视图与value的绑定,与watch value函数共同实现双向绑定.
        this.$nextTick(() => {
            //保证 watch value 写入视图的函数优先执行，防止在密集操作下，视图的值与value的值不一致.
            this.message = {
                question: this.$refs.input.textContent
            }
        })
    },
    change(){
     this.result= changeUpperCase(this.input)
    },
    add(){
      // let self = this;
      setTimeout(()=>{
        this.list.push(this.list.length)
        this.list.push(this.list.length)
        // self.list=self.list.concat([self.list.length,self.list.length+1])
          // self.list.splice(self.length,0,self.list.length,self.list.length+1)
      },200)
    },
  },
}
</script>

<style>
.ooo{
  height: 300px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.test-con{
  display: flex;
}
.test-con>div{
  flex: 1;
}
div{
    -webkit-user-select: none;
}
.test{
  height: 44px;
  border: 1px solid #ccc;
  -webkit-user-select: text;
}
</style>
