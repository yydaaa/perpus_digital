<template>
  <div>
  <table border="1" width="50%">
    <thead>
      <tr>
        <th>no</th>
        <th>tanggal</th>
        <th>nama</th>
        <th>kategori</th>
        <th>keperluan</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(kunjungan,index) in datas" :key="kunjungan.id">
        <td>{{ index + 1 }}</td>
        <td>{{ kunjungan.tanggal }}</td>
        <td>{{ kunjungan.nama }}</td>
        <td>{{ kunjungan.kategori }}</td>
        <td>{{ kunjungan.keperluan }}</td>
      

    </tr>
    </tbody>
  </table>
  </div>

</template>

<script setup>
const supabase = useSupabaseClient()
const datas = ref([])

async function getData(){
  const{data,error}=await supabase
  .from("kunjungan")
  .select()
  if (error) throw
  if (data){
      console.log(data)
      datas.value=data
  }
}

onMounted(() =>{
  getData()
})
</script>
<style scope>

</style>