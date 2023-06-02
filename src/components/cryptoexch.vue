<script lang="ts">
export default {
  data() {
    return {
      cryptoimg: [
        {
          id: 'ci0',
          img: '/assets/ui/UIcrypto/binance.svg',
        },
        {
          id: 'ci1',
          img: '/assets/ui/UIcrypto/blockchain.svg',
        },
        {
          id: 'ci2',
          img: '/assets/ui/UIcrypto/etherium.svg',
        },
        {
          id: 'ci3',
          img: '/assets/ui/UIcrypto/opensea.svg',
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="container_cryptoexch">
      <div class="listCrypto" v-for="crypto of cryptoimg">
        <img :src="crypto.img" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container_cryptoexch {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.listCrypto {
  & img {
    width: 200px;
    height: 80px;
  }
}

@media (max-width: 550px) {
  .listCrypto {
    & img {
      width: 150px;
      height: 40px;
    }
  }
}
</style>