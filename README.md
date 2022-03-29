# Vue noUiSlider

a Vue2 component for [noUiSlider](https://github.com/leongersen/noUiSlider)

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

### 220329

* updated demo for vue2

### 180818

* add demo

### 180727

* allow two-way update

### 180726

* initial release
