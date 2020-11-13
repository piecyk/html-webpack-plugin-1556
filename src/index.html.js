const template = (hash) => {
  return `<html>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="viewport" content="initial-scale=1" />
      <meta name="referrer" content="origin-when-cross-origin" />
    </head>
    <body>
    <div>compilation: ${hash}</div>
    </body>
  </html>`;
};

export default function ({ compilation }) {
  return template(compilation.hash);
}
