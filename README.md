# Portfolio Webpage

A responsive personal portfolio built with plain HTML, CSS, and JavaScript. It has an about panel, an automatically combined skills list, and a project timeline. No build tools or dependencies are required; open `index.html` in a browser to view it.

## Customize

Edit the profile object in data.js to update your name, initials, role, bio, location, email, social links, and skills.

## Add a project

Add a new object to the `projects` array in `data.js`. Projects are sorted by their `date` in descending order (newest first). Example:

```js
{
  date: "2025-06",
  name: "Project name",
  category: "PERSONAL PROJECT",
  kind: "DESIGN & DEVELOPMENT",
  description: "A short explanation of the project, what you did, and the result.",
  skills: ["JavaScript", "UI design"],
  image: "projects/my-project/preview.jpg",
  imageAlt: "A description of the project preview",
  link: "https://example.com",
  note: "Built independently"
}
```

Copy your images or videos into a folder under `projects/` and use a relative path from `index.html` (for example `projects/weather-dashboard/screen.png`). Create the folders as needed. For a short video, use `video: "projects/my-project/demo.mp4"` instead of `image`; an optional `poster: "projects/my-project/poster.jpg"` sets its preview frame. If neither media field is supplied, the page shows a decorative project placeholder.

Each project can include `date`, `name`, `description`, `skills`, and either `image` or `video`, plus the optional `category`, `kind`, `imageAlt`, `poster`, `link`, and `note` fields shown above. Add a comma between project objects, but not after the last object. The skill panel automatically combines the profile's `skills` with skills from every project, removes duplicates, and sorts the result.