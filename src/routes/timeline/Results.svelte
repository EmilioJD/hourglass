<script>
    import { browser } from '$app/environment';
    import { timeZone } from '../+page.svelte';

    const retrievedVotes = browser && localStorage.getItem('votesArray')
    const parsedVotes = JSON.parse(retrievedVotes)
    const len = 7 * 32;
    const empty = new Array(len).fill(0);
    const votes = parsedVotes === null ? empty : parsedVotes;

    const Sunday = new Date(2022, 7, 7, 6, 0, 0);

    let timeZoneOffset = parseInt(timeZone.substr(4,3)) + 5;

    function getTopTimeslots(votes, top) {
        let result = Array.from(Array(votes.length).keys()).sort((a, b) => votes[a] > votes[b] ? -1 : (votes[b] < votes[a]) | 0);
        result.splice(top)
        return result;
    }

    function convertIdxToDate(i) {
        let day = Math.floor(i / 32);
        var date = new Date(Sunday.getTime());
        date.setDate(Sunday.getDate() + day);

        let thirty = i % 32;
        date.setTime(date.getTime() + thirty*30*60*1000)
        return date;
    }

    function convertDateToTimezone(date, offset) {
        console.log(offset);
        var newDate = new Date(date.getTime())
        return new Date(newDate.setTime(newDate.getTime() + offset*60*60*1000))
    }

    function loadTimesEST() {
        let top = getTopTimeslots(votes, 3);
        const res = [];
        for (let i = 0; i < top.length; i++) {
            res.push(convertIdxToDate(top[i]))
        }
        return res;
    }

    function loadTimesLocal(timesEST) {
        const res = [];
        for (let i = 0; i < timesEST.length; i++) {
            res.push(convertDateToTimezone(timesEST[i], timeZoneOffset))
        }
        return res;
    }
    const timesEST = loadTimesEST();
    const timesLocal = loadTimesLocal(timesEST)
</script>

<div>
    {#each Array(3) as _, i}
        <p>{timesLocal[i]}</p>
    {/each}
</div>