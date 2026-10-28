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
  image: [
    "projects/my-project/preview.jpg",
    "projects/my-project/results.png"
  ],
  imageAlt: ["Project preview", "Project results"],
  link: "https://example.com"
}
```

For one image, `image` can be a single path string. For an image gallery, use an array of paths as above; the images display in a grid and open in a full-screen viewer with previous/next controls. `imageAlt` can be a matching array of descriptions, or one shared description. For a video, use `video: "projects/my-project/demo.mp4"` and optionally add a `poster` image.

Project skills are combined into the profile automatically. The groups are configured in `profile.skillGroups` (`soft`, `hard`, and `tools`), and their colors are styled in `project-presentation.css`. Categorize project skills in the `skillCategories` map in `data.js`; skills without a category appear under Technical skills. Add profile-only skills directly to the appropriate `profile.skillGroups` entry.
