const alfy = require('alfy');

(async () => {
  const data = await alfy.fetch('https://repo.packagist.org/search.json', {
    query: {
      q: alfy.input
    }
  });

  const items = data.results.map(pkg => {
    return {
      title: pkg.name,
      subtitle: pkg.description,
      arg: pkg.repository || pkg.url,
      mods: {
        alt: {
          arg: pkg.url,
          subtitle: 'Open the Packagist page instead of the GitHub repo'
        },
        ctrl: {
          arg: pkg.name,
          subtitle: 'Copy package name'
        }
      },
      quicklookurl: pkg.repository && `${pkg.repository}#readme`
    };
  });

  alfy.output(items);
})();
