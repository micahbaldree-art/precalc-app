// Groups assignments into chapters for the gradebook filter. The chapter is
// derived from the assignment title so no extra data has to be maintained:
//   "HW 2.3 - Poly Key Features"  -> Chapter 2
//   "Practice 1.1 - 1.3"          -> Chapter 1
//   "Unit 1 Review"               -> Chapter 1
//   "Chapter 3 Review"            -> Chapter 3
//   "Benchmark Review - Unit 2"   -> Benchmarks
function chapterOf(title) {
  const t = String(title || '');
  if (/^benchmark/i.test(t)) return 'Benchmarks';
  if (/^final/i.test(t)) return 'Final Review';
  let m = t.match(/(?:chapter|unit)\s+(\d+)/i);
  if (m) return `Chapter ${m[1]}`;
  m = t.match(/(\d+)\.\d+/);
  if (m) return `Chapter ${m[1]}`;
  return 'Other';
}

module.exports = { chapterOf };
