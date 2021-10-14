// g -> global (encontra todas as ocorrências)
// i -> insensitive
const texto = 'wgkpe rpjpejppee João bafbergeggeergerrgerrgrrggegwrgfvee João joão efrgger gver"Jooooooooãoooooooo"'
const regExpt = /(wgkpe)(João)/i;

const foud = regExpt.exec(texto);

console.log(foud[0]);
console.log(found[1]);