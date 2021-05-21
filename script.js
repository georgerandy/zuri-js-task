//Answer to Q1:

const convertFahrToCelsius = (fahr) => {
  if (fahr === null || fahr === undefined) {
    console.log(`enter a value for farenheit`);
  }
  if (fahr instanceof Array) {
    console.log(
      `${JSON.stringify(fahr)} is not a valid number but a/an array.`
    );
  } else if (fahr instanceof Object) {
    console.log(
      `${JSON.stringify(fahr)} is not a valid number but a/an object.`
    );
  } else if (
    (typeof fahr === 'number' || typeof fahr === 'string') &&
    /^[0-9]+$/.test(fahr)
  ) {
let myFahr = fahr * (9 / 5) + 32;
    console.log(myFahr.toFixed(4));
  } else {
    console.log(typeof fahr);
    console.log(`${JSON.stringify(fahr)} is not a valid number but a string.`);
  }
};

//Answer to Q2:

const getString = val  => {
    let replacement = [];
    if (val % 2 === 0) {
        replacement.push("yu")
    }
    if (val % 3 === 0) {
        replacement.push("gi")
    }
    if (val % 5 === 0) {
        replacement.push("oh")
    }

    return replacement.length > 0 ? replacement.join("-") : val
}


const checkYuGiOh = n => {
    const ans = Array(n).fill().map((_, index) => getString(index+1))

    console.log(ans)

    return ans
}

