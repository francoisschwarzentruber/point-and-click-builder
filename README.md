# Point and click builder

This software is made for building any point an click for the Web. This software is intended to be as simple as possible. In public/ you add a new folder for your project (for instance "gaspard", or "miaou").
This folder contains all your images and sounds. It also contains a file called scene.xml that describes the logic of the scene.


# Example

You may find an example of a point and click here:
http://people.irisa.fr/Francois.Schwarzentruber/anniversaire-de-gaspard/


# Description of a scene

- ```<scene>...</scene>``` are the main tags.
- ```<scene>...</scene>``` are the main tags.
- ```<object id="oeufs" x="98" y="630" width="42" />``` means that there is an object called oeufs. Its picture is oeufs.png. Its position is (98, 630). Its width is 42 (that is, the image is resized).
- ```<object id="robinet+" src="cuisineOuverte" x="20" y="420" width="120" height="540" />``` means that there is an object called robinet+. Its position is (20, 420). Its width is 120 and height is 540. The image is taken from cuisineOuverte.png.
- ```<audio id="placardEvier+" />``` means that there is placardEvier+.mp3 that exists and should be played when placardEvier+ appears.
- If robinet- and robinet+ exists, it means that the two objects toggle when you click on them.
- An object containing a "+", e.g. saladier+sucre appears only if sucre is put on saladier.

		

---
# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
