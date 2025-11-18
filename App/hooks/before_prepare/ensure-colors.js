#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

module.exports = function (context) {
    const platforms = (context && context.opts && context.opts.platforms) || [];
    if (!platforms.includes('android')) {
        return;
    }

    const projectRoot = context.opts.projectRoot || process.cwd();
    const dest = path.join(projectRoot, 'platforms', 'android', 'app', 'src', 'main', 'res', 'values', 'colors.xml');

    if (fs.existsSync(dest)) {
        return;
    }

    const srcCandidates = [
        path.join(projectRoot, 'resources', 'android', 'values', 'colors.xml'),
        path.join(projectRoot, 'res', 'values', 'colors.xml')
    ];

    let sourceContent;
    for (const candidate of srcCandidates) {
        if (fs.existsSync(candidate)) {
            sourceContent = fs.readFileSync(candidate, 'utf8');
            break;
        }
    }

    if (!sourceContent) {
        sourceContent = `<?xml version="1.0" encoding="utf-8"?>\n<resources xmlns:tools="http://schemas.android.com/tools">\n    <color name="cdv_splashscreen_background">#000000</color>\n</resources>\n`;
    }

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, sourceContent, 'utf8');
    console.log(`[ensure-colors] Created ${dest}`);
};
