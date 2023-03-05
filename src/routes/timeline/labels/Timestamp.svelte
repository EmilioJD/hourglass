<script>
	import { timeZone } from '../../+page.svelte'
	
	function arrShift(shift, arr) {
		const len = arr.length;
		arr.push(...arr.splice(0, ((-shift % len) + len) % len));
		return arr;
	}

	let timeZoneOffset = parseInt(timeZone.substr(4,3)) + 5;
	let times = [
		'12am',
		'1am',
		'2am',
		'3am',
		'4am',
		'5am',
		'6am',
		'7am',
		'8am',
		'9am',
		'10am',
		'11am',
		'12pm',
		'1pm',
		'2pm',
		'3pm',
		'4pm',
		'5pm',
		'6pm',
		'7pm',
		'8pm',
		'9pm',
		'10pm',
		'11pm'
	];
	let timeLabels = arrShift(-timeZoneOffset - 6, times);
	timeLabels = timeLabels.slice(0, 17);

</script>

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
