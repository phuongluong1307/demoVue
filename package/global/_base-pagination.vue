<template>
    <div class="paginate">
        <ul>
            <li><a :class="data.current_page==1 ? 'disabled' : ''" @click.stop.prevent="data.current_page = 1"><i class="fal fa-angle-double-left"></i></a></li>
            <li><a :class="data.current_page==1 ? 'disabled' : ''" @click.stop.prevent="data.current_page -= data.current_page>1 ? 1 : 0"><i class="fal fa-angle-left"></i></i></a></li>
            <li v-for="item in data.number_page" :key="item"><a @click.stop.prevent="data.current_page=item" :class="item==data.current_page ? 'active' : ''">{{ item }}</a></li>
            <li><a href="javascript:void(0)"><i class="fal fa-ellipsis-h"></i></a></li>
            <li><a :class="data.current_page==data.number_page ? 'disabled' : ''" @click.stop.prevent="data.current_page += data.current_page<data.number_page ? 1 : 0"><i class="fal fa-angle-right"></i></a></li>
            <li><a :class="data.current_page==data.number_page ? 'disabled' : ''" @click.stop.prevent="data.current_page = data.number_page"><i class="fal fa-angle-double-right"></i></a></li>
        </ul>
        <div class="records-perpage">
            <div class="custom-select-option" v-if="data.total > 20">
                <select class="form-control" v-model="data.limit">
                    <option value="10">10 records</option>
                    <option value="20">20 records</option>
                    <option value="50">50 records</option>
                    <option value="100">100 records</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data: function () {
        return {
            limit: 10
        }
    },
}
</script>

<style scoped>
.paginate{display:-webkit-box;display:-ms-flexbox;display:flex;margin:10px 0px;padding-left: 20px;}
.paginate .records-perpage .form-control{height: 34px;line-height: 34PX;font-size: 15px;}
.paginate ul{padding:0px;margin:0px;display:-webkit-box;display:-ms-flexbox;display:flex;}
.paginate ul li{display:block;width: 30px;height:30px;margin: 0 2px;}
.paginate ul li a{display:block;width:100%;height:100%;line-height:30px;text-align:center;cursor:pointer;border:1px solid #e1e1e1;margin:0px 2px;border-radius: 50%;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}
.paginate ul li a.active{color: #03A6A6;border: 1px solid #03A6A6;}
.paginate ul li a.disabled{cursor: no-drop;}
</style>