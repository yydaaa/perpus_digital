<template>
  <div>
      <div class="nav-container">
          <img src="@/assets/images/smk.png" class="smk"/>
          <div class="headerText">
          <h1>PERPUS-DIGITAL SMKN-4 TASIKMALAYA</h1>
          </div>
          <img src="@/assets/images/logoclub.png" class="logoclub"/>
          
      </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
*{
margin: 0;
z-index: 1;
  }
.nav-container {
  background-color:#F90;;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.logoclub {
  width: 150px;
  height: 130px;
}

.smk{
  width: 120px;
  height: 110px;
}
h1 {
  color: #ffffff;
  text-align: right;
  font-family: '';
  font-size: 20px;
  letter-spacing: 9px;
  font-weight: 50;
  line-height: normal;

}


@media (max-width: 520px) {
  .nav-container {
      background-color:rgbargba(255, 162, 0, 0.678);
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
  }
  
  .logoclub {
      width: 130px;
      height: 110px;
  }
  
  }
  .smk{
      width: 80px;
      height: 80px;
  
  }
  h1 {
      color: #ffffff;
      text-align: right;
      font-size: 19px;
      letter-spacing: 1px;
  
  }
  
@media (max-width: 820px) {
  .nav-container {
      background-color:rgba(255, 162, 0, 0.678);
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
  }
  
  .logoclub {
      width: 120px;
      height:120px;
  }
  
  
  .smk{
      width: 80px;
      height: 80px;
  
  }
  h1 {
      color: #ffffff;
      text-align: center;
      font-size: 15px;
      letter-spacing: 1px;
  }

}
</style>
