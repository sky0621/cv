<template>
  <div class="form-demo">
    <div class="p-d-flex p-jc-center">
      <div class="card">
        <h5 class="p-text-center">Basic</h5>
        <form class="p-fluid">
          <div class="p-field p-mb-6">
            <div class="p-float-label">
              <BasicNicknameComponent :nickname="basic_.nickname" />
            </div>
          </div>
          <div class="p-field p-mb-6">
            <div class="p-float-label">
              <BasicBirthdayComponent :birthday="basic_.birthday" />
            </div>
          </div>
          <div class="p-field p-mb-6">
            <div class="p-float-label">
              <BasicJobComponent :job="basic_.job" />
            </div>
          </div>
          <div class="p-field p-mb-6">
            <div class="p-float-label">
              <BasicBelongToComponent :belong-to="basic_.belongTo" />
            </div>
          </div>
          <div class="p-field p-mb-6">
            <div class="p-float-label">
              <BasicOutputComponent :outputs="basic_.outputs" />
            </div>
          </div>
          <Button type="button" label="Save" class="p-mt-2" @click="save" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import BasicNicknameComponent from '@/components/basic/Nickname.vue'
  import BasicBirthdayComponent from '@/components/basic/Birthday.vue'
  import BasicJobComponent from '@/components/basic/Job.vue'
  import BasicBelongToComponent from '@/components/basic/BelongTo.vue'
  import BasicOutputComponent from '@/components/basic/Output.vue'
  import { BasicService } from '@/service/BasicService'
  import { IBasic } from '../../../types/basic'

  export default defineComponent({
    name: 'BasicComponent',
    components: {
      BasicNicknameComponent,
      BasicBirthdayComponent,
      BasicJobComponent,
      BasicBelongToComponent,
      BasicOutputComponent,
    },
    props: {
      basic: {
        type: Object as PropType<IBasic>,
        default: null,
      },
    },
    setup(props) {
      const basic_ = computed(() => {
        if (!props || !props.basic) return null
        return props.basic
      })

      console.log(basic_)

      const save = async () => {
        console.log('save')
        console.log(basic_)
        try {
          await new BasicService().put(basic_.value)
        } catch (e) {
          console.error(e)
        }
      }

      return {
        basic_,
        save,
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
