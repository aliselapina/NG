<template>
    <div class="ToggleWithText">
        <label class="ToggleWithText__label ToggleWithText__label--left"
               @click="onClickLabel('left')">
            <span class="ToggleWithText__TextValue ToggleWithText__TextValue--left"
                  v-text="firstLabelValue"> </span>
        </label>
        <div class="ToggleWithText__switch" @click.self="onClick">
            <div class="ToggleWithText__circle" @mousedown.prevent="dragStart" :style="style"></div>
        </div>
        <label class="ToggleWithText__label ToggleWithText__label--right"
               @click="onClickLabel('right')">
            <span class="ToggleWithText__TextValue ToggleWithText__TextValue--right"
                  v-text="secondLabelValue"></span>
        </label>
    </div>
</template>

<script>
export default {
  name: 'ToggleSwitcherWithText',
  props: {
    value: { type: Boolean, default: false },
    firstLabelValue: { type: String, required: false, default: '' },
    secondLabelValue: { type: String, required: false, default: '' }
  },
  data () {
    return {
      width: 100,
      state: false,
      pressed: 0,
      position: 0
    }
  },
  computed: {
    style () {
      return {
        transform: `translateX(${this.pos_percentage})`
      }
    },
    pos_percentage () {
      return `${(this.position / this.width) * 100}%`
    }
    // state_class () {
    //   if (this.state) {
    //     return 'active'
    //   }
    // },
    // doubleLabelClass () {
    //   if (!this.state && this.secondLabelValue.length > 0) {
    //     return 'active'
    //   } else if (this.state && this.secondLabelValue.length === 0) {
    //     return 'active'
    //   }
    // },
    // switcherClass () {
    //   if (this.secondLabelValue.length > 0) {
    //     return ''
    //   } else if (this.state && this.secondLabelValue.length === 0) {
    //     return 'active'
    //   }
    // }
  },
  watch: {
    position () {
      this.state = this.position >= 50
    },
    value () {
      this.state = this.value
      if (!this.value) {
        this.position = 0
      }
    }
  },
  mounted () {
    this.toggle(this.value)
  },
  methods: {
    onClick () {
      this.toggle(!this.state)
      this.emit()
    },
    onClickLabel (label) {
      if (this.state && label === 'left') {
        this.toggle(!this.state)
        this.emit()
      } else if (!this.state && label === 'right') {
        this.toggle(!this.state)
        this.emit()
      } else if (!this.secondLabelValue) {
        this.onClick()
      }
    },
    onClickRightLabel () { },
    toggle (state) {
      this.state = state
      this.position = !state ? 0 : 100
    },
    dragging (e) {
      const pos = e.clientX - this.$el.offsetLeft
      const percent = (pos / this.width) * 100
      this.position = percent <= 0 ? 0 : percent >= 100 ? 100 : percent
    },
    dragStart (e) {
      this.startTimer()
      window.addEventListener('mousemove', this.dragging)
      window.addEventListener('mouseup', this.dragStop)
    },
    dragStop () {
      window.removeEventListener('mousemove', this.dragging)
      window.removeEventListener('mouseup', this.dragStop)
      this.resolvePosition()
      clearInterval(this.$options.interval)
      if (this.pressed < 30) {
        this.toggle(!this.state)
      }
      this.pressed = 0
      this.emit()
    },
    startTimer () {
      this.$options.interval = setInterval(() => {
        this.pressed++
      }, 1)
    },
    resolvePosition () {
      this.position = this.state ? 100 : 0
    },
    emit () {
      this.$emit('input', this.state)
    }
  }
}
</script>

<style lang="scss" scoped>
    *,
    *:before,
    *:after {
        box-sizing: unset;
    }
    $width: 500px;
    $switch-width: 250px;
    $background: #fff;
    $background-active: #fff;
    $border-color: #ddd;
    $button-size: 40px;
    $button-color: darkblue;

    .ToggleWithText {
        z-index: 0;
        position: relative;
        padding-bottom: 10px;
        &__label
    {
        font-size: large;
        clear: both;
        cursor: pointer;
        z-index: 3;
        position: relative;
        font-weight: bold;

    &--left
    {
        color: black;
    }

    &--right {
        color: black;
        margin-left: -101px;
    }
    &.active {
        color: rgb(10,75,95, 0.8);
    }
    }

    &__TextValue{
        position: absolute;
        width: 178px;
        &--left
    {
        top:-27px;
        left: 45px;
    }
    &--right {
        top: -27px;
        left: -105px;
    }

    }

    &__switch {
        width: $width;
        height: $button-size;
        line-height: $button-size;
        background: rgb(10,75,95, 0.8);
        border-radius: 5px;
        border: 2px solid gray;
        transition: background 0.6s;
        display: inline-block;
        cursor: pointer;
        z-index: 0;
        margin-top: 15px;
        &.active{
        background: $background;
        transition: background 0.6s;

    }
    }
    &__circle {
        width: $switch-width;
        height: $button-size;
        background: $background-active;
        border-radius: 5px;;
        border: 2px solid gray;
        transform: translateX(0%);
        transition: transform 0.05s ease-in-out;
    }
    }
</style>
