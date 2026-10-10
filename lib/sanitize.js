// Strips answer keys out of a question's `parts` before sending to the
// browser, so the correct answer never appears in client-side JS/network
// traffic. Keeps everything needed to render the question.

function sanitizePart(part) {
  // trigForm holds the expected function and angle, i.e. the answer itself.
  const { correctIndex, correctIndices, correctAnswer, correctList, correctPoints, isPrime, trigForm, solution, ...safe } = part;
  return safe;
}

function sanitizeQuestion(q) {
  const parts = JSON.parse(q.parts).map(sanitizePart);
  return {
    id: q.id,
    order: q.order,
    prompt: q.prompt,
    svg: q.svg || null,
    parts,
  };
}

module.exports = { sanitizeQuestion, sanitizePart };
