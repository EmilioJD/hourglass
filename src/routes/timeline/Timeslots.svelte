<script context='module'>
	// import { time } from 'console';
    import { Input } from 'sveltestrap';
    import Selecto from 'svelte-selecto';
    const timeslots = [];

    let ifNeedBe = false;

    for (let i = 0; i < 96; ++i) {
		timeslots.push(i);
	}

    let allTimeslots = new Array(672).fill(0);
    let selectedTimeslots = [];

    function mergeTimeslots(list) {
        let newBlock = true;
        let tuples = [];
        let tuple = [0,0];

		for (let i = 0; i < list.length; i++) {
            let curr = list[i]
            if (curr == 1 && newBlock) {
                tuple[0] = i;
                newBlock = false;
            }
            else if (curr == 0 && newBlock){
            }
            else if (curr == 0 && !newBlock){
                tuple[1] = i;
                let newTuple = [tuple[0], tuple[1]];
                tuples.push(newTuple);
                newBlock = true;
            }
		}
        return tuples;
	}

    export var mergedTimeslots = []

    function handleSelectChange() {
        mergedTimeslots = mergeTimeslots(allTimeslots);
        // console.log(mergedTimeslots);
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
                el.classList.add(ifNeedBe ? 'pref0' : 'pref1');
                console.log(el.classList);
                let value = el.classList[1];
                selectedTimeslots.push(value);
                allTimeslots[value] = 1;
                handleSelectChange();
            });
            e.removed.forEach((el) => {
                el.classList.remove('selected');
                el.classList.remove('pref1');
				el.classList.remove('pref0');
                let value = el.classList[1];
                selectedTimeslots = selectedTimeslots.filter(item => item !== value);
                allTimeslots[value] = 0;
                handleSelectChange();
            });
        }}
    />

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
                {#each Array(7) as _, i}
                    <div>
                        {#each timeslots as slot}
                            <div class="cube {(96 * i) + slot} "></div>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
        <div class='togglediv'>
			<Input class='toggle' id="c3" type="switch" label="Only If Need Be" bind:checked={ifNeedBe}/>
		</div>
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

    .togglediv { 
		width: 15%;
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
		width: 11px;
		height: 40px;
		margin: 0px;
		box-shadow: -1px 0px 0px 0px black, 1px 0px 0px 0px black;
		background: #eee;
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
