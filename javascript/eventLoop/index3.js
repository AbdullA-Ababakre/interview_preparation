const p1 = new Promise((resolve, reject) => {
  console.log("promise1");
  resolve();
})

  .then(() => {
    console.log("then11");

    new Promise((resolve, reject) => {
      console.log("promise2");
      resolve();
    })

      .then(() => {
        console.log("then21");
      })

      .then(() => {
        console.log("then23");
      });
  })

  .then(() => {
    console.log("then12");
  });

const p2 = new Promise((resolve, reject) => {
  console.log("promise3");

  resolve();
}).then(() => {
  console.log("then31");
});
