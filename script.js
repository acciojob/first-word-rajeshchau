function firstWord(s) {
  s = s.trimStart(); // Remove leading spaces
  if (s === "") return ""; // Return empty string if input is empty
  const index = s.indexOf(" ");
  return index === -1 ? s : s.substring(0, index);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
