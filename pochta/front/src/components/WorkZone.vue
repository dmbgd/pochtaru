<template>
    <div class="main_content workzone">
        <div class="container">
            
            <div class="row justify-content-md-center">
                <div class="col-sm-12 main_search align-self-center">
                   
                    <div class="row">
                        <div class="col-sm-9">
                            <div class="form_group search">
                                <input 
                                    v-model="id"
                                    class="form_input" 
                                    placeholder=" "
                                >
                                <label class="form_label">Введите ID</label>
                                <span><i class="fa fa-search"></i></span>
                            </div>
                        </div>
                        
                        <div class="col-sm-2">
                            <a 
                                @click="getCards(0)"
                                href="#" 
                                class="main_btn"
                                >
                                Поиск
                            </a>
                        </div>
                        <div class="col-sm-1">
                            <div class="upload_wrap">
                                <a href="" class="upload_icon">
                                    <label for="search_dowload"><i class="fa fa-upload" aria-hidden="true"></i></label>
                                    <input type="file" class="input_file" id="search_dowload">

                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <Card
                            v-for="card in cardsData"
                            :key="card._id"

                            :data="card"
                            class="col-sm-12"
                            />
                    </div>

                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue';

    import axios from 'axios';

    export default {
        components: { 
            Card
        },
        mounted() {
            window.addEventListener('scroll', this.getMoreData);
        },
        data() {
            return {
                id: [],
                skip: 0,
                cardsData: [],
            }
        },
        methods: {
            getCards(skip) {

                if (skip == 0) {
                    this.skip = 0;
                    this.cardsData = [];
                }

                axios.get(
                    'http://127.0.0.1:3000/clients4', 
                    { 
                        params: { 
                            find: { hid: { $regex : ".*" + this.id + ".*"} },
                            skip: skip,
                            limit: 5
                        } 
                    }
                )
                .then( response => {
                    console.log('Success', response.data);
                    var data = response.data;
                    // var preparedData = [];

                    data.forEach(item => {
                        axios.post('http://178.57.218.67:8099/api/predict_day',
                            {
                                "hid": item.hid
                            })
                            .then( response => {
                                console.log('next_days', response.data.next_days);
                                item.next_days=response.data.next_days;
                                this.cardsData.push(item);
                            });  
                    });

                });
            },
            getMoreData() {
                var scrollHeight = Math.max(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                ) - window.innerHeight;
                console.log(window.pageYOffset, scrollHeight);

                if (window.pageYOffset == scrollHeight) {
                    this.getCards(++this.skip);
                }
            }
        },
    }
</script>

<style>
    .grath_title {
        font-weight: bold;
        font-size: 20px; }
    /* .upload_wrap {
        margin: 2rem 0 .5rem 0;
        text-align: right; 
        } */

    .upload_icon {
        color: #41485D;
        font-size: 35px; }
    .upload_icon label {
        cursor: pointer; }
    .upload_icon:hover, .upload_icon:focus {
        color: #41485D; }

    .input_file {
        width: .1px;
        height: .1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1; }
    .main_search {
        margin-bottom: 2rem; }
    .main_search .col-sm-6, .main_search .col-sm-3, .main_search .col-sm-4, .main_search .col-sm-2 {
        padding: 0; }
    .main_search .col-sm-6 {
        padding-left: 15px; }
    .main_search .col-sm-12, .main_search .col-sm-2 {
        padding-right: 15px; }
    .main_search .main_btn {
        height: 41px;
        line-height: 41px;
        padding: 0;
        display: block; }

    .search .form_input {
        padding-left: 3.5rem; }

    .search .form_label {
        left: 3.5rem; }

    .search span {
        position: absolute;
        content: "\f002";
        font-family: FontAwesome;
        top: 11px;
        left: 11px;
        cursor: pointer;
        font-size: 16px; }

    .selectize-input {
        height: 41px;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
        padding: 10px 8px; }
    .selectize-input .focus {
        -webkit-box-shadow: none;
        box-shadow: none; }

    .selectize-dropdown .active, .selectize-dropdown .option:hover, .selectize-dropdown .option:focus {
        background-color: rgba(0, 85, 166, 0.3);
        cursor: pointer;
        color: #41485D; }
    .change_select {
        margin-top: 55px; }
    .change_select .selectize-input {
        border: 1px solid #d0d0d0; }
    .change_select .main_btn_wrap {
        text-align: center; }

    .main_search {
        margin-bottom: 2rem; }
    .main_search .col-sm-6, .main_search .col-sm-3, .main_search .col-sm-4, .main_search .col-sm-2 {
        padding: 0; }
    .main_search .col-sm-6 {
        padding-left: 15px; }
    .main_search .col-sm-12, .main_search .col-sm-2 {
        padding-right: 15px; }
    .main_search .main_btn {
        height: 41px;
        line-height: 41px;
        padding: 0;
        display: block; }
</style>