<script lang="ts">
import {defineComponent} from "vue";
import Footer from "@/components/footer.vue";
import Cryptoexch from "@/components/cryptoexch.vue";
import Homema from "@/components/market/homema.vue";
import auct from "@/components/market/auct.vue"
import collection from "@/components/market/collection.vue";
import creator from "@/components/market/creator.vue";

export default defineComponent({
    components: {
        Homema,
        Cryptoexch,
        Footer,
        auct,
        collection,
        creator,
    }
})
</script>

<template>
    <main>
        <section class="homema">
            <homema/>
        </section>
        <section class="cryptoechange">
            <cryptoexch/>
        </section>
        <section class="auction">
            <auct/>
        </section>
        <section class="collection">
            <collection/>
        </section>
        <section class="creator">
            <creator/>
        </section>
    </main>
    <footer class="footer">
        <Footer/>
    </footer>
</template>