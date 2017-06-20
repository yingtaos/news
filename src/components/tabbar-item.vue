<template>
    <a class="mint-tab-item" :class="{'is-active':isActive}" @click="goToRouter">
        <span class="mint-tab-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span>
        <span class="mint-tab-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
        <span class="mint-tab-item-label"><slot></slot></span>
    </a>
</template>
<script>
    export default{
        props: {
            id:{
                type:String
            },
            isRouter:{
                type:Boolean,
                default:false
            }
        },
        computed: {
           isActive(){              
               if(this.$parent.value===this.id){
                   return true;
               }
           }
        },
        methods:{
            goToRouter(){
                this.$parent.$emit('input',this.id)
                        //判断是否为路由跳转
                if(this.isRouter){
                                //根据id跳转到对应的路由页面
                    this.$router.push(this.id);
                      
                }
            }
        }
    }
</script>
<style>
.mint-tab-item-icon img{
    width:0.48rem;
    height:0.48rem;
    
}
</style>