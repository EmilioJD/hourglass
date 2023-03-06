<!-- adapted from https://daybrush.com/selecto/storybook/?path=/story/selecto--continue-to-select -->
<script>
	import Timeslots, { mergedTimeslots, allTimeslots, resetUserVars } from './Timeslots.svelte';
	import { Button } from 'sveltestrap';
	import Results from './Results.svelte';
	import { currUserName, timerStart } from '../+page.svelte';

	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

	import { votesArray } from '../../stores';

	let img = '../../../hourglass.gif';

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
		votesArray.update((n) => empty);
	}
	import { timeZone } from '../+page.svelte';

	let timeZoneOffset = parseInt(timeZone.substr(4, 3)) + 5;
	// console.log(timeZoneOffset);

	function handleSave() {
		// if (browser) {
		// 	window.localStorage.setItem(currUserName, allTimeslots.toString());
		// }
		votesArray.update((n) => updateVotes(n));
		var timerEnd = new Date();
		var timeTaken = timerEnd.getTime() - timerStart.getTime();
		console.log(`Name: ${currUserName}, Time Taken (in ms): ${timeTaken}`);
		if (browser) {
			window.localStorage.setItem(currUserName, timeTaken);
		}
		goto(`/`);
	}
</script>

<!-- 
<nav>
	<a href="/">Start</a>
	<a href="/timeline">Timeline</a>
</nav> -->

<div class="app">
	<div class="logo">
		<!-- <img src={img} alt="hourglass" /> -->
		<h1>Hourglass</h1>
	</div>

	<h3>Select Your Availability</h3>
	<div class="saveDiv">
		<Button class="save" color="success" on:click={() => handleSave()}>Save and Logout</Button>
	</div>
	<Timeslots />
	<hr />
	<Results />
	<br />
	<!-- <button on:click={()=>{console.log(mergedTimeslots, allTimeslots)}}>
        Print Selected Times
    </button> -->
	<!-- <button on:click={() => handleSave()}>Save and Logout</button> -->
	<br />
	<br />
	<button on:click={() => resetVotes()}
		>Reset Vote Count (press this + comment button out before presentation)</button
	>
</div>

<style>
	h1 {
		font-size: 70px;
	}
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 50px;
	}
	img {
		width: 100px;
		height: 100px;
	}
	.app {
		position: relative;
		min-height: 100%;
		padding: 10px 20px;
		text-align: center;
		/* display: flex; */
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		color: #cbcbcb;
		background-color: #090c17;
	}

	.saveDiv {
		margin-right: 5.2em;
		text-align: right;
		margin-bottom: -30px;
	}
	hr {
		margin-top: 100px;
	}
</style>
