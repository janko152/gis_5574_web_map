require(["esri/config", "esri/views/MapView", "esri/WebMap", "esri/widgets/Legend", "esri/widgets/Search"], function (esriConfig, MapView, WebMap, Legend, Search) {
  
  const webmap = new WebMap({
    portalItem: {
      id: "320022aa62d14940a577fcba787fcf86"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
  
  let legend = new Legend ({
    view: view
  });
  
  view.ui.add(legend, "top-right")
  
  const searchWidget = new Search ({
    view: view
  });
  
  view.ui.add(searchWidget, {
    position: "bottom-left",
    index: 2
  });
});
