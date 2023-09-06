const runDelay = (callback, seconds) => {
  if (seconds < 0) {
    throw error("0보다 큰 수를 입력해");
  }
  setTimeout(callback, seconds * 1000);
};

runDelay(() => console.log("정답?"), 2);

const runDelay2 = (seconds) => {
  return new Promise((reslove, rejected) => {
    if (!seconds || seconds < 0) {
      rejected(new Error("인자 똑바로좀;"));
    }

    setTimeout(reslove, seconds * 1000);
  });
};

runDelay2(2)
  .then(() => console.log("이얏호"))
  .catch((e) => console.log(e));

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error("can not find 🐓"));
}

async function makeFried() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = "🐔";
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFried().then(console.log);
