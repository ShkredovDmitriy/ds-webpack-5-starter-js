import '../styles/scss/main.scss';

require('./_constants/types');
require('./_constants/interfaces');
require('./_constants/enums');

// TODO: обсудить с командой структуру папок и файлов

import log from './_helpers/log';

log('TEST TITLE', 'Test body');
$('.header').addClass('jquery-test');

const admin: iAdmin = {
  userId: 'fgpo-nhyt-oolk-ius8',
  userRole: 'admin',
  firstName: 'Dima',
  lastName: 'Dokov',
  adminLevel: 3,
};

function* idGeterator(start: number) {
  let index: number = start;
  while (true) {
    yield index++;
  }
}

const gen = idGeterator(25);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(admin.firstName);
