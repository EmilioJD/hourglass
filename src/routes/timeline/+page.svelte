<!-- adapted from https://daybrush.com/selecto/storybook/?path=/story/selecto--continue-to-select -->
<script>
	import Timeslots, { mergedTimeslots, allTimeslots } from './Timeslots.svelte';
	import { currUserEmail } from '../+page.svelte';

	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
 	import { writable } from 'svelte/store';

	import { votesArray } from '../../stores';

	function handleSave() {
		// let email = writable(currUserEmail);
		// console.log(email);
		if (browser) {
			window.localStorage.setItem(currUserEmail, allTimeslots.toString());
		}
		goto(`/`);
		// slotVotes[0].update(n => n + 1)
		// console.log(slotVotes[0]);
	}
</script>

<nav>
	<a href="/">Start</a>
	<a href="/timeline">Timeline</a>
</nav>

<div class="app">
	<Timeslots></Timeslots>
	<button on:click={()=>{console.log(mergedTimeslots, allTimeslots)}}>
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