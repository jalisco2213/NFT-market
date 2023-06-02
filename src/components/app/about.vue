<template>
  <div class="container">
    <div class="about_container">
      <div class="about_pic">
        <img src="/assets/app/about.jpg" alt="">
      </div>
      <div class="about_info">
        <h2>
          The First Cross- Chain NFT Protocol Working With Real World Companies
        </h2>
        <p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci beatae, dolorum eligendi, iure magni
            maiores modi mollitia natus nesciunt nihil, nulla obcaecati perferendis quibusdam quisquam repellat sequi.
            Asperiores, repellat.</span><span>Accusantium assumenda delectus, doloremque hic labore obcaecati ratione.
            Accusamus aspernatur at commodi dignissimos, eligendi est ex in nam nemo nisi porro quod rerum totam ullam
            vel. Architecto fuga quidem sit!</span><span>Ab delectus libero provident reprehenderit sint. Error explicabo
            possimus praesentium quae rerum saepe! Adipisci cupiditate enim esse facilis incidunt labore laborum sapiente
            voluptate. Adipisci atque consequatur cum distinctio itaque, ratione.</span>
        </p>
        <div class="hover_btn btn__design">
          <button class="btn">
            <span>HOVER ME</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about_container {
  display: flex;
  justify-content: space-evenly;
  margin: 100px 100px 0 100px;
}

.about_pic {
  width: 400px;
  height: 400px;

  img {
    border: 2px solid;
    border-image: linear-gradient(30deg, #E025CE, #4AED52, #BD24E6) 1;
    box-shadow: 0 0 500px 30px rgba(224, 37, 206, 0.3);
    width: 400px;
    height: 400px;
  }
}

.about_info {
  margin-left: 20px;
  color: #eee;
  width: 600px;
  margin-top: 45px;

  & h2 {
    font-size: 30px;
  }

  & p {
    margin-top: 20px;
    font-weight: 200;
    opacity: .7;
  }
}

.hover_btn {
  margin-top: 20px;
}

@media (max-width: 1118px) {
  .about_info {
    margin-top: 0;
  }
}

@media (max-width: 920px) {
  .about_container {
    display: block;
  }

  .about_info {
    margin: 0 auto;
    text-align: center;
    width: auto;
  }

  .hover_btn,
  .about_pic {
    margin: 20px auto;
  }
}

@media (max-width: 615px) {
  .about_container {
    margin: 0;
  }

  .about_pic {
    width: 150px;
    height: 150px;

    & img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>