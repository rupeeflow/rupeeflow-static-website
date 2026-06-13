const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const src = path.join(root, 'src')
const exclude = [
  path.join(src, 'components', 'ui', 'footer.tsx'),
  path.join(src, 'app', 'globals.css'),
]

const exts = ['.ts', '.tsx', '.js', '.jsx']
let modified = []

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (exclude.includes(full)) continue
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(entry.name)) continue
      walk(full)
      continue
    }
    if (!exts.includes(path.extname(entry.name))) continue
    processFile(full)
  }
}

function processFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8')
  let original = src

  // Replacements
  src = src.replace(/bg-\[\#020506\]/g, 'bg-[var(--background)]')
  src = src.replace(/bg-black-emerald/g, 'bg-[var(--background)]')
  src = src.replace(/\bbg-black\b/g, 'bg-[var(--background)]')
  src = src.replace(/\btext-white\/\d{1,3}\b/g, 'text-[var(--foreground)]')
  src = src.replace(/\btext-white\b/g, 'text-[var(--foreground)]')
  src = src.replace(/border-white\/10/g, 'border-[var(--border)]')
  src = src.replace(/\bbg-white\/\d{1,3}\b/g, 'bg-[var(--card)]')
  src = src.replace(/\bbg-white\b/g, 'bg-[var(--card)]')

  if (src !== original) {
    fs.writeFileSync(filePath, src, 'utf8')
    modified.push(filePath.replace(root + path.sep, ''))
  }
}

walk(src)
console.log('Modified files:', modified.length)
modified.forEach(f => console.log('- ' + f))
