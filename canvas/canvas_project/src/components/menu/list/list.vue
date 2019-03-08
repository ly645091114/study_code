<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index">
        <span class="c-menu__list--title">{{ item.name }}</span>
        <ul
          v-if="(item.child.length > 0)"
          class="c-menu__list--child">
          <li
            v-for="(prop, index) in item.child"
            :key="index">{{ prop.name }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CMenuList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss">
  @import '~@/styles/core/var';
  .c-menu {
    &__list {
      &--child {
        padding: 10px 0;
        li {
          cursor: pointer;
          padding: 3px 20px;
          &:hover {
            color: $col-theme;
            transition: all 0.5s;
          }
        }
      }
      &--title {
        color: $col-theme;
        cursor: pointer;
        font-size: 16px;
        &:hover {
          color: $col-deep-green;
          transition: all 0.5s;
        }
      }
    }
  }
</style>
