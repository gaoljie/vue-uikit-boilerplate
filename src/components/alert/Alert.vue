<template>
  <transition name="fade">
    <div v-show="visible" :class="alertClasses">
      <p :class="messageClasses">{{ message }}</p>
      <klk-symbol
        :class="closeClasses"
        v-if="closable"
        href="x-close"
        :aria-hidden="false"
        @click.native="close"
      ></klk-symbol>
      <p :class="descClasses" v-if="desc">{{ desc }}</p>
    </div>
  </transition>
</template>

<script>
import KlkSymbol from "../symbol/Symbol.vue";

const prefixCls = "klk_c_alert";

export default {
  name: "KlkAlert",
  components: {
    KlkSymbol
  },
  props: {
    type: {
      validator(value) {
        return ["error", "info", "success", "warning"].indexOf(value) !== -1;
      },
      default: "info"
    },
    theme: {
      validator(value) {
        return ["dark", "light"].indexOf(value) !== -1;
      },
      default: "dark"
    },
    center: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    alertClasses() {
      return [
        `${prefixCls}`,
        `${prefixCls}--${this.type}`,
        `${prefixCls}--${this.theme}`,
        {
          [`${prefixCls}--center`]: this.center,
          [`${prefixCls}--is_closable`]: this.closable,
          [`${prefixCls}--with_desc`]: this.desc
        }
      ];
    },
    messageClasses() {
      return `${prefixCls}__message`;
    },
    closeClasses() {
      return `${prefixCls}__icon_close`;
    },
    descClasses() {
      return `${prefixCls}__desc`;
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
