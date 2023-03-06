<script context='module'>
    import {mergedTimeslots} from './Timeslots.svelte';

	export function mergeTimeslots(list) {
		let newBlock = true;
		let tuples = [];
		let tuple = [0, 0, ""];

		for (let i = 0; i < list.length; i++) {
			let curr = list[i];
			if (curr == 1 && newBlock) {
				tuple[0] = i;
				newBlock = false;

				//the case where they are only available at the last block
				if (i == list.length - 1) {
					tuple[1] = i;
					let newTuple = [tuple[0], tuple[1], tuple[2]];  
					tuples.push(newTuple);
				}
				//this is the location handling step
			} else if (curr == 0 && newBlock) {
			} else if ((curr == 0 && !newBlock) || i == list.length - 1) {
				tuple[1] = i;
				let newTuple = [tuple[0], tuple[1], tuple[2]];
				tuples.push(newTuple);
				newBlock = true;
			}
		}
		return tuples;
	}
</script>

<!-- <div>
{#each mergedTimeslots as tuple}
    <p>{JSON.stringify(tuple)}</p>
{/each}
</div> -->