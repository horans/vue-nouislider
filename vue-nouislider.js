/*****************************************************
*  project: vue nouislider                           *
*  description: a Vue component for noUiSlider       *
*  author: horans@gmail.com                          *
*  url: github.com/horans/vue-nouislider             *
*  update: 180726                                    *
*****************************************************/
/* global Vue, noUiSlider */

/* nouislider */
Vue.component('v-nus', {
  template: '<div :id="\'vue-nouislider-\' + id"></div>',
  props: {
    'id': {
      type: String,
      default: function () {
        // stackoverflow.com/questions/10726909/
        return Math.random().toString(36).substr(2, 4)
      }
    },
    'config': Object,
    'value': Array,
    'log': Boolean
  },
  mounted: function () {
    var vnus = this
    var slider = document.getElementById('vue-nouislider-' + vnus.id)
    vnus.config.start = vnus.value
    noUiSlider.create(slider, vnus.config)
    slider.noUiSlider.on('update', function (values, handle) {
      vnus.$emit('update', values)
      if (vnus.log) window.console.log('[vnus]<' + handle + '>' + values)
    })
  }
})
