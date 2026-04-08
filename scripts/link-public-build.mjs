import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pubBuild = path.join(root, 'public', 'build');
const rootBuild = path.join(root, 'build');

function removeIfExists(p) {
  try {
    const st = fs.lstatSync(p);
    if (st.isDirectory() && !st.isSymbolicLink()) {
      fs.rmSync(p, { recursive: true });
    } else {
      fs.unlinkSync(p);
    }
  } catch (e) {
    if (e.code !== 'ENOENT') {
      throw e;
    }
  }
}

if (!fs.existsSync(rootBuild)) {
  console.warn('link-public-build: ./build not found; skip linking public/build');
  process.exit(0);
}

removeIfExists(pubBuild);
fs.symlinkSync(path.relative(path.dirname(pubBuild), rootBuild), pubBuild, 'dir');
