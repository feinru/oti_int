<script>
    const images = [
        "@/static/collaborate.png",
        "@/static/collaborate.png",
        "@/static/collaborate.png",
        "@/static/collaborate.png"
    ];
</script>

<style>
    .scroll-container {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        gap: 1rem;
        padding: 1rem;
    }

    .image-card {
        flex: 0 0 auto;
        width: 200px;
        height: 150px;
        position: relative;
        border-radius: 15px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(220, 97, 0, 0.5) 100%);
    }

    .image-card img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        object-fit: cover;
    }
</style>

<div class="scroll-container">
    {#each images as image, index}
        <div class="image-card">
            <img src={image} alt={`Collaborate ${index + 1}`} />
        </div>
    {/each}
</div>
