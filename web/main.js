const Module = {};
Module.onRuntimeInitialized = () => {
  console.log("WASM pronto!");
  Module.ccall('addBlock', null, ['number','number','number'], [1,2,3]);
};
