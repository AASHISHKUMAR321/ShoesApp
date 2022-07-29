// const { rmSync } = require("fs");
// const https = require("https");

// function getMoveis() {
//   return new Promise((resolve, rej) => {
//     https
//       .get(
//         `https://jsonmock.hackerrank.com/api/moviesdata/search/=${"spiderman"}`,
//         (res) => {
//           let result = "";
//           res.on("data", (data) => (result += data));
//           res.on("end", () => {
//             resolve(JSON.parse(result));
//           });
//         }
//       )
//       .on("error", (err) => rej(err));
//   });
// }

// getMoveis().then((data) => console.log(data));

// function getName(n) {
//   return new Promise((res, rej) => {
//     if (n % 2 == 0) res("even");
//     else rej("odd");
//   });
// }

// async function result() {
//   try {
//     let ans = await getName(4);
//     console.log(ans);
//   } catch (err) {
//     console.log(err);
//   }
// }
result();
