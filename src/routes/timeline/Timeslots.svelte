<script>
    //01234
	let states = [1,0,1,1,0];
	//returns 0-1, 2-4, single tuple
    //should return [[0,1],[2,4]] tuples 

	function func(list) {
        let newBlock = true;
        let tuples = [];
        let tuple = [0,0];

		for (let i = 0; i <= list.length; i++) {
            let curr = list[i]
            console.log(JSON.stringify(tuples));
            if (curr == 1 && newBlock) {
                tuple[0] = i;
                newBlock = false;
            }
            else if (curr == 0 && newBlock){
            }
            else if (curr == 0 && !newBlock){
                tuple[1] = i;
                let copy = tuple;
                tuples.push(copy);
                console.log(JSON.stringify(tuples));
                newBlock = true;
            }
		}
        // console.log(tuples);
	}
</script>

<p>timeslot</p>
<button on:click={() => func(states)}> press me</button>
