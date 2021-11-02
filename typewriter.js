const sentence = "hello there from lighthouse labs! \n";


let delay = 100;

sentence.split('').forEach((sentence) => {
    setTimeout(() => {
        process.stdout.write(sentence);
    }, delay);
    delay += 100;
})