/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('KanbanExtJS.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'KanbanExtJS.view.main.MainController',
        'KanbanExtJS.view.main.MainModel',
        'KanbanExtJS.view.main.BlackDataView'
    ],

    xtype: 'app-main',
    cls: 'main-container',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: 'fit',
    autoScroll: true,

    items: [
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'container',
                    itemId: 'header',
                    html: '<div class="logo">next!</div>' +
                        '<div class="navigation">' +
                        '<div>about</div>' +
                        '<div>services</div>' +
                        '<div>work</div>' +
                        '<div>blog</div>' +
                        '<div>contact</div>' +
                        '</div>'
                },
                {
                    xtype: 'container',
                    itemId: 'image-section',
                    html: '<div class="ad-text-container">' +
                        '<div class="ad-text">you think it, we build it!</div>' +
                        '</div>'
                },
                {
                    xtype: 'container',
                    itemId: 'white-box',
                    html: '<div class="white-box-container">' +
                        '<div class="title-text">We are a company of expert developers based in New York City.' +
                        '<br>Partner with us to achieve your business goals through technology.</div>' +
                        '<div class="content-container"></div>' +
                        '<div class="content-text">' +
                        'Our talented and experienced team has' +
                        'over 10 years of experience developing world class websites and applications' +
                        ', and we leverage the latest technologies, content management solutions' +
                        'open source platforms, and web standards to solve any challenge.' +
                        '</div>' +
                        '<div class="button-container">' +
                        '<div class="learn-more">Learn More</div>' +
                        '</div>' +
                        '<div class="x-clear"></div>' +
                        '</div>' +
                        '</div>'
                },
                {
                    xtype: 'container',
                    itemId: 'white-box',
                    html: '<div class="white-box-container">' +
                        '<div class="title-text">We are a company of expert developers based in New York City.' +
                        '<br>Partner with us to achieve your business goals through technology.</div>' +
                        '<div class="content-container"></div>' +
                        '<div class="content-text">' +
                        'Our talented and experienced team has' +
                        'over 10 years of experience developing world class websites and applications' +
                        ', and we leverage the latest technologies, content management solutions' +
                        'open source platforms, and web standards to solve any challenge.' +
                        '</div>' +
                        '<div class="button-container">' +
                        '<div class="learn-more">Learn More</div>' +
                        '</div>' +
                        '<div class="x-clear"></div>' +
                        '</div>' +
                        '</div>'
                },
                {
                    xtype: 'black-data-view'
                },
                {
                    xtype: 'container',
                    html: '<div class="footer-container">' +
                            '<ul class="footer-list">' +
                                '<li>about</li>' +
                                '<li>our team</li>' +
                                '<li>careers</li>' +
                                '<li>&nbsp;</li>' +
                                '<li>privacy policy</li>' +
                            '</ul>' +
                            '<ul>' +
                                '<li>work</li>' +
                                '<li>services</li>' +
                                '<li>contact</li>' +
                                '<li>&nbsp;</li>' +
                                '<li>term of use</li>' +
                            '</ul>' +
                            '<div class="social-container">' +
                                '<div><a href="http://www.kanbansolutions.com/lab.html" target="_blank"><img src="resources/images/fb.png" height="14" width="14"> Face Book</a></div>' +
                                '<div><a href="http://www.kanbansolutions.com/lab.html" target="_blank"><img src="resources/images/twitter.png" height="14" width="14"> Twitter</a></div>' +
                                '<div class="x-clear"></div>' +
                            '</div>' +
                        '</div>'
                }
            ]
        }
    ]
});
