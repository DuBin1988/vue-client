<template>
  <app-base>
    <table>
      <tr valign="top">
        <td>
          list
          <project-list></project-list>
        </td>
        <td>
          grid
          <project-grid></project-grid>
        </td>
      </tr>
      <tr valign="top">
        <td>
          tree
          <project-tree></project-tree>
        </td>
        <td>
          grid-tree
          <project-grid-tree></project-grid-tree>
        </td>
      </tr>
    </table>
  </app-base>
</template>

<script>
import AppBase from '../../src/components/AppBase'
import ProjectList from './ProjectList'
import ProjectGrid from './ProjectGrid'
import ProjectTree from './ProjectTree'
import ProjectGridTree from './ProjectGridTree'

export default {
  components: { AppBase, ProjectList, ProjectGrid, ProjectTree, ProjectGridTree }
}
</script>
