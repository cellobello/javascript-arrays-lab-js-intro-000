const app = "I don't do much.";


function destructivelyAppendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.unshift(name);
    return kittens;
}