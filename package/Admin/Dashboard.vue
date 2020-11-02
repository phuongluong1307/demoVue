<template>
  <div class="dashboard">
      <VDashboard>
        <a href="#/warehouse">Warehouse</a>
        <BaseInput :type="'password'" />
        <div class="table">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Phuong</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <BaseSlickCarousel>
            <div>A</div>
            <div>B</div>
            <div>F</div>
            <div>D</div>
            <div>G</div>
        </BaseSlickCarousel>
      </VDashboard>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      my_component: "Dashboard",
    };
  },
};
</script>

<style scoped>
.header{
    position:fixed;
    left:0;
    width:300px;
    height:100vh;
    background:#eee;
    top:0;
}
.navbar{
    margin-left:300px;
    padding:10px;
}
.content{
    margin-left:300px;
    padding:15px;
}
</style>