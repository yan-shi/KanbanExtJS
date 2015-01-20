/**
 * Created by Yan Shi on 1/15/15.
 */
Ext.define('KanbanExtJS.store.SectionStore', {
    extend: 'Ext.data.Store',
    requires: [
        'KanbanExtJS.model.SectionModel'
    ],
    model: 'KanbanExtJS.model.SectionModel',
    proxy: {
        type: 'ajax',
        url: 'data/sections.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});