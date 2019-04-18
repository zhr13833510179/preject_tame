<template>
  <div id="app">
    <div id="header">
      <img :src="urlone" class="status">
      <img :src="urltwo" class="arrow" @click="goTo">
      <img :src="urlthree" class="Head-portrait">
      <p>{{msg}}</p>
      <h6>{{text}}</h6>
    </div>
    <div id="footer">
      <div class="footer-top">
        <ul>
          <li class="left" v-for="item in list">
            <p>{{item.text}}</p>
            <span>
              <img :src="imgurl" class="image">
            </span>
          </li>
        </ul>
      </div>
      <div class="footer-botton">
        <ol>
          <li class="left" v-for="item in listtwo">
            <p>{{ item.text }}</p>
            <span>
              <img :src="imgurl" alt class="image">
            </span>
          </li>
        </ol>
      </div>
      <div class="footer-serve">
        <router-link :to="{name:'Sign'}">
          <a href="#">{{sign_out}}</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "http";
export default {
  name: "app",
  data() {
    return {
      msg: "我的",
      text: "2154003540",
      urlone: require("./../assets/状态栏@3x.png"),
      urltwo: require("./../assets/Return@3x.png"),
      urlthree: require("./../assets/Headportrait@3x.png"),
      sign_out: "退出登录",

      imgurl: require("./../assets/webwxgetmsgimg.jpg"),
      list: [{ text: "通知消息" }, { text: "修改密码" }],
      listtwo: [{ text: "意见反馈" }, { text: "关于" }]
    };
  },
  methods: {
    goTo() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#header {
  height: 5.1rem;
  width: 7.5rem;
  background-color: pink;
  position: relative;
}
.status {
  width: 7.3rem;
  position: absolute;
  left: 0.1rem;
  top: 0;
}
#header .arrow {
  width: 0.2rem;
  position: absolute;
  top: 0.65rem;
  left: 0.3rem;
}
#header p {
  font-size: 0.31rem;
  position: absolute;
  top: 0.7rem;
  left: 3.4rem;
  color: #fff;
}
#header .Head-portrait {
  position: absolute;
  top: 1.8rem;
  left: 2.93rem;
  width: 1.61rem;
}
#header h6 {
  font-size: 0.25rem;
  color: #fff;
  position: absolute;
  top: 3.7rem;
  left: 2.95rem;
}

#footer {
  width: 7.5rem;
  height: 8.2rem;
}
#footer .footer-top {
  width: 7.5rem;
  height: 2.5rem;
  background-color: #f2f2f2;
}
.footer-top ul li {
  float: left;
  width: 7.5rem;
  height: 1.13rem;
  background-color: #fff;
  overflow: hidden;
  position: relative;
}
.footer-top .left {
  border-bottom: 1px solid #ececec;
}
.footer-top li p {
  font-size: 0.3rem;
  line-height: 1.13rem;
  margin-left: 0.3rem;
}
.footer-top .image {
  position: absolute;
  top: 0.35rem;
  right: 0.3rem;
  width: 0.23rem;
}
#footer .footer-botton {
  width: 7.5rem;
  height: 2.5rem;
  background-color: #f2f2f2;
}
.footer-botton ol li {
  float: left;
  width: 7.5rem;
  height: 1.13rem;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  /* margin-top: 0.3rem; */
}
.footer-botton .left {
  border-bottom: 1px solid #ececec;
}
.footer-botton ol p {
  font-size: 0.3rem;
  /* line-height: 1rem; */
  position: absolute;
  top: 0.4rem;
  margin-left: 0.3rem;
}
.footer-botton .image {
  position: absolute;
  top: 0.35rem;
  right: 0.3rem;
  width: 0.23rem;
}
#footer a {
  display: block;
  width: 7.5rem;
  height: 1.12rem;
  color: #ff6867;
  text-align: center;
  line-height: 1.12rem;
  text-decoration: none;
  background-color: #fff;
  font-size: 0.3rem;
  float: left;
}
#footer .footer-serve {
  width: 7.5rem;
  height: 3.28rem;
  background-color: #f2f2f2;
}
</style>
