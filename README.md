# Portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript. Open `index.html` in a browser; no build step or dependencies are required.

## Edit your profile

Update your name, bio, contact details, and profile links in `data.js`. The profile photo is `my_photo.jpg`; replace that file with another image using the same name, or update its path in `index.html`.

## Add a project

Add an object to the `projects` array in `data.js`. Use `goal`, `technicalDescription`, and `result` to describe the project in separate sections. Add project images or videos under `projects/`, then reference them with a path relative to `index.html`.

```js
{
  date: "2025-06",
  name: "Project name",
  category: "PERSONAL PROJECT",
  kind: "DESIGN & DEVELOPMENT",
  goal: "What problem or need did the project address?",
  technicalDescription: "What did you build, and how?",
  result: "What was achieved? Include measured results where available.",
  skills: ["JavaScript", "UI design"],
  image: "projects/my-project/preview.jpg",
  imageAlt: "A preview of the project",
  link: "https://example.com"
}
```

Project skills are combined into the profile automatically. Categorize each skill in the `skillCategories` map in `data.js`; skills without a category appear under Technical skills. Profile skills are listed in `profile.skillGroups`.

## Privacy

`UserNote.md` is excluded by `.gitignore` and should stay local. Review `data.js` and `projects/` before publishing because their contents are public in a public repository. Do not store secrets in website files.
