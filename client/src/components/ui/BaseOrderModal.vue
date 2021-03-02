<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <slot name="stock-selector"> </slot>
        <section>
          <div class="orders-input">
            <div>
              <label for="due-date">Due Date</label>
              <slot name="due-date"></slot>
            </div>
            <div>
              <label for="due-time">Due Time</label>
              <slot name="due-time"></slot>
            </div>
            <div>
              <label for="pet-number">PET Number</label>
              <slot name="pet-number"></slot>
            </div>
            <div>
              <label for="packs">Packs</label>
              <slot name="packs"></slot>
            </div>
            <div>
              <label for="bulks">Bulks</label>
              <slot name="bulks"></slot>
            </div>
          </div>
        </section>

        <slot name="buttons"></slot>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* * {
  border: 0.1px dotted red;
} */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: var(--mid-blue);
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

.orders-input > div {
  text-align: left;
}

section > div > div {
  width: 60%;
  display: flex;
}

section > div > div > label {
  flex: 2 0 50%;
}

section > div > div > slot {
  width: auto;
  flex: 1;
  justify-content: left;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
