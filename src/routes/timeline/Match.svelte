<!-- this is where the logic for matching is housed -->
<script>
	//given left shift (-1) [0,1,0,0] returns [1,0,0,0]
	//given right shift (2) [0,1,0,0] returns [0,0,0,1]
	let list = [0, 1, 0, 0];
	function timeZoneShift(shift, arr) {
		const len = arr.length;
		arr.push(...arr.splice(0, ((-shift % len) + len) % len));
		return arr;
	}
</script>

<button on:click={() => console.log(timeZoneShift(1, list))}> Shift </button>
