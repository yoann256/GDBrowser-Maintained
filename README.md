> hi, this is colon from the future.
> 
> what the FUCK was wrong with me back then???? seriously this is some of  the worst code i've ever seen
> 
> welp, here's the readme. but you've been warned,,,
>
> <sup>Colon, 2022</sup>

> hey so it's me just to tell u gh pages is broken for this so pls run this on your own machine, thx <3
>
> <sup>Rindo, 2025</sup>

![GitHub License](https://img.shields.io/github/license/yoann256/GDBrowser-Maintained)
![GitHub package.json version](https://img.shields.io/github/package-json/v/yoann256/GDBrowser-Maintained)


> [!NOTE]
> this repo is updated for 2.2

## Todo:
- [ ] Add support for events and *lists* *(in the work)*
- [ ] Add new 2.2 icons
- [X] Suffer from emotional damage beacause this code is so hard to read and you know therhkkhglfkgl.. (i slept on my keyborad while writing this, sorry)

Uh... so I've ~~never~~ actually used GitHub before this. (colon didn't) But I'll try to explain everything going on here. <sup>and me for my modifications</sup>

  

Sorry for ~~my~~ **colon's** messy code. <sup>i code better than that furry guy</sup> It's why ~~I~~ colon was skeptical about making this open source, but you know what, the code runs fine in the end.

**~~Note: i'm too lazy to edit this readme further, i'll edit it only if i add a new feature or smth like that~~**
  
  ## How do I run this?
If you're just here to use GDBrowser locally because the site is down or blocked or restricted or god knows what, this is the only part you really need to read


To run GDBrowser locally:
1) Install [node.js](https://nodejs.org/en/download/) if you don't already have it
2) Clone/download this repository  
3) Open cmd/powershell/terminal in the main folder (with index.js)
4) Type `npm i` to flood your hard drive with code that's 99% useless <sup>frr</sup>
5) Type `node index` to run the web server
6) GDBrowser is now running locally at http://localhost:2000


If you want to disable rate limits, ip forwarding, etc you can do so by modifying `settings.js`. Doing this is probably a good idea if you feel like obliterating Rob's servers for some reason. (please don't)\
Remember, RubRub is always watching...


## Using this for a GDPS?

~~I mean, sure. Why not.~~
Hold up, wait a minute... private servers are an official feature now!


