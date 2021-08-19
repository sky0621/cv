<template>
  <div class="form-demo">
    <Dialog
      v-model:visible="showMessage"
      :breakpoints="{ '960px': '80vw' }"
      :style="{ width: '30vw' }"
      position="top"
    >
      <div class="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
        <i
          class="pi pi-check-circle"
          :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
        ></i>
        <h5>Save Successful!</h5>
        <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
          Your account is registered under name <b>{{ state.name }}</b>
        </p>
      </div>
      <template #footer>
        <div class="p-d-flex p-jc-center">
          <Button label="OK" class="p-button-text" @click="toggleDialog" />
        </div>
      </template>
    </Dialog>

    <div class="p-d-flex p-jc-center">
      <div class="card">
        <h5 class="p-text-center">Basic</h5>
        <form class="p-fluid" @submit.prevent="handleSubmit(!v$.$invalid)">
          <div class="p-field">
            <div class="p-float-label">
              <InputText
                id="name"
                v-model="v$.name.$model"
                :class="{ 'p-invalid': v$.name.$invalid && submitted }"
              />
              <label
                for="name"
                :class="{ 'p-error': v$.name.$invalid && submitted }"
                >Nickname*</label
              >
            </div>
            <small
              v-if="
                (v$.name.$invalid && submitted) || v$.name.$pending.$response
              "
              class="p-error"
              >{{ v$.name.required.$message.replace('Value', 'Name') }}</small
            >
          </div>
          <div class="p-field">
            <div class="p-float-label">
              <Calendar id="date" v-model="date" :show-icon="true" />
              <label for="date">Birthday</label>
            </div>
          </div>
          <Button type="submit" label="Submit" class="p-mt-2" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, ref, reactive } from 'vue'
  import { Basic } from '@/types/basic'
  import { required } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  export default defineComponent({
    name: 'BasicEditComponent',
    props: {
      basic: {
        type: Object as PropType<Basic>,
        default: undefined,
      },
    },
    setup(props) {
      const basic_ = computed(() => {
        if (!props || !props.basic) return {}
        return props.basic
      })

      const state = reactive({
        name: '',
        accept: null,
      })

      const rules = {
        name: { required },
        accept: { required },
      }

      const v$ = useVuelidate(rules, state)

      const submitted = ref(false)
      const date = ref()
      const showMessage = ref(false)

      const handleSubmit = (isFormValid) => {
        submitted.value = true

        if (!isFormValid) {
          return
        }

        toggleDialog()
      }

      const toggleDialog = () => {
        showMessage.value = !showMessage.value

        if (!showMessage.value) {
          resetForm()
        }
      }
      const resetForm = () => {
        state.name = ''
        state.date = null
        state.accept = null
        submitted.value = false
      }

      return {
        basic_,
        state,
        v$,
        date,
        showMessage,
        handleSubmit,
        toggleDialog,
        resetForm,
      }
    },
  })
</script>

<style scoped lang="scss">
  .form-demo {
    .card {
      min-width: 450px;

      form {
        margin-top: 2rem;
      }

      .p-field {
        margin-bottom: 1.5rem;
      }
    }

    @media screen and (max-width: 960px) {
      .card {
        width: 80%;
      }
    }
  }
</style>
