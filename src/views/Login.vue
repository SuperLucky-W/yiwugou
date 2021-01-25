<template>
  <div id="login">
    <navbar msg="用户注册"></navbar>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
          <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
          <input
            type="number"
            placeholder="请输入手机号"
            v-model="name"
            class="weui-input"
          />
        </div>
        <div class="weui-cell__ft" @click="refreshCode">
          <!-- <button class="weui-vcode-btn" @click="getCode()">{{getcode}}</button> -->
          <Code :identifyCode="identifyCode"></Code>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">验证码</label>
        </div>
        <div class="weui-cell__bd">
          <input
            type="tel"
            placeholder="请输入验证码"
            v-model="code"
            class="weui-input"
          />
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
          <input
            type="password"
            placeholder="请输入6-20位登陆密码"
            maxlength="20"
            autocomplete="new-password"
            class="weui-input"
            v-model="pwd"
          />
        </div>
      </div>
    </div>
    <div class="weui-btn-area">
      <button class="weui-btn weui-btn_primary login-btn" style="opacity: 0.5" @click="phoneRegister()">
        注册
      </button>
    </div>
    <!---->
    <div class="weui-cells__tips">
      <span>已有账号？<a href="/landing">马上登录→</a></span>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar";
import { Toast } from 'vant';
import Code from '../components/code';
export default {
  components: {
    navbar,
    Code
  },
  data() {
    return {
      name: null,
      code: null,
      pwd: null,
      // getcode:'获取验证码'
      // 随机抽取四位数
      identifyCodes: '1234567890abcdef',
      identifyCode: '',
    };
  },
  watch: {
    name(newVal, oldVal) {
      if (this.name.length) {
        this.name = newVal;
      }
    },
    code(newVal, oldVal) {
      if (this.code.length) {
        this.code = newVal;
      }
    },
    pwd(newVal, oldVal) {
      if (this.pwd.length) {
        this.pwd = newVal;
      }
    },
  },
  mounted() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
  },
  methods: {
     // 验证码处理
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    },

    // 刷新验证码
    refreshCode() {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
        for (let i = 0; i < l; i++) {
            this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ]
        }
        console.log(this.identifyCode)
    },
    // 随机验证码函数
    // getCode() {
    //   var arr = [];
    //   var str='';
    //   for (var i = 48; i < 123; i++) {
    //     if (i > 57 && i < 65) {
    //       continue;
    //       i = 64;
    //     }
    //     if (i > 90 && i < 97) {
    //       continue;
    //       i = 96;
    //     }
    //     arr.push(String.fromCharCode(i)); //String.fromCharCode(46) 将编码转换为字符串
    //   }
    //   arr = arr.sort(function () {
    //     return Math.random() - 0.5;
    //   });
    //   arr.length = 4;
    //   str = arr.join("");
    //   // res.innerHTML=str.toLowerCase();    //将字符串的大写转换为小写
    //   // res.innerHTML = str.toUpperCase();     //将字符串中的所有小写字母转换为大写字母
    //   this.getcode=str.toLowerCase();
    //   console.log(this.getcode);
    // },
    // 手机号点击注册
    phoneRegister() {
      const pattTel = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      const pattPwd = /\w{8,20}/g;
      var resTel = pattTel.test(this.name);
      var resPwd = pattPwd.test(this.pwd);
      console.log(this.name,resTel);
      console.log(this.pwd,resPwd);
      if (resTel&&this.name.length) {
        console.log(111)
        if (this.code == this.identifyCode) {
        console.log(333)
          if (resPwd) {
            console.log(222)
          } else {
            Toast('密码格式错误');
          }
        } else {
          Toast('验证码错误或为空');
        }
      } else {
        Toast('您输入的手机号有误或为空！');
      }
      if (this.code == this.identifyCode && resPwd == true && resTel == true) {
        console.log("成功");
        
        this.axios.get("http://localhost:3000/login", {
            params: {
              tel: this.name,
              pwd: this.pwd,
            },
          }).then(function (res) {
            console.log(res);
            Toast("注册成功，请去登录");
          }).catch(function (err) {
            console.log(err);
            Toast("请检查错误");
          });
      } else {
        console.log("失败");
      }
    },
  }
};
</script>

<style scoped>
#login {
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
  /* justify-content: space-between; */
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
.weui-cell__hd {
  width: 20%;
}
.weui-cell__bd {
  width: 55%;
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
  position: absolute;
  right: 0;
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
.weui-cells__tips {
  padding: 0 0.6em 0 1.3em;
}
.weui-cells__tips a {
  color: #586c94;
}
</style>