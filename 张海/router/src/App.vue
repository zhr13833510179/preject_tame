<template>
  <div id="app">
    <div>
       <app-AppMenu></app-AppMenu>
        <router-view/>
    </div>
      <!-- <div id="app">
        <div id="whole">
          <router-view/>
          <ul class="list">
            <li id="special" @click="Coffer">
              <router-link id="OpeningRecord" to="/AppStringbox">
                <img id="safepic" :src="CofferPic" alt>
                <p :style="[safetext1]">{{ CofferText }}</p>
              </router-link>
            </li>
            <li @click="Opening">
              <router-link id="OpeningRecord" to="/">
                <img id="safepic" :src="OpeningPic" alt>
                <p :style="[safetext2]">{{ OpeningText }}</p>
              </router-link>
            </li>
            <li @click="Log">
              <router-link id="OpeningRecord" to="/Appzt">
                <img id="safepic" :src="LogPic" alt>
                <p :style="safetext3">{{ LogText }}</p>
              </router-link>
            </li>
            <li @click="Ass">
              <router-link id="OpeningRecord" to="/RelevantWhole">
                <img id="safepic" :src="AssociatedPic" alt>
                <p :style="safetext4">{{ AssociatedUsers }}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div> -->
  </div>
</template>
<script>
import AppMenu from './views/AppMenu'
import { fontsizeset } from "./fontsizeset.js";
export default {
  name: "app",
      components:{
        'app-AppMenu':AppMenu,
      },
  data() {
    return {
      // CofferText: "保险箱",
      // OpeningText: "开门记录",
      // LogText: "报警记录",
      // AssociatedUsers: "关联用户",
      // safetext1: {
      //   "font-size": "0.26rem",
      //   float: "left",
      //   "margin-left": "0.1rem",
      //   color: "#8c8c8c"
      // },
      // safetext2: { "font-size": "0.26rem", float: "left" ,color: "#8c8c8c" },
      // safetext3: { "font-size": "0.26rem", float: "left" ,color: "#8c8c8c"},
      // safetext4: { "font-size": "0.26rem", float: "left" ,color: "#8c8c8c"},
      // CofferPic: require("./assets/fase1@2x.png"),
      // OpeningPic: require('./assets/Opendoor1@3x.png'),
      // LogPic: require('./assets/Callthepolice1@2x.png'),
      // AssociatedPic: require('./assets/Relation1@2x.png')
    };
  },
}
//   methods: {
//     Coffer() {
//       this.CofferPic = require("./assets/fase2@2x.png"),
//       this.OpeningPic = require('./assets/Opendoor1@3x.png'),
//       this.LogPic = require('./assets/Callthepolice1@2x.png'),
//       this.AssociatedPic = require('./assets/Relation1@2x.png'),
//       this.safetext1 = {
//         "font-size": "0.26rem",
//         float: "left",
//         "margin-left": "0.1rem",
//         color: "#0090ff"
//       };
//       this.safetext2 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//       this.safetext3 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//       this.safetext4 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//     },
//     Opening(){
//       this.CofferPic = require("./assets/fase1@2x.png"),
//       this.OpeningPic = require('./assets/Opendoor2@2x.png'),
//       this.LogPic = require('./assets/Callthepolice1@2x.png'),
//       this.AssociatedPic = require('./assets/Relation1@2x.png'),
//       this.safetext1 = {
//         "font-size": "0.26rem",
//         float: "left",
//         "margin-left": "0.1rem",
//         color: "#8c8c8c"
//       };
//       this.safetext2 = { "font-size": "0.26rem", float: "left",color: "#0090ff" };
//       this.safetext3 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//       this.safetext4 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//     },
//     Log(){
//       this.CofferPic = require("./assets/fase1@2x.png"),
//       this.OpeningPic = require('./assets/Opendoor1@3x.png'),
//       this.LogPic = require('./assets/Callthepolice2@2x.png'),
//       this.AssociatedPic = require('./assets/Relation1@2x.png'),
//       this.safetext1 = {
//         "font-size": "0.26rem",
//         float: "left",
//         "margin-left": "0.1rem",
//         color: "#8c8c8c"
//       };
//       this.safetext2 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//       this.safetext3 = { "font-size": "0.26rem", float: "left",color: "#0090ff" };
//       this.safetext4 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//     },
//     Ass(){
//       this.CofferPic = require("./assets/fase1@2x.png"),
//       this.OpeningPic = require('./assets/Opendoor1@3x.png'),
//       this.LogPic = require('./assets/Callthepolice1@2x.png'),
//       this.AssociatedPic = require('./assets/Relation2@2x.png'),
//       this.safetext1 = {
//         "font-size": "0.26rem",
//         float: "left",
//         "margin-left": "0.1rem",
//         color: "#8c8c8c"
//       };
//       this.safetext2 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//       this.safetext3 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
//       this.safetext4 = { "font-size": "0.26rem", float: "left",color: "#0090ff" };
//     }
//   }
// };
</script>

<style >
/* #OpeningRecord {
  font-size: 0.2rem;
  margin-top: 0.09rem;

  float: left;
  width: 1.04rem;

  height: 1rem;
}
#alarmLog {
 
  font-size: 0.2rem;
  margin-top: -1.1rem;
  margin-left: 4rem;
  float: left;
  width: 1rem;

  height: 1rem;
}
li {
  list-style: none;
}
#whole {
  width: 7.5rem;

  position: relative;
}
.list {
  width: 7.5rem;
  border-top: 1px solid #808080;
  float: left;
  position: absolute;
  top: 12.2rem;
  left: 0;
}
.list li {
  float: left;
  margin-left: 0.65rem;
  list-style: none;
}

#safe {
  width: 1.04rem;
  height: 1rem;
  text-align: center;
  margin-top: 0.1rem;
}
#safepic {
  float: left;
  width: 0.52rem;
  height: 0.5rem;
  margin-left: 0.25rem;
}
#safetext {
  font-size: 0.26rem;
  float: left;
}

#safetext1 {
  font-size: 0.26rem;
  float: left;
  margin-left: 0.1rem;
}
#safetextBlue {
  font-size: 0.26rem;
  float: left;
  color: #0191ff;
} */
</style>
