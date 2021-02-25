const test = require('ava');
const alfyTest = require('alfy-test');

test('main', async t => {
  const alfy = alfyTest();

  const result = await alfy('vinkla/hashids');

  t.deepEqual(result[0], {
    title: 'vinkla/hashids',
    subtitle: 'A Hashids bridge for Laravel',
    arg: 'https://github.com/vinkla/laravel-hashids',
    mods:
    {
      alt:
      {
        arg: 'https://packagist.org/packages/vinkla/hashids',
        subtitle: 'Open the Packagist page instead of the GitHub repo'
      },
      ctrl: {
        arg: 'vinkla/hashids',
        subtitle: 'Copy package name'
      }
    },
    quicklookurl: 'https://github.com/vinkla/laravel-hashids#readme'
  });
});
