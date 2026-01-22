<script lang="ts">
    import '$lib/styles/typography.css';
    import '$lib/styles/glassy-container.css'
    import { ArrowRight } from '@solar-icons/svelte/Linear'
    
    export let post;
</script>

<div class="GlassContainer">
  <div class="GlassContent">
    <article class="blog-card">
        <h3 class="blog-card-title">{post.title}</h3>
        <p class="blog-card-text">{post.description}</p>

        <div class="footer">
            <div class="tag">
                <p class="tags-label">{post.date}</p>
            </div>
            <div class="icon">
                <ArrowRight size={24} />
            </div>
        </div>
    </article>
  </div>
  <div class="GlassMaterial">
    <div class="GlassEdgeReflection"></div>
    <div class="GlassEmbossReflection"></div>
    <div class="GlassRefraction"></div>
    <div class="GlassBlur"></div>
    <div class="BlendLayers"></div>
    <div class="BlendEdge"></div>
    <div class="Highlight"></div>
  </div>
</div>

<style>
    .blog-card {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        width: 300px;
        cursor: pointer;
        isolation: isolate;

        &:hover {
            &::before {
                opacity: 1;
            }
            .icon {
                transform: translateX(0px);
                opacity: 1;
            }
        }

        &::before {
            content: '';
            position: absolute;

            left: -40%;
            right: -40%;
            bottom: -40%;
            top: 70%; /* 👈 começa no meio */

            background: linear-gradient(
                120deg,
                var(--detail-dark-red) 0%,
                var(--detail-dark-red) 25%,

                var(--detail-red) 30%,

                var(--detail-yellow) 50%,

                var(--detail-blue) 60%,
                var(--detail-blue) 100%
            );

            mask-image: linear-gradient(
                to top,
                black 0%,
                black 40%,
                transparent 100%
            );

            opacity: 0;
            filter: blur(60px);
            z-index: -1;

            transition: opacity 0.4s ease;
            animation: gradientMove 6s linear infinite;
        }
    }

    .icon {
        transform: translateX(-5px);
        transition: all 0.2s ease-in-out;
        opacity: 0;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }

    .tag {
        padding: 5px;
        border-radius: 8px;
        border: 1px solid var(--text);
        width: fit-content;
    }

    @keyframes gradientMove {
        0% {
            transform: translate(0%, 0%);
        }
        50% {
            transform: translate(20%, -20%);
        }
        100% {
            transform: translate(0%, 0%);
        }
    }
</style>