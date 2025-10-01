import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const htmlPath = 'Blood Optimization Platform - v0.7.8.html';
const html = readFileSync(htmlPath, 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>/);

if (!match) {
  process.exit(0);
}

const eslintArgs = ['eslint', '--config', 'eslint.config.js', '--stdin', '--stdin-filename', 'inline.js'];
const result = spawnSync('npx', eslintArgs, {
  input: match[1],
  stdio: 'inherit',
  shell: false
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 0);
