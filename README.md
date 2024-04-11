# <span id='intro'>Introduction</span>

[![Contributors](https://img.shields.io/badge/contributors-1-brightgreen.svg)](https://github.com/yahyaparvar)

This is a `create-react-app` template featuring themes, multi-language, redux\
apis, etc. We just combine two powerful tools for redux (saga & toolkit) to have a fantastic experiense with\ state management and SoC (Separation of concern).\
Let's dive into it!

# <span id='badges'>Get Started 🚀</span>

<ol>
  <li><a href='#installation'>Installation</a></li>
  <li><a href='#usage'>Usage & Features</a></li>
  <li><a href='#file-generation'>File Generation</a></li>
  <li><a href='#hooks'>Hooks</a></li>
  <li><a href='#contribute'>Contribute</a></li>
</ol>

# <span id='installation'>Installation</span>

To start the project, simply run

```
yarn
```

&

```
yarn start
```

or

```
npm i
```

&

```
npm run start
```

You will then see a preview of the template running at `localehost:3000`. That's it.

# <span id='usage'>Usage & Features</span>

Here is just part of benefits that this template provides you! (ignoring the fact that it can be used to create a full scaled applications without any issues)

**- Fantastic approach in implementing redux**

<ul>
<li>each container has a seperated slice of saga making it completely irrelevant yet connected to the main reducer (global slice)</li>
<li>easily handle asynchronous actions using saga</li>
<li>create redux slice from a simple command (<a href='#file-generation'>See file generation</a>)</li>
</ul>

**- Themes**

<ul>
<li>handle themes by just a simple enum named `Themes`. Just add a string to the enum and the font is officially added. More info in the code.</li>
<li>based on the language you provided the font will change accordingly. so each language has it's own font (best for multi-language)</li>
</ul>

**- Multi language**

<ul>
<li>"rtl" support </li>
<li>auto completion</li>
</ul>

# <span id='file-generation'>File Generation</span>

Genrate a container with just a simple command (consider container as a new page in your app)\
simply run:

```
yarn generate container
```

you will be asked a series of questions in the terminal, like the name of your new page and so on...\
then a completely new page with a auto generated redux file is presented to you in your `app/containers` like so:

```
src
│
└── app
    └── containers
        ├── NEWLY CREATED CONTAINER (PAGE)
```

# <span id='hooks'>Hooks</span>

Use any slice anywhere in your app, simply by

```
use_CONTAINERNAME_Slice()
```

**for example** if we wanna use home slice

```
useHomeSlice()
```

and now whe can get all the data we want from that slice.\
**important note**: You must add a slice using its hooks to the component if it is not in context of that container.

# <span id='contribute'>Contribute</span>

Contributions are always welcome. Contact me!

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;YAYA 💞
