---
theme: smile
transition: fade
record: true
layout: cover
hideInToc: true
exportFilename: slides/frontend-library/slides.pdf
---

# Creating a frontend library

---
layout: intro-bg
hideInToc: true
image: https://images.unsplash.com/photo-1496112576525-8b31e9ce4872
---

# Plan

<Toc maxDepth="1"/>

---
layout: intro-bg
image: https://images.unsplash.com/photo-1615678857339-4e7e51ce22db
---

# Workspaces

<Toc maxDepth="1"/>

---

## Purpose

workspaces are used when you have to work on multiple packages depending on each other:

1. Multiple libraries (ex: `package-b` depends on `package-a`)
2. Examples or test apps (ex: you have a React app set up to test your library)
3. Docs (ex: you want to import your React components in a `.mdx` compatible doc)
4. ...etc.

<v-click>

Your packages will available for other packages/apps without having to publish them.

</v-click>

---

## How does it looks like ?

Folder structure:

```
root
┣ examples
┃ ┣ react
┃ ┃ ┣ package.json
┃ ┃ ┗ ...
┃ ┗ next
┃   ┣ package.json
┃   ┗ ...
┣ doc
┃ ┣ package.json
┃ ┗ ...
┣ packages
┃ ┣ package-a
┃ ┃ ┣ package.json
┃ ┃ ┗ ...
┃ ┗ package-b
┃   ┣ package.json
┃   ┗ ...
┣ package.json
┗ ...
```

---

## Workspaces

You have to declare you workspaces in the root `package.json`:

```json
{
  "private": true,
  "workspaces": [
    "examples/*",
    "doc",
    "packages/*"
  ],
}
```

---

## `pnpm`

For `pnpm` you will also need to create a `pnpm-workspace.yaml` file (at the root):
```yaml
packages:
  - 'examples/*'
  - 'doc'
  - 'packages/*'
```

---

## Dependency

In that case you can use your packages as dependency in your doc or example apps for instance.

React app `package.json`:

```json
{
  // ...
  "dependencies": [
    "package-a": "*",
    "package-b": "*",
    // ...
  ],
  // ...
}
```

---

## How does it works ?

Packages are symlinked in the `node_modules` at the root (most of the time):

```
root
┣ node_modules
┃ ┣ ...
┃ ┣ doc-app => ../doc
┃ ┣ ...
┃ ┣ next-app => ../examples/next
┃ ┣ ...
┃ ┣ package-a => ../packages/package-a
┃ ┣ package-b => ../packages/package-b
┃ ┣ ...
┃ ┣ react-app => ../examples/react
┃ ┗ ...
┗ ...
```

---

## `node_modules` résolution

If node do not find a required package directly in the package `node_modules` folder it will recursively look at `node_modules` in parent folders.

https://nodejs.org/dist/latest-v20.x/docs/api/modules.html#all-together

---

## Without workspaces

The solution without using workspaces is to use `npm link`.

It basically do the same thing (creating a symlink in the `node_modules`).

<v-click>

But the symlink gets removed once you install a new dependency on you project.

</v-click>
<v-click>

And you may include multiple version of the same library in your project (because the linked package may have a `node_modules`) that can break your app (example React hooks).

</v-click>

---

## Workspaces avantages

1. You can easily import a package into another one.
2. It is much easier to share some configuration between packages.
3. Adding a package in a monorepo is really easy so it leads to better structured and decoupled librairies.
4. You may use workspaces to import the last version of another project (using git modules for example).

---

## Gotcha

You can't install a package using a git URL (that points to a monorepo).

---
layout: intro-bg
image: https://images.unsplash.com/photo-1586864387789-628af9feed72
---

# Tools

<Toc maxDepth="1"/>

---

## How to manage a monorepo ?

What tool to use ?

<v-clicks>

1. Lerna ?
2. Nx ?
3. Turborepo ?
4. Changesets ?
5. Others...

</v-clicks>

---

## Lerna

