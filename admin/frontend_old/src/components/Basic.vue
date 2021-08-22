<template>
  {{ basic_ }}
  <div class="form-demo">
    <div class="p-d-flex p-jc-center">
      <div class="card">
        <h5 class="p-text-center">Basic</h5>
        <form class="p-fluid">
          <div class="p-field">
            <div class="p-float-label">
              <BasicNicknameComponent :nickname="basic_.nickname" />
            </div>
          </div>
          <Button type="submit" label="Save" class="p-mt-2" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Basic } from '@/types/basic'
  import BasicNicknameComponent from '@/components/basic/Nickname.vue'

  export default defineComponent({
    name: 'BasicComponent',
    components: {
      BasicNicknameComponent,
    },
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

      return {
        basic_,
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
