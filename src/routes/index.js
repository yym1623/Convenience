import { createRouter, createWebHashHistory } from 'vue-router'

// components
import Home from './Home.vue'
import Bestchoise from './Bestchoise.vue'
import BestchoiseFind from './BestchoiseFind.vue'
import Bestranking from './Bestranking.vue'
import Board from './Board.vue'
import BoardWrite from './BoardWrite.vue'
import BoardFind from './BoardFind.vue'
import Mychoise from './Mychoise.vue'

import Login from './Login.vue'
import LoginInfo from './LoginInfo.vue'
import LoginInfoChange from './LoginInfoChange.vue'
import LoginMyMixData from './LoginMyMixData.vue'
import LoginMyBestMixData from './LoginMyBestMixData.vue'
import LoginMyBoard from './LoginMyBoard.vue'
import LoginMyMixDataComment from './LoginMyMixDataComment.vue'
import LoginMyBoardComment from './LoginMyBoardComment.vue'


import PwChange from './PwChange.vue'
import EmailCheck from './EmailCheck.vue'
import SignUp from './SignUp.vue'
import NotPage from './NotPage.vue'

import ServiceCenter from './ServiceCenter.vue'
import UserInfo from './UserInfo.vue'
import LoginFind from './LoginFind.vue'
import Convenience from './Convenience.vue'
import ConvenienceFind from './ConvenienceFind.vue'
import ConvenienceDataFind from './ConvenienceDataFind.vue'

import Cu from './Cu.vue'
import Gs from './Gs.vue'
import Ministop from './Ministop.vue'

export default createRouter({

  // 라우터 이동시 스크롤 최상단으로 이동
  scrollBehavior() {
    return { top : 0 }
  },

  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/bestChoise',
      name: 'bestChoise',
      component: Bestchoise
    },
    {
      path: '/bestChoise/bestChoiseFind/:id?',
      name: 'bestChoiseFind',
      component: BestchoiseFind
    },
    {
      path: '/bestRanking',
      component: Bestranking
    },
    {
      path: '/myChoise/:id?',
      name : 'myChoise',
      component: Mychoise
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/board',
      component: Board
    },
    {
      path: '/board/boardWrite/:id?',
      name : 'BoardWrite',
      component: BoardWrite
    },
    {
      path: '/board/boardFind/:id?/:default_id?',
      name : 'BoardFind',
      component : BoardFind
    },
    {
      path: '/login/loginInfo',
      component: LoginInfo
    },
    {
      path: '/login/loginInfo/loginInfoChange',
      component: LoginInfoChange  
    },
    {
      path: '/login/loginInfo/loginMyMixData',
      component: LoginMyMixData
    },
    {
      path: '/login/loginInfo/loginMyBestMixData',
      component: LoginMyBestMixData
    },
    {
      path: '/login/loginInfo/loginMyBoard',
      component: LoginMyBoard
    },
    {
      path: '/login/loginInfo/loginMyMixDataComment',
      component: LoginMyMixDataComment  
    },
    {
      path: '/login/loginInfo/loginMyBoardComment',
      component: LoginMyBoardComment 
    },
    {
      path: '/login/emailCheck',
      component: EmailCheck
    },
    {
      path: '/signUp',
      component: SignUp
    },
    {
      path: '/notpage',
      component: NotPage
    },
    {
      path: '/servicecenter',
      component: ServiceCenter
    },
    {
      path: '/signUp/userInfo',
      component: UserInfo
    },
    {
      path: '/login/loginFind',
      component: LoginFind
    },
    {
      path: '/login/loginFind/pwChange/:id/:localId',
      component: PwChange
    },
    {
      path: '/convenience',
      component: Convenience
    },
    {
      path: '/convenienceDataFind',
      component: ConvenienceDataFind
    },
    {
      path: '/convenience/convenienceFind/:contentId?/:contentType/:contentPrice/:contentImg',
      name: "convenienceFind",
      component: ConvenienceFind
    },
    {
      path: '/convenience/cu',
      name: "cu",
      component: Cu
    },
    {
      path: '/convenience/gs',
      name: "gs",
      component: Gs
    },
    {
      path: '/convenience/ministop',
      name: "ministop",
      component: Ministop
    },
    {
      path: '/convenience/cu/convenienceFind/:contentId?',
      name: "cuConvenienceFind",
      component: ConvenienceFind
    },
    {
      path: '/convenience/gs/convenienceFind/:contentId?',
      name: "gsConvenienceFind",
      component: ConvenienceFind
    },
    {
      path: '/convenience/ministop/convenienceFind/:contentId?',
      name: "ministopConvenienceFind",
      component: ConvenienceFind
    },
  ]
})