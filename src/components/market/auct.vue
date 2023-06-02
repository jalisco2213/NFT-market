<script lang="ts">
export default {
  data() {
    return {
      catalog: [
        {
          id: "el0",
          name: "Monkey #346",
          title: "Monkey Lucifer",
          img: "/assets/market/monkeynft/original.png",
          price: "3 ETH",
        },
        {
          id: "el1",
          name: "Monkey #323",
          title: "Bayl Univers",
          img: "/assets/market/monkeynft/nft2.avif",
          price: "1.34 ETH",
        },
        {
          id: "el2",
          name: "Monkey #125",
          title: "Almond Monkey",
          img: "/assets/market/monkeynft/nft3.jpg",
          price: "2.1 ETH",
        },
        {
          id: "el3",
          name: "Monkey #124",
          title: "Smoke Monkey",
          img: "/assets/market/monkeynft/ntf5.png",
          price: "2.4 ETH",
        },
        {
          id: "el4",
          name: "Monkey #75",
          title: "Ape Investor",
          img: "/assets/market/monkeynft/nft4.png",
          price: "0.75 ETH",
        },
        {
          id: "el5",
          name: "Monkey #22",
          title: "Monkey Superman",
          img: "/assets/market/monkeynft/51251.avif",
          price: "1.21 ETH",
        },
        {
          id: "el6",
          name: "Monkey #258",
          title: "Monkey Gentelman",
          img: "/assets/market/monkeynft/mon.avif",
          price: "1.52 ETH",
        },
        {
          id: "el7",
          name: "Monkey #225",
          title: "Monkey Spiderman",
          img: "/assets/market/monkeynft/2141.avif",
          price: "1.72 ETH",
        },
        {
          id: "el8",
          name: "Monkey #162",
          title: "Monkey Defender",
          img: "/assets/market/monkeynft/125125.avif",
          price: "1.45 ETH",
        },
        {
          id: "el9",
          name: "Monkey #194",
          title: "Sunshine Monkey",
          img: "/assets/market/monkeynft/mone1.avif",
          price: "3.25 ETH",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <h2 class="auctTitle">
      TRENDING AUCTIONS
    </h2>

    <div class="nftcard">
      <div v-for="nftCard of catalog">
        <div class="nftCardContent">
          <div class="catalog_head">
            <div class="catalog_head__left">
              <img src="/assets/market/monkeynft/ava__nft.png" alt="" />
              <span>{{ nftCard.name }}</span>
            </div>
            <div class="catalog_head__right">
              <img src="/assets/market/monkeynft/hurt__nft.svg" alt="" class="catalog_head__hurt" />
            </div>
          </div>
          <div class="middleCatalog">
            <img :src="nftCard.img" alt="" />
            <span class="middleCatalog_title">{{ nftCard.title }}</span> <br />
            <span class="middleCatalog_subtitle">Limited Edition</span>
          </div>
          <div class="catalogEnd">
            <div class="catalogEnd_left">
              <img src="/assets/market/monkeynft/logo__nft.svg" alt="">
              <span>Price <br> {{ nftCard.price }}</span>
            </div>
            <div class="catalogEnd_right">
              <button>
                <span>Place a bid</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.auctTitle {
  margin: 100px 0 30px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
}

.auction_btn {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 40px;

  &_style {
    border: 1px solid #e025ce;
    outline: none;
    transition: 0.6s ease-in-out;

    & :hover {
      transition: 0.3s ease-in-out;
      background: #bd24e6;
    }
  }

  & button {
    font-weight: 100;
    width: 180px;
    font-size: 15px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    color: #eee;
  }
}

.nftcard {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.nftCardContent {
  margin-bottom: 10px;
  width: 245px;
  height: 400px;
  background: linear-gradient(138.84deg,
      rgba(255, 255, 255, 0.132) -6.39%,
      rgba(255, 255, 255, 0.063) 112.17%);
  backdrop-filter: blur(25.381px);
  border: 2.5px solid;
  border-image: linear-gradient(125deg, #e025ce, #4aed52, #bd24e6) 1;
}

.catalog_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  &__left {
    display: flex;
    align-items: center;
    color: #eee;
    cursor: pointer;

    & img {
      width: 30px;
      height: 30px;
    }

    & span {
      margin-left: 8px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  }

  &__hurt {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}

.middleCatalog {
  width: 220px;
  height: 270px;
  margin: 0 auto;

  & img {
    width: 220px;
    height: 240px;
    border: 2.5px solid;
    border-image: linear-gradient(65deg, #e025ce, #4aed52, #bd24e6) 1;
  }

  &_title {
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    cursor: default;
    line-height: 130%;
  }

  &_subtitle {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    cursor: default;
  }
}

.catalogEnd {
  margin: 20px 10px 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &_left {
    display: flex;
    align-items: center;

    & span {
      color: #eee;
      margin-left: 5px;
      font-weight: 500;
      font-size: 14px;
      cursor: default;
    }
  }

  &_right {
    & button {
      font-size: 14px;
      font-weight: 200;
      color: #fff;
      padding: 10px 20px;
      background: transparent;
      border: 1px solid #E025CE;
      border-radius: 2px;
      outline: none;
    }

    & :hover {
      background: #E025CE;
      transition: .2s all;
    }
  }
}
</style>