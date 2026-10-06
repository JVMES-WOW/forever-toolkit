// Keep previously shared root-URL talent builds working after adding the home page.
// Only a fixed local destination is allowed; retain the build fragment verbatim.
(() => {
  const params = new URLSearchParams(location.search);
  if (params.has('class') || /^#FF[234]\./.test(location.hash)) {
    location.replace(`talents.html${location.search}${location.hash}`);
  }
})();
