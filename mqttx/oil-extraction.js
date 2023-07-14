const store = {
  index: 0
}

function generator(faker, options) {
  const clientid = options.clientId

  function generateWellData() {
    const oilPressure = faker.datatype.float({ min: 689470, max: 1378940 }); // 油压，单位：psi
    const casingPressure = faker.datatype.float({ min: 344735, max: 689470 }); // 套压，单位：psi
    const backPressure = faker.datatype.float({ min: 68947, max: 206842 }); // 回压，单位：psi
    const wellheadTemperature = faker.datatype.float({ min: 40, max: 80 }); // 井口温度，单位：摄氏度
    const voltage = faker.datatype.float({ min: 360, max: 420 }); // 三相电压，单位：伏特
    const current = faker.datatype.float({ min: 10, max: 30 }); // 三相电流，单位：安培
    const flowRate = faker.datatype.float({ min: 100, max: 200 }); // 油的流量，单位 L/分钟

    return {
      oilPressure,
      casingPressure,
      backPressure,
      wellheadTemperature,
      voltage,
      current,
      flowRate
    };
  }

  if (!store[clientid]) {
    store[clientid] = {
      id: faker.datatype.uuid(),
      name: `oil_well_${store.index}`,
    }
    store.index += 1
  }

  const data = store[clientid]
  const message = { ...generateWellData(), ...data, }
  return {
    message: JSON.stringify(message),
  }
}


const name = 'oil-extraction'
const author = 'EMQX Team'
const dataFormat = 'JSON'
const version = '0.0.1'
const description = 'Oil extraction data generator'

module.exports = {
  generator,
  name,
  author,
  dataFormat,
  version,
  description,
}
