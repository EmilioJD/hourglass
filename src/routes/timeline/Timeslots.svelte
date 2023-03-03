<script context="module">
	import Selecto from 'svelte-selecto';
	import Timestamp from './labels/Timestamp.svelte';
    import Match from "./Match.svelte"

	const timeslots = [];
	let allTimeslots = new Array(672).fill(0);
	let selectedTimeslots = [];
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	for (let i = 0; i < 96; ++i) {
		timeslots.push(i);
	}

	function mergeTimeslots(list) {
		let newBlock = true;
		let tuples = [];
		let tuple = [0, 0];

		for (let i = 0; i < list.length; i++) {
			let curr = list[i];
			if (curr == 1 && newBlock) {
				tuple[0] = i;
				newBlock = false;
				//this is the location handling step
			} else if (curr == 0 && newBlock) {
			} else if (curr == 0 && !newBlock) {
				tuple[1] = i;
				let newTuple = [tuple[0], tuple[1]];
				tuples.push(newTuple);
				newBlock = true;
			}
		}
		return tuples;
	}

	export var mergedTimeslots = [];

	function handleSelectChange() {
		mergedTimeslots = mergeTimeslots(allTimeslots);
	}
</script>

<div class="container">
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
				let value = el.classList[1];
				selectedTimeslots.push(value);
				allTimeslots[value] = 1;
				handleSelectChange();
			});
			e.removed.forEach((el) => {
				el.classList.remove('selected');
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
				<p class="timestamp">- 12:00 am</p>
				<Timestamp />
				<p class="timestamp">- 12:00 pm</p>
				<Timestamp />
				<p class="timestamp">- 12:00 am</p>
			</div>
			<div>
				{#each Array(7) as _, i}
					<div>
						{#each timeslots as slot}
							<div class="cube {96 * i + slot} " />
						{/each}
					</div>
				{/each}
			</div>
            <Match></Match>
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
		width: 11px;
		height: 40px;
		margin: 0px;
		box-shadow: -1px 0px 0px 0px black, 1px 0px 0px 0px black;
		background: #eee;
		--color: #4af;
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
