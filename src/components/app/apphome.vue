<template>
  <div class="container">
    <div class="home_container">
      <div class="home-title">
        <div class="home-title_left">
          <h1>The <br> <span> Cross-Chain</span>
            <br>
            NFT <br> Protocol
          </h1>
        </div>
        <div class="home-title_right">
          <h1>Working <br>With <span>Real<br></span>
            World <br>Companies
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home_container {
  background-image: url(/assets/app/crossti.png);
  background-repeat: no-repeat;
  background-size: 700px 700px;
  background-position: center 0;
  height: 550px;
}

.home-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 75px;
}

.home-title_left,
.home-title_right {
  font-size: 30px;
  color: #fff;
  font-family: 'Rubik Wet Paint', sans-serif;
  margin-top: 150px;
  cursor: default;
  user-select: none;

  & span {
    text-shadow: 10px 10px 7px #c000a3,
      0 10px 7px #c000a3,
      -10px 0 7px #c000a3,
      0 -10px 7px #c000a3;
  }
}

.home-title_right {
  text-align: end;
}

@media(max-width: 885px) {
  h1 {
    font-size: 23px;
    margin-top: 290px;
    text-shadow: 10px 10px 7px #c000a3,
      0 10px 7px #c000a3,
      -10px 0 7px #c000a3,
      0 -10px 7px #c000a3;
  }
}

@media (max-width: 580px) {
  h1 {
    font-size: 17px;
    margin-top: 290px;
  }
}
</style>