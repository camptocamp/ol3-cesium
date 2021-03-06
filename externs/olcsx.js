// Ol3-Cesium typedef externs, sorted alphabetically

/**
 * @type {Object}
 */
var olcsx;

/**
 * Core namespace.
 * @type {Object}
 */
olcsx.core;


/**
 * Context for feature conversion.
 * @typedef {{
 *  projection: (!(ol.proj.Projection|string)),
 *  primitives: (!Cesium.PrimitiveCollection),
 *  featureToCesiumMap: (Object.<
 *    number,
 *    !Cesium.Primitive|!Cesium.Billboard>),
 *  billboards: (!Cesium.BillboardCollection)
 * }}
 * @api
 */
olcsx.core.OlFeatureToCesiumContext;


/**
 * Options for rotate around axis core function.
 * @typedef {{
 *   duration: (number|undefined),
 *   easing: (function(number):number|undefined),
 *   callback: (function()|undefined)
 * }}
 * @api
 */
olcsx.core.RotateAroundAxisOption;
