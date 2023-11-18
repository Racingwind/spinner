const timeout = (word, num) => {
  setTimeout(() => {
    process.stdout.write(word);
  }, (num)); // it's in milliseconds  
}

const arr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let count = 0;

for (let i = 0; i < 2; i++) {
  for (const entry of arr) {
    timeout(entry, 100 + (count * 200));
    count++;
  }
}

timeout("\n", 100 + (count * 200));