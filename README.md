# slidev-theme-webhh

[![NPM version](https://img.shields.io/npm/v/slidev-theme-webhh?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-webhh)

A starter theme for [Slidev](https://github.com/slidevjs/slidev) powered presentations at Web HH MeetUps.

<!--
  Learn more about how to write a theme:
  https://sli.dev/themes/write-a-theme.html
--->

<!--
  run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>webhh</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## What you get

- Markdown based presentations
- Code highlighting and walk-throughs
- No need to worry about design

## Layouts

This theme provides the following layouts.

### `title`

Title page to open your talk with.

![Title Layout](/assets/layouts/title.png)

### `speaker`

Tell us about yourself with a picture and some bullets.

![Speaker Layout](/assets/layouts/speaker.png)

### `browser`

Showcase a website.

![Browser Layout](/assets/layouts/browser.png)

## Components

This theme provides some addition Components.

```tsx
<Emoji>✨</Emoji>
```

```tsx
<QRCode url="https://www.meetup.com/de-DE/Hamburg-React-js-Meetup/" size="200"/>
```

![Additional Components](/assets/components.png)

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
