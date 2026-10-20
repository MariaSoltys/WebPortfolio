(function () {
  const data = window.PORTFOLIO;
  const profile = data.profile;
  const byId = (id) => document.getElementById(id);
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeUrl = (url) => /^(https?:|mailto:|\.\.?\/|#)/i.test(url || "") ? url : "#";

  document.title = `${profile.name} — Portfolio`;
  byId("profile-name").textContent = profile.name;
  byId("footer-name").textContent = profile.name;
  byId("profile-role").textContent = profile.role;
  byId("profile-bio").textContent = profile.bio;
  byId("profile-location").textContent = profile.location;
  document.querySelector(".portrait span").textContent = profile.initials || profile.name.split(/\s+/).map((s) => s[0]).slice(0, 2).join("");
  byId("year").textContent = new Date().getFullYear();
  const emailHref = `mailto:${profile.email}`;

  const projects = [...(data.projects || [])].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const skills = [...new Set([...(profile.skills || []), ...projects.flatMap((p) => p.skills || [])])].sort((a, b) => a.localeCompare(b));
  byId("skill-count").textContent = String(skills.length).padStart(2, "0");
  byId("skill-list").innerHTML = skills.length ? skills.map((skill) => `<span class="skill-chip">${escapeHTML(skill)}</span>`).join("") : '<span class="skill-empty">Add your skills in data.js</span>';
  byId("profile-links").innerHTML = [...(profile.links || []), { label: profile.email, href: emailHref, mark: "@" }]
    .map((link) => `<a href="${escapeHTML(safeUrl(link.href))}"${/^https?:/i.test(link.href) ? ' target="_blank" rel="noreferrer"' : ""}><span class="link-mark">${escapeHTML(link.mark || "↗")}</span><span>${escapeHTML(link.label)}</span><span class="link-arrow">↗</span></a>`).join("");

  byId("project-count").textContent = String(projects.length).padStart(2, "0");
  const list = byId("project-list");
  if (!projects.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-art" aria-hidden="true"><span></span><span></span><span></span><i>✳</i></div><p class="eyebrow">THE FIRST CHAPTER</p><h3>Good things take a little time.</h3><p>Your projects will live here. When you’re ready, add the first one in <code>data.js</code>.</p></div>`;
    return;
  }

  list.innerHTML = projects.map((project, index) => {
    const tags = (project.skills || []).map((skill) => `<span>${escapeHTML(skill)}</span>`).join("");
    let media = "";
    if (project.video) media = `<video class="project-media" controls preload="metadata"${project.poster ? ` poster="${escapeHTML(project.poster)}"` : ""}><source src="${escapeHTML(project.video)}">Your browser does not support video.</video>`;
    else if (project.image) media = `<img class="project-media" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || `${project.name} project preview`)}" loading="lazy">`;
    else media = `<div class="media-placeholder"><span>PROJECT ${String(index + 1).padStart(2, "0")}</span><i>✳</i></div>`;
    const link = project.link ? `<a class="project-link" href="${escapeHTML(safeUrl(project.link))}" target="_blank" rel="noreferrer">VIEW PROJECT <span>↗</span></a>` : "";
    return `<article class="project"><div class="timeline-pin"><span></span></div><div class="project-date">${escapeHTML(project.date || "DATE TBD")} <span>—</span> ${escapeHTML(project.category || "PROJECT")}</div><div class="project-card"><div class="project-meta"><span class="eyebrow">PROJECT ${String(index + 1).padStart(2, "0")}</span><span class="mono">${escapeHTML(project.kind || "SELECTED WORK")}</span></div><h3>${escapeHTML(project.name || "Untitled project")}</h3><p class="project-description">${escapeHTML(project.description || "Add a short description in data.js.")}</p>${tags ? `<div class="project-tags">${tags}</div>` : ""}${media}<div class="project-bottom"><span class="mono">${escapeHTML(project.note || "A little more to come.")}</span>${link}</div></div></article>`;
  }).join("");
})();
