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

function* generateId(startId?: number) {
  let id = startId || 0;
  while (true) yield id++;
}

const genId = generateId(20);

console.log(genId.next());
console.log(genId.next());
console.log(genId.next());
console.log(genId.next());
console.log(genId.next());

console.log(admin.firstName);
