import test from 'ava';
import alfyTest from 'alfy-test';

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
      }
    },
    quicklookurl: 'https://github.com/vinkla/laravel-hashids#readme'
  });
});
