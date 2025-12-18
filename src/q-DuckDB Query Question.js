import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";

export default async function ({ user, weight = 1 }) {
  const id = "q-duckdb-count-rows";
  const title = "DuckDB Basic Query";

  const answer = "SELECT COUNT(*) FROM orders;";

  const question = html`
    <div class="mb-3">
      <p>
        In DuckDB, which SQL query returns the <strong>total number of
        rows</strong> in the table <code>orders</code>?
      </p>
      <label for="${id}" class="form-label">SQL Query:</label>
      <input class="form-control" id="${id}" name="${id}" />
    </div>
  `;

  return { id, title, weight, question, answer };
}
