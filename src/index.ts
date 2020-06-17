import * as fs from 'fs';
import * as core from '@actions/core';

(function() {
  try {
    const filename = core.getInput('filename');
    const pattern = core.getInput('pattern');
    const replace = core.getInput('replace');

    if (!fs.existsSync(filename)) {
      throw new Error(`Filename do not exists "${filename}"`);
    } 
    
    const content = fs.readFileSync(filename, { encoding: 'utf-8' });
    const regex = new RegExp(pattern);
    const patchedContent = content.replace(regex, replace);
    if (patchedContent !== content) {
      console.info(`Replaced "${pattern}" with "${replace}"`);
      fs.writeFileSync(filename, patchedContent, { encoding: 'utf-8' });
    } else {
      console.warn('Nothing was replaced');
    }
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
})();