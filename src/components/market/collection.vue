<script lang="ts">
export default {
    data() {
        return {
            coll: [
                {
                    id: "col0",
                    title: "CONNECT YOUR WALLET",
                    subtitle: "Connect your Wallet, use the pink button in the left of the Header. Now you can use any feature.",
                    img: "/assets/market/collection/wallet-money.svg",
                },
                {
                    id: "col1",
                    title: "CREATE ARTWORK",
                    subtitle: "Create your NFT collection. Add social links, profile and banner image. Set a secondary sales fee for your artwork.",
                    img: "/assets/market/collection/art.svg",
                },
                {
                    id: "col2",
                    title: "UPLOAD YOUR NFTS",
                    subtitle: "Upload. Add a title&description. Costumize your NFT’s, properties, stats and unlockable content.",
                    img: "/assets/market/collection/gallery.svg",
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class='colTittle'>HOW TO BECOME <br> MONKEY NFT CREATOR</h2>
        <div class="collect">
            <div class="listCollection" v-for="collect of coll">
                <div class="collImg">
                    <img :src='collect.img' alt="">
                </div>
                <p class="collTittle">{{ collect.title }}</p>
                <p class="collSubtittile">{{ collect.subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.colTittle {
    margin-top: 100px;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFF;
}

.collect {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.listCollection {
    margin-bottom: 10px;
    text-align: center;
    width: 320px;
    height: 320px;
    background: linear-gradient(138.84deg, rgba(255, 255, 255, 0.044) -6.39%, rgba(143, 143, 143, 0.021) 112.17%);
    border: 2px solid;
    border-image: linear-gradient(30deg, #E025CE, #4AED52, #BD24E6) 1;
    backdrop-filter: blur(12.5px);
    border-radius: 10px;
    box-shadow: 0 0 30px 20px rgba(224, 37, 206, 0.3);
}

.collImg {
    margin: 30px auto;
    width: 110px;
    height: 110px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%);
    opacity: 0.8;
    backdrop-filter: blur(27.2148px);
    border-radius: 6px;
    margin-bottom: 20px;
    border: 2px solid;
    border-image: linear-gradient(135deg, #E025CE, #4AED52, #BD24E6) 1;

    & img {
        width: 80px;
        height: 80px;
        margin-top: 13px;
    }
}

.collTittle {
    color: #eee;
    margin-bottom: 5px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    text-align: center;
}

.collSubtittile {
    color: #eee;
    padding: 0 20px;
    font-weight: 100;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    opacity: 0.7;
}
</style>