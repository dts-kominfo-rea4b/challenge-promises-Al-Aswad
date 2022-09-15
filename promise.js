const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (param) => {
  let count = 0;
  const result1 = await promiseTheaterIXX(param)
  const result2 = await promiseTheaterVGC(param)

  for (let i = 0; i < result1.length; i++) {
    if (param === result1[i].hasil) {
      count++
    }
  }

  for (let i = 0; i < result2.length; i++) {
    if (param === result2[i].hasil) {
      count++
    }
  }

  return count;


}

module.exports = {
  promiseOutput,
};
