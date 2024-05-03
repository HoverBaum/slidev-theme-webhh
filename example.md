---
theme: ./

layout: title
author: Your Name
---

# WebHH Theme

A Sli.dev theme for Hamburgs web Meetups.

---

# WebHH Theme

Slide theme for Hamburgs Web MeetUps.

Continue on to see features.

<br/>

## How to use

Start a new [Slidev](https://sli.dev/) project using: `npm init slidev@latest`.

Then add the following at the top of your slides and run `npm run dev` to install the theme.

```
theme: webhh
```

Make sure to your name as `author: Your Name Here` in the initial frontmatter.

---

# Layout

This theme provides a set of layout and default slides that you can use:

- Title
- Speaker
- Browser

And all [Slidev layouts](https://sli.dev/builtin/layouts)

---
layout: speaker
speakerImage: https://cover.sli.dev
---

# Your Name

- bullets
- about
- you <Emoji>🚀</Emoji>

<!-- 
Create a folder named `public` and put your image there. If your image is `public/speaker.jpg` then set `speakerImage: /speaker.jpg` on this slide. 
-->

---
layout: browser
url: https://thebestmotherfucking.website/
fallbackImage: /assets/logo.png
---

<!-- 
Use this to showcase websites live in your presentation. Works great to live and interactive examples.
A lot of big websites block iFraming through content policy headers. Nothing we can do.
-->

---

# Special components

```tsx
<Emoji>✨</Emoji>
```

Uses [Noto Emoji](https://fonts.google.com/noto/specimen/Noto+Emoji) for simple Emojis ✨ <Emoji>→</Emoji> <Emoji>✨</Emoji>

```tsx
<QRCode url="https://www.meetup.com/de-DE/Hamburg-React-js-Meetup/" size="200"/>
```

Dynamically render a QRCode.

<QRCode url="https://www.meetup.com/de-DE/Hamburg-React-js-Meetup/" size="200"/>

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd>  | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-right
image: https://cover.sli.dev
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---

# Code walk through

Use line-based code highlighting to walk us through your thoughts.


```ts {all|1|2|1-2|4|all}
const one = 'Start here'
const two = 'Then another thing happenes'

const finally = 'See everything'
```

---
layout: two-cols-header
---

# Hamburgs Web MeetUps

::left::

## React

<QRCode url="https://www.meetup.com/de-DE/Hamburg-React-js-Meetup/"/>

::right::

## TypeScript


<QRCode url="https://www.meetup.com/de-DE/Hamburg-TypeScript-Meetup-Group/"/>


---
layout: center
class: "text-center"
---

# Give your talk <Emoji>🚀</Emoji>

