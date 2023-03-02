<!-- adapted from https://daybrush.com/selecto/storybook/?path=/story/selecto--continue-to-select -->
<script>
	import Timeslots, { mergedTimeslots } from './Timeslots.svelte';
</script>

<nav>
	<a href="/">Start</a>
	<a href="/timeline">Timeline</a>
</nav>

<div class="app">
	<Timeslots></Timeslots>
	<button on:click={()=>{console.log(mergedTimeslots)}}>
        Print Selected Times
    </button>
</div>

<style>
	.app {
		position: relative;
		min-height: 100%;
		padding: 10px 20px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
</style>