<script setup lang="ts">
import Apphome from "@/components/app/apphome.vue";
import Cryptoexch from "@/components/cryptoexch.vue";
import About from "@/components/app/about.vue";
import Connection from "@/components/app/connection.vue";
import Footer from "@/components/footer.vue";
import cryptocompanies from "@/components/app/cryptocompanies.vue";
</script>

<template>
  <main>
    <section class="crosschain">
      <apphome/>
    </section>
    <section class="cryptoechange">
      <cryptoexch/>
    </section>
    <section class="about">
      <about/>
    </section>
    <section class="cryptocomp">
      <cryptocompanies/>
    </section>
    <section class="connection">
      <connection/>
    </section>
  </main>
  <footer class="footer">
    <Footer/>
  </footer>
</template>