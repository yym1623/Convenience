<script>
import axios from 'axios'
export default {
  data() {
    return {
      email : ""
    }
  },  
  methods: {
    email_check() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/user/ReEmail/",
        data: {
          email : this.email
        }
      }).then((res) => {
        console.log(res)
        alert(res.data.email)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
}
</script>


<template>
  <div class="login">
    <div class="inner">
    <div class="login__name">이메일 인증</div>
    <div class="login__main">
      <div class="login__inner">
        <div class="login__id">
          <div class="id__name">이메일</div>
          <input id="email" v-model="email" type="email" autocomplete="off" placeholder="이메일을 입력해주세요">
        </div>
        <div @click="email_check()" @keydown.enter.prevent="email_check()" class="loginBtn">
          <div class="btn">발송하기</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .login {
    position: relative;
    top: 125px;
    height: 500px;
    padding: 0 0 80px 0;
    .inner {
      width: 1100px;
      margin: auto;
      position: relative;
      .login__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .login__main {
        margin: auto;
        width: 700px;
        height: 230px;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 7px 25px #00000014;
        background: #fff;
        .login__inner {
          width: 400px;
          position: relative;
          margin: auto;
          .login__id {
            margin-top: 50px;
            .id__name {
              text-align: start;
              margin-left: 10px;
              font-size: 13px;
              font-weight: bold;
            }
            > input {
              padding: 10px;
              width: 400px;
              height: 40px;
              outline: none;
              border: none;
              border-bottom: 1px solid #dddddd;
              &:focus {
                border-bottom: 2px solid #424242;
              }
            }
          }
          .login__pw {
            margin-top: 40px;
            .pw__name {
              text-align: start;
              margin-left: 10px;
              font-size: 13px;
              font-weight: bold;
            }
            > input {
              padding: 10px;
              width: 400px;
              height: 40px;
              outline: none;
              border: none;
              border-bottom: 1px solid #dddddd;
              &:focus {
                border-bottom: 2px solid #424242;
              }
            }
          }
          .loginBtn {
            margin-top: 20px;
            .btn {
              background: #3b4890;
              border-color: #29367c;
              border-radius: 10px;
              color: #fff;
              width: 400px;
              padding: 10px;
              &:hover {
                opacity: .8s;
              }
            }
          }
          .loginError {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #424242;
            .singIn {
              cursor: pointer;
            }
            .singUp {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>