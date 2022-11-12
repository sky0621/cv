<template>
  <div class="surface-section">
    <template v-if="basic_">
      <ul class="list-none p-0 m-0">
        <li class="flex align-items-start py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Nickname</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <div>{{ basic_?.attribute?.nickname }}</div>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Age</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <BasicAgeComponent :day="basic_?.attribute?.birthday.day" :month="basic_?.attribute?.birthday.month" :year="basic_?.attribute?.birthday.year" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Job</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ basic_?.attribute?.job }}
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Belong to</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ basic_?.attribute?.belongTo }}
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Activities</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <BasicActivityComponent :activities="basic_.activities" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Qualifications</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <BasicQualificationComponent :qualifications="basic_.qualifications" />
          </div>
        </li>
      </ul>
      <BasicPrComponent :pr="basic_?.attribute?.pr" />
    </template>
    <template v-if="!basic_">
      Loading...
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Basic } from '@/types/basic'
  import BasicNicknameComponent from '@/components/basic/Nickname.vue'
  import BasicAgeComponent from '@/components/basic/Age.vue'
  import BasicOutputComponent from '@/components/basic/Activity.vue'
  import BasicQualificationComponent from '@/components/basic/Qualification.vue'
  import BasicPrComponent from "@/components/basic/Pr.vue";
  import BasicActivityComponent from "@/components/basic/Activity.vue";

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
      return { basic_ }
    },
  })
</script>

<style lang="scss" scoped></style>
