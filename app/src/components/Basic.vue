<template>
  <template v-if="basic_">
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-10">
    <div class="text-center mb-5">
      <Avatar :image="basic_?.attribute?.avatarUrl" class="mb-3" size="xlarge"></Avatar>
      <div class="text-900 text-3xl font-medium mb-3">{{ basic_?.attribute?.nickname }}</div>
      <span class="text-600 font-medium line-height-3">
        <BasicAgeComponent :day="basic_?.attribute?.birthday.day" :month="basic_?.attribute?.birthday.month" :year="basic_?.attribute?.birthday.year" />
      </span>
    </div>
    <div>
      <label class="block text-900 font-medium mb-2" for="email1">Email</label>

      <label class="block text-900 font-medium mb-2" for="password1">Password</label>

    </div>
  </div>
    <div class="flex flex-column md:flex-row card-container gap-4">
      <div class="flex align-items-start justify-content-start font-bold m-2">
        <div class="text-500 font-medium">Job</div>
        <div class="text-900 flex justify-content-start">
          {{ basic_?.attribute?.job }}
        </div>
      </div>
      <div class="flex align-items-start justify-content-start font-bold m-2">
        <div class="text-500 font-medium">Belong to</div>
        <div class="text-900 flex justify-content-start">
          {{ basic_?.attribute?.belongTo }}
        </div>
      </div>
    </div>
  </template>
  <div class="surface-section">
    <template v-if="basic_">
      <ul class="flex flex-column list-none p-0 m-0">
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
