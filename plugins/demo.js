import Vue from 'vue'

// dev: Performance degradation occurred according to the request
// production: No performance degradation occurred
// Vue.mixin({
//   data () {
//     return {
//       foo: 'bar'
//     }
//   }
// })

export default () => {
  // dev, production: Performance degradation occurred according to the request
  Vue.mixin({
    data () {
      return {
        foo: 'bar'
      }
    }
  })
}