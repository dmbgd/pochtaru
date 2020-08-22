<template>
    <div class="preloader">
        <div class="preloader_logo_wrap">
            <img src="img/logo_preload.svg" alt="" class="preloader_logo"><img src="img/logo_pochta.svg" alt="" class="preloader_logo">
        </div>
        <div class="preloader_footer">
            <a href=""><img src="img/logo_prov.svg" alt=""></a>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .preloader {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1000;
        background-color: #0055A6;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column; }
    
    .preloader_logo_wrap img {
        max-width: 200px;
    }

    .preloader_logo_wrap {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        position: relative; }
    .preloader_logo_wrap:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 15%;
        width: 4px;
        height: 70%;
        background-color: #fff;
        margin-left: -2px; }

    .preloader_footer {
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        text-align: center;
        padding: 4rem 0; }
</style>
