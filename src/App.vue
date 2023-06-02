<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="header__container">
        <div class="header__nav">
          <div class="header__burger">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="30"
                 height="30" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 6l16 0"/>
              <path d="M4 12l16 0"/>
              <path d="M4 18l16 0"/>
            </svg>
          </div>
          <div class="nav">
            <nav>
              <ul>
                <li>
                  <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                  <RouterLink to="/market">Marketplace</RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="header__right">
          <div class="login">
            <div class="header__login">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="30"
                   height="30" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
              </svg>
            </div>
            <div class="pop__up">
              <div class="pop__up_container">
                <div class="pop__up_body">
                  <form class="pop__up_body_form">
                    <h2 class="pop__up_body_form_title">Login</h2>
                    <div class="pop__up_body_form_material">
                      <input type="text" name="username" id="username" placeholder="Username" autocomplete="off"
                             class="pop__up_body_form_input" required>
                      <label for="username"></label>
                    </div>
                    <div class="pop__up_body_form_material">
                      <input type="password" name="password" id="password" placeholder="Password"
                             autocomplete="off" class="pop__up_body_form_input" required>
                      <label for="password"></label>
                    </div>
                    <button type="submit" class="pop__up_body_form_btn">SIGN
                      IN
                    </button>
                    <p class="pop__up_body_form_foot">Not a member? <a href="#">Sign up now</a></p>
                  </form>
                  <div class="pop__up_close" id="close_pop_up">
                    &#10006
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal__wallet">
            <div class="wallet__img">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="30"
                   height="30" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path
                    d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"/>
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"/>
              </svg>
            </div>
            <div class="wallet__info">
              <div class="wallet__container">
                <div class="wallet__body">
                  <h2>CONNECT YOUR WALLET</h2>
                  <div class="wallet__crypto">
                    <div class="wallet__crypto_info">
                      <img src="../public/assets/hwallet/meta.svg" alt="" class="wallet__crypto_info_img">
                    </div>
                    <div>
                      <span>MetaMask</span>
                    </div>
                  </div>
                  <div class="wallet__crypto">
                    <div class="wallet__crypto_info">
                      <img src="../public/assets/hwallet/phantom.svg" alt="" class="wallet__crypto_info_img">
                    </div>
                    <div>
                      <span>Phantom</span>
                    </div>
                  </div>
                  <div class="wallet__crypto">
                    <div class="wallet__crypto_info">
                      <img src="../public/assets/hwallet/trust-alternative.webp" alt=""
                           class="wallet__crypto_info_img">
                    </div>
                    <div>
                      <span>Trust</span>
                    </div>
                  </div>
                  <div class="wallet__crypto">
                    <div class="wallet__crypto_info">
                      <img src="../public/assets/hwallet/torus-alternative.webp" alt=""
                           class="wallet__crypto_info_img">
                    </div>
                    <div>
                      <span>Torus</span>
                    </div>
                  </div>
                  <p class="pop__up_body_form_foot">Not a member?
                    <a href="#">Sign up now</a>
                  </p>
                  <div class="pop__up_close" id="close_modal">
                    &#10006
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <router-view/>
</template>