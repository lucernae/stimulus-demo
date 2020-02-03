# Stimulus Demo

A simple demo based on [stimulus-starter](https://github.com/stimulusjs/stimulus-starter.git) repo.

You can checkout the demo like this

```
$ git clone https://github.com/lucernae/stimulus-demo.git
$ cd stimulus-demo
$ yarn install
$ yarn start
```

# About the site

The site lists recent Earthquake in Indonesia, taken from [InaSAFE Realtime](https://realtime.inasafe.org).
This site uses it's Earthquake REST API and demonstrate rendering the result as a table.

It uses expressjs as backend to fetch data from InaSAFE Realtime, then constructs HTML results in server-side. This respects the [core principle of Stimulus](https://stimulusjs.org/handbook/origin), that the HTML should be generated in server side if possible. It will help for designers and programmers to collaboratively work on a page/component.

Stimulus then is used to attach and manipulate the DOM. For example, when clicking an entry from the earthquake list, it uses [Turbolinks](https://github.com/turbolinks/turbolinks) (also sister framework of Stimulus) to navigate to the new page, based on the data of the component that we clicked.

The detail page contains information of selected earthquake, and also display the map of contours taken from InaSAFE Realtime API. Map is displayed using Leaflet with hook and manipulation from Stimulus to load the GeoJSON layer to display.

Since Turbolinks also caches the page if possible, when you go back to Earthquake list page from Earthquake details, it doesn't fetch the page again. Instead, the page was taken from cache. It also remember the scroll positions and the DOM data so it doesn't have to reload earthquake list again.