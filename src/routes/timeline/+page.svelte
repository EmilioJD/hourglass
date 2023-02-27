<script>
	import Selecto from 'svelte-selecto';

	const cubes = [];

	for (let i = 0; i < 30; ++i) {
		cubes.push(i);
	}
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
					console.log(e);
					// console.log("selected")
				});
				e.removed.forEach((el) => {
					el.classList.remove('selected');
				});
			}}
		/>
<!-- D0000, D0015, D0030 .. D2400 -->
		<div class="elements selecto-area" id="selecto1">
			{#each cubes as cube}
				<div class="cube {cubes[cube]}">{cubes[cube]}</div>
			{/each}
		</div>
		<div class="empty elements" />
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
		max-width: 800px;
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

	.cube {
		display: inline-block;
		border-radius: 0px;
		width: 40px;
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
	}

	.selecto-area {
		padding: 100px;
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
