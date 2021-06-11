<template>
    <v-app id="context-menu">
        <v-menu
            v-model="showMenu"
            rounded="lg"
            :transition="`slide-${transition}-transition`"
            min-width="160px"
            offset-y
            absolute
            :position-x="xPos"
            :position-y="yPos"
            :close-on-click="clickListener"
            :close-on-content-click="clickListener"
        >
            <v-list :dense="dense">
                <icon-bar :parent="that" :list="iconBar" :dense="dense" name="iconBar"></icon-bar>
                <v-divider></v-divider>
                <menu-item :parent="that" :list="itemList" :dense="dense" name="itemList"></menu-item>
                <v-divider></v-divider>
                <menu-item :parent="that" :list="stickyActions" :dense="dense" name="sticky"></menu-item>
            </v-list>
        </v-menu>
        <input id="clipboard-container" readonly :value="clipboard" />
    </v-app>
</template>

<script>
import ContextMenu from "./scripts/ContextMenu";
export default ContextMenu;
</script>

<style lang="stylus">
@import "https://unpkg.com/purecss@2.0.6/build/base-min.css"
@import "https://unpkg.com/purecss@2.0.6/build/grids-min.css"
@import "https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"

#context-menu
    .v-application--wrap
        min-height 0
    .on-hover
        color: skyblue !important
        transition .3s
    .theme--dark.v-list
        background #282828
    .theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
        color #b4b4b4 !important
    .theme--dark.v-icon
        color #b4b4b4
    #clipboard-container
        height 0
    .pure-gutter
        padding 4px
    .pure-g
        width 100%

#contextmenu-iconbar.theme--dark.v-application
    background #282828

#contextmenu-item.theme--dark.v-application
    background #282828
</style>
