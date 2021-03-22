<template>
    <div v-if="!loadingDetail" class="cardShadow" @click="exitDetail">
        <div class="padding">
            <div class="detail">
                <h3>{{ loadedGame.name }}</h3>
                <div class="stats">
                    <div class="rating">
                        <p>Rating: {{ loadedGame.rating }}</p>
                        <div class="ratingStars">
                            <img
                                v-for="star in getStars"
                                :key="star.id"
                                :src="star"
                                alt="star"
                            />
                        </div>
                    </div>
                    <div class="info">
                        <h3>Platforms</h3>

                        <div class="platforms">
                            <div
                                :key="platform.id"
                                v-for="platform in platforms"
                            >
                                <img
                                    :src="showIcon(platform)"
                                    :alt="platform"
                                    :title="platform"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="media">
                    <img :src="image" :alt="loadedGame.name" />
                </div>
                <div class="description">
                    <p>{{ loadedGame.description_raw }}</p>
                </div>
                <div class="gallery">
                    <h2>screenshots</h2>
                </div>
            </div>
            <div class="space"></div>
        </div>
    </div>
</template>

<script>
import { resizeImage } from "../../utils";
import playstation from "../../img/playstation.svg";
import steam from "../../img/steam.svg";
import xbox from "../../img/xbox.svg";
import nintendo from "../../img/nintendo.svg";
import apple from "../../img/apple.svg";
import gamepad from "../../img/gamepad.svg";
import starFull from "../../img/star-full.png";
import starEmpty from "../../img/star-empty.png";

export default {
    name: "GameDetail",

    methods: {
        exitDetail(e) {
            const elem = e.target;
            if (elem.className === "cardShadow") {
                document.body.style.overflow = "visible";
                this.$router.push("/");
            }
        },
        showIcon(platform) {
            switch (platform) {
                case "PlayStation 4":
                    return playstation;
                case "PlayStation 5":
                    return playstation;
                case "Xbox Series S/X":
                    return xbox;
                case "Xbox S":
                    return xbox;
                case "Xbox One":
                    return xbox;
                case "PC":
                    return steam;
                case "Nintendo Switch":
                    return nintendo;
                case "iOS":
                    return apple;
                default:
                    return gamepad;
            }
        },
    },
    mounted() {
        this.$store.dispatch("loadDetail", this.$route.params.id);
    },
    computed: {
        image() {
            return resizeImage(this.loadedGame.background_image, 1280);
        },
        getStars() {
            const stars = [];
            const rating = Math.round(this.loadedGame.rating);
            for (let i = 0; i < 5; i++) {
                if (i < rating) {
                    stars.push(starFull);
                } else {
                    stars.push(starEmpty);
                }
            }
            return stars;
        },
        loadingDetail() {
            return this.$store.getters.getLoadingStatusDetail;
        },
        loadedGame() {
            return this.$store.getters.getCurrentGame;
        },
        platforms() {
            const curGame = this.loadedGame;
            return (
                curGame.platforms &&
                curGame.platforms.map((data) => `${data.platform.name}`)
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.space {
    display: table;
    clear: both;
    height: 50px;
    width: 100%;
}
.cardShadow {
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    top: 0;
    left: 0;

    &::--webkit-scrollbar {
        width: 0.5rem;
    }
    &::--webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::--webkit-scrollbar-track {
        background-color: white;
    }

    .detail {
        width: 90%;
        left: 5%;
        border-radius: 1rem;
        padding: 2rem 5rem;
        background: white;
        position: absolute;
        color: black;
        margin: 2rem 0;

        @media screen and (min-width: 960px) {
            width: 75%;
            left: 12.5%;
        }

        @media screen and (min-width: 1280px) {
            width: 50%;
            left: 25%;
        }

        > h3 {
            font-size: 3rem;
        }

        .stats {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .info {
                text-align: center;

                .platforms {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;

                    img {
                        max-width: 2rem;
                        margin-left: 3rem;
                    }
                }
            }
        }
        .ratingStars {
            display: flex;
        }

        img {
            width: 100%;
        }

        .media {
            margin-top: 5rem;

            img {
                width: 100%;
                height: 45vh;
                object-fit: cover;
            }
        }
        .description {
            margin: 5rem 0rem;
        }
    }
}
</style>