If you would like to add your GDPS to GDBrowser, ~~[fill out this quick form](https://forms.gle/kncuRqyKykQX42QD7) and I'll be happy to add it (provided the server is relatively large and active)~~\
Easier, just open a GitHub issue, I'll aceept every server, big or small!
  
  
If you 100% insist on adding a private server to your own magical little fork, you can do so by adding it to **servers.json**. Simply add a new object to the array with the following information:

| identifier       | description                  |
|:----------------:|:-----------------------------:|
| `name`           | The display name of the server |
| `link`           | The server's website URL (unrelated to the actual endpoint) |
| `author`         | The creator(s) of the server |
| `authorLink`     |  The URL to open when clicking on the creator's name |
| `id`             | An ID for the server, also used as the subdomain (e.g. `something` would become `something.gdbrowser.com`) |
| `endpoint`       | The actual endpoint to ~~spam~~ send requests to (e.g. `http://boomlings.com/database/` - make sure it ends with a slash!) |


There's also a few optional values for fine-tuning. I'll add more over time

| identifier       | description                   | type |
|:----------------:|:-----------------------------:|:----:|
| `timestampSuffix` | A string to append at the end of timestamps. Vanilla GD uses " ago" | string |
| `demonList` | The URL of the server's Demon List API, if it has one (e.g. `http://pointercrate.com/` - make sure it ends with a slash!) | string |
| `disabled` | An array of menu buttons to "disable" (mappacks, gauntlets, daily, weekly, etc). They appear greyed out but are still clickable. | array |
| `pinned` | "Pins" the server to the top of the GDPS list. It appears above all unpinned servers and is not placed in alphabetical order. | bool |
| `onePointNine` | Makes a bunch of fancy changes to better fit 1.9 servers. (removes orbs/diamonds, hides some pointless buttons, etc) | bool |
| `weeklyLeaderboard` | Enables the lost but not forgotten Weekly Leaderboard, for servers that still milk it | bool |
| `substitutions` | A list of parameter substitutions, because some servers rename/obfuscate them. (e.g. `{ "levelID": "oiuyhxp4w9I" }`) | object |
| `overrides` | A list of endpoint substitutions, because some servers use renamed or older versions. (e.g. `{ "getGJLevels21": "dorabaeChooseLevel42" }`) | object |

  

# Folders

  

GDBrowser has a lot of folders. [citation needed]\
Here's a ``tree`` command just to make this readme longer:
```
├───.github
│   └───workflows
├───api
│   ├───leaderboards
│   ├───messages
│   └───post
├───assets
│   ├───achievements
│   ├───boomlings
│   │   ├───icons
│   │   ├───levels
│   │   └───powerups
│   ├───css
│   ├───deatheffects
│   ├───difficulties
│   ├───gauntlets
│   ├───gdps
│   ├───iconkitbuttons
│   ├───levelstyle
│   ├───objects
│   │   ├───blocks
│   │   ├───orbs
│   │   ├───portals
│   │   └───triggers
│   ├───trails
│   └───trophies
├───classes
├───html
├───iconkit
│   ├───extradata
│   ├───icons
│   ├───libs
│   ├───newicons
│   ├───newpremade
│   ├───premade
│   └───sacredtexts
├───misc
│   ├───analysis
│   └───manual parsers
└───node_modules
    ├───.bin
    ├───@jimp
    │   ├───bmp
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   │       └───images
    │   ├───core
    │   │   ├───dist
    │   │   │   ├───composite
    │   │   │   ├───modules
    │   │   │   └───utils
    │   │   ├───es
    │   │   │   ├───composite
    │   │   │   ├───modules
    │   │   │   └───utils
    │   │   └───types
    │   ├───custom
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───types
    │   ├───gif
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───jpeg
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   │       └───images
    │   ├───plugin-blit
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   │       └───images
    │   │           └───cat-results
    │   ├───plugin-blur
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───plugin-color
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   │       └───images
    │   ├───plugin-contain
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   ├───plugin-cover
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   ├───plugin-crop
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   ├───plugin-displace
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───plugin-dither
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───plugin-flip
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───plugin-gaussian
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───plugin-invert
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───plugin-mask
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   ├───plugin-normalize
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   ├───plugin-print
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───fonts
    │   │   │   └───open-sans
    │   │   │       ├───open-sans-10-black
    │   │   │       ├───open-sans-12-black
    │   │   │       ├───open-sans-128-black
    │   │   │       ├───open-sans-128-white
    │   │   │       ├───open-sans-14-black
    │   │   │       ├───open-sans-16-black
    │   │   │       ├───open-sans-16-white
    │   │   │       ├───open-sans-32-black
    │   │   │       ├───open-sans-32-white
    │   │   │       ├───open-sans-64-black
    │   │   │       ├───open-sans-64-white
    │   │   │       ├───open-sans-8-black
    │   │   │       └───open-sans-8-white
    │   │   ├───src
    │   │   └───test
    │   │       └───images
    │   ├───plugin-resize
    │   │   ├───dist
    │   │   │   └───modules
    │   │   ├───es
    │   │   │   └───modules
    │   │   ├───src
    │   │   │   └───modules
    │   │   └───test
    │   ├───plugin-rotate
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   ├───plugin-scale
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───plugins
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   ├───png
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   │       └───images
    │   ├───tiff
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───src
    │   │   └───test
    │   │       └───images
    │   ├───types
    │   │   ├───dist
    │   │   ├───es
    │   │   └───src
    │   └───utils
    │       ├───dist
    │       ├───es
    │       └───src
    ├───@types
    │   ├───base64-js
    │   └───pako
    ├───@xmldom
    │   └───xmldom
    │       └───lib
    ├───abort-controller
    │   └───dist
    ├───accepts
    │   └───node_modules
    │       └───negotiator
    │           └───lib
    ├───ag-psd
    │   ├───dist
    │   └───dist-es
    ├───agent-base
    │   ├───dist
    │   │   └───src
    │   ├───node_modules
    │   │   ├───debug
    │   │   │   └───src
    │   │   └───ms
    │   └───src
    ├───ajv
    │   ├───dist
    │   ├───lib
    │   │   ├───compile
    │   │   ├───dot
    │   │   ├───dotjs
    │   │   └───refs
    │   └───scripts
    ├───any-base
    │   ├───dist
    │   └───src
    ├───array-flatten
    ├───arrify
    ├───asn1
    │   └───lib
    │       └───ber
    ├───assert-plus
    ├───asynckit
    │   └───lib
    ├───aws-sign2
    ├───aws4
    ├───axios
    │   ├───dist
    │   └───lib
    │       ├───adapters
    │       ├───cancel
    │       ├───core
    │       └───helpers
    ├───base64-js
    ├───bcrypt-pbkdf
    ├───bignumber.js
    │   └───doc
    ├───bl
    │   ├───node_modules
    │   │   └───inherits
    │   └───test
    ├───bmp-js
    │   ├───lib
    │   └───test
    ├───body-parser
    │   ├───lib
    │   │   └───types
    │   └───node_modules
    │       ├───http-errors
    │       ├───inherits
    │       └───on-finished
    ├───buffer
    ├───buffer-equal
    │   ├───example
    │   └───test
    ├───buffer-equal-constant-time
    ├───bytes
    ├───call-bind-apply-helpers
    │   ├───.github
    │   └───test
    ├───call-bound
    │   ├───.github
    │   └───test
    ├───canvas
    │   ├───build
    │   │   └───Release
    │   ├───lib
    │   ├───src
    │   │   ├───backend
    │   │   └───bmp
    │   └───util
    ├───caseless
    ├───centra
    │   └───model
    ├───chownr
    ├───color
    ├───color-convert
    ├───color-name
    ├───color-string
    ├───combined-stream
    │   └───lib
    ├───compressible
    ├───compression
    ├───connect-timeout
    ├───content-disposition
    ├───content-type
    ├───cookie
    ├───cookie-signature
    ├───core-js
    │   ├───build
    │   ├───client
    │   ├───core
    │   ├───es5
    │   ├───es6
    │   ├───es7
    │   ├───fn
    │   │   ├───array
    │   │   │   └───virtual
    │   │   ├───date
    │   │   ├───dom-collections
    │   │   ├───error
    │   │   ├───function
    │   │   │   └───virtual
    │   │   ├───json
    │   │   ├───map
    │   │   ├───math
    │   │   ├───number
    │   │   │   └───virtual
    │   │   ├───object
    │   │   ├───promise
    │   │   ├───reflect
    │   │   ├───regexp
    │   │   ├───set
    │   │   ├───string
    │   │   │   └───virtual
    │   │   ├───symbol
    │   │   ├───system
    │   │   ├───typed
    │   │   ├───weak-map
    │   │   └───weak-set
    │   ├───library
    │   │   ├───core
    │   │   ├───es5
    │   │   ├───es6
    │   │   ├───es7
    │   │   ├───fn
    │   │   │   ├───array
    │   │   │   │   └───virtual
    │   │   │   ├───date
    │   │   │   ├───dom-collections
    │   │   │   ├───error
    │   │   │   ├───function
    │   │   │   │   └───virtual
    │   │   │   ├───json
    │   │   │   ├───map
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   │   └───virtual
    │   │   │   ├───object
    │   │   │   ├───promise
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───set
    │   │   │   ├───string
    │   │   │   │   └───virtual
    │   │   │   ├───symbol
    │   │   │   ├───system
    │   │   │   ├───typed
    │   │   │   ├───weak-map
    │   │   │   └───weak-set
    │   │   ├───modules
    │   │   ├───stage
    │   │   └───web
    │   ├───modules
    │   │   └───library
    │   ├───stage
    │   └───web
    ├───core-util-is
    │   └───lib
    ├───dashdash
    │   ├───etc
    │   └───lib
    ├───debug
    │   └───src
    ├───decompress-response
    ├───deep-extend
    │   └───lib
    ├───delayed-stream
    │   └───lib
    ├───depd
    │   └───lib
    │       └───browser
    ├───destroy
    ├───detect-libc
    │   └───lib
    ├───dom-walk
    │   └───example
    ├───dunder-proto
    │   ├───.github
    │   └───test
    ├───ecc-jsbn
    │   └───lib
    ├───ecdsa-sig-formatter
    │   └───src
    ├───ee-first
    ├───encodeurl
    ├───end-of-stream
    ├───es-define-property
    │   ├───.github
    │   └───test
    ├───es-errors
    │   ├───.github
    │   └───test
    ├───es-object-atoms
    │   ├───.github
    │   └───test
    ├───escape-html
    ├───etag
    ├───event-target-shim
    │   └───dist
    ├───exif-parser
    │   ├───cmd
    │   ├───lib
    │   └───test
    ├───expand-template
    ├───express
    │   ├───lib
    │   │   ├───middleware
    │   │   └───router
    │   └───node_modules
    │       ├───http-errors
    │       ├───inherits
    │       └───on-finished
    ├───express-rate-limit
    │   └───lib
    ├───extend
    ├───extsprintf
    │   └───lib
    ├───fast-deep-equal
    │   └───es6
    ├───fast-json-stable-stringify
    │   ├───.github
    │   ├───benchmark
    │   ├───example
    │   └───test
    ├───fast-text-encoding
    ├───file-type
    ├───finalhandler
    │   └───node_modules
    │       └───on-finished
    ├───follow-redirects
    ├───forever-agent
    ├───form-data
    │   └───lib
    ├───forwarded
    ├───fresh
    ├───fs-constants
    ├───function-bind
    │   ├───.github
    │   └───test
    ├───gaxios
    │   └───build
    │       └───src
    ├───gcp-metadata
    │   └───build
    │       └───src
    ├───get-intrinsic
    │   ├───.github
    │   └───test
    ├───get-proto
    │   ├───.github
    │   └───test
    ├───getpass
    │   └───lib
    ├───github-from-package
    │   ├───example
    │   └───test
    ├───global
    ├───google-auth-library
    │   └───build
    │       └───src
    │           ├───auth
    │           └───crypto
    │               ├───browser
    │               └───node
    ├───google-p12-pem
    │   └───build
    │       └───src
    │           └───bin
    ├───google-spreadsheet
    │   └───lib
    ├───gopd
    │   ├───.github
    │   └───test
    ├───gtoken
    │   └───build
    │       └───src
    ├───har-schema
    │   └───lib
    ├───har-validator
    │   └───lib
    ├───has-symbols
    │   ├───.github
    │   └───test
    │       └───shams
    ├───hasown
    │   └───.github
    ├───http-errors
    │   └───node_modules
    │       ├───depd
    │       │   └───lib
    │       │       ├───browser
    │       │       └───compat
    │       ├───setprototypeof
    │       └───statuses
    ├───http-signature
    │   └───lib
    ├───https-proxy-agent
    │   ├───dist
    │   └───node_modules
    │       ├───debug
    │       │   └───src
    │       └───ms
    ├───iconv-lite
    │   ├───encodings
    │   │   └───tables
    │   └───lib
    ├───ieee754
    ├───inherits
    ├───ini
    ├───ipaddr.js
    │   └───lib
    ├───is-arrayish
    ├───is-function
    ├───is-stream
    ├───is-typedarray
    ├───isstream
    ├───jimp
    │   ├───browser
    │   │   ├───examples
    │   │   └───lib
    │   ├───dist
    │   ├───es
    │   ├───fonts
    │   │   └───open-sans
    │   │       ├───open-sans-10-black
    │   │       ├───open-sans-12-black
    │   │       ├───open-sans-128-black
    │   │       ├───open-sans-128-white
    │   │       ├───open-sans-14-black
    │   │       ├───open-sans-16-black
    │   │       ├───open-sans-16-white
    │   │       ├───open-sans-32-black
    │   │       ├───open-sans-32-white
    │   │       ├───open-sans-64-black
    │   │       ├───open-sans-64-white
    │   │       ├───open-sans-8-black
    │   │       └───open-sans-8-white
    │   └───types
    │       └───ts3.1
    ├───jpeg-js
    │   └───lib
    ├───jsbn
    ├───json-bigint
    │   └───lib
    ├───json-schema
    │   └───lib
    ├───json-schema-traverse
    │   └───spec
    │       └───fixtures
    ├───json-stringify-safe
    │   └───test
    ├───jsprim
    │   └───lib
    ├───jwa
    ├───jws
    │   └───lib
    ├───load-bmfont
    │   ├───lib
    │   └───node_modules
    │       └───phin
    │           └───lib
    ├───lodash
    │   └───fp
    ├───lru-cache
    ├───math-intrinsics
    │   ├───.github
    │   ├───constants
    │   └───test
    ├───media-typer
    ├───merge-descriptors
    ├───methods
    ├───mime
    │   └───src
    ├───mime-db
    ├───mime-types
    │   └───node_modules
    │       └───mime-db
    ├───mimic-response
    ├───min-document
    │   ├───event
    │   └───test
    │       └───static
    ├───minimist
    │   ├───example
    │   └───test
    ├───mkdirp
    │   ├───bin
    │   ├───examples
    │   └───test
    ├───mkdirp-classic
    ├───ms
    ├───napi-build-utils
    │   └───.github
    │       └───workflows
    ├───negotiator
    │   └───lib
    ├───node-abi
    ├───node-addon-api
    │   └───tools
    ├───node-fetch
    │   └───lib
    ├───node-forge
    │   ├───dist
    │   ├───flash
    │   │   └───swf
    │   └───lib
    ├───oauth-sign
    ├───object-inspect
    │   ├───.github
    │   ├───example
    │   └───test
    │       └───browser
    ├───omggif
    ├───on-finished
    ├───on-headers
    ├───once
    ├───pako
    │   ├───dist
    │   └───lib
    │       ├───utils
    │       └───zlib
    ├───parse-bmfont-ascii
    ├───parse-bmfont-binary
    ├───parse-bmfont-xml
    │   └───lib
    ├───parse-headers
    ├───parseurl
    ├───path-to-regexp
    ├───performance-now
    │   ├───lib
    │   ├───src
    │   └───test
    │       └───scripts
    ├───phin
    │   └───lib
    ├───pixelmatch
    │   ├───bin
    │   └───test
    │       └───fixtures
    ├───plist
    │   ├───.github
    │   │   └───workflows
    │   ├───dist
    │   ├───examples
    │   │   └───browser
    │   └───lib
    ├───pngjs
    │   └───lib
    ├───prebuild-install
    │   └───node_modules
    │       └───minimist
    │           ├───.github
    │           ├───example
    │           └───test
    ├───process
    ├───proxy-addr
    ├───psl
    │   ├───data
    │   ├───dist
    │   └───types
    ├───pump
    │   └───.github
    ├───punycode
    ├───qs
    │   ├───.github
    │   ├───dist
    │   ├───lib
    │   └───test
    ├───range-parser
    ├───raw-body
    │   └───node_modules
    │       ├───http-errors
    │       └───inherits
    ├───rc
    │   ├───lib
    │   ├───node_modules
    │   │   └───minimist
    │   │       ├───.github
    │   │       ├───example
    │   │       └───test
    │   └───test
    ├───readable-stream
    │   └───lib
    │       └───internal
    │           └───streams
    ├───regenerator-runtime
    ├───request
    │   ├───lib
    │   └───node_modules
    │       └───qs
    │           ├───.github
    │           ├───dist
    │           ├───lib
    │           └───test
    ├───safe-buffer
    ├───safer-buffer
    ├───sax
    │   └───lib
    ├───semver
    │   ├───bin
    │   ├───classes
    │   ├───functions
    │   ├───internal
    │   └───ranges
    ├───send
    │   └───node_modules
    │       ├───encodeurl
    │       ├───http-errors
    │       ├───inherits
    │       ├───ms
    │       └───on-finished
    ├───serve-static
    ├───setprototypeof
    │   └───test
    ├───sharp
    │   ├───build
    │   │   └───Release
    │   ├───install
    │   ├───lib
    │   ├───node_modules
    │   │   ├───.bin
    │   │   ├───detect-libc
    │   │   │   ├───bin
    │   │   │   └───lib
    │   │   └───node-addon-api
    │   │       └───tools
    │   ├───src
    │   │   └───libvips
    │   │       └───cplusplus
    │   └───vendor
    │       └───8.11.3
    │           └───win32-x64
    │               ├───include
    │               │   ├───aom
    │               │   ├───fontconfig
    │               │   ├───freetype2
    │               │   │   └───freetype
    │               │   │       └───config
    │               │   ├───fribidi
    │               │   ├───gdk-pixbuf-2.0
    │               │   │   └───gdk-pixbuf
    │               │   ├───gio-win32-2.0
    │               │   │   └───gio
    │               │   ├───glib-2.0
    │               │   │   ├───gio
    │               │   │   ├───glib
    │               │   │   │   └───deprecated
    │               │   │   └───gobject
    │               │   ├───harfbuzz
    │               │   ├───libexif
    │               │   ├───libgsf-1
    │               │   │   └───gsf
    │               │   ├───libheif
    │               │   ├───libpng16
    │               │   ├───librsvg-2.0
    │               │   │   └───librsvg
    │               │   ├───libxml2
    │               │   │   └───libxml
    │               │   ├───orc-0.4
    │               │   │   ├───orc
    │               │   │   └───orc-test
    │               │   ├───pango-1.0
    │               │   │   └───pango
    │               │   ├───pixman-1
    │               │   ├───vips
    │               │   └───webp
    │               └───lib
    │                   └───glib-2.0
    │                       └───include
    ├───side-channel
    │   ├───.github
    │   └───test
    ├───side-channel-list
    │   ├───.github
    │   └───test
    ├───side-channel-map
    │   ├───.github
    │   └───test
    ├───side-channel-weakmap
    │   ├───.github
    │   └───test
    ├───simple-concat
    │   └───test
    ├───simple-get
    │   └───.github
    │       └───workflows
    ├───simple-swizzle
    ├───sshpk
    │   ├───bin
    │   ├───lib
    │   │   └───formats
    │   └───man
    │       └───man1
    ├───statuses
    ├───string_decoder
    │   └───lib
    ├───strip-json-comments
    ├───tar-fs
    │   └───test
    │       └───fixtures
    │           ├───a
    │           ├───b
    │           │   └───a
    │           ├───d
    │           │   ├───sub-dir
    │           │   └───sub-files
    │           └───e
    │               └───directory
    ├───tar-stream
    ├───timm
    │   ├───.github
    │   │   └───workflows
    │   ├───lib
    │   └───src
    ├───tinycolor2
    │   ├───cjs
    │   ├───dist
    │   └───esm
    ├───toidentifier
    ├───tough-cookie
    │   └───lib
    ├───tr46
    │   └───lib
    ├───tunnel-agent
    ├───tweetnacl
    ├───type-is
    ├───unpipe
    ├───uri-js
    │   └───dist
    │       ├───es5
    │       └───esnext
    │           └───schemes
    ├───utif
    │   └───node_modules
    │       └───pako
    │           ├───dist
    │           └───lib
    │               ├───utils
    │               └───zlib
    ├───util-deprecate
    ├───utils-merge
    ├───uuid
    │   ├───bin
    │   └───lib
    ├───vary
    ├───verror
    │   └───lib
    ├───webidl-conversions
    │   └───lib
    ├───whatwg-url
    │   └───lib
    ├───wrappy
    ├───xhr
    │   └───.vscode
    ├───xml-parse-from-string
    ├───xml2js
    │   ├───lib
    │   └───node_modules
    │       └───xmlbuilder
    │           ├───lib
    │           └───typings
    ├───xmlbuilder
    │   ├───.vscode
    │   ├───lib
    │   ├───perf
    │   │   └───basic
    │   └───typings
    ├───xtend
    └───yallist
```

I pride myself in keeping my files neat, without doing the whole `src/main/data/stuff/code/homework/newfolder/util/actualcode` garbage 

  

Most folders contain exactly what you'd expect, but here's some in-depth info in case you're in the dark.

  

## API

This is where all the backend stuff happens! Yipee!

  

They're all fairly similar. Fetch something, parse the response, and serve it in a crisp and non-intimidating JSON. This is probably what you came for.


  

## Assets

Assets! Assets everywhere!

  

All the GD stuff was ripped straight from the GD spritesheets via [Absolute's texture splitter hack](https://youtu.be/pYQgIyNhow8). If you want a nice categorized version, [I've done all the dirty work for you.](https://www.mediafire.com/file/4d99bw1zhwcl507/textures.zip/file)

  

I'd explain what's in all the subfolders but it's pretty obvious. I tried my best to organize everything nicely.

  

## Classes

What's a class you ask? Good question.

  

I guess the best way to put it is uh... super fancy functions???

  

Level.js parses the server's disgusting response and sends back a nice object with all the level info

  

XOR.js encrypts/decrypts stuff like GD passwords

  

## HTML

The HTML files! Nothing too fancy, since it can all be seen directly from gdbrowser. Note that profile.html and level.html (and some parts of home.html) have [[VARIABLES]] (name, id, etc) replaced by the server when they're sent.


## Misc

Inevitable misc folder

  

**Level Analysis Stuff (in a separate folder)**

  
| name | description |
|:----:|:-----------:|
| `blocks.json` | The object IDs in the different 'families' of blocks |
| `colorProperties.json` | Color channel cheatsheet |
| `initialProperties.json` | Level settings cheatsheet |
| `objectProperties.json` | Object property cheatsheet. Low budget version of [AlFas' one](https://github.com/AlFasGD/GDAPI/blob/master/GDAPI/GDAPI/Enumerations/GeometryDash/ObjectProperty.cs) |
| `objects.json` | IDs for portals, orbs, triggers, and misc stuff |

  

**Everything Else**

  
| name | description |
|:----:|:-----------:|
| `achievements.json` | List of all GD/meltdown/subzero/etc achievements. `parseAchievementPlist.js` automatically creates this file |
| `achievementTypes.json` | An object containing different categories of achievements (stars, shards, vault, etc) and how to identify them |
| `credits.json` | Credits! (shown on the homepage) | 
| `dragscroll.js` | Used on several pages for drag scrolling |
| `global.js` | Excecuted on most pages. Used for the 'page isn't wide enough' message, back button, icons, and a few other things |
| `music.json` | An array of the official GD tracks (name, artist) |
| `sampleIcons.json` | A pool of icons, one of which will randomly appear when visiting the icon kit. Syntax is [Name, ID, Col1, Col2, Glow] |
| `secretStuff.json` | GJP goes here, needed for level leaderboards. Not included in the repo for obvious reasons |

---

  

happy gdbrowsing and god bless.
