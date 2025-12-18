import { displayQuestions } from "./utils/display.js";

export async function questions(user, elementMap) {
  const results = [
    ...(await import("./q-Shell Filtering Question.js").then(m => [m.default({ user })])),
    ...(await import("./q-Excel Cleaning Question.js").then(m => [m.default({ user })])),
    ...(await import("./q-JSON Extraction With jq.js").then(m => [m.default({ user })])),
    ...(await import("./q-DuckDB Query Question.js").then(m => [m.default({ user })])),
    ...(await import("./q-OpenRefine GREL Cleaning Question.js").then(m => [m.default({ user })])),
  ];

  displayQuestions(results, elementMap);

  return Object.fromEntries(
    results.map(({ id, ...rest }) => [id, rest])
  );
}