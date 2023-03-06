<script context="module">
	import { Input } from 'sveltestrap';
	import Selecto from 'svelte-selecto';
	import Timestamp from './labels/Timestamp.svelte';
	import { resetUserTimezone } from '../+page.svelte';
	import Location, { mergeTimeslots } from './Location.svelte';

	const timeslots = [];

	let preferred = true;
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	// only 6am - 10pm ET times (organizer)
	for (let i = 0; i < 32; ++i) {
		timeslots.push(i);
	}

	// allTimeslots[i] = 1 if preferred, 0.5 if need be, and 0 if not available
	export var allTimeslots = new Array(224).fill(0);
	let selectedTimeslots = [];

	export var mergedTimeslots = [];

	function handleSelectChange() {
		mergedTimeslots = mergeTimeslots(allTimeslots);
	}

	export function resetUserVars() {
		// resetting user vars
		allTimeslots = new Array(224).fill(0);
		mergedTimeslots = [];
		preferred = true;
		resetUserTimezone();
	}

</script>

<div class="container">
	<div class="togglediv">
		Only If Need Be 
		<Input class="toggle" id="c3" type="switch" bind:checked={preferred} />
		Preferred
	</div>
	<Selecto
		dragContainer={'.elements'}
		selectableTargets={['.selecto-area .cube']}
		hitRate={1}
		selectByClick={true}
		selectFromInside={true}
		continueSelect={true}
		ratio={0}
		on:select={({ detail: e }) => {
			e.added.forEach((el) => {
				el.classList.add('selected');
				el.classList.add(preferred ? 'pref1' : 'pref0');
				let value = el.classList[1];
				selectedTimeslots.push(value);
				allTimeslots[value] = preferred ? 1 : 0.5;
				handleSelectChange();
			});
			e.removed.forEach((el) => {
				el.classList.remove('selected');
				el.classList.remove('pref1');
				el.classList.remove('pref0');
				let value = el.classList[1];
				selectedTimeslots = selectedTimeslots.filter((item) => item !== value);
				allTimeslots[value] = 0;
				handleSelectChange();
			});
		}}
	/>

	<div class="elements selecto-area" id="selecto1">
		<div class="left">
			{#each days as day}
				<p class="day">{day}</p>
			{/each}
		</div>
		<div class="right">
			<div class="labels">
				<Timestamp />
			</div>
			<div>
				{#each Array(7) as _, i}
					<div>
						{#each timeslots as slot}
							<div class="cube {32 * i + slot} " />
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 90%;
	}

	.logo {
		position: relative;
		width: 150px;
		height: 150px;
		margin: 0px auto;
		font-size: 0;
		text-align: left;
	}

	.labels {
		display: flex;
		justify-content: center;
		margin: auto;
		width: auto;
		margin-left: 0;
		margin-bottom: 10;
		text-align: left;
	}

	.togglediv {
		display: flex;
		gap: 10px;
		width: 20%;
		margin-bottom: 0px;
	}

	.toggle {
		background-color: #e6b400;
		color: #e6b400;
		border-color: #e6b400;
	}

	.switch.form-check-input {
		background-color: #e6b400;
		color: #e6b400;
		border-color: #e6b400;
	}

	.pref1 {
		--color: #4af;
	}

	.pref0 {
		--color: #e6b400;
	}

	.timestamp {
		margin-left: 0px;
		margin-top: 0;
		margin-right: 2.5px;
		margin-bottom: 2px;
		writing-mode: tb-rl;
		transform: rotate(180deg);
		font-size: 13px;
		/* margin-bottom: 20; */
		/* padding: 0; */
		/* writing-mode: vertical-lr;
		text-orientation: mixed; */
	}

	.cube {
		display: inline-block;
		border-radius: 0px;
		width: 30px;
		height: 40px;
		margin: 0px;
		box-shadow: -1px 0px 0px 0px black, 1px 0px 0px 0px black;
		background: #eee;
	}

	.button {
		border: 1px solid #333;
		color: #333;
		background: transparent;
		appearance: none;
		-webkit-appearance: none;
		box-sizing: border-box;
		cursor: pointer;
		width: 120px;
		height: 42px;
		font-size: 14px;
		letter-spacing: 1px;
		transition: all ease 0.2s;
		margin: 0px 5px;
	}

	.button:hover {
		background: #333;
		color: white;
	}

	.elements {
		margin-top: 40px;
		border: 2px solid #eee;
		display: flex;
	}

	.left {
		margin-top: 4.7em;
		margin-right: 1em;
	}

	.day {
		margin-bottom: 1.4em;
	}

	.selecto-area {
		/* width: 150%; */
		padding: 50px;
		margin-top: 10px;
	}

	#selecto1 .cube {
		transition: all ease 0.2s;
	}

	.moveable #selecto1 .cube {
		transition: none;
	}

	.selecto-area :global(.selected) {
		color: #fff;
		background: var(--color);
	}

	.scroll {
		overflow: auto;
		padding-top: 10px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.infinite-viewer,
	.scroll {
		width: 100%;
		height: 300px;
		box-sizing: border-box;
	}

	.empty.elements {
		border: none;
	}
</style>
