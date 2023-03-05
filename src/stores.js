import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const len = 32 * 7;
const votesArrayName = "votesArray";
const retrieved = browser && localStorage.getItem(votesArrayName)
const parsed = JSON.parse(retrieved)
const empty = new Array(len).fill(0);
export const votesArray = writable(parsed === null ? empty : parsed)

votesArray.subscribe(value =>
  browser && localStorage.setItem(votesArrayName, JSON.stringify(value))
)
