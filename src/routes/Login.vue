<script>
import axios from 'axios'
export default {
  methods: {
    data() {
      return {
        email : '',
        password : ''
      }
    },
    loginData() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/accounts/login/",
        data: {
          email : this.email,
          password : this.password,
        }
      }).then((res) => {
        console.log(res)
        localStorage.setItem("name", res.data.user.username);
        localStorage.setItem("id", res.data.user.pk);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("access", res.data.access_token);
        localStorage.setItem("refresh", res.data.refresh_token);
        // 5분 동안 활성화
        this.$router.push('/')
        setTimeout(() => {
          this.$router.go()
        },100)
      }).catch((error) => {
        console.log(error)
        alert("로그인에 실패하셨습니다")
      })
    }
  },
}
</script>


<template>
  <div class="login">
    <div class="inner">
    <div class="login__name">로그인</div>
    <div class="login__main">
      <div class="login__inner">
        <div class="login__id">
          <div class="id__name">이메일</div>
          <input id="email" v-model="email" type="email" autocomplete="off" placeholder="이메일을 입력해주세요">
        </div>
        <div class="login__pw">
          <div class="pw__name">비밀번호</div>
          <input @keydown.enter.prevent="loginData()" v-model="password" id="password" type="password" placeholder="비밀번호를 입력해주세요">
        </div>
        <div @click="loginData()" class="loginBtn">
          <div class="btn">로그인</div>
        </div>
        <div class="loginError">
          <RouterLink to="/login/loginFind" class="singIn">아이디 찾기/ 비밀번호 찾기</RouterLink>
          <RouterLink to="/login/emailCheck" class="singUp">인증메일 재발송</RouterLink>
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
        height: 350px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 7px 25px #00000014;
        background: #fff;
        text-align: center;
        border-radius: 10px;
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
              border: 1px solid #dddddd;
              border-radius: 10px;
              background: #3b4890;
              border-color: #29367c;
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