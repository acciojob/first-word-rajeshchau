function firstWord(s) {
    s = s.trimStart().trimEnd(); // Fix: reassign after trimming
    let newarray = s.split(" ");
    return newarray[0]; // Fix: return the first word
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
