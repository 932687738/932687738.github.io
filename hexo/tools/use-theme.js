'use strict';

const fs = require('fs');
const path = require('path');

const hexoRoot = path.join(__dirname, '..');
const configPath = path.join(hexoRoot, '_config.yml');

const themes = {
  landscape: {
    label: 'Landscape',
    post_asset_folder: false
  },
  tranquility: {
    label: 'Tranquility（致远）',
    post_asset_folder: true
  }
};

const themeName = process.argv[2];

if (!themeName) {
  const current = fs.readFileSync(configPath, 'utf8').match(/^theme:\s*(\S+)\s*$/m);
  console.log('可用主题:');
  Object.entries(themes).forEach(([name, meta]) => {
    console.log(`  - ${name} (${meta.label})`);
  });
  console.log(`\n当前主题: ${current ? current[1] : 'unknown'}`);
  console.log('\n用法: node tools/use-theme.js <theme>');
  process.exit(0);
}

const theme = themes[themeName];
if (!theme) {
  console.error(`未知主题: ${themeName}`);
  console.error(`可选: ${Object.keys(themes).join(', ')}`);
  process.exit(1);
}

let config = fs.readFileSync(configPath, 'utf8');

if (!/^theme:\s/m.test(config)) {
  console.error('_config.yml 中未找到 theme 配置项');
  process.exit(1);
}

config = config.replace(/^theme:\s.*$/m, `theme: ${themeName}`);
config = config.replace(
  /^post_asset_folder:\s.*$/m,
  `post_asset_folder: ${theme.post_asset_folder}`
);

fs.writeFileSync(configPath, config, 'utf8');
console.log(`已切换主题为 ${themeName} (${theme.label})`);
