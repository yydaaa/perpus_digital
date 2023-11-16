<template>
  <!--Input Data For DataBase-->
  <div class="content">
      <form @submit.prevent="addData" >
          <div class="row">
              <div class="col-sm-10">
                  <input v-model="name" type="text" class="form-control form-control-lg" id="name" placeholder="Nama..." required>
              </div>
            </div>

          <div class="row">
              <div class="col-sm-10">
                  <input v-model="kategori" type="text" class="form-control form-control-lg" id="kategori" placeholder="Kategori..." required>
              </div>
          </div>

          <div class="row">
              <div class="col-sm-10">
                  <input v-model="keperluan" type="text" class="form-control form-control-lg" id="keperluan" placeholder="Keperluan..." required>
              </div>
          </div>  
          <button class="btn">Submit</button>
      </form>
  </div>

  <!--Showing Data Tables-->
  <div class="showData">
      <h1>Riwayat Pengunjung</h1>
      <div class="table-responsive">
          <div class="m-2">Menampilkan {{ datas.length }} data</div>
          <table class="table table-responsive">
              <thead>
                  <tr>
                      <th class="no">No</th>
                      <th class="nama">Nama</th>
                      <th class="kategori">Kategori</th>
                      <th class="keperluan">Keperluan</th>
                      <th class="tanggal">Tanggal</th>
              </tr>
          </thead>
          <tbody v-for="(kunjungan,index) in datas" :key="kunjungan.id ">
              <td>{{ index + 1 }}</td>
              <td>{{ kunjungan.nama }}</td>
              <td>{{ kunjungan.kategori }}</td>
              <td>{{ kunjungan.keperluan }}</td>
              <td>{{ kunjungan.tanggal }}</td>
          </tbody>
      </table>
  </div>
  </div>
</template>


<script setup>
const supabase = useSupabaseClient()
const datas = ref([])
const name= ref('')
const kategori= ref('')
const keperluan= ref('')


async function getData(){
  const{data,error}=await supabase
  .from("kunjungan")
  .select()
  if (error) throw error
  if (data){
    console.log(data)
      datas.value=data
  }
}
// Add Data From Input To Database
async function addData(){
    const { error } = await supabase
    .from('kunjungan')
    .insert([{
        kategori: kategori.value,
        nama: name.value,
        keperluan: keperluan.value
    }])
    if (error) throw error
    else getData()
}
onMounted(() =>{
  getData()
})
</script>
<style scope>
.content {
    background-image: url("@/assets/images/bg.png");
    width: 100%;
    height: 700px;
    padding-top: 150px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
}
.btn{
    background: #05ff09;
}
</style>
