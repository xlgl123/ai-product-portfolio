"""Prepare root-relative site links for Pages or a custom domain."""
import os
from pathlib import Path
import re
import shutil

root = Path(__file__).resolve().parents[1]
output = root / '_site'
base = os.environ.get('PAGES_BASE_PATH', '').rstrip('/')
output.mkdir(exist_ok=True)
for name in ['index.html', '404.html', 'favicon.svg', '.nojekyll', 'assets', 'about', 'projects', 'resume']:
    source = root / name
    target = output / name
    if source.is_dir():
        shutil.copytree(source, target, dirs_exist_ok=True)
    else:
        shutil.copy2(source, target)
if base:
    for file in output.rglob('*'):
        if file.is_file() and file.suffix in {'.html', '.js', '.css'}:
            text = file.read_text(encoding='utf-8')
            text = re.sub(r'''(["'`])/(?!/)''', lambda m: m[1] + base + '/', text)
            text = re.sub(r'url\(/(?!/)', 'url(' + base + '/', text)
            file.write_text(text, encoding='utf-8')
print('Prepared portfolio with base path:', base or '/')
