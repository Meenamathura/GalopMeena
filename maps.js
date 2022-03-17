require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/Basemap",
    "esri/layers/VectorTileLayer",
    "esri/layers/TileLayer",
    "esri/geometry/Point",
    "esri/layers/FeatureLayer",
    "esri/widgets/Locate",
    "esri/layers/ElevationLayer",
    "esri/widgets/ElevationProfile",
    "esri/widgets/BasemapGallery",
    "esri/widgets/LayerList",
    "esri/layers/ImageryTileLayer"
], function (
    esriConfig,
    Map,
    MapView,
    Basemap,
    VectorTileLayer,
    TileLayer,
    Point,
    FeatureLayer,
    Locate,
    ElevationLayer,
    ElevationProfile,
    BasemapGallery,
    LayerList,
    ImageryTileLayer
) {
    esriConfig.apiKey = "AAPKacf98a141c8a442c99f62f04e55717ff0pc_6ARxa1jgd6HNsYFDevInP_AU2VHsUS_zyFJLBMGjTJTi3-Lx-VF-_cQmcafx "
    const topoLayer = new VectorTileLayer({
        portalItem: {
            id: "734c12e9904b4a8086d2dff8582a93a1" // Forest and Parks Canvas
        },
        opacity: .75
    });

    const hillshadeLayer = new TileLayer({
        portalItem: {
            id: "38c860f8dbd24820b2a59ccc9a3dabdb" // World Hillshade
        }
    });

    const topobasemap = new Basemap({
        baseLayers: [

            hillshadeLayer,
            topoLayer

        ],
        title: "Vector Topographic",
        id: "vectortopographicbasemap"
    });
    // this is the additional basemap code
    const linzTopoLayer = new TileLayer({
        portalItem: {
            id: "85027f060e2b47249a508ada6f44403d" // NZ LINZ Topographic
        },
    });
    const linzBasemap = new Basemap({
        baseLayers: [
            linzTopoLayer
        ],
        title: "LINZ Topographic",
        id: "linzbasemap"
    });
    const imageryLayer = new TileLayer({
        portalItem: {
            id: "d284729222d04a3cb548cfe27716ea43" // NZ imagery
        }
    });
    const imageryBasemap = new Basemap({
        baseLayers: [
            imageryLayer
        ],
        title: "Imagery",
        id: "imagerybasemap"
    });




    const popupdochuts = {
        "content": "<img src={introductionThumbnail} /><br />" +
            "<h1>{name}</h1><i>{place}, {region}</i><br /><br />" +
            "<b>Facilities:</b> {facilities}<br />" +
            "<b>Status:</b> {status}<br />" +
            "<b>Bookable:</b> {bookable}<br />" +
            "<a href='{staticLink}'>More Info</a>"
    }

    const labelHuts = {
        // autocasts as new LabelClass()
        symbol: {
            type: "text", // autocasts as new TextSymbol()
            color: [43, 43, 43, 255],
            font: {
                // autocast as new Font()
                weight: "bold"
            },
            haloSize: 1,
            haloColor: "white"
        },
        labelPlacement: "below-center",
        labelExpressionInfo: {
            expression: "$feature.name"
        }
    };



    //Trailheads feature layer (lines)
    const doctracksLayer = new FeatureLayer({
        url: "https://services1.arcgis.com/3JjYDyG3oajxU6HO/arcgis/rest/services/DOC_Tracks/FeatureServer",
        renderer: trailsRenderer
    });


    //Trailhuts feature layer (points)
    const dochutsLayer = new FeatureLayer({
        url: "https://services1.arcgis.com/3JjYDyG3oajxU6HO/arcgis/rest/services/DOC_Huts/FeatureServer",
        popupTemplate: popupdochuts,
        renderer: hutsRenderer,
        labelingInfo: [labelHuts]

    });
    const elevationLayer = new ElevationLayer({
        portalItem: {
            id: "2ce4fe7d77024e719f8a04d2155b3fd2"
        }
    });

    const windForecast = new ImageryTileLayer({
        url: "https://tiledimageservices.arcgis.com/hLRlshaEMEYQG5A8/arcgis/rest/services/vector_field_layer/ImageServer",
        title: "Wind",
        renderer: {
          type: "animated-flow", // autocasts to new AnimatedFlowRenderer
          lineWidth: "1px",
          lineColor: [50, 120, 240, 0.3],
          density: 0.5,
        },
        effect: "bloom(2, 0.25px, 0)",
      });

    const map = new Map({
        basemap: topobasemap, // Basemap layer service
        layers: [doctracksLayer, dochutsLayer, windForecast],
        ground: {
            layers: [elevationLayer]
        }
    });

    const view = new MapView({
        map: map,
        center: new Point({ x: 1795999, y: 5457405, spatialReference: { wkid: 2193 } }), // nztm coordinates, 
        zoom: 10, // Zoom level
        container: "viewDiv" // Div element

    }); view.popup.defaultPopupTemplateEnabled = true;

    const locate = new Locate({
        view: view,
        useHeadingEnabled: false,
        goToOverride: function (view, options) {
            options.target.scale = 1500;
            return view.goTo(options.target);
        }
    });
    view.ui.add(locate, "top-left");

    const elevationProfile = new ElevationProfile({
        view: view,
        profiles: [{ type: "ground" }]
    });
    view.when(function () {
        view.ui.add(elevationProfile);
    });
    const basemapGallery = new BasemapGallery({
        view: view,
        source: [topobasemap, linzBasemap, imageryBasemap]
    });
    view.ui.add(basemapGallery, "top-right");

    view.when(() => {
        const layerList = new LayerList({
            view: view
        });

        // Add widget to the top right corner of the view
        view.ui.add(layerList, "top-right");
    });

});
