# vue-nouislider

a Vue component for [noUiSlider](https://github.com/leongersen/noUiSlider)

====

## Install

```html
<script src="./vue-nouislider.js"></script>
```

## Basic Usage

```html
<v-nus :config="your_config" :value="your_value" @update="your_value = $event" />
```

## Advanced Usage

1. Customize ID

```html
<v-nus :id="your_id" :config="your_config" :value="your_value" @update="your_value = $event" />
```

2. Show Log

```html
<v-nus :log="true" :config="your_config" :value="your_value" @update="your_value = $event" />
```