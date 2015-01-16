/**
 * Created by Yan Shi on 1/15/15.
 */
Ext.define('KanbanExtJS.model.SectionModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'title',  type: 'string'},
        {name: 'teaser',   type: 'string'},
        {name: 'image', type: 'string',  convert: function (v, r) {
            return 'resources/images/' + v;
        }},
        {name: 'url', type: 'string'}
    ]
});