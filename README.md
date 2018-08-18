# Vue noUiSlider

a Vue component for [noUiSlider](https://github.com/leongersen/noUiSlider)

## Install

### Browser

```html
<script src="./vue-nouislider.js"></script>
```

## Basic Usage

### Template

```html
<v-nus :config="your_config" :value="your_value" @update="your_value = $event" />
```

### JS

```javascript
data: {
  your_config: {
    step: 1,
    range: {
      'min': 1,
      'max': 10
    }
  },
  your_value: [3, 6]
}
```

## Advanced Usage

### Customize ID

```html
<v-nus :id="your_id" :config="your_config" :value="your_value" />
```

### Show Log

```html
<v-nus :log="true" :config="your_config" :value="your_value" />
```

## References

* Inspiration: [VueJS-noUiSlider](https://github.com/BradKriss/VueJS-noUiSlider)
* Linter: [standard](https://github.com/standard/standard)

## Change Log

__180818__

* add demo

__180727__

* allow two-way update

__180726__

* initial release
