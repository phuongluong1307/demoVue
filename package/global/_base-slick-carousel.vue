<template>
    <VueSlickCarousel v-bind="settings">
        <slot></slot>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
export default {
    components: {
        VueSlickCarousel
    },
    props: {
        settings: {
            type: Object,
            default: function(){
              return {
                "dots": true,
                "fade": true,
                "infinite": true,
                "arrows": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
              }
            }
        }
    }
}
</script>

<style scoped>
.slider .slick-dots{
  bottom:-40px;
}
.slider .slick-dots li{
  width:auto;
  margin:0;
  height:100%;
}
.slider .slick-dots li.slick-active{
  border-bottom:2px solid #bb0029;
}
.slider .slick-dots li a{
  width:100%;
  font-family: 'Roboto', sans-serif;
  display:block;
  font-size:16px;
  padding: 0 26px;
  color: #999;
  margin: 10px 0;
  border-right: 2px solid #999;
  font-weight:400;
  transition:all .2s;
}
.slider .slick-dots li a:hover{
  color:#333;
}
.slider .slick-dots li:last-child a{
  border-right:0;
}
</style>