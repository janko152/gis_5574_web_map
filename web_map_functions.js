require(["esri/config", "esri/views/MapView", "esri/WebMap"], function (esriConfig, MapView, WebMap) {
  
  const webmap = new WebMap({
    portalItem: {
      id: "320022aa62d14940a577fcba787fcf86"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
  
});
