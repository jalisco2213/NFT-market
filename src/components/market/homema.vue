<template>
  <div class="container">
    <div class="discover_container">
      <div class="discover__title">
        <div class="discover__title_left">
          <h1>
            Create <br />
            Sell <br />Collect
          </h1>
        </div>
        <div class="discover__title_right">
          <h1>
            Your Own <br />
            Creative <br />
            NFT
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.discover_container {
  background-image: url(/assets/market/avabc.png);
  background-repeat: no-repeat;
  background-size: 800px 800px;
  background-position: center;
  height: 550px;
}

.discover__title {
  display: flex;
  justify-content: space-between;
  user-select: none;
  margin: 0 75px;

  h1 {
    font-size: 45px;
    color: #fff;
    font-family: 'Rubik Wet Paint', sans-serif;
    margin-top: 150px;
  }

  span {
    color: white;
    text-shadow: 10px 10px 7px #c000a3,
      0 10px 7px #c000a3,
      -10px 0 7px #c000a3,
      0 -10px 7px #c000a3;
  }
}

.discover__title_left,
.discover__title_right {
  width: 350px;
  height: 180px;
}

.discover__title_right {
  h1 {
    text-align: end;
  }
}

@media (max-width: 820px) {
  .discover_container {
    height: 400px;
    background-size: 500px 500px;
  }

  .discover__title {
    margin: 0 20px;

    h1 {
      font-size: 30px;
    }
  }
}

@media (max-width: 550px) {
  .discover_container {
    height: 300px;
    background-size: 300px 300px;
  }

  .discover__title {
    margin: 0 20px;

    h1 {
      font-size: 20px;
      margin-top: 200px;
    }
  }
}
</style>