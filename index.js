'use strict';

const alfy = require('alfy');

(async () => {
  const data = await alfy.fetch('https://repo.packagist.org/search.json', {
    query: {
      q: alfy.input
    }
  });

  const items = data.results.map(x => {
    return {
      title: x.name,
      subtitle: x.description,
      arg: x.repository || x.url,
      mods: {
        alt: {
          arg: x.url,
          subtitle: 'Open the Packagist page instead of the GitHub repo'
        }
      },
      quicklookurl: x.repository && `${x.repository}#readme`
    };
  });

  alfy.output(items);
})();