[Lerna](https://lerna.js.org/) helps with:

1. running commands (example `lerna run build` will run the `build` command for all workspaces taking into account the project dependencies)
   * if `package-b` depends on `package-a`, we must build `package-a` before `package-b` and so on
2. versioning (increments package's version number) an publishing

---

## Nx

[Nx](https://nx.dev/) helps with:

1. running commands
2. caching the command results
3. sharing the cache (using cloud solution)
4. automating updating dependencies
5. code generation
6. has IDE integration

Nx is backed by Nrwl who also acquired Lerna so tools can be used together.

---

## Turborepo

[Turborepo](https://turbo.build) helps with:

1. running commands
2. caching the command results
3. sharing the cache (using cloud solution)
4. code generation
5. deploying to docker

Turborepo is backed by Vercel (Next.js).

---

## Changesets

[Changesets](https://github.com/changesets/changesets) helps with:

1. generating a changelog
2. versioning an publishing

---

## Other tools

* [Rush.js](https://rushjs.io/) (not compatible with `npm`, `yarn`, `pnpm` workspaces)
* [moon](https://moonrepo.dev/moon) (not specialized JS/TS)

Full comparison website at [monorepo.tools](https://monorepo.tools/)

---
layout: intro-bg
image: https://images.unsplash.com/photo-1453728013993-6d66e9c9123a
---

# Focus

<Toc maxDepth="1"/>

---

## Haring project (aka MFK)

![Turborepo](/turborepo.svg) <div class="text-center w-full translate-y-20">+</div> ![Changesets](/changesets.png)

---
layout: two-cols-with-title
---

## Pipelines (using `Turborepo`)

You can run command in all your packages by running `turbo run xxx`.

Example:

::left::

`./package.json`:
```json
{
  "scripts": {
    "test": "turbo run build"
  }
}
```

::right::

`./packages/*/package.json`:
```json
{
  "scripts": {
    "build": "tsc"
  }
}
```

---
layout: two-cols-with-title
---

## Task orchestration (local dependencies)

You can take into account dependencies declared in `package.json`.

Example:

::left::

`./turbo.json`:
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist"]
    },
  }
}
```

<v-click>

`outputs` is used for caching the result.

</v-click>

::right::

`./packages/package-b/package.json`:
```json
{
  "dependencies": {
    "package-a": "*"
  }
}
```

---
layout: two-cols-with-title
---

## Task orchestration (workflow)

Example:

::left::

`./turbo.json`:
```json
{
  "pipeline": {
    "test": {
      "dependsOn": ["build"]
    },
  }
}
```

::right::

Whenever we run `turbo run test`, it  will run the build command before.

Here all tests can be ran in parallel.

---
class: small
---

## Creating a Changeset

Whenever a developer adds a PR containing a feature or a fix it should run `npx changeset`.

By running this command the developer must declare:

* What packages are affected by the changes ?
* Is it a major, a minor or a patch change ?
* The description of the change.

The command will generate a changeset file in the `.changeset` folder:

```md
---
'@smile/react-front-kit': minor
---

Added `defaultOpened` prop to `CollapseButton`
```

---
class: small
---

## Creating a Changelog

Once you are ready to create a release you can run `npx changeset version`:

* All changeset files in the `.changeset` folder will be removed
* The `CHANGELOG.md` file of the packages will be updated
* The `package.json` numbers will be updated accordingly to the changeset configuration

<v-click>

By default, if `package-a` has a minor update, dependent packages (like `package-b`) will get a patch update (if they don't already have an update).

</v-click>
<v-click>

You can force all packages to have the same version number in `.changeset/config.json`:
```json
{
  "fixed": [["@smile/react-front-kit*"]],
}
```

</v-click>

---
layout: intro-bg
image: https://images.unsplash.com/photo-1516880711640-ef7db81be3e1
---

# Build

<Toc maxDepth="1"/>

---
class: small
---

## How to build a library ?

What tools should we choose ?

<v-clicks>

1. Webpack
2. Vite
3. Rollup
4. Parcel
5. Turbopack
6. esbuild
7. <del>Rome</del> <ins>Biome</ins>
8. Typescript `tsc`
9. swc
10. <del>Snowpack</del> (not maintained)
11. ...

</v-clicks>

---
class: small
---

## Parsers, Transpilers and compilers

Their purpose is to transform the code to be compatible with older browsers/node versions.

<div class="flex gap-4">
<div class="flex-1">

**Babel**

* Written in JavaScript
* Very popular
* Supports the very latest ECMAScript

</div>
<div class="flex-1">

**swc**

* Written in Rust
* 20x to 70x faster than Babel

</div>
<div class="flex-1">

**Typescript**

* Used for typechecking
* Can also be used to transform code
* Performance similar to Babel

</div>
</div>

---
class: small
---

## Linters

Their purpose is to improve the code quality.

<div class="flex gap-4">
<div class="flex-1">

**ESLint**

* Helps identifying potential issues
* Can automatically fix some issues
* Lots of rules and plugins

</div>
<div class="flex-1">

**Oxlint**

* Written in Rust
* 50x to 100x faster than eslint
* Over 200 Rules from `eslint`

</div>
</div>

---
class: small
---

## Formatters

Their purpose is to improve the code quality.

<div class="flex gap-4">
<div class="flex-1">

**prettier**

* Automatically format the code

</div>
<div class="flex-1">

**Standard**

* Linter + Formatter
* Can automatically fix some issues
* Zero config / opinionated

</div>
<div class="flex-1">

**Biome**

* Written in Rust
* Linter + Formatter
* Much faster than `prettier` and `eslint`
* 96% compatibility with `prettier`
* 170 Rules from `eslint`

</div>
</div>

---
class: small
---

## Minifiers

Their purpose is to reduce the size of the code.

<div class="flex gap-4">
<div class="flex-1">

**UglifyJS**

* Written in JavaScript
* Does not support ES6+ syntaxes
* Should be used in conjunction with a transpiler

</div>
<div class="flex-1">

**terser**

* Written in JavaScript
* Fork of `uglify-es` the UglifyJS project that supports ES6+

</div>
</div>

<v-click>

Other tools like `swc` , `esbuild`, `bun`...Etc. can also minify the code, full comparison [here](https://github.com/privatenumber/minification-benchmarks?tab=readme-ov-file#-results).

</v-click>

---
class: small
---

## Bundlers and Dev Servers 1/3

Their purpose is to build the app artifacts for production and also ease development.

<div class="flex gap-4">
<div class="flex-1">

**Webpack**

* Highly customizable
* Supports JS, CSS images...Etc.
* Tree-shaking

</div>
<div class="flex-1">

**Rollup**

* Based on `swc`
* Tree-shaking, code-splitting...etc.
* Often used for compiling librairies
* Outputs ESM, commonJS, amd, umd...etc.

</div>
<div class="flex-1">

**Parcel**

* Zero config bundler
* Based on `swc`
* Supports Typescript, JSX, CSS, CSS modules, Sass, Images...etc.

</div>
</div>

---
class: small
---

## Bundlers and Dev Servers 2/3

<div class="flex gap-4">
<div class="flex-1">

**esbuild**

* Written in go
* Supports Typescript, JSX, CSS, CSS modules...etc.
* Tree-shaking, minification
* Outputs ESM and commonJS

</div>
<div class="flex-1">

**Turbopack**

* Written in Rust
* Currently in beta
* Supports Typescript, JSX, CSS, CSS modules, SASS...etc.

</div>
<div class="flex-1">

**Vite**

* ESM based dev server
* Based on `esbuild` (dependency pre-bundling) and `Rollup` (production bundle)
* Supports Typescript, JSX, CSS, CSS modules, SASS...etc.

</div>
</div>

---
class: small
---

## Bundlers and Dev Servers 3/3

<div class="flex gap-4">
<div class="flex-1">

**WMR**

* Based on Rollup
* Supports Typescript, JSX, CSS, CSS modules, Images...etc.
* Developed by Preact team

</div>
<div class="flex-1">

**tsup**

* Based on `esbuild`
* Supports Typescript, JSX and CSS (experimental)
* Only for library

</div>
<div class="flex-1">

**...**

</div>
</div>

---
class: small
---

## JavaScript runtime

Their purpose is to run JavaScript code.

<div class="flex gap-4">
<div class="flex-1">

**Node.js**

* Very popular
* Multiple package managers: `npm`, `yarn`, `pnpm`...etc.
* Very big community

</div>
<div class="flex-1">

**Deno**

* Written in Rust
* Faster than Node.js
* Focused on security
* First class support of TypeScript
* Built-in linter, formatter and test-runner
* Low community and still immature

</div>
<div class="flex-1">

**Bun**

* Written in Zig
* Faster than Deno
* Built-in package manager, test runner and bundler
* Low community and still immature

</div>
</div>

---
class: small
---

## `package.json`

You have to declare in your `package.json` what are the entry points of the library:

* `main`: path of the file resolved when user does `require("foo")` or `import foo from "foo"`.
* `module`: not officially defined by Node.js, used by bundlers when `"type": "module"`.
* `types`: path of the typescript declaration file (`.d.ts` file).

Example:
```json
{
  "main": "./dist/index.js",
  "module": "./src/index.tsx",
  "types": "./dist/index.d.ts",
}
```

---
class: small
---

## New way of declaring

You can also now declare your package using:

* `exports`: declare all entry points of you application, subpath import is disabled (you can't do `import bar from "foo/dist/bar"` if not explicitly declared here).
* `typesVersions`: declare types for different entry-points

Example:
```json
{
 "exports": {
    ".": "./dist/index.js",
    "./server": "./dist/server.js"
  },
  "types": "./dist/index.d.ts",
  "typesVersions": {
    "*": {
      "server": [
        "./dist/server.d.ts"
      ]
    }
  },
}
```

---

## New way of declaring

Or you can also declare types directly in the `exports` field.

Example:
```json
{
 "exports": {
    ".": {
      "default": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./server": {
      "default": "./dist/server.js",
      "types": "./dist/server.d.ts"
    }
  },
}
```

---
layout: intro-bg
image: https://plus.unsplash.com/premium_photo-1681397247109-4933a1a75002
---

# Automation

<Toc maxDepth="1"/>

---
layout: two-cols-with-title
---

## Releasing and publishing (Github)

::left::

[Changeset action](https://github.com/changesets/action) can be used to automate release and publishing:

* It automatically creates a PR with the result of `npx changeset version`
* Merging that PR will automatically publish on npm

::right::

```yaml
name: Release
on:
  push:
    branches:
      - '*.x'
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Create Release Pull Request or Publish to npm
        id: changesets
        uses: changesets/action@v1
        with:
          publish: npm run publish
          version: npm run version
          commit: 'ci: version packages'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---
class: small
---

## Releasing and publishing (Gitlab)

[changesets-gitlab](https://www.npmjs.com/package/changesets-gitlab) does the same for Gitlab:

```yaml
release:
  stage: release
  image: node:lts
  rules:
    - if: $CI_COMMIT_BRANCH =~ /.*\.x$/ && $CI_COMMIT_BRANCH !~ /^changeset-release/ && $CI_PIPELINE_SOURCE == "push"
  tags:
    - k8s
  before_script: npm ci
  script:
    - |
      cat << EOF > "$HOME/.npmrc"
      //nexus.smile.fr/repository/npm-private/:_auth=$NEXUS_AUTH
      EOF
    - npm run changesets-gitlab
  variables:
    INPUT_VERSION: npm run version
    INPUT_PUBLISH: npm run publish
```

---
layout: two-cols-with-title
class: right-up
---

## Deployment (Github)

::left::

You can automate your deployments using Github pages.

::right::

```yaml
name: Deploy storybook to Pages
on:
  push:
    branches:
      - 'main'
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: 'pages'
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: npm ci
      - name: Build storybook
        run: npm run build-storybook
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./storybook-static
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

---
class: small
---

## Deployment (Gitlab)

You can use Harbor and Rancher to build you docker stack:

```yaml
docker:
  stage: harbor
  image: docker:latest
  services:
    - docker:dind
  rules:
    - if: $CI_COMMIT_BRANCH == "main" && $CI_PIPELINE_SOURCE == "push"
  tags:
    - galaxy-dind-shared
  script:
    - docker login registry.smile.fr -u $REGISTRY_USER -p $REGISTRY_TOKEN
    - docker-compose build
    - docker-compose push

deploy:
  stage: rancher
  image: alpine/k8s:1.25.14
  rules:
    - if: $CI_COMMIT_BRANCH == "main" && $CI_PIPELINE_SOURCE == "push"
  tags:
    - k8s
  script:
    - echo $KUBECONFIG | base64 -d > kubeconfig.yaml
    - export KUBECONFIG=kubeconfig.yaml
    - helm upgrade --install connectors docker-compose -n connectors
```

---

## More ressources

* [Creating a Gitlab personal token for Nexus](https://wiki.smile.fr/wiki/Nexus)
* [kompose](https://kompose.io/): converts docker compose files into helm charts
* [Update the charts for Rancher](https://wiki.smile.fr/wiki/Rancher_on_Galaxy)
* [Creating a Harbor robot account](https://wiki.smile.fr/wiki/Gitlab-CI#Authentication_to_registry)
* [React Front Kit Connectors contributing guide](https://git.smile.fr/modular-front-kit/front-kit-connectors/-/blob/main/CONTRIBUTING.md)
