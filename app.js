(function () {
  const data = window.PORTFOLIO;
  const profile = data.profile;
  const byId = (id) => document.getElementById(id);
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeUrl = (url) => /^(https?:|mailto:|\.\.?\/|#)/i.test(url || "") ? url : "#";

  document.title = `${profile.name} - Portfolio`;
  byId("profile-name").textContent = profile.name;
  byId("footer-name").textContent = profile.name;
  byId("profile-role").textContent = profile.role;
  byId("profile-bio").textContent = profile.bio;
  byId("profile-location").textContent = profile.location;
  byId("year").textContent = new Date().getFullYear();
  const emailHref = `mailto:${profile.email}`;

  const projects = [...(data.projects || [])].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const groups = (profile.skillGroups || []).map((group) => ({
    ...group,
    skills: new Map((group.skills || []).map((skill) => [skill.toLocaleLowerCase(), skill]))
  }));
  const categoryBySkill = Object.fromEntries(Object.entries(data.skillCategories || {}).map(([skill, category]) => [skill.toLocaleLowerCase(), category]));
  const groupFor = (id) => groups.find((group) => group.id === id) || groups.find((group) => group.id === "hard") || groups[0];

  projects.flatMap((project) => project.skills || []).forEach((skill) => {
    const normalized = skill.toLocaleLowerCase();
    if (groups.some((group) => group.skills.has(normalized))) return;
    const group = groupFor(categoryBySkill[normalized] || "hard");
    if (group) group.skills.set(normalized, skill);
  });

  const skillCount = groups.reduce((count, group) => count + group.skills.size, 0);
  byId("skill-count").textContent = String(skillCount).padStart(2, "0");
  byId("skill-list").innerHTML = skillCount
    ? groups.filter((group) => group.skills.size).map((group) => {
        const classId = String(group.id).toLowerCase().replace(/[^a-z0-9-]/g, "");
        const chips = [...group.skills.values()].sort((a, b) => a.localeCompare(b))
          .map((skill) => `<span class="skill-chip">${escapeHTML(skill)}</span>`).join("");
        return `<section class="skill-group skill-group-${classId}"><h3 class="skill-group-title">${escapeHTML(group.name)}</h3><div class="skill-group-chips">${chips}</div></section>`;
      }).join("")
    : '<span class="skill-empty">Add your skills in data.js</span>';

  const contactLinks = [...(profile.links || []), { label: profile.email, href: emailHref, mark: "@" }]
    .map((link) => `<a href="${escapeHTML(safeUrl(link.href))}"${/^https?:/i.test(link.href) ? ' target="_blank" rel="noreferrer"' : ""}><span class="link-mark">${escapeHTML(link.mark || ">")}</span><span>${escapeHTML(link.label)}</span><span class="link-arrow">&#8599;</span></a>`).join("");
  byId("profile-links").innerHTML = contactLinks;
  byId("intro-contact-links").innerHTML = contactLinks;

  byId("project-count").textContent = String(projects.length).padStart(2, "0");
  const list = byId("project-list");
  if (!projects.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-art" aria-hidden="true"><span></span><span></span><span></span><i>*</i></div><p class="eyebrow">THE FIRST CHAPTER</p><h3>Good things take a little time.</h3><p>Your projects will live here. When you are ready, add the first one in <code>data.js</code>.</p></div>';
    return;
  }

  list.innerHTML = projects.map((project, index) => {
    const tags = (project.skills || []).map((skill) => `<span>${escapeHTML(skill)}</span>`).join("");
    let media = "";
    if (project.video) {
      media = `<video class="project-media" controls preload="metadata"${project.poster ? ` poster="${escapeHTML(project.poster)}"` : ""}><source src="${escapeHTML(project.video)}">Your browser does not support video.</video>`;
    } else if (project.image) {
      const images = Array.isArray(project.image) ? project.image : [project.image];
      const imageMarkup = images.map((src, imageIndex) => {
        const alt = Array.isArray(project.imageAlt)
          ? project.imageAlt[imageIndex]
          : project.imageAlt || `${project.name} image ${imageIndex + 1}`;
        return `<figure class="project-gallery-item"><button class="project-image-trigger" type="button" data-image-src="${escapeHTML(src)}" data-image-alt="${escapeHTML(alt)}" aria-label="Open image full screen: ${escapeHTML(alt)}"><img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async"></button></figure>`;
      }).join("");
      media = images.length > 1
        ? `<div class="project-gallery" aria-label="${escapeHTML(project.name)} images">${imageMarkup}</div>`
        : (() => {
            const alt = Array.isArray(project.imageAlt) ? project.imageAlt[0] : project.imageAlt || `${project.name} project preview`;
            return `<button class="project-image-trigger project-media" type="button" data-image-src="${escapeHTML(images[0])}" data-image-alt="${escapeHTML(alt)}" aria-label="Open image full screen: ${escapeHTML(alt)}"><img class="project-media-image" src="${escapeHTML(images[0])}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async"></button>`;
          })();
    } else {
      media = `<div class="media-placeholder"><span>PROJECT ${String(index + 1).padStart(2, "0")}</span><i>*</i></div>`;
    }

    const detailSections = [
      ["Goal", project.goal, "project-goal"],
      ["Technical description", project.technicalDescription, "project-technical"],
      ["Result", project.result, "project-result"]
    ].filter(([, value]) => value).map(([label, value, className]) =>
      `<section class="project-detail ${className}"><h4>${label}</h4><p>${escapeHTML(value)}</p></section>`
    ).join("");

    const link = project.link
      ? `<a class="project-link" href="${escapeHTML(safeUrl(project.link))}" target="_blank" rel="noreferrer">VIEW PROJECT <span>&#8599;</span></a>`
      : "";

    return `<article class="project"><div class="timeline-pin"><span></span></div><div class="project-date">${escapeHTML(project.date || "DATE TBD")} <span>-</span> ${escapeHTML(project.category || "PROJECT")}</div><div class="project-card"><div class="project-meta"><span class="eyebrow">PROJECT ${String(index + 1).padStart(2, "0")}</span><span class="mono">${escapeHTML(project.kind || "SELECTED WORK")}</span></div><h3>${escapeHTML(project.name || "Untitled project")}</h3><div class="project-details">${detailSections}</div>${tags ? `<div class="project-tags">${tags}</div>` : ""}${media}<div class="project-bottom"><span class="mono">${escapeHTML(project.note || "")}</span>${link}</div></div></article>`;
  }).join("");

  const viewer = byId("image-viewer");
  const viewerImage = byId("image-viewer-image");
  const viewerCaption = byId("image-viewer-caption");
  const viewerCount = byId("image-viewer-count");
  const previousButton = byId("image-viewer-prev");
  const nextButton = byId("image-viewer-next");
  let viewerImages = [];
  let viewerIndex = 0;

  const showViewerImage = () => {
    const current = viewerImages[viewerIndex];
    if (!current) return;
    viewerImage.src = current.src;
    viewerImage.alt = current.alt;
    viewerCaption.textContent = current.alt;
    const hasMultiple = viewerImages.length > 1;
    previousButton.hidden = !hasMultiple;
    nextButton.hidden = !hasMultiple;
    viewerCount.textContent = hasMultiple ? `${viewerIndex + 1} / ${viewerImages.length}` : "";
  };

  list.addEventListener("click", (event) => {
    const trigger = event.target.closest(".project-image-trigger");
    if (!trigger) return;
    const project = trigger.closest(".project");
    const triggers = [...project.querySelectorAll(".project-image-trigger")];
    viewerImages = triggers.map((imageButton) => ({
      src: imageButton.dataset.imageSrc,
      alt: imageButton.dataset.imageAlt
    }));
    viewerIndex = triggers.indexOf(trigger);
    showViewerImage();
    viewer.showModal();
  });

  byId("image-viewer-close").addEventListener("click", () => viewer.close());
  previousButton.addEventListener("click", () => {
    viewerIndex = (viewerIndex - 1 + viewerImages.length) % viewerImages.length;
    showViewerImage();
  });
  nextButton.addEventListener("click", () => {
    viewerIndex = (viewerIndex + 1) % viewerImages.length;
    showViewerImage();
  });
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && viewerImages.length > 1) {
      viewerIndex = (viewerIndex - 1 + viewerImages.length) % viewerImages.length;
      showViewerImage();
    }
    if (event.key === "ArrowRight" && viewerImages.length > 1) {
      viewerIndex = (viewerIndex + 1) % viewerImages.length;
      showViewerImage();
    }
  });
})();
