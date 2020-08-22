<template>
    <div class="top_line">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="top_line_wrap">
                        <div class="logo_wrap">
                            <a href="" class="logo"><img src="img/logo.svg" alt=""></a><a href="" class="logo"><img src="img/logo_pochta.svg" alt=""></a>
                        </div>
                        <div class="nav_wrap">
                            <div
                                @click="$emit('link', 0)" 
                                class="main_nav_itm"
                                >
                                Главная
                            </div>
                            <div
                                @click="$emit('link', 1)"  
                                class="main_nav_itm"
                                >
                                Исходная таблица
                            </div>
                            <div
                                @click="$emit('link', 2)"  
                                class="main_nav_itm"
                                >
                                Обработанная таблица
                            </div>
                            <div
                                @click="$emit('link', 3)"  
                                class="main_nav_itm"
                                >
                                Справочники
                            </div>
                        </div>
                        <div class="user_wrap">
                            <div class="user"><i class="fa fa-user-circle-o" aria-hidden="true"></i><span>Иванова Анастасия</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

</script>

<style>
    .top_line {
        border-bottom: 1px solid #E5E5E5;
        padding: 1rem 0 .5rem; }

    .top_line_wrap {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center; }

    .logo_wrap {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 20%;
        -ms-flex: 0 1 20%;
        flex: 0 1 20%; }
    .logo_wrap:after {
        content: "";
        position: absolute;
        left: 50%;
        width: 2px;
        height: 70%;
        top: 15%;
        margin-left: -1px;
        background-color: #E5E5E5; }
    .logo_wrap .logo img {
        width: 120px; }

    .nav_wrap {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0;
        -ms-flex: 1 0;
        flex: 1 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center; }

    .main_nav_itm {
        padding: 2rem 3rem;
        font-size: 14px;
        cursor: pointer;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: all .2s ease-out;
        -o-transition: all .2s ease-out;
        transition: all .2s ease-out;
        position: relative; }
    .main_nav_itm:after {
        content: "";
        bottom: -.6rem;
        width: 100%;
        height: 2px;
        background-color: #0055A6;
        position: absolute;
        left: 0;
        display: none; }
    .main_nav_itm:hover:after, .main_nav_itm:focus:after, .main_nav_itm.active:after {
        display: block; }

    .user_wrap {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 20%;
        -ms-flex: 0 1 20%;
        flex: 0 1 20%; }

    .user {
        padding-right: 2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        cursor: pointer;
        position: relative; }
    .user i {
        font-size: 24px;
        margin-right: 1rem; }
    .user:after {
        position: absolute;
        right: 0;
        top: 3px;
        font-family: FontAwesome;
        content: "\f107"; }
</style>