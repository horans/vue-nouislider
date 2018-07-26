# vue-nouislider

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
<v-nus :id="your_id" :config="your_config" :value="your_value" @update="your_value = $event" />
```

### Show Log

```html
<v-nus :log="true" :config="your_config" :value="your_value" @update="your_value = $event" />
```