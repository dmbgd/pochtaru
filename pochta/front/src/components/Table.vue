<template>
    <div class="main_content table">
        <div 
          ref="tableWrap" 
          v-on:scroll.passive="scrollTable"
          class="table_wrap"
          >
            <table class="main_table">
              <caption>{{ title }}</caption>
              <thead>
                <tr>
                  <th 
                    v-for="headerKey in Object.keys(rowsData[0])"
                    :key="headerKey"
                    v-show="headerKey != '_id'"
                    >
                      {{ headers[headerKey] ? headers[headerKey] : headerKey }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="row in rowsData"
                  :key="row._id"
                  >
                  <td 
                    v-for="(item, index) in row"
                    :key="item+index"
                    v-show="index != '_id'"
                    >
                    {{ item }}
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'Table',
  props: {
    title: String,
    headers: Object,
    data: Array,
  },
  mounted() {
    
  },
  computed: {
    rowsData() {
      return this.data;
    }
  },
  methods: {
    scrollTable(){
      var tableScrollHeight = this.$refs.tableWrap.scrollHeight - this.$refs.tableWrap.clientHeight;
      console.log(this.$refs.tableWrap.scrollTop, tableScrollHeight);
      
      if ( this.$refs.tableWrap.scrollTop == tableScrollHeight ) {
        this.$emit('getMoreData');
      }
    }
  },
}
</script>

<style>
    .table_wrap {
        overflow: auto;
        max-height: 80vh; 
    }

    .main_table {
        position: relative;
        border-collapse: collapse;
        max-width: 2000px; 
    }
    .main_table th {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        text-align: center;
        padding: 1rem .5rem; 
        background: white;
    }
    .main_table tr {
        text-align: center; 
    }
    .main_table tr:nth-child(even) {
        background-color: rgba(0, 85, 166, 0.3); 
    }
    .main_table td {
        border: 1px solid #E5E5E5; 
    }

    .table .btn_wrap {
        margin-top: 3rem; 
        display: inline-block;
      }
    
    .text-center {
      text-align: center;
    }
</style>