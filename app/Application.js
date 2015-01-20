/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('KanbanExtJS.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'KanbanExtJS.view.main.Main'
    ],
    
    name: 'KanbanExtJS',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
        Ext.create('KanbanExtJS.view.main.Main', {
            renderTo: Ext.getBody()
        });
    }
});
