/**
 * v1
 *
 * @url https://github.com/jmasarweh/homebridge-philipsair-2024
 * @author Jmasarweh <jamil.masarweh@gmail.com>
 *
 **/

module.exports = (homebridge) => {
  const PhilipsAirPlatform2024 = require('./src/platform')(homebridge);
  homebridge.registerPlatform('homebridge-philipsair-2024', 'PhilipsAirPlatform2024', PhilipsAirPlatform2024, true);
};
