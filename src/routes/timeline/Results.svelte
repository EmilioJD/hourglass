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
        var newDate = new Date(date.getTime());
        var res = new Date(newDate.setTime(newDate.getTime() + offset*60*60*1000));
        return res.toLocaleDateString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric' })
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

<div class='left'>
    <h4>Current Top 3 Times ({timeZone.slice(12)}): </h4>
    <div class='timesBox'>
    {#each Array(3) as _, i}
        <p>{i+1}. {timesLocal[i]}</p>
    {/each}
    </div>
</div>

<style>

    .left {
        text-align: left;
    }
    .timesBox {
        display: flex;
        gap: 30px;
    }
</style>