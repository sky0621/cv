<template>
  <template v-if="basic_">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-10">
      <div class="text-center mx-6 mb-6 mt-2">
        <Avatar
            :image="basic_?.attribute?.avatarUrl"
            class="mb-3"
            size="xlarge"
        ></Avatar>
        <div class="text-900 text-3xl font-medium mb-3">
          {{ basic_?.attribute?.nickname }}
        </div>
        <span class="text-600 font-medium line-height-3">
          <BasicAgeComponent :birthday="basic_?.attribute?.birthday"/>
        </span>
      </div>
      <div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Job</div>
          <div class="text-900">
            {{ basic_?.attribute?.job }}
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Belong to</div>
          <div class="text-900">
            {{ basic_?.attribute?.belongTo }}
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Activities</div>
          <div class="text-900 flex justify-content-center">
            <BasicActivityComponent :activities="basic_.activities"/>
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Qualifications</div>
          <div class="text-900 flex justify-content-center">
            <BasicQualificationComponent
                :qualifications="basic_.qualifications"
            />
          </div>
        </div>
        <div class="font-bold mx-6 mt-6 mb-2">
          <div class="text-500 font-medium mb-2">PR</div>
          <div class="text-900 flex justify-content-center">
            <BasicPrComponent :pr="basic_?.attribute?.pr"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="!basic_"> Loading...</template>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {Basic} from '@/types/basic'
import BasicNicknameComponent from '@/components/basic/Nickname.vue'
import BasicAgeComponent from '@/components/basic/Age.vue'
import BasicOutputComponent from '@/components/basic/Activity.vue'
import BasicActivityComponent from '@/components/basic/Activity.vue'
import BasicQualificationComponent from '@/components/basic/Qualification.vue'
import BasicPrComponent from '@/components/basic/Pr.vue'

export default defineComponent({
  name: 'BasicComponent',
  components: {
    BasicActivityComponent,
    BasicPrComponent,
    BasicNicknameComponent,
    BasicAgeComponent,
    BasicOutputComponent,
    BasicQualificationComponent,
  },
  props: {
    basic: {
      type: Object as PropType<Basic>,
      default: undefined,
    },
  },
  setup(props) {
    const basic_ = computed(() => {
      if (!props || !props.basic) return undefined
      return props.basic
    })
    return {basic_}
  },
})
</script>

<style lang="scss" scoped></style>
