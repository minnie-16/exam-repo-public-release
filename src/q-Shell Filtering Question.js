import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";

export default async function ({ user, weight = 1 }) {
  const id = "q-shell-grep-status";
  const title = "Shell Log Filtering";

  const answer = "grep \"status=500\" app.log";

  const question = html`
    <div class="mb-3">
      <p>
        Which shell command filters the file <code>app.log</code> and returns
        only the lines that contain <strong>status=500</strong>?
      </p>
      <label for="${id}" class="form-label">Command:</label>
      <input class="form-control" id="${id}" name="${id}" />
    </div>
  `;

  return { id, title, weight, question, answer };
}
