<template>
  <div id="landing">
    <navbar msg="用户登录"></navbar>
    <div v-show="display" class="username-login">
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              type="number"
              v-model="name"
              placeholder="已验证手机"
              class="weui-input"
            />
          </div>
          <div class="weui-cell__ft" v-show="close" @click="del">
            <van-icon class="weui-icon-cancel cc" name="close" />
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              type="password"
              v-model="pwd"
              placeholder="请输入密码"
              class="weui-input"
            />
          </div>
          <div class="weui-cell__ft" v-show="close1" @click="del1">
            <van-icon class="weui-icon-cancel cc" name="close" />
          </div>
          <div class="weui-cell__ft">
            <a href="/password/forget" class="weui-vcode-btn">忘记密码</a>
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <button
          class="weui-btn weui-btn_primary login-btn" @click="phoneRegister()"
        >
          登录
        </button>
      </div>
    </div>
    <div v-show="display1" class="mobile-login">
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              type="number"
              v-model="name1"
              placeholder="请输入手机号(暂不支持)"
              class="weui-input"
            />
          </div>
          <div class="weui-cell__ft" v-show="close2" @click="del2">
            <van-icon class="weui-icon-cancel cc" name="close" />
          </div>
          <div class="weui-cell__ft">
            <button class="weui-vcode-btn">获取验证码</button>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input
              type="tel"
              v-model="pwd1"
              placeholder="请输入收到的验证码"
              class="weui-input"
            />
          </div>
          <div class="weui-cell__ft" v-show="close3" @click="del3">
            <van-icon class="weui-icon-cancel cc" name="close" />
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <button class="weui-btn weui-btn_primary login-btn"
           >
          登录
        </button>
      </div>
      <!---->
    </div>

    <div class="weui-cells__tips">
      <span @click="display2">{{
        display == true ? "短信验证码登录" : "账号密码登录"
      }}</span>
      <a href="/login">手机快速注册</a>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import navbar from "../components/navbar";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      display: true,
      display1: false,
      close: false,
      close1: false,
      close2: false,
      close3: false,
      name: null,
      name1: null,
      pwd: null,
      pwd1: null,
    };
  },
  watch: {
    name(newVal, oldVal) {
      if (this.name.length) {
        this.name = newVal;
        this.close = true;
      } else {
        this.close = false;
      }
    },
    pwd(newVal, oldVal) {
      if (this.pwd.length) {
        this.pwd = newVal;
        this.close1 = true;
      } else {
        this.close1 = false;
      }
    },
    name1(newVal, oldVal) {
      if (this.name1.length) {
        this.name1 = newVal;
        this.close2 = true;
      } else {
        this.close2 = false;
      }
    },
    pwd1(newVal, oldVal) {
      if (this.pwd1.length) {
        this.pwd1 = newVal;
        this.close3 = true;
      } else {
        this.close3 = false;
      }
    },
  },
  methods: {
    display2() {
      console.log(111, this.display, this.display1);
      this.display = !this.display;
      (this.display1 = !this.display1),
        (this.name = ""),
        (this.pwd = ""),
        (this.name1 = ""),
        (this.pwd1 = "");
    },
    del() {
      this.name = "";
    },
    del1() {
      this.pwd = "";
    },
    del2() {
      this.name1 = "";
    },
    del3() {
      this.pwd1 = "";
    },

    phoneRegister() {
        const pattUser = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        const pattPwd = /\w{8,20}/g;
        var resUser = pattUser.test(this.name);
        var resPwd = pattPwd.test(this.pwd);

        if (resUser) {
          console.log(111)
        } else {
          Toast('您输入的手机号有误！');
        }
        if (resPwd) {
          console.log(222)
        } else {
          Toast('密码错误！');
        }
        if (resPwd == true && resUser == true) {
          console.log("成功");
          this.axios.get("http://localhost:3000/landing", {
              params: {
                user: this.name,
                pwd: this.pwd,
              },
            }).then((res)=>{
              // console.log(res.data.status);
              // console.log(this.$router);
              if (res.data.status == 200) {
                localStorage.setItem('status',1)
                localStorage.setItem('tel',this.name)
                this.$router.push(this.$route.query.return)
                Toast("登录成功");
              } else if (res.data.status == 404) {
                Toast("密码错误或者判断是否已注册");
              }
            }).catch(function (err) {
              console.log(err);
              Toast('请求出错！');
            });
        } else {
          console.log(333)
        }
      }
  },
};
</script>

<style scoped>
#landing {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  padding-top: 1.194667rem;
  box-sizing: border-box;
  background-image: url(../assets/img/login_bg.png);
  background-size: cover;
}

/* 账号密码登录 */
.weui-cells {
  margin-top: 1.17647059em;
  background-color: #fff;
  line-height: 1.47058824;
  font-size: 16px;
  overflow: hidden;
  position: relative;
}
.weui-cell {
  padding: 10px 15px;
  position: relative;
  display: -webkit-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.weui-cell:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
  transform-origin: 0 0;
  transform: scaleY(0.5);
  left: 15px;
  z-index: 2;
}
.weui-cell .weui-input {
  width: 100%;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  height: 1.47058824em;
  line-height: 1.47058824;
}
.weui-cell .weui-cell__ft {
  text-align: right;
  color: #999;
}
.weui-cell .weui-cell__ft .cc {
  color: #ccc;
  font-size: 0.586667rem;
  vertical-align: middle;
}
.weui-cell .weui-cell__ft a {
  color: #ff6600;
  display: inline-block;
  padding: 0 0.6em 0 0.7em;
  border-left: 1px solid #e5e5e5;
  margin-left: 5px;
  height: auto;
  line-height: normal;
  vertical-align: middle;
  font-size: 17px;
}
/* 登录按钮 */
.weui-btn-area {
  margin: 1.17647059em 15px 0.3em;
  opacity: 0.9;
}

.login-btn {
  margin: 5vw 0;
}
button.weui-btn,
input.weui-btn {
  width: 100%;
  border-width: 0;
  outline: 0;
}
.weui-btn_primary {
  background-color: #ff6600;
}
.weui-btn {
  position: relative;
  display: block;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  line-height: 2.55555556;
  border-radius: 5px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow: hidden;
}
/* 获取验证码 */
.weui-vcode-btn {
  display: inline-block;
  padding: 0 0.6em 0 0.7em;
  border-left: 1px solid #e5e5e5;
  height: auto;
  line-height: normal;
  font-size: 17px;
  color: #f60;
  border: 0.026667rem solid transparent;
  border-left-color: #e5e5e5;
  background-color: #fff;
  margin-left: 5px;
  vertical-align: middle;
}
/* 切换 */
.weui-cells__tips {
  display: flex;
  justify-content: space-between;
  margin-top: 0.3em;
  color: #999;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.weui-cells__tips a {
  color: #999;
}
</style>