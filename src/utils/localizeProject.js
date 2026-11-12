// Returns the project with its Portuguese texts applied when lang is "pt".
// Fields that are not translated (name, link, date, ...) are kept as they are.
export function localizeProject(project, lang) {
    if (lang === "pt" && project.pt) return { ...project, ...project.pt }
    return project
}
