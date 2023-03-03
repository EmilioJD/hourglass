<script>
	let timeLabels = [];
	for (let i = 1; i <= 11; i++) {
		timeLabels.push(i + ':00');
		timeLabels.push(i + ':30');
	}
	// console.log(timeLabels);
</script>

<p class="timestamp">- 12:30</p>
{#each timeLabels as label}
	<p class="timestamp">- {label}</p>
{/each}

<style>
	.timestamp {
		margin-left: 0px;
		margin-top: 0;
		margin-right: 2.5px;
		margin-bottom: 2px;
		writing-mode: tb-rl;
		transform: rotate(180deg);
		font-size: 13px;
	}
</style>
