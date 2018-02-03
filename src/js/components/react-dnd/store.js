
let knightPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

const props = {
  user: {
    posts: [
      { title: 'Foo', comments: ['Hello', 'World'] },
      { title: 'Bar', comments: ['Biu'] },
      { title: 'Baz', comments: [] },
    ],
  },
};

export function getFirstComment() {
  return props.user &&
  props.user.posts &&
  props.user.posts[0] &&
  props.user.posts[0].comments &&
  props.user.posts[0].comments[0];
}

export function getIn(p, o) {
  return p.reduce(function (xs, x) {
    return (xs && xs[x]) ? xs[x] : null;
  }, o);
}

// const get = (p, o) => p.reduce((xs, x) => ((xs && xs[x]) ? xs[x] : null), o);
