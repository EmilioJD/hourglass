<!-- adapted from https://daybrush.com/selecto/storybook/?path=/story/selecto--continue-to-select -->
<script>
	import Timeslots, { mergedTimeslots, allTimeslots, resetUserVars } from './Timeslots.svelte';
	import { currUserEmail } from '../+page.svelte';

	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
 	import { writable } from 'svelte/store';

	import { votesArray } from '../../stores';

	const len = 7 * 32;

	function updateVotes(votesArray) {
		var summedArrays = votesArray.map(function (num, idx) {
			return num + allTimeslots[idx];
		});
		resetUserVars();
		return summedArrays;
	}

	function resetVotes() {
		const empty = new Array(len).fill(0);
		votesArray.update(n => empty)
	}

	function handleSave() {
		if (browser) {
			window.localStorage.setItem(currUserEmail, allTimeslots.toString());
		}
		votesArray.update(n => updateVotes(n))
		goto(`/`);
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
	<button on:click={() => resetVotes()}>Reset Vote Count (don't press this)</button>
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