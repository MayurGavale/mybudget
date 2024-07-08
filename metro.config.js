const { getDefaultConfig } = require('expo/metro-config');

const DefaultConfig = getDefaultConfig(__dirname);

DefaultConfig.resolver.assetExts.push("db");

module.exports = DefaultConfig;