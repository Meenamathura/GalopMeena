const trailsRenderer = {
    "type": "unique-value",
    field: "STATUS",
    uniqueValueInfos: [{
        value: "OPEN",
        symbol: {
            "type": "cim",
            data: {
                type: "CIMSymbolReference",
                symbol: {
                    type: "CIMLineSymbol",
                    symbolLayers: [{
                        type: "CIMSolidStroke",
                        enable: true,
                        capStype: "Round",
                        joinStyle: "Round",
                        width: 2.5,
                        color: [214, 45, 65, 255]
                    },
                    {
                        type: "CIMSolidStroke",
                        enable: true,
                        capStype: "Round",
                        joinStyle: "Round",
                        width: 6,
                        color: [255, 255, 255, 255]
                    }
                    ]
                }
            }
        }
    },
    {
        value: "CLSD",
        symbol: {
            "type": "cim",
            data: {
                type: "CIMSymbolReference",
                symbol: {
                    type: "CIMLineSymbol",
                    symbolLayers: [{
                        type: "CIMSolidStroke",
                        effects: [{
                            type: "CIMGeometricEffectDashes",
                            dashTemplate: [10, 4, 10, 4],
                            lineDashEnding: "NoConstraint",
                            controlPointEnding: "NoConstraint"
                        }],
                        enable: true,
                        capStype: "Round",
                        joinStyle: "Round",
                        width: 1.8,
                        color: [214, 45, 65, 255]
                    },
                    {
                        type: "CIMSolidStroke",
                        effects: [{
                            type: "CIMGeometricEffectDashes",
                            dashTemplate: [10, 4, 10, 4],
                            lineDashEnding: "NoConstraint",
                            controlPointEnding: "NoConstraint"
                        }],
                        enable: true,
                        capStype: "Round",
                        joinStyle: "Round",
                        width: 4,
                        color: [255, 255, 255, 255]
                    },
                    {
                        "type": "CIMVectorMarker",
                        "enable": true,
                        "anchorPointUnits": "Relative",
                        "dominantSizeAxis3D": "Y",
                        "size": 15,
                        "billboardMode3D": "FaceNearPlane",
                        "frame": {
                            "xmin": 0,
                            "ymin": 0,
                            "xmax": 510,
                            "ymax": 510
                        },
                        markerPlacement: {
                            type: "CIMMarkerPlacementAlongLineSameSize",
                            endings: "Custom", // "WithMarkers",
                            placementTemplate: [100], // determines space between each marker
                            angleToLine: false
                        },
                        "markerGraphics": [
                            {
                                "type": "CIMMarkerGraphic",
                                "geometry": {
                                    "rings": [
                                        [
                                            [
                                                128,
                                                280
                                            ],
                                            [
                                                382,
                                                280
                                            ],
                                            [
                                                382,
                                                230
                                            ],
                                            [
                                                128,
                                                230
                                            ],
                                            [
                                                128,
                                                280
                                            ]
                                        ],
                                        [
                                            [
                                                255,
                                                0
                                            ],
                                            [
                                                305,
                                                5
                                            ],
                                            [
                                                352,
                                                19
                                            ],
                                            [
                                                396,
                                                43
                                            ],
                                            [
                                                435,
                                                75
                                            ],
                                            [
                                                467,
                                                114
                                            ],
                                            [
                                                491,
                                                158
                                            ],
                                            [
                                                505,
                                                205
                                            ],
                                            [
                                                510,
                                                255
                                            ],
                                            [
                                                505,
                                                305
                                            ],
                                            [
                                                491,
                                                352
                                            ],
                                            [
                                                467,
                                                396
                                            ],
                                            [
                                                435,
                                                435
                                            ],
                                            [
                                                396,
                                                467
                                            ],
                                            [
                                                352,
                                                491
                                            ],
                                            [
                                                305,
                                                505
                                            ],
                                            [
                                                255,
                                                510
                                            ],
                                            [
                                                205,
                                                505
                                            ],
                                            [
                                                158,
                                                491
                                            ],
                                            [
                                                114,
                                                467
                                            ],
                                            [
                                                75,
                                                435
                                            ],
                                            [
                                                43,
                                                396
                                            ],
                                            [
                                                19,
                                                352
                                            ],
                                            [
                                                5,
                                                305
                                            ],
                                            [
                                                0,
                                                255
                                            ],
                                            [
                                                5,
                                                205
                                            ],
                                            [
                                                19,
                                                158
                                            ],
                                            [
                                                43,
                                                114
                                            ],
                                            [
                                                75,
                                                75
                                            ],
                                            [
                                                114,
                                                43
                                            ],
                                            [
                                                158,
                                                19
                                            ],
                                            [
                                                205,
                                                5
                                            ],
                                            [
                                                255,
                                                0
                                            ]
                                        ]
                                    ]
                                },
                                "symbol": {
                                    "type": "CIMPolygonSymbol",
                                    "symbolLayers": [
                                        {
                                            "type": "CIMSolidFill",
                                            "enable": true,
                                            "color": [
                                                214, 45, 65, 255
                                            ]
                                        }
                                    ]
                                }
                            }
                        ],
                        "scaleSymbolsProportionally": true,
                        "respectFrame": true,
                        "clippingPath": {
                            "type": "CIMClippingPath",
                            "clippingType": "Intersect",
                            "path": {
                                "rings": [
                                    [
                                        [
                                            0,
                                            0
                                        ],
                                        [
                                            510,
                                            0
                                        ],
                                        [
                                            510,
                                            510
                                        ],
                                        [
                                            0,
                                            510
                                        ],
                                        [
                                            0,
                                            0
                                        ]
                                    ]
                                ]
                            }
                        }
                    }
                    ]
                }
            }
        }
    }]
}


  const hutsRenderer = { type: "simple", symbol: { type: "cim", data: { type: "CIMSymbolReference", symbol: {
    "type": "CIMPointSymbol",
    "symbolLayers": [
      {
        "type": "CIMVectorMarker",
        "enable": true,
        "anchorPointUnits": "Relative",
        "dominantSizeAxis3D": "Y",
        "size": 30,
        "billboardMode3D": "FaceNearPlane",
        "frame": {
          "xmin": 0,
          "ymin": 0,
          "xmax": 21,
          "ymax": 21
        },
        "markerGraphics": [
          {
            "type": "CIMMarkerGraphic",
            "geometry": {
              "rings": [
                [
                  [
                    11.67,
                    14.51
                  ],
                  [
                    13,
                    13
                  ],
                  [
                    14.6,
                    13
                  ],
                  [
                    14.61,
                    13
                  ],
                  [
                    15.05,
                    12.82
                  ],
                  [
                    15.25,
                    12.38
                  ],
                  [
                    15.14,
                    11.99
                  ],
                  [
                    14.78,
                    11.74
                  ],
                  [
                    14.78,
                    4
                  ],
                  [
                    14,
                    4
                  ],
                  [
                    14,
                    11.7
                  ],
                  [
                    12.38,
                    11.7
                  ],
                  [
                    11.31,
                    12.81
                  ],
                  [
                    10.45,
                    10.39
                  ],
                  [
                    12.19,
                    8.42
                  ],
                  [
                    12.41,
                    8.14
                  ],
                  [
                    12.49,
                    7.85
                  ],
                  [
                    12.5,
                    4.13
                  ],
                  [
                    12.44,
                    3.84
                  ],
                  [
                    12.28,
                    3.6
                  ],
                  [
                    12.04,
                    3.44
                  ],
                  [
                    11.75,
                    3.38
                  ],
                  [
                    11.46,
                    3.44
                  ],
                  [
                    11.22,
                    3.6
                  ],
                  [
                    11.06,
                    3.84
                  ],
                  [
                    11,
                    4.13
                  ],
                  [
                    11,
                    7.66
                  ],
                  [
                    9.64,
                    9.02
                  ],
                  [
                    8.46,
                    6.61
                  ],
                  [
                    6.25,
                    3.94
                  ],
                  [
                    5.79,
                    3.6
                  ],
                  [
                    5.35,
                    3.63
                  ],
                  [
                    5,
                    3.91
                  ],
                  [
                    4.87,
                    4.33
                  ],
                  [
                    5.09,
                    4.87
                  ],
                  [
                    7.45,
                    7.88
                  ],
                  [
                    9.35,
                    13.84
                  ],
                  [
                    9.6,
                    14.38
                  ],
                  [
                    9.89,
                    14.8
                  ],
                  [
                    10.2,
                    15.06
                  ],
                  [
                    10.52,
                    15.14
                  ],
                  [
                    11.15,
                    14.98
                  ],
                  [
                    11.67,
                    14.51
                  ]
                ],
                [
                  [
                    7.04,
                    10.98
                  ],
                  [
                    5.8,
                    11.38
                  ],
                  [
                    5.51,
                    11.63
                  ],
                  [
                    5.48,
                    12
                  ],
                  [
                    6.69,
                    15.77
                  ],
                  [
                    6.94,
                    16.06
                  ],
                  [
                    7.32,
                    16.09
                  ],
                  [
                    8.55,
                    15.69
                  ],
                  [
                    8.84,
                    15.45
                  ],
                  [
                    8.88,
                    15.06
                  ],
                  [
                    7.66,
                    11.3
                  ],
                  [
                    7.41,
                    11.01
                  ],
                  [
                    7.04,
                    10.98
                  ]
                ],
                [
                  [
                    11.5,
                    15.15
                  ],
                  [
                    10.98,
                    15.25
                  ],
                  [
                    10.55,
                    15.55
                  ],
                  [
                    10.25,
                    15.98
                  ],
                  [
                    10.15,
                    16.5
                  ],
                  [
                    10.25,
                    17.02
                  ],
                  [
                    10.54,
                    17.46
                  ],
                  [
                    10.98,
                    17.75
                  ],
                  [
                    11.5,
                    17.85
                  ],
                  [
                    12.02,
                    17.75
                  ],
                  [
                    12.46,
                    17.46
                  ],
                  [
                    12.75,
                    17.02
                  ],
                  [
                    12.85,
                    16.5
                  ],
                  [
                    12.75,
                    15.98
                  ],
                  [
                    12.45,
                    15.55
                  ],
                  [
                    12.02,
                    15.25
                  ],
                  [
                    11.5,
                    15.15
                  ]
                ]
              ]
            },
            "symbol": {
              "type": "CIMPolygonSymbol",
              "symbolLayers": [
                {
                  "type": "CIMSolidStroke",
                  "enable": true,
                  "capStyle": "Round",
                  "joinStyle": "Round",
                  "lineStyle3D": "Strip",
                  "miterLimit": 10,
                  "width": 0,
                  "color": [
                    0,
                    0,
                    0,
                    255
                  ]
                },
                {
                  "type": "CIMSolidFill",
                  "enable": true,
                  "color": [
                    51,
                    51,
                    51,
                    255
                  ]
                }
              ]
            }
          }
        ],
        "scaleSymbolsProportionally": true,
        "respectFrame": true
      }
    ]
  } }, }, }