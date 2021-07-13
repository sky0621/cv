<template>
  <div>
    <div class="card">
      <DataTable :value="products" responsive-layout="scroll" show-gridlines>
        <template #header> 基本情報 </template>
        <Column field="name" header="key"></Column>
        <Column field="image" header="value"></Column>
      </DataTable>
    </div>

    <div class="card">
      <DataTable :value="products" responsive-layout="scroll" show-gridlines>
        <template #header> Scroll </template>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="inventoryStatus" header="Status">
          <template #body="slotProps">
            <span
              :class="
                'product-badge status-' +
                (slotProps.data.inventoryStatus
                  ? slotProps.data.inventoryStatus.toLowerCase()
                  : '')
              "
              >{{ slotProps.data.inventoryStatus }}</span
            >
          </template>
        </Column>
        <Column field="rating" header="Rating">
          <template #body="slotProps">
            <Rating
              :model-value="slotProps.data.rating"
              :readonly="true"
              :cancel="false"
            />
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="card">
      <DataTable
        :value="products"
        responsive-layout="stack"
        breakpoint="960px"
        show-gridlines
      >
        <template #header> Stack </template>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="inventoryStatus" header="Status">
          <template #body="slotProps">
            <span
              :class="
                'product-badge status-' +
                (slotProps.data.inventoryStatus
                  ? slotProps.data.inventoryStatus.toLowerCase()
                  : '')
              "
              >{{ slotProps.data.inventoryStatus }}</span
            >
          </template>
        </Column>
        <Column field="rating" header="Rating">
          <template #body="slotProps">
            <Rating
              :model-value="slotProps.data.rating"
              :readonly="true"
              :cancel="false"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import ProductService from './service/ProductService'

  export default defineComponent({
    name: 'CatalogDataTableResponsive',
    setup() {
      onMounted(() => {
        productService.value
          .getProductsSmall()
          .then((data) => (products.value = data))
      })

      const products = ref()
      const productService = ref(new ProductService())

      return { products }
    },
  })
</script>

<style scoped lang="scss"></style>
