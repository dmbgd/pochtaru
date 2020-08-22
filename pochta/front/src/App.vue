<template>
  <div id="app">
    <transition name="preloader">
      <PreloaderPage v-show="showPreloaderPage" />
    </transition>

    <TopLine @link="pageNum => showPage = pageNum" />

    <div v-show="showPage == 0">
      <WorkZone />
    </div>

    <div v-show="showPage == 1">
      <div class="container-fluid">
          <div class="row">
            <Table 
              class="col-sm-12"

              v-bind="tables.clients2"
              @getMoreData="getMoreData('clients2')"
              />
          </div>
      </div>

        <div class="row">
            <div class="col-sm-12 text-center subtable">
                <div class="btn_wrap">
                    <a href="#" class="main_btn">Анализировать</a>
                </div>
                <div class="table_icon">
                    <a href="#" class="icon_table">
                      <i class="fa fa-download" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>

    </div>

    <div v-show="showPage == 2">
      <div class="container-fluid">
          <div class="row">

            <Table 
              class="col-sm-12"

              v-bind="tables.clients4"
              @getMoreData="getMoreData('clients4')"
              />

          </div>
      </div>
    </div>


    <div v-show="showPage == 3">
       <div class="container-fluid">
          <div class="row">

            <Table 
              class="col-sm-4"

              v-bind="tables.holydays"
              @getMoreData="getMoreData('holydays')"
              />
            <Table 
              class="col-sm-4"

              v-bind="tables.regions"
              @getMoreData="getMoreData('regions')"
              />
            <Table 
              class="col-sm-4"

              v-bind="tables.report"
              @getMoreData="getMoreData('report')"
              />

          </div>
       </div>
    </div>

  </div>
</template>

<script>
import TopLine from './components/TopLine.vue';
import WorkZone from './components/WorkZone.vue';
import PreloaderPage from './components/PreloaderPage.vue';
import Table from './components/Table.vue';

import axios from 'axios'

export default {
  name: 'App',
  components: {
    TopLine,
    WorkZone,
    PreloaderPage,
    Table
  },
  data() {
    return {
      showPreloaderPage: true,
      showPage: 0,

      tables: {
        // clients: [],
        clients2: {
          title: 'Клиенты',
          headers: {
            hid: 'hid',
            date: 'дата оформления',
            index_from: 'индекс отправителя',
            index_to: 'индекс получателя',
            weight: ' вес (гр)',
            cost: 'стоимость (руб,коп)',
            cost_oc: 'сумма ОЦ (руб)',
            cost_np: 'сумма НП (руб)',
            no_blank: 'безбланковая отправка',
            banderol: 'бандероль',
            fast: 'ускоренное',
            world: 'международное',
            with_cost: 'с объявл. ценностью',
            with_payment: 'с налож. платежом',
            with_descr: 'с описью вложений',
            with_warning: 'отметка \'Осторожно\'',
            sms_client: 'sms для отправителя',
            sms_reciever: 'sms для получателя',
          },
          data: [],
          skip: 0,
        },
        clients4: {
          // title: 'Клиенты',
          headers: {
            hid: 'hid',
            date: 'дата оформления',
            index_from: 'индекс отправителя',
            index_to: 'индекс получателя',
            weight: ' вес (гр)',
            cost: 'стоимость (руб,коп)',
            cost_oc: 'сумма ОЦ (руб)',
            cost_np: 'сумма НП (руб)',
            no_blank: 'безбланковая отправка',
            banderol: 'бандероль',
            fast: 'ускоренное',
            world: 'международное',
            with_cost: 'с объявл. ценностью',
            with_payment: 'с налож. платежом',
            with_descr: 'с описью вложений',
            with_warning: 'отметка \'Осторожно\'',
            sms_client: 'sms для отправителя',
            sms_reciever: 'sms для получателя',
            gramm: 'цена за грамм',
            inner_post: 'Внутренняя отправка',
            Label1: 'Фирмачи',
            Label2: 'Авантюристы',
            Label3: 'Дальнобои',
            Label4: 'Местные',
            Label5: 'Пчёлы',
          },
          data: [],
          skip: 0,
        },
        holydays: {
          title: 'Праздники',
          headers: {},
          data: [],
          skip: 0,
        },
        regions: {
          title: 'Регионы',
          headers: {},
          data: [],
          skip: 0,
        },
        report: {
          title: 'Отчет',
          headers: {},
          data: [],
          skip: 0,
        }
      },
    }
  },
  mounted() {

    this.showPreloaderPage = false;

    Object.keys(this.tables).forEach( tableName => {
      axios.get(
        'http://127.0.0.1:3000/' + tableName, 
        // { skip: this.tables[tableName].skip++ }
      )
      .then( response => {
        console.log(tableName, response.data);
        this.tables[tableName].data = response.data;
      });
    })

  },
  methods: {
    getMoreData(tableName) {
      console.log('getMoreData', tableName);

      axios.get('http://127.0.0.1:3000/' + tableName,
        {params: { skip: this.tables[tableName].skip++ }}
      )
      .then( response => {
        var oldData = this.tables[tableName].data;
        this.tables[tableName].data = oldData.concat(response.data);
        console.log(tableName, this.tables[tableName].data);
      });
    }
  },
}
</script>

<style>
/* #app {} */

.preloader-enter-active {
  transition: all .3s ease;
}
.preloader-leave-active {
  transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.preloader-enter, .preloader-leave-to {
  opacity: 0;
}

.subtable .btn_wrap {
  margin-top: 3rem; 
  display: inline-block;
}

.subtable .table_icon {
  height: 60px;
  line-height: 60px; 
  display: inline-block;
  margin-left: 20px;
}
.subtable .icon_table {
  font-size: 34px;
  color: #41485D;
  cursor: pointer; 
}
</style>
