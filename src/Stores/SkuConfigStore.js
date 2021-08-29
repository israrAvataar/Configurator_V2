import create from 'zustand'
import '../Template.json'
import '../oldSkuConfig.json'


const data = require('../oldSkuConfig.json')

console.log(data)

const useStore = create((set) => ({
    config: {data}
}))

export default useStore

