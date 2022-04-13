["messageCreate"].forEach((_) => {
  require(`./events/server/${_}.js`);
});

["ready"].forEach((_) => {
    require(`./events/client/${_}.js`);
});