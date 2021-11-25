<script>
    import { setFocus } from "$lib/set-focus";
    import { fade } from "svelte/transition";

    let showOverlay = false;
</script>

<h1>svelte action set-focus</h1>
<button on:click={() => showOverlay = true}>Open overlay</button>

{#if showOverlay}
    <div
        transition:fade
        use:setFocus>
        <h2>I am an overlay</h2>
        <button on:click={() => showOverlay = false}>Close overlay</button>
    </div>
{/if}


<style>
    *:focus {
        outline-color: red;
        outline-width: 5px;
    }

    div {
        border: 1px dotted dodgerblue;
    }
</style>