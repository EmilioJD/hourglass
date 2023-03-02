<script>
    //01234
	// let states = [1,0,1,1,0];
	//returns 0-1, 2-4, single tuple
    //should return [[0,1],[2,4]] tuples 
    let states = [1,1,1,1,1,1,1,1,1,0];

    //TODO: handle 1s at the end 
    //location helper
	function func(list) {
        let newBlock = true;
        let tuples = [];
        let tuple = [0,0];

		for (let i = 0; i <= list.length; i++) {
            let curr = list[i];
            if (curr == 1 && newBlock) {
                tuple[0] = i;
                newBlock = false;
                //this is the location handling step
            }
            else if (curr == 0 && newBlock){
            }
            else if (curr == 0 && !newBlock){
                tuple[1] = i;
                tuples.push([tuple[0], tuple[1]]);
                console.log(JSON.stringify(tuples));
                newBlock = true;
            }
		}
        // console.log(tuples);
	}
</script>

<p>timeslot</p>
<button on:click={() => func(states)}> press me</button>
