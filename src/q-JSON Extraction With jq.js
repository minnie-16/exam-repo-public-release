import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";

export default async function ({ user, weight = 1 }) {
  const id = "q-jq-usernames";
  const title = "JSON Filtering with jq";

  const answer = "jq '.users[].name' data.json";

  const question = html`
    <div class="mb-3">
      <p>
        Using <code>jq</code>, which command extracts all
        <strong>name</strong> fields inside the <code>users</code> array from
        <code>data.json</code>?
      </p>
      <label for="${id}" class="form-label">Command:</label>
      <input class="form-control" id="${id}" name="${id}" />
    </div>
  `;

  return { id, title, weight, question, answer };
}
