const app = "I don't do much.";

function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
    return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
    return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name);
    return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name);
    return kittens;
}

function appendKitten(name) {
  var new_kittens = [...kittens, name];
    return new_kittens;
}

function prependKitten(name) {
  var new_kittens = [name, ...kittens];
    return new_kittens;
}