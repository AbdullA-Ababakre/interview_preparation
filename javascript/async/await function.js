function who() {
  return new Promise((resolve, reject) => {
    let myName = "Abdulla";
    setTimeout(() => {
      resolve(myName);
    }, 2000);
  });
}

function verb() {
  return new Promise((resolve, reject) => {
    let verbName = "is";
    setTimeout(() => {
      resolve(verbName);
    }, 3000);
  });
}

function what() {
  return new Promise((resolve, reject) => {
    let whatName = "coding";
    setTimeout(() => {
      resolve(whatName);
    }, 4000);
  });
}

async function out() {
  let name = await who();
  let beVerb = await verb();
  let whatName = await what();
  console.log(`${name} ${beVerb} ${whatName}`);
}

out();
