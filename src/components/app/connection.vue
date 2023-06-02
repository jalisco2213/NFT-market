<template>
  <div class="container">
    <div class="connection_container">
      <h2>never lose us</h2>
      <p>Sign up your Email Adress and never miss anything. <br> We will update you once per week!</p>
      <div class="connection_send">
        <div class="connection_send__input">
          <input type="email" name="email" placeholder="E-mail adress">
        </div>
        <div class="connection_send__btn">
          <button class="btn">
            <span>send</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.connection {
  padding-bottom: 100px;
  padding-top: 100px;
}

.connection_container {
  text-align: center;
  margin: 0 75px;
  height: 400px;
  background: linear-gradient(139deg, rgba(255, 255, 255, 0.044) -7%, rgba(143, 143, 143, 0.021) 112%);
  backdrop-filter: blur(9px);
  border: 1px solid #BD24E6;
  border-radius: 2px;

  & h2 {
    text-transform: uppercase;
    font-size: 38px;
    margin-top: 100px;
    color: #fff;
  }

  & p {
    color: #fff;
    opacity: 0.6;
    font-size: 20px;
    font-weight: 100;
    margin-top: 20px;
  }
}

.connection_send {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & input {
    height: 60px;
    width: 300px;
    color: #fff;
    margin-right: 20px;
    padding: 16px 30px;
    border: 1px solid #BD24E6;
    font-size: 16px;
    opacity: 0.7;
    background: linear-gradient(139deg, rgba(255, 255, 255, 0.044) -6.39%, rgba(143, 143, 143, 0.021) 112.17%);
  }
}

@media (max-width: 655px) {
  .connection_container {
    height: 300px;

    & h2 {
      margin-top: 15px;
    }
  }

  .connection_send {
    display: block;

    & input {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 453px) {
  .connection_container {
    margin: 0 10px;
    height: 300px;

    & h2 {
      font-size: 30px;
      margin-top: 15px;
    }

    & p {
      font-size: 15px;
    }
  }

  .connection_send {
    display: block;

    & input {
      width: 250px;
      margin-right: 0;
    }
  }
}
</style>