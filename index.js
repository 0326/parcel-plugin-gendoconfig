module.exports = function (bundler) {
  // bundler.addAssetType('ext', require.resolve('./MyAsset'));
  // bundler.addPackager('foo', require.resolve('./MyPackager'));
  const logger = bundler.logger;
	const outDir = bundler.options.outDir;
  const publicURL = bundler.options.publicURL;

  bundler.on('bundled', (bundle) => {
    logger.log('bundled triggered');
  });
};
