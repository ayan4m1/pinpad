export const getColorForFunction = (fn) => {
  switch (fn) {
    case '5V':
    case '3.3V':
    case '3V':
    case 'VCC':
    case 'VIN':
      return '#f90302';
    case 'GPIO':
      return '#e2eaf4';
    case 'TX':
    case 'RX':
      return '#fff2c1';
    case 'MOSI':
    case 'MISO':
    case 'SCLK':
    case 'CS':
      return '#99f442';
    case 'WAKE':
      return '#ec75d9';
    case 'RST':
    case 'RESET':
    case 'FLASH':
      return '#fcbd00';
    case 'ADC':
      return '#00b4ee';
    case 'SDA':
    case 'SCL':
      return '#79e0d8';
    case 'GND':
      return '#000000';
    default:
      return '#ffffff';
  }
};
