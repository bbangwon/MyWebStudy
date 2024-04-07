const sing = async () => {
  
  //에러를 리턴하면 Promise가 reject된다.
  throw 'OH NO, PROBLEM!';
  return 'La la la';
}

//async 는 자동으로 Promise를 리턴한다.
sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH: ", data);
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!");
        console.log(err);
    });

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return "ALL DONE!";
}

async function printRainbow() {
    let ret = await rainbow();
    console.log("END OF RAINBOW! => ", ret);
}
