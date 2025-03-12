import { reactive } from "vue";

export const FloatTextState = reactive({
  write_own_text: true,
  overwrite_text: "EMPTY",
  set_text(text: string) {
    this.overwrite_text = text;
    this.write_own_text = false;
  },
  reset_text() {
    this.write_own_text = true;
  }
})

