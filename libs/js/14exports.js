// Imports and exports
export default _temp;
//Export so that when people do <script src="bijou" type="module"></script>
if (!isNode) {
  window._$ = _temp;
}
//So that we can use bijou in the source code.
export const _$ = _temp;
if (isNode) {
  try {
    module.exports = _temp;
  } catch (err) {
    console.error(err);
  }
}
