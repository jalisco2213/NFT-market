<script lang="ts">
export default {
    data() {
        return {
            creatorList: [
                {
                    id: 'cl0',
                    face: '/assets/market/creator__photo.png',
                    name: 'Elizabeth',
                    donate: '3.41 ETH',
                },
                {
                    id: 'cl1',
                    face: '/assets/market/creator__photo.png',
                    name: 'Kathrine',
                    donate: '3.15 ETH',
                },
                {
                    id: 'cl2',
                    face: '/assets/market/creator__photo.png',
                    name: 'Michael',
                    donate: '2.92 ETH',
                },
                {
                    id: 'cl3',
                    face: '/assets/market/creator__photo.png',
                    name: 'Mary',
                    donate: '2.32 ETH',
                },
                {
                    id: 'cl4',
                    face: '/assets/market/creator__photo.png',
                    name: 'Patricia',
                    donate: '2.13 ETH',
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="creator-container">
            <div class="titleAuthor">
                <h2>Our creator</h2>
                <p>The largest and unique Super rare NFT marketplace For crypto-collectibles</p>
            </div>
            <div class="creatorList">
                <div class="creatorCard" v-for="creator of creatorList">
                    <div class="creatorCard_left">
                        <div class="creatorCard_left__img">
                            <img :src="creator.face" alt="">
                        </div>
                        <div class="creatorCard_left__info">
                            <p>{{ creator.name }}</p>
                            <img src="/assets/market/eth.svg" alt="">
                            <span>{{ creator.donate }}</span>
                        </div>
                    </div>
                    <div class="creatorCard_right">
                        <span>Follow</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.creator-container {
    margin-top: 100px;
    padding-bottom: 50px;
}

.titleAuthor {
    & h2 {
        font-weight: 700;
        font-size: 38px;
        line-height: 48px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }

    & p {
        padding-top: 10px;
        max-width: 350px;
        font-weight: 100;
        font-size: 20px;
        line-height: 25px;
        margin: 0 auto;
        text-align: center;
        color: #FFFFFF;
        opacity: .7;
    }
}

.creatorList {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.creatorCard {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(138.84deg, rgba(255, 255, 255, 0.044) -6.39%, rgba(143, 143, 143, 0.021) 112.17%);
    backdrop-filter: blur(12.5px);
    border-radius: 10px;
    width: 350px;
    height: 70px;
    border-right: 30px solid rgba(224, 37, 206, 0.3019607843);
    box-shadow: 0 0 40px 5px rgba(224, 37, 206, 0.3019607843);

    &:not(:last-child) {
        margin-right: 30px;
    }

    &_left {
        display: flex;
        align-items: center;

        & img {
            margin-left: 10px;
            width: 50px;
            height: 50px;
        }

        & p {
            cursor: default;
            font-weight: 300;
            margin-left: 3px;
            color: #eee;
        }

        &__info {
            & span {
                cursor: default;
                font-weight: 200;
                color: #eee;
            }

            & img {
                margin-left: -1px;
                width: 16px;
                height: 16px;
            }
        }
    }

    &_right {
        font-weight: 200;
        color: #eee;
        cursor: pointer;
        margin-right: 10px;
        transition: .2s ease-in-out;

        &:hover {
            opacity: 0.7;
            transition: .2s ease-in-out;
        }
    }
}
</style>