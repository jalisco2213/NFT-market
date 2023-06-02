<script lang="ts">
export default {
  data() {
    return {
      footlist: [
        {
          id: 'f0',
          title: 'about',
          s0: 'Product',
          s1: 'Resource',
          s2: 'FAQ',
        },
        {
          id: 'f1',
          title: 'company',
          s0: 'Out Team',
          s1: 'Partner with us',
          s2: 'Privacy&Policy',
        },
        {
          id: 'f2',
          title: 'Contacts',
          s0: 'Product',
          s1: '+380 (12) 345 67',
          s2: 'nftmarket@nft.ua',
          img1: '/assets/ui/footer/instagram.svg',
          img2: '/assets/ui/footer/discord.svg',
          img3: '/assets/ui/footer/youtube.svg',
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="footer_container">
      <div class="footer_title">
        The largest NFT Marketplace. Unique and authentic digital creations. Made possible by blockchain technology.
      </div>
      <div class="footer_info">
        <div class="footer_link" v-for="foot of footlist">
          <ul>
            <li>{{ foot.title }}</li>
            <li>{{ foot.s0 }}</li>
            <li>{{ foot.s1 }}</li>
            <li>{{ foot.s2 }}</li>
            <div class="footer_link__img">
              <ul>
                <li><img :src="foot.img1" alt=""></li>
                <li><img :src="foot.img2" alt=""></li>
                <li><img :src="foot.img3" alt=""></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="footer_coopy">
      Created by <span>jalisco</span> | © 2023
    </h2>
  </div>
</template>

<style lang="scss">
.footer_container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.footer_title {
  margin-left: 50px;
  width: 400px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
  opacity: 0.7;
}

.footer_info {
  display: flex;
  justify-content: space-evenly;
}

.footer_link {
  margin-right: 50px;

  & ul {
    & li {
      margin-top: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: .1s ease-in-out;

      &:hover {
        transition: .1s ease-in-out;
        color: #eee;
      }

      &:first-child {
        font-size: 18px;
        color: #eee;
        text-transform: uppercase;
        cursor: default;
      }
    }
  }

  &__img {
    ul {
      display: flex;

      & li {
        margin-right: 20px;
      }
    }
  }
}

.footer_coopy {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  cursor: default;

  & span {
    color: #eee;
  }
}

@media (max-width: 760px) {
  .footer_container {
    display: block;
  }

  .footer_link {
    margin-right: 0;
  }

  .footer_title {
    width: auto;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
  }

  .footer_info {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
}
</style>