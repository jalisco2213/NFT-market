<template>
  <div class="container">
    <div class="container_cryptocompanies">
      <h2>We work with the world's <br> leading crypto exchange companies</h2>
      <div>
        <img src="/assets/app/UIWork/bitcoin.svg" alt="">
        <img src="/assets/app/UIWork/covalent.svg" alt="">
        <img src="/assets/app/UIWork/eth.svg" alt="">
        <img src="/assets/app/UIWork/metamast.svg" alt="">
        <img src="/assets/app/UIWork/okex.svg" alt="">
        <img src="/assets/app/UIWork/solana.svg" alt="">
        <img src="/assets/app/UIWork/terra.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container_cryptocompanies {
  margin: 100px;

  & h2 {
    text-transform: uppercase;
    font-size: 38px;
    margin-top: 100px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }

  & div {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    & img {
      box-shadow: 0 0 500px 10px rgba(224, 37, 206, 0.3);
      margin-bottom: 30px;
    }

    & img:not(:last-child) {
      margin-right: 40px;
    }
  }
}
</style>