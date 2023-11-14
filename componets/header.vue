<template>
    <div>
        <div class="nav-container">
            <div class="headerText">
                <h1>PERPUSTAKAAN DIGIAL SMKN 4 TASIKMALAYA</h1>
                <h4>KAMBING TUA</h4>
            </div>
            <img src="@/assets/images/logosmk.png" class="logosmk"/>
            <img src="@/assets/images/logoclub.png" class="logoclub"/>
        </div>
    </div>
</template>

<script setup>

</script>
<style scope>
*{
margin: 0;
}
.nav-container {
    background-color:#ffc400;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.h1 {
    font-size: 40px;
    font-family: "Alatsi";
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    width: 372px;
    height: 102px;

}

.h4 {
    font-size: 40px;
    font-family: "Alatsi";
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    width: 163px;
    height: 102px;
}
.logosmk {
    font-size: 40px;
    font-family: "Alatsi";
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    width: 372px;
    height: 102px;
}

.logoclub {
    font-size: 40px;
    font-family: "Alatsi";
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    width: 163px;
    height: 102px;
}
</style>
