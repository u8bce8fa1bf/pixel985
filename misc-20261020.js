// quick notes in code

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const uniq = (xs) => [...new Set(xs)];
