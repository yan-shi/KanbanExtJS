/**
 * Created by Yan Shi on 1/15/15.
 */
Ext.define('KanbanExtJS.view.main.BlackDataView', {
    extend: 'Ext.view.View',
    xtype: 'black-data-view',
    itemSelector: 'div.thumb-wrap',
    requires: [
        'KanbanExtJS.store.SectionStore'
    ],
    initComponent: function () {
        this.tpl = new Ext.XTemplate(
                '<div class="black-data-view-container">' +
                    '<tpl for=".">' +
                        '<div class="view-section">' +
                            '<div class="title">{title}</div>' +
                            '<div class="content-container">' +
                                '<div class="image-container">' +
                                    '<img src="{image}" width="40" height="40">' +
                                '</div>' +
                                '<div class="content-text">{teaser}</div>' +
                                '<div class="x-clear"></div>' +
                            '</div>' +
                            '<a href="{url}">learn more</a>' +
                        '</div>' +
                    '</tpl>' +
                    '<div class="x-clear"></div>' +
                '</div>'
        );
        this.store = Ext.create('KanbanExtJS.store.SectionStore');
        this.callParent(arguments);
    }
});