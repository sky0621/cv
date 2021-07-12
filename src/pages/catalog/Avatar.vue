<template>
  <div class="p-grid">
    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Label</h5>
        <Avatar label="P" class="p-mr-2" size="xlarge" />
        <Avatar
          label="V"
          class="p-mr-2"
          size="large"
          style="background-color: #2196f3; color: #ffffff"
        />
        <Avatar
          label="U"
          class="p-mr-2"
          style="background-color: #9c27b0; color: #ffffff"
        />
      </div>
    </div>

    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Label - Circle</h5>
        <Avatar label="P" class="p-mr-2" size="xlarge" shape="circle" />
        <Avatar
          label="V"
          class="p-mr-2"
          size="large"
          style="background-color: #2196f3; color: #ffffff"
          shape="circle"
        />
        <Avatar
          label="U"
          class="p-mr-2"
          style="background-color: #9c27b0; color: #ffffff"
          shape="circle"
        />
      </div>
    </div>

    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Label - Badge</h5>
        <Avatar
          v-badge="4"
          label="U"
          size="xlarge"
          style="background-color: #4caf4f; color: #ffffff"
        />
      </div>
    </div>
  </div>

  <div class="p-grid">
    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Icon</h5>
        <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" />
        <Avatar
          icon="pi pi-user"
          class="p-mr-2"
          size="large"
          style="background-color: #2196f3; color: #ffffff"
        />
        <Avatar
          icon="pi pi-user"
          class="p-mr-2"
          style="background-color: #9c27b0; color: #ffffff"
        />
      </div>
    </div>

    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Icon - Circle</h5>
        <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" shape="circle" />
        <Avatar
          icon="pi pi-user"
          class="p-mr-2"
          size="large"
          style="background-color: #2196f3; color: #ffffff"
          shape="circle"
        />
        <Avatar
          icon="pi pi-user"
          class="p-mr-2"
          style="background-color: #9c27b0; color: #ffffff"
          shape="circle"
        />
      </div>
    </div>

    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Icon - Badge</h5>
        <Avatar v-badge="4" icon="pi pi-user" size="xlarge" />
      </div>
    </div>
  </div>

  <div class="p-grid">
    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Image</h5>
        <Avatar
          image="/logo.png"
          class="p-mr-2"
          size="xlarge"
          shape="circle"
        />
        <Avatar
          image="/logo.png"
          class="p-mr-2"
          size="large"
          shape="circle"
        />
        <Avatar
          image="/logo.png"
          class="p-mr-2"
          shape="circle"
        />
      </div>
    </div>

    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Avatar Group</h5>
        <AvatarGroup class="p-mb-3">
          <Avatar
            image="/logo.png"
            size="large"
            shape="circle"
          />
          <Avatar
            image="/logo.png"
            size="large"
            shape="circle"
          />
          <Avatar
            image="/logo.png"
            size="large"
            shape="circle"
          />
          <Avatar
            label="+2"
            shape="circle"
            size="large"
            style="background-color: #9c27b0; color: #ffffff"
          />
        </AvatarGroup>
      </div>
    </div>

    <div class="p-col-12 p-md-4">
      <div class="card">
        <h5>Image - Badge</h5>
        <Avatar
          v-badge.danger="4"
          image="/logo.png"
          size="xlarge"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'CatalogAvatar',
  })
</script>

<style scoped lang="scss"></style>
