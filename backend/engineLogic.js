const gpiop = require("rpi-gpio").promise;

const input1 = 23;
const input2 = 24;
const input3 = 27;
const input4 = 22;

gpiop.setMode(gpiop.MODE_BCM);

gpiop
  .setup(input1, gpiop.DIR_OUT)
  .then(() => {
    return gpiop.write(input1, true);
  })
  .catch((err) => {
    console.log("Error gpi setup: ", err.toString());
  });

gpiop
  .setup(input2, gpiop.DIR_OUT)
  .then(() => {
    return gpiop.write(input2, true);
  })
  .catch((err) => {
    console.log("Error gpi setup: ", err.toString());
  });

gpiop
  .setup(input3, gpiop.DIR_OUT)
  .then(() => {
    return gpiop.write(input3, true);
  })
  .catch((err) => {
    console.log("Error gpi setup: ", err.toString());
  });

gpiop
  .setup(input4, gpiop.DIR_OUT)
  .then(() => {
    return gpiop.write(input4, true);
  })
  .catch((err) => {
    console.log("Error gpi setup: ", err.toString());
  });

function forward() {
  gpiop.write(input3, false);
  gpiop.write(input4, true);

  gpiop.write(input1, true);
  gpiop.write(input2, false);
  console.log("forward_gpi");
}

function backward() {
  gpiop.write(input3, true);
  gpiop.write(input4, false);

  gpiop.write(input1, false);
  gpiop.write(input2, true);
  console.log("backward_gpi");
}

function left() {
  gpiop.write(input3, false);
  gpiop.write(input4, true);

  gpiop.write(input1, false);
  gpiop.write(input2, true);
  console.log("left_gpi");
}

function right() {
  gpiop.write(input3, true);
  gpiop.write(input4, false);

  gpiop.write(input1, true);
  gpiop.write(input2, false);
  console.log("right_gpi");
}

function stop() {
  gpiop.write(input3, true);
  gpiop.write(input4, true);

  gpiop.write(input1, true);
  gpiop.write(input2, true);
  console.log("stop_gpi");
}

module.exports = {
  forward,
  backward,
  right,
  left,
};
