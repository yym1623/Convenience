<script>
import axios from 'axios'
export default {
  data() {
    return {
      loginData: false,
      loginInfo: localStorage.getItem('name')
    }
  },
  methods: {
    logOut() {
      axios({
        url : 'http://54.180.193.83:8081/user/logout/',
        method: 'POST',
        data : {
          refresh : localStorage.getItem('refresh')
        }
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })

      window.localStorage.removeItem('name');
      window.localStorage.removeItem('id');
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('access');
      window.localStorage.removeItem('refresh');
      window.localStorage.removeItem('search__data');
      window.localStorage.removeItem('oneClick');
      window.localStorage.removeItem('twoClick');
      window.localStorage.removeItem('eventClick');
      window.localStorage.removeItem('totalClick');
      this.$router.push('/')
      setTimeout(() => {
        this.$router.go()
      },10)
    },
    loginCheck() {
      if(!localStorage.getItem('name')) {
        alert("로그인 후 사용할 수 있는 서비스 입니다.")
        this.$router.push('/login')
      } 
    },
    searchData() {
      localStorage.setItem('search__data', "")
    }
  },
  computed: {
    loginData() {
      if(localStorage.getItem('name')) {
        return this.loginData = true
      } else {
        return this.loginData = false
      }
    },
  }
}
</script>

<template>
  <div class="header">
    <div class="inner">
      <div class="login">
        <RouterLink to="/login/loginInfo" @click="searchData()" class="login__item" v-if="loginData">{{ loginInfo }}님</RouterLink>
        <RouterLink to="/login" @click="searchData()" class="login__item" v-else>로그인</RouterLink>
        <div @click="logOut" class="login__item" v-if="loginData">로그아웃</div>
        <RouterLink to="/signUp" @click="searchData()" class="login__item" v-else>회원가입</RouterLink>
        <RouterLink to="/servicecenter" @click="searchData()" class="login__item">고객센터</RouterLink>
      </div>

      <div class="menu">
        <RouterLink to="/" class="menu__name">BestChoice</RouterLink>
        <div class="__item">
          <RouterLink to="/bestChoise" @click="searchData()" class="menu__item">꿀조합</RouterLink>
          <RouterLink to="/bestRanking" @click="searchData()" class="menu__item">조합랭킹</RouterLink>
          <RouterLink to="/convenienceDataFind" @click="searchData()" class="menu__item">조합상품</RouterLink>
          <RouterLink to="/myChoise" @click="searchData()" class="menu__item">조합만들기</RouterLink>
          <RouterLink to="/board" @click="searchData()" class="menu__item">자유게시판</RouterLink>
          <RouterLink to="/convenience/cu" @click="searchData()" class="menu__item">이벤트상품</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}
.header {
    position: fixed;
    z-index: 200;
    width: 100%;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #dddddd;
  .inner {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .login {
      display: flex;
      justify-content: end;
      .login__item {
        cursor: pointer;
        padding: 10px 0 10px 20px;
        &:hover {
          font-weight: bold;
        }
      }
    }
    .menu {
      display: flex;
      height: 80px;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .menu__name {
        font-family: 'Bungee Inline', cursive;
        cursor: pointer;
        font-size: 40px;
        // text-align: center;
      }
      .__item {
        display: flex;
        .menu__item {
          font-size: 19px;
          cursor: pointer;
          margin-left: 20px;
          &:hover {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>