<template>
    <div>
        <div class='bg'></div>
        <div class='index m-scene' id='main'>
            <nav-header></nav-header>
            <div class='content--wrapper index scene_element' data-viewport='2'>
                <h1>Werklig is a brand design agency based in Helsinki, Finland.</h1>
                <div class="index-project-wrapper featured">
                    <div v-for="val in contect" class="picture--container medium" style="background-color:#e5e5e5" data-color="229, 229, 229" >
                        <h2 class="centertext">{{val.title}}</h2>
                        <router-link to="/Kuura" data-target='4'>
                            <img :src="val.pic" width='900' height="601" class="lazyload, full-width" sizes="(max-width: 900px) 100vw, 900px">
                        </router-link>
                    </div>
                </div>
                <div class="index-project-wrapper featured">
                    <div v-for="item in list" class="picture--container small" style="background-color:#ffe01c" data-color="255, 224, 28">
                        <h3 class="centertext">{{item.listtitle}}</h3>
                        <a href="#" data-target="4">
                            <img :src="item.listpic" width="360" height='240' data-sizes='auto' sizes="(max-width: 360px) 100vw, 360px">
                        </a>
                    </div>
                </div>
                <footer>
                    <p>Visit our 
                        <a href="#" target='_blank' alt="Werklig Facebook">Facebook</a>
                        <a href="#" target='_blank' alt="Werklig Twitter">Twitter</a>
                        <a href="#" target='_blank' alt="Werklig Tumblr">Tumblr</a>
                    </p>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
import NavHeader from './navHeader';
import Kuura from './Kuura';
import axios from 'axios';
    export default{
        data:function(){
            return {
                contect:[
                    {title:"Kuura Cider",pic:'../../static/img/1.jpg'},
                    {title:"City of Helsinki",pic:'../../static/img/2.jpg'},
                    {title:"Valta",pic:'../../static/img/3.jpg'},
                    {title:"Holvi",pic:"../../static/img/4.jpg"}
                ],
                list:[
                    {listtitle:"Hernesaaren ranta",listpic:"../../static/img/11.jpg"},
                    {listtitle:"Jonas Granfors",listpic:"../../static/img/12.jpg"},
                    {listtitle:"New School Helsinki",listpic:"../../static/img/13.jpg"},
                    {listtitle:"Helsinki City Museum",listpic:"../../static/img/14.jpg"},
                    {listtitle:"Suomen Jäätelö",listpic:"../../static/img/15.jpg"},
                    {listtitle:"EMMA – Search",listpic:"../../static/img/16.jpg"},
                    {listtitle:"Galipette",listpic:"../../static/img/17.jpg"},
                    {listtitle:"Powerfood",listpic:"../../static/img/18.jpg"},
                    {listtitle:"Gold&Green",listpic:"../../static/img/19.jpg"},
                    {listtitle:"Keisari",listpic:"../../static/img/20.jpg"},
                    {listtitle:"Parliament of Finland",listpic:"../../static/img/21.jpg"},
                    {listtitle:"Victor Vasarely",listpic:"../../static/img/22.jpg"},
                    {listtitle:"Kontoret",listpic:"../../static/img/23.jpg"},
                    {listtitle:"Senate Properties",listpic:"../../static/img/24.jpg"},
                    {listtitle:"Masters of Aalto 2014",listpic:"../../static/img/25.jpg"},
                    {listtitle:"ERC 2014",listpic:"../../static/img/26.jpg"},
                    {listtitle:"Finnish Design",listpic:"../../static/img/27.jpg"},
                    {listtitle:"Design en Seine",listpic:"../../static/img/28.jpg"},
                    {listtitle:"ARE",listpic:"../../static/img/29.jpg"},
                    {listtitle:"Susanna Vento",listpic:"../../static/img/30.jpg"},
                    {listtitle:"Helsinki Food Company",listpic:"../../static/img/31.jpg"}
                ]
            }
        },
         components:{
            NavHeader,
        },
        beforeCreate() {
            var url = `127.0.0.1:3000/tp_img`;
            axios.get(url).then(res=>{
                console.log(res.data);
            })
        }
    }
</script>


