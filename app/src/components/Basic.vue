<script lang="ts" setup>
import {ref} from 'vue'
import {Basic} from '@/types/basic'
import BasicAgeComponent from '@/components/basic/Age.vue'
import BasicActivityComponent from '@/components/basic/Activity.vue'
import BasicQualificationComponent from '@/components/basic/Qualification.vue'
import BasicPrComponent from '@/components/basic/Pr.vue'
import {AttributeService} from "@/service/AttributeService";
import {QualificationService} from "@/service/QualificationService";
import {ActivityService} from "@/service/ActivityService";

const basic = ref()

const b: Basic = {
  attribute: await new AttributeService().getAttributeInfo(),
  activities: await new ActivityService().getActivitiesInfo(),
  qualifications: await new QualificationService().getQualificationsInfo(),
}
basic.value = b;
</script>

<template>
  <template v-if="basic && basic.attribute && basic.activities && basic.qualifications">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-10">
      <div class="text-center mx-6 mb-6 mt-2">
        <Avatar
            :image="basic.attribute.avatarUrl"
            class="mb-3"
            size="xlarge"
        ></Avatar>
        <div class="text-900 text-3xl font-medium mb-3">
          {{ basic.attribute.nickname }}
        </div>
        <span class="text-600 font-medium line-height-3">
          <BasicAgeComponent :birthday="basic.attribute.birthday"/>
        </span>
      </div>
      <div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Job</div>
          <div class="text-900">
            {{ basic.attribute.job }}
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Belong to</div>
          <div class="text-900">
            {{ basic.attribute.belongTo }}
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Activities</div>
          <div class="text-900 flex justify-content-center">
            <BasicActivityComponent :activities="basic.activities"/>
          </div>
        </div>
        <div class="font-bold m-6">
          <div class="text-500 font-medium mb-2">Qualifications</div>
          <div class="text-900 flex justify-content-center">
            <BasicQualificationComponent
                :qualifications="basic.qualifications"
            />
          </div>
        </div>
        <div class="font-bold mx-6 mt-6 mb-2">
          <div class="text-500 font-medium mb-2">PR</div>
          <div class="text-900 flex justify-content-center">
            <BasicPrComponent :pr="basic.attribute.pr"/>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped></style>
