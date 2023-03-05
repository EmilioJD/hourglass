<!-- adapted from https://daybrush.com/selecto/storybook/?path=/story/selecto--continue-to-select -->
<script>
	import Timeslots, { mergedTimeslots } from './Timeslots.svelte';
	import { goto } from '$app/navigation';
	import { timeZone } from '../+page.svelte'

	let timeZoneOffset = parseInt(timeZone.substr(4,3)) + 5;
	console.log(timeZoneOffset);
	//this variable needs to be passed into Timestamp

	function handleSave() {
		goto(`/`);
	}
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
	<button on:click={() => handleSave()}>Save and Logout</button>
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