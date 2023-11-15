import { readdir, rename, writeFile } from "node:fs/promises";
import { emptyDir, ensureDir, ensureFile, pathExists } from "fs-extra/esm";
import { join } from "node:path";

// Create empty dist folder
const dest = "./dist";
await ensureDir(dest);
await emptyDir(dest);

// Move builded slides to dist folder
const slides = [];
const src = "./slides";
const dirs = await readdir(src);
for (const dir of dirs) {
  const source = join(src, dir, "dist", "slides");
  const destination = join(dest, dir);
  if (await pathExists(source)) {
    await rename(source, destination);
    slides.push(dir);
  }
}

// Create index.html file
const index = join(dest, "index.html");
await ensureFile(index);
await writeFile(
  index,
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Slides</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="" />
  <link rel="icon" href="//cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
</head>
<body>
  <ul>
    ${slides
      .map((slide) => `<li><a href="./${slide}">${slide}</a></li>`)
      .join("\n")}
  </ul>
</body>
</html>`
);
