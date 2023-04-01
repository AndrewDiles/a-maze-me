const drawCircle = (ctx, x, y, size) => {
	ctx.beginPath();
	ctx.arc(x + 0.5 * size, y + 0.5 * size, 0.3 * size, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
}
const drawKey = (ctx, x, y, size, floor) => {
	ctx.beginPath();
	ctx.arc(x + 0.2 * size, y + 0.5 * size, 0.1 * size, .1 * Math.PI, 1.9 * Math.PI);
	ctx.lineTo(x +0.8 * size,y+0.475 * size);
	ctx.lineTo(x +0.8 * size,y+0.6 * size);
	ctx.lineTo(x +0.75 * size,y+0.6 * size);
	ctx.lineTo(x +0.75 * size,y+0.55 * size);
	ctx.lineTo(x +0.7 * size,y+0.55 * size);
	ctx.lineTo(x +0.7 * size,y+0.65 * size);
	ctx.lineTo(x +0.6 * size,y+0.65 * size);
	ctx.lineTo(x +0.6 * size,y+0.55 * size);
	ctx.lineTo(x +0.55 * size,y+0.55 * size);
	ctx.lineTo(x +0.55 * size,y+0.6 * size);
	ctx.lineTo(x +0.5 * size,y+0.6 * size);
	ctx.lineTo(x +0.5 * size,y+0.525 * size);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = floor;
	ctx.beginPath();
	ctx.arc(x + 0.2 * size, y + 0.5 * size, 0.05 * size, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
}

const drawBorder = (direction, { c, x, y, size, color, floor }) => {
  const ctx = c.getContext("2d");
  ctx.fillStyle = color;
  switch (direction) {
    case "top":
      return ctx.fillRect(x, y, size, 0.2 * size);
    case "right":
      return ctx.fillRect(x + 0.8 * size, y, 0.2 * size, size);
    case "bottom":
      return ctx.fillRect(x, y + 0.8 * size, size, 0.2 * size);
    case "left":
      return ctx.fillRect(x, y, 0.2 * size, size);
    case "cornerTR":
      return ctx.fillRect(x + 0.8 * size, y, 0.2 * size, 0.2 * size);
    case "cornerBR":
      return ctx.fillRect(
        x + 0.8 * size,
        y + 0.8 * size,
        0.2 * size,
        0.2 * size
      );
    case "cornerBL":
      return ctx.fillRect(x, y + 0.8 * size, 0.2 * size, 0.2 * size);
    case "cornerTL":
      return ctx.fillRect(x, y, 0.2 * size, 0.2 * size);
    case "player": {
			drawCircle(ctx, x, y, size)
			ctx.font = `${size/6}px Arial`;
			return ctx.fillText("PLAYER",x+size/6, y+size/6);
    }
		case "goal" : {
			drawCircle(ctx, x, y, size)
			ctx.font = `${size/6}px Arial`;
			return ctx.fillText("GOAL",x+size/4, y+size/6);
		}
		case "key1" : {
			drawKey(ctx, x, y, size, floor);
			ctx.fillStyle = color;
			ctx.font = `${size/6}px Arial`;
			return ctx.fillText("KEY 1",x+size/4, y+size/6);
		}
		case "key2" : {
			drawKey(ctx, x, y, size, floor);
			ctx.fillStyle = color;
			ctx.font = `${size/6}px Arial`;
			return ctx.fillText("KEY 2",x+size/4, y+size/6);
		}
		case "key3" : {
			drawKey(ctx, x, y, size, floor);
			ctx.fillStyle = color;
			ctx.font = `${size/6}px Arial`;
			return ctx.fillText("KEY 3",x+size/4, y+size/6);
		}
  }
};

// expects object that contains c (canvas elem), x (x-offset), y (y-offset), color (fillColor)
export default {
  A: (p) => {
    drawBorder("top", p);
  },
  B: (p) => {
    drawBorder("right", p);
  },
  C: (p) => {
    drawBorder("bottom", p);
  },
  D: (p) => {
    drawBorder("left", p);
  },
  E: (p) => {
    drawBorder("top", p);
    drawBorder("right", p);
  },
  F: (p) => {
    drawBorder("right", p);
    drawBorder("bottom", p);
  },
  G: (p) => {
    drawBorder("bottom", p);
    drawBorder("left", p);
  },
  H: (p) => {
    drawBorder("left", p);
    drawBorder("top", p);
  },
  I: (p) => {
    drawBorder("top", p);
    drawBorder("bottom", p);
  },
  J: (p) => {
    drawBorder("right", p);
    drawBorder("left", p);
  },
  K: (p) => {
    drawBorder("top", p);
    drawBorder("right", p);
    drawBorder("bottom", p);
  },
  L: (p) => {
    drawBorder("right", p);
    drawBorder("bottom", p);
    drawBorder("left", p);
  },
  M: (p) => {
    drawBorder("top", p);
    drawBorder("bottom", p);
    drawBorder("left", p);
  },
  N: (p) => {
    drawBorder("top", p);
    drawBorder("right", p);
    drawBorder("left", p);
  },
  O: ({ c, x, y, size, color }) => {
    const ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  },

  a: (p) => {
    drawBorder("cornerTR", p);
  },
  b: (p) => {
    drawBorder("cornerBR", p);
  },
  c: (p) => {
    drawBorder("cornerBL", p);
  },
  d: (p) => {
    drawBorder("cornerTL", p);
  },
  e: (p) => {
    drawBorder("cornerTR", p);
    drawBorder("cornerBR", p);
  },
  f: (p) => {
    drawBorder("cornerBR", p);
    drawBorder("cornerBL", p);
  },
  g: (p) => {
    drawBorder("cornerTL", p);
    drawBorder("cornerBL", p);
  },
  h: (p) => {
    drawBorder("cornerTL", p);
    drawBorder("cornerTR", p);
  },
  i: (p) => {
    drawBorder("cornerTL", p);
    drawBorder("cornerBR", p);
  },
  j: (p) => {
    drawBorder("cornerTR", p);
    drawBorder("cornerBL", p);
  },
  k: (p) => {
    drawBorder("cornerTR", p);
    drawBorder("cornerBR", p);
    drawBorder("cornerBL", p);
  },
  l: (p) => {
    drawBorder("cornerBR", p);
    drawBorder("cornerBL", p);
    drawBorder("cornerTL", p);
  },
  m: (p) => {
    drawBorder("cornerTR", p);
    drawBorder("cornerBL", p);
    drawBorder("cornerTL", p);
  },
  n: (p) => {
    drawBorder("cornerTR", p);
    drawBorder("cornerBR", p);
    drawBorder("cornerTL", p);
  },
  o: (p) => {
    drawBorder("cornerTR", p);
    drawBorder("cornerBR", p);
    drawBorder("cornerBL", p);
    drawBorder("cornerTL", p);
  },
  // switch 1 and walls
  p: (p) => {
    p.building && drawBorder("key1", p);
  },
  q: (p) => {
    drawBorder("top", p);
  },
  r: (p) => {
    drawBorder("right", p);
  },
  s: (p) => {
    drawBorder("bottom", p);
  },
  t: (p) => {
    drawBorder("left", p);
  },
  // switch 2 and walls
  u: (p) => {
    p.building && drawBorder("key2", p);
  },
  v: (p) => {
    drawBorder("top", p);
  },
  w: (p) => {
    drawBorder("right", p);
  },
  x: (p) => {
    drawBorder("bottom", p);
  },
  y: (p) => {
    drawBorder("left", p);
  },
  // switch 3 and walls
  U: (p) => {
    p.building && drawBorder("key3", p);
  },
  V: (p) => {
    drawBorder("top", p);
  },
  W: (p) => {
    drawBorder("right", p);
  },
  X: (p) => {
    drawBorder("bottom", p);
  },
  Y: (p) => {
    drawBorder("left", p);
  },
  // start location
  S: (p) => {
    p.building && drawBorder("player", p);
  },

  // goal
  Z: (p) => {
    p.building && drawBorder("goal", p);
  },

  // nothing
  0: () => {},
};
