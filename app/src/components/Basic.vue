<script lang="ts" setup>
import BasicAgeComponent from '@/components/basic/Age.vue'
import BasicActivityComponent from '@/components/basic/Activity.vue'
import BasicQualificationComponent from '@/components/basic/Qualification.vue'
import BasicPrComponent from '@/components/basic/Pr.vue'
import {Attribute} from "@/types/attribute";
import {Activity} from "@/types/activity";
import {Qualification} from "@/types/qualification";
import {PropType} from "vue";

defineProps({
  attribute: Object as PropType<Attribute>,
  activities: Array as PropType<Activity[]>,
  qualifications: Array as PropType<Qualification[]>,
})
</script>

<template>
  <template v-if="attribute && activities && qualifications">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-10">
      <div class="text-center mx-6 mb-6 mt-2">
        <Avatar
            :image="attribute.avatarUrl"
            class="mb-3"
            size="xlarge"
        ></Avatar>
        <div class="text-900 text-3xl font-medium mb-3">
          {{ attribute.nickname }}
        </div>
        <span class="text-600 font-medium line-height-3">
          <BasicAgeComponent :birthday="attribute.birthday"/>
        </span>
      </div>
      <div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Job</div>
          <div class="text-900">
            {{ attribute.job }}
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Belong to</div>
          <div class="text-900">
            {{ attribute.belongTo }}
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Activities</div>
          <div class="text-900 flex justify-content-center">
            <BasicActivityComponent :activities="activities"/>
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Qualifications</div>
          <div class="text-900 flex justify-content-center">
            <BasicQualificationComponent
                :qualifications="qualifications"
            />
          </div>
        </div>
        <div class="font-bold mx-6 mt-6 mb-2">
          <div class="text-500 font-medium mb-2">PR</div>
          <div class="text-900 flex justify-content-center">
            <BasicPrComponent :pr="attribute.pr"/>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
