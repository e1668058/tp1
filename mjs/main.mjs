import {anim_entete} from "./anim_entete.mjs";
// import {anim_Tp} from "./anim_Tp.mjs";
import { Slider } from "./Slider.mjs";
import { config_slider } from "./config_slider.mjs";
let elmEntete = document.querySelector("header .global");
let elm1 = document.getElementById("element1");
let elm2 = document.getElementById("bar");
const animTp = new anim_Tp(elm1, elm2); 
animTp.animation();
const animEntete = new anim_entete(elmEntete);
animEntete.anim();
const elmSlider = document.querySelector('.mon-slider')
console.log(elmSlider.tagName)
let mon_slider = new Slider(elmSlider, config_slider)
mon_slider.creerSlider()
