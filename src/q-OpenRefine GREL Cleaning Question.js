import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";

export default async function ({ user, weight = 1 }) {
  const id = "q-openrefine-clean-currency";
  const title = "OpenRefine GREL Transformation";

  const answer = "value.replace(/[^0-9.]/, \"\")";

  const question = html`
    <div class="mb-3">
      <p>
        In OpenRefine, which GREL expression removes all <strong>non-numeric
        characters</strong> from a currency field (e.g., "$1,234.50") so only
        digits and decimal points remain?
      </p>
      <label for="${id}" class="form-label">GREL Expression:</label>
      <input class="form-control" id="${id}" name="${id}" />
    </div>
  `;

  return { id, title, weight, question, answer };
}
