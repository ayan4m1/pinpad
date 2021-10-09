module.exports = {
  getDevicePath: (device) =>
    `/${device.manufacturer.toLowerCase().replace(/\s+/, '-')}-${device.name
      .toLowerCase()
      .replace(/\s+/, '-')}`
};
