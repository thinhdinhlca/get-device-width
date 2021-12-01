window.function = function () {
  
  // is mobile ?
  var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
  return !mobile;
}
