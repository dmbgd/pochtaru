<template>
    <div class="main_client">
        <!-- <div class="row">
            <div class="col-sm-12"> -->
                <div class="main_client_img">
                    <i class="fa fa-users"></i>
                    <span style="margin-left:10px;">{{ data.hid }}</span>
                </div>
            <!-- </div>
        </div> -->
        <div class="main_client_info">
            <div class="main_client_info_wrap">
                <div class="main_client_info_title">
                    Сегмент
                </div>
                <div class="main_client_tag_wrap">
                    <!-- {{ data.Label1 }} {{ data.Label2 }} {{ data.Label3 }} {{ data.Label4 }} {{ data.Label5 }}  -->
                    <span v-show="data.Label1 == 1"
                        class="main_client_tag main_client_segment"
                        >
                        Фирмачи
                    </span>
                    <span v-show="data.Label2 == 1"
                        class="main_client_tag main_client_segment"
                        >
                        Авантюристы
                    </span>
                    <span v-show="data.Label3 == 1"
                        class="main_client_tag main_client_segment"
                        >
                        Дальнобои
                    </span>
                    <span v-show="data.Label4 == 1"
                        class="main_client_tag main_client_segment"
                        >
                        Местные
                    </span>
                    <span v-show="data.Label5 == 1"
                        class="main_client_tag main_client_segment"
                        >
                        Пчёлы
                    </span>
                </div>

            </div>
            <div class="main_client_info_wrap">
                <div class="main_client_info_title">
                    Услуги
                </div>
                <div class="main_client_tag_wrap">
                    <span 
                        v-show="data.Label1 == 1"
                        class="main_client_tag main_client_service"
                        >
                        <span v-show="data.count >= 300">
                            Кредиты, предложение рассылки, и пакеты вип обслуживания
                        </span>
                        <span v-show="data.count < 300 && data.count >= 50">
                            Подписки на сервисы, аренду, услуги курьера, мониторинг посылок
                        </span>
                        <span v-show="data.count < 50">
                            Пакеты смс информирования, абонементы на отправку, скидки на
                            разовый выезд курьера, размещение рекламы
                        </span>
                    </span>
                    <span 
                        v-show="data.Label2 == 1"
                        class="main_client_tag main_client_service"
                        >
                        страховки посылки и клиента, лотерейные билеты, путевки
                    </span>
                    <span 
                        v-show="data.Label3 == 1"
                        class="main_client_tag main_client_service"
                        >
                        Скидки на отправку на большие расстояния
                    </span>
                    <span 
                        v-show="data.Label4 == 1"
                        class="main_client_tag main_client_service"
                        >
                        Реклама, услуги курьера
                    </span>
                    <span 
                        v-show="data.Label5 == 1"
                        class="main_client_tag main_client_service"
                        >
                        Топливная карта, транспортную карта
                    </span>
                </div>

            </div>
            <div class="main_client_info_wrap">
                <div class="main_client_info_title">
                    След посылка
                </div>
                <div class="main_client_info_data">
                    <span v-show="data.next_days > 0">Через {{ data.next_days }} дн.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            data: Array
        }
    }

</script>

<style>

    .main_client {
        margin-bottom: 3rem;
        /* display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center; */
        align-items: center;
        border-radius: 3px;
        border: 1px solid #E5E5E5;
        padding: 1rem 1.5rem; }
    .main_client .main_client_img {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
        flex: 1 1 20%;
        white-space: nowrap;
        white-space-overflow: hidden; }
    .main_client .main_client_info {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 80%;
        -ms-flex: 1 0 80%;
        flex: 1 0 80%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex; }
    .main_client .main_client_info_wrap {
        padding: 1rem .5rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33%;
        -ms-flex: 1 1 33%;
        flex: 1 1 33%; }
    .main_client .main_client_info_title {
        text-align: center;
        font-size: 20px;
        font-weight: bold; }
    .main_client .main_client_tag_wrap {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center; }
    .main_client .main_client_tag {
        display: block;
        width: 100%;
        margin-bottom: .5rem;
        border-radius: 3px;
        padding: .5rem 1.5rem;
        text-align: center;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid #E5E5E5;
        -webkit-transition: all .2s ease-out;
        -o-transition: all .2s ease-out;
        transition: all .2s ease-out; }
    .main_client .main_client_tag.main_client_segment {
        border-color: #a6d4ff; }
    .main_client .main_client_tag.main_client_segment:hover, .main_client .main_client_tag.main_client_segment:focus {
        background-color: #a6d4ff; }
    .main_client .main_client_tag.main_client_service {
        border-color: #c6cad7; }
    .main_client .main_client_tag.main_client_service:hover, .main_client .main_client_tag.main_client_service:focus {
        background-color: #c6cad7; }
    .main_client .main_client_info_data {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-transform: uppercase;
        font-size: 24px; }


</style>