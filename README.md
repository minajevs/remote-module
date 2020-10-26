# Remote Modules

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/minajevs/remote-modules/CI)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@doubledashdev/remote-modules)
![npm](https://img.shields.io/npm/v/@doubledashdev/remote-modules)

> Dynamically loading JS Modules

Simple, low-code, zero-dependency remote module loader because why not.

`npm install @doubledashdev/remote-modules`

```ts
const url = 'https://raw.githubusercontent.com/jonschlinkert/is-number/master/index.js'

const isNumber = await load(url)

isNumber(42) // returns true
```

## Intro

Dynamic module loading allows you to load JS modules from the internet dynamically, bypassing whatever build & load systems (babel, webpack, browserify, etc.)

`AMD`, `UMD`, `CommonJS` and `SystemJS` modules are supported. You can load any module from the internet built for one of those module loaders using simple `load(url)` function.

~~Brazenly stolen~~ Forked from https://github.com/Paciolan/remote-module-loader

## Features

- Seamless support for `AMD`, `UMD`, `CommonJS` and `SystemJS` modules
- Async module loading using promises or `async / await`
- Configurable fetching
- Configurable module dependencies
- TypeScript typings for expected module

## Examples

### Basic usage

```ts
import { load } from '@doubledashdev/remote-modules'

const url = 'https://raw.githubusercontent.com/jonschlinkert/is-number/master/index.js'

const isNumber = await load(url)

isNumber(42) // returns true
```

### Providing custom fetcher

```ts
import { load } from '@doubledashdev/remote-modules'
import axios from 'axios'

const url = 'https://raw.githubusercontent.com/jonschlinkert/is-number/master/index.js'

const fetcher = url => axios.get(url).then(request => request.data)

const isNumber = await load(url, { fetcher })

isNumber(42) // returns true
```

### Providing dependencies

```ts
import { load } from '@doubledashdev/remote-modules'
import isNumber from 'is-number'

const url = 'https://raw.githubusercontent.com/jonschlinkert/is-odd/master/index.js'

const dependencies = {
  'is-number': isNumber,
}

const isOdd = await load(url, { dependencies })

isOdd(42) // returns false
```

### Providing expected module type

```ts
import { load } from '@doubledashdev/remote-modules'

const url = 'https://raw.githubusercontent.com/jonschlinkert/is-number/master/index.js'

const isNumber = await load<(value: number) => boolean>(url)

isNumber(42) // returns true, and is well-typed
```

---

MIT License
