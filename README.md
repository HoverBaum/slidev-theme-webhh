# slidev-theme-webhh

A starter theme for [Slidev](https://github.com/slidevjs/slidev) powered presentations at Web HH MeetUps.

- [React HH](https://www.meetup.com/de-DE/Hamburg-React-js-Meetup/)
- [TypeScript HH](https://www.meetup.com/de-DE/Hamburg-TypeScript-Meetup-Group/)

Join our [Web HH Discord](https://discord.gg/2nAc69Hdc8).

Theme Demo: [slidev-theme-webhh.vercel.app](https://slidev-theme-webhh.vercel.app/1)

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>webhh</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## What you get

- Markdown based presentations
- Code highlighting and walk-throughs
- Dark Mode

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

Missing a component? Created something great for your talk and want to give back to the community?

Contribute to this repo 😊

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
