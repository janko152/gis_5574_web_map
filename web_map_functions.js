require(["esri/config", "esri/views/MapView", "esri/WebMap"], function (esriConfig, MapView, WebMap) {
  
  // esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurABOe5igahS0sDyhtU0A2kmN-md-3ZLFvcvS5KU_5DElp9T7EndZqB2D9wunuL0qx_ZMWQDz7fcES6CNjVNIaEPabZxFRPDpUaT7lsWkBc96-UFjR_lgrYWkIRxV4aoe9jUNLdqWhZnxiUSih5KrQ9BGwbLjcHqZ3i-U89SEGKI44ms2qiiOkrRXedvSPutZjLGD5UG7PCLiQKm7_j9Lmsrb4KyRfsdfDh-Uh_qf1SQ6AT1_x0s9qJCb";
  
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
