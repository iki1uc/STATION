export function NC_verify(result) {
  return {
    ok: result !== null,
    axis: result.run8.axis,
    vector: result.vec.vector,
    kanal: result.kanal.out
  };
}
