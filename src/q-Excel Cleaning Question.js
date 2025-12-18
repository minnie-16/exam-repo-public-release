import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";

export default async function ({ user, weight = 1 }) {
  const id = "q-excel-trim";
  const title = "Excel Text Cleanup";

  const answer = "=TRIM(A2)";

  const question = html`
    <div class="mb-3">
      <p>
        In Excel, which formula removes <strong>leading, trailing, and multiple
        internal spaces</strong> from the text in cell <code>A2</code>?
      </p>
      <label for="${id}" class="form-label">Formula:</label>
      <input class="form-control" id="${id}" name="${id}" />
    </div>
  `;

  return { id, title, weight, question, answer };
}
