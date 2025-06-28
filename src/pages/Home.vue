<script>
</script>

<template>
    <main>
        <div class="text-top">
            Vídeos novos toda <b>quinta</b> as  <b>20h</b>
        </div>
        <a href="https:\\youtube.com/wdevoficial" target="_blank">
            <img id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="Increva-se">
        </a>
        <div class="text-bottom">
            youtube.com/wdevoficial
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}
.text-top {
    color: var(--color-text-light);
    font-size: 22px;
}

.text-bottom{
    color: var(--color-text-light);
    font-size: 18px;
    margin-top: 20px;
} 
#subscribe{
    width: 340px;
}

@media (min-width: 700px) {
    #subscribe {
        width: 370px;
    }
}
</style>