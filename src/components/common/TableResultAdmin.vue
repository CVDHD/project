<template>
  <table>
    <thead>
        <th>No</th>
      <th>Mã môn học</th>
      <th class="text-left">Tên môn học</th>
      <th>Phòng</th>
      <th>Số lượng</th>
      <th>Số lượng thực</th>
      <th>Thứ</th>
      <th>Thời gian</th>
      <th>Giảng viên</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr 
      v-for="(data, index) in dataList" 
      :key="index" :title="data.subject_name"
      
      >
        <td>{{index +1}}</td>
        <td >{{data.class_id}}</td>
        <td class="text-left">{{data.subject_name}}</td>
        <td>{{data.room}}</td>
        <td>{{data.max_student}}</td>
        <td>{{data.CurentStudent}}</td>
        <td>{{data.day}}</td>
        <td>{{`${data.start_class} - ${data.end_class}`}}</td>
        <td>Nguyen Van A</td>
        <td class="action">
            <router-link :to="`/admin/ket-qua-dang-ky-hoc/${data.class_id}`">
              <a-icon type="eye" title="View all"/>
            </router-link>
            <a-icon type="printer" @click="getFilePdf(data.class_id)"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      columEdit: null
    }
  },
  props:{
    dataList:{//dan sach dang ky hoc
      type: Array,
      required: true
    }
  },
  methods:{
     ...mapActions({
                getFilePdf: 'adminModule/getFilePdf',
        }),
    changeEdit(id){
      this.columEdit = id
    }
  },
  computed:{
  
  },
}
</script>
<style scoped lang="scss">
  .text-left{
    text-align: left;
  }
  .action{
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-top: 10px;
      font-size: 30px;
      i{
          cursor: pointer;
          color: yellow;
      }
  }
  table{
    text-align: center;
    width: 90%;
    margin: auto;
    thead{
      background-color: aliceblue;
      th{
        padding: 10px 20px;
      }
    }
    tbody{
      color: antiquewhite;
      font-size: 1.2em;
      tr{
        // cursor: pointer;
        border-bottom: 1px solid #ffff;
        height: 50px;
        &:hover{
          background-color: rgb(24, 124, 218);
        }
      }
    }
  }
</style>
