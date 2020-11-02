<template>
    <!-- Notification success -->
    <div class="popup notification popup-success" :class="open ? 'open' : ''">
        <div class="box success">
            <div class="success-text">{{ text }}</div>
            <button><i class="ionicons ion-ios-close-empty"></i></button>
        </div>
        <div class="mask"></div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        open: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.popup{
    display:none;
    justify-content: center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:1039;
}
.popup.notification{
    width:100%;
}
.popup.notification.open{
    display:flex;
}
.popup.notification .box{
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:7px;
    max-width:500px;
    z-index:2;
}
.popup.notification .box.success{
    border:1px solid #7ED321;
    background: #7ED321;
    color: #FFFFFF;
}
.popup.notification .box.success div{
    flex:1;
    padding:15px 20px;
    font-size:13px;
}
.popup.notification .box.success button{
    background:none;
    border:none;
    padding-right:15px;
}
.popup.notification .box.success button i{
    color:#FFFFFF;
    font-size:30px;
}
.mask{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:rgba(0,0,0,0.3);
    z-index:1;
}
</style>