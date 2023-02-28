<!-- adapted from https://daybrush.com/selecto/storybook/?path=/story/selecto--continue-to-select -->
<script>
	import Selecto from 'svelte-selecto';

	const cubes = [];

	for (let i = 0; i < 96; ++i) {
		cubes.push(i);
	}
	let arr = [];
</script>

<nav>
	<a href="/">Start</a>
	<a href="/timeline">Timeline</a>
</nav>

<div class="app">
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
					arr.push(value);
					// console.log(arr);
				});
				e.removed.forEach((el) => {
					el.classList.remove('selected');
					let value = el.classList[1];
					arr = arr.filter(item => item !== value);
				});
			}}
		/>
<!-- D0000, D0015, D0030 .. D2400 -->
		<div class="elements selecto-area" id="selecto1">
			<div class='left'>
				<p class='day'>Sun</p>
				<p class='day'>Mon</p>
				<p class='day'>Tue</p>
				<p class='day'>Wed</p>
				<p class='day'>Thu</p>
				<p class='day'>Fri</p>
				<p class='day'>Sat</p>
			</div>
			<div class='right'>
				<!-- Time Labels -->
				<div class='labels'>
					<p class='timestamp'>- 12:00 am</p>
					<p class='timestamp'>- 12:30</p>
					<p class='timestamp'>- 1:00</p>
					<p class='timestamp'>- 1:30</p>
					<p class='timestamp'>- 2:00</p>
					<p class='timestamp'>- 2:30</p>
					<p class='timestamp'>- 3:00</p>
					<p class='timestamp'>- 3:30</p>
					<p class='timestamp'>- 4:00</p>
					<p class='timestamp'>- 4:30</p>
					<p class='timestamp'>- 5:00</p>
					<p class='timestamp'>- 5:30</p>
					<p class='timestamp'>- 6:00</p>
					<p class='timestamp'>- 6:30</p>
					<p class='timestamp'>- 7:00</p>
					<p class='timestamp'>- 7:30</p>
					<p class='timestamp'>- 8:00</p>
					<p class='timestamp'>- 8:30</p>
					<p class='timestamp'>- 9:00</p>
					<p class='timestamp'>- 9:30</p>
					<p class='timestamp'>- 10:00</p>
					<p class='timestamp'>- 10:30</p>
					<p class='timestamp'>- 11:00</p>
					<p class='timestamp'>- 11:30</p>
					<p class='timestamp'>- 12:00 pm</p>
					<p class='timestamp'>- 12:30</p>
					<p class='timestamp'>- 1:00</p>
					<p class='timestamp'>- 1:30</p>
					<p class='timestamp'>- 2:00</p>
					<p class='timestamp'>- 2:30</p>
					<p class='timestamp'>- 3:00</p>
					<p class='timestamp'>- 3:30</p>
					<p class='timestamp'>- 4:00</p>
					<p class='timestamp'>- 4:30</p>
					<p class='timestamp'>- 5:00</p>
					<p class='timestamp'>- 5:30</p>
					<p class='timestamp'>- 6:00</p>
					<p class='timestamp'>- 6:30</p>
					<p class='timestamp'>- 7:00</p>
					<p class='timestamp'>- 7:30</p>
					<p class='timestamp'>- 8:00</p>
					<p class='timestamp'>- 8:30</p>
					<p class='timestamp'>- 9:00</p>
					<p class='timestamp'>- 9:30</p>
					<p class='timestamp'>- 10:00</p>
					<p class='timestamp'>- 10:30</p>
					<p class='timestamp'>- 11:00</p>
					<p class='timestamp'>- 11:30</p>
					<p class='timestamp'>- 12:00 am</p>
				</div>
				<div>
					{#each cubes as cube}
						<div class="cube Su{cubes[cube]}"></div>
					{/each}
				</div>
				<div>
					{#each cubes as cube}
						<div class="cube M{cubes[cube]}"></div>
					{/each}
				</div>
				<div>
					{#each cubes as cube}
						<div class="cube T{cubes[cube]}"></div>
					{/each}
				</div>
				<div>
					{#each cubes as cube}
						<div class="cube W{cubes[cube]}"></div>
					{/each}
				</div>
				<div>
					{#each cubes as cube}
						<div class="cube R{cubes[cube]}"></div>
					{/each}
				</div>
				<div>
					{#each cubes as cube}
						<div class="cube F{cubes[cube]}"></div>
					{/each}
				</div>
				<div>
					{#each cubes as cube}
						<div class="cube S{cubes[cube]}"></div>
					{/each}
				</div>
			</div>
		</div>
		<div class="empty elements" />
		<button on:click={()=>console.log(arr)}>
			Print Selected Times
		</button>
	</div>
</div>

<style>
	html,
	body,
	#root {
		position: relative;
		margin: 0;
		padding: 0;
		height: 100%;
		color: #333;
		background: #fdfdfd;
	}

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

	.container {
		max-width: 90%;
	}

	body {
		background: #fff;
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

	h1,
	.description {
		text-align: center;
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

	.infinite-viewer .viewport {
		padding-top: 10px;
	}

	.empty.elements {
		border: none;
	}
</style>
