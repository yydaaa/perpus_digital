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
                    <select v-model="kategori" class="form-select" id="kategori">
                                <option disabled value="">Kategori..</option>
                                <option>Guru</option>
                                <option>Siswa</option>
                                <option>Staf</option>
                                <option>Umum</option>
                            </select>                
                        </div>
                    </div>
                    <div v-if="kategori == 'Siswa'" class="row ">
                        <div class="col mb-4">
                            <select v-model="tingkat" id="tingkat" class="form-select">
                                <option disabled value="">Tingkat..</option>
                                <option>V</option>
                                <option>VI</option>
                                <option>VII</option>
                            </select>
                        </div>
                        <div class="col mb-4">
                            <select v-model="jurusan" id="jurusan" class="form-select">
                                <option disabled value="">Jurusan..</option>
                                <option>PPLG</option>
                                <option>TJKT</option>
                                <option>TBSM</option>
                                <option>DKV</option>
                                <option>TOI</option>
                            </select>                
                        </div>
                        <div class="col mb-4">
                            <select v-model="kelas" id="kelas" class="form-select">
                                <option disabled value="">Kelas..</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>                
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
        <div class="table-responsive table-bordered ">
            <div class="m-2">Menampilkan {{ datas.length }} data</div>
            <table class="table table-responsive ">
                <thead>
                    <tr>
                        <th class="no">No</th>
                        <th class="nama">Nama</th>
                        <th class="kategori">Kategori</th>
                        <th class="kelas">Kelas</th>
                        <th class="keperluan">Keperluan</th>
                        <th class="tanggal">Tanggal</th>
                </tr>
            </thead>
            <tbody v-for="(kunjungan, index) in datas" :key="kunjungan.id ">
                <td>{{ index + 1 }}</td>
                <td>{{ kunjungan.nama }}</td>
                <td>{{ kunjungan.kategori }}</td>
                <td>{{ kunjungan.kelas }}</td>
                <td>{{ kunjungan.keperluan }}</td>
                <td>{{ kunjungan.tanggal }}</td>
            </tbody>
        </table>
    </div>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const name = ref('')
const kategori = ref('')
const keperluan = ref('')
const tingkat = ref('')
const jurusan = ref('')
const kelas = ref('')
const kelasLengkap = ref('')
const datas = ref([])

// Get Data From DataBase
async function getData() {
    
    const { data, error } = await supabase
    .from("kunjungan")
    .select()
    .order('tanggal', { ascending: false })
    if (error) throw error
    if (data) {
        // console.log(data)
        datas.value = data
    } 
}


onMounted(() => {
    getData()
})


// Add Data From Input To Database
async function addData(){
    kelasLengkap.value = `${tingkat.value} ${jurusan.value} ${kelas.value}`
    const { error } = await supabase
    .from('kunjungan')
    .insert([{
        kategori: kategori.value,
        kelas: kelasLengkap.value,
        nama: name.value,
        keperluan: keperluan.value
    }])
    if (error) throw error
    else getData()
}
</script>
<style scope>
.content {
    background-image: url("@/assets/images/bg.png");
    width: 100%;
    height: 650px;
    padding-top: 150px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
}
.row {
    margin: 10px;
}

    
.btn {
    width: 100px;
    height: 35px;
    color: #000000;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden; 
    transition: background-color ,color ,1s ease ;
    margin: 10px 143px ;
}

.btn:hover{
    background-color: #ffe600 ;
    color: #000000;
}
form {
    margin-top: 20px;
    background-color: rgba(255, 198, 146, 0.55);
    width: 400px;
    height:330px;
    border-radius: 50px;
    padding-top: 0%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
#name {
    width: 335px;
    height: 50px;
    font-size: 20px;
    padding-left: 15px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;
}
#kategori {
    width: 25rem;
    height: 50px;
    font-size: 20px;
    Background: rgba(255, 255, 255, 0.68);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;
    
}
#kelas {
    width: 80px;
    height: 50px;
    font-size: 20px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;
    
}
#tingkat {
    width: 80px;
    height: 50px;
    font-size: 20px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;
    
}
#jurusan {
    width: 150px;
    height: 50px;
    font-size: 20px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;
    
}
#keperluan {
    width: 25rem;
    height: 50px;
    font-size: 20px;
    padding-left: 15px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;
    
}
/* End Visitor Style */

/* History Style */

.showData {
    background-image: url("@/assets/images/bg.png");
    display: flex;
    background-color: #ffe600;
    flex-direction: column;
    padding: 60px 5px 5px 0px;
}

.table-responsive{
    border: 3px solid #A59663;
    color: rgb(255, 255, 255);
    margin: 15px;
    letter-spacing: 5px;
}
.table-responsive, th {
    padding: 5px 48px;
}



thead {
    color: rgba(255, 198, 146, 0.55);
    height: 50px;
    font-size: 20px;

}


tbody {
    border: 2px solid;
    background-color: rgba(255, 213, 0, 0.615);
}
h1{
    position: relative;
    text-align:center ;
    font-size: 35px;
    color: #ffffff;
}


/* End History Style */

/* Style For Mobile Screen */
#name {
    width: 22rem;
    height: 50px;
    font-size: 20px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;

}
#kategori {
    width: 22rem;
    height: 50px;
    font-size: 20px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;

}
#kelas {
    width: 90px;
    height: 50px;
    font-size: 20px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;

}
#tingkat {
    width: 100px;
    height: 50px;
    font-size: 20px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;

}
#jurusan {
    width: 100px;
    height: 50px;
    font-size: 20px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;
}
#keperluan {
    width: 22rem;
    height: 50px;
    font-size: 20px;
    padding-left: 15px;
    background-color: #fff9c2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border-style: hidden;

}
@media (max-width=480px) {
}
</style>
