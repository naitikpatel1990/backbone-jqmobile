jumpApp = {};
$(document).bind("mobileinit", function(){	
	jumpApp.app = new jumpui.JqmApp({
		platform: jumpui.Platform.WEB,
		containerEl: '#appContainer',
		templateEngine: new jumpui.template.engine.Handlebars()
	});
	
	jumpApp.Header = jumpui.block.Header.extend({
		templateKey: "header"
	});
	jumpApp.footer = new jumpui.block.Footer({
		templateKey: "footer"
	});
	
	jumpApp.pages = {
		loginPage: new jumpui.Page({
			name: "login",
			blocks: {
				'header':new jumpApp.Header(),
				'content': new jumpui.block.Content({
					events:{
						"click #btn":"open"
					},
					open:function() {
						alert('button clicked');
					},
					templateKey: "login"
				}),
				'footer':jumpApp.footer
			},
			prepare:function() {
				this.model={title: "Abcd"};
				this.render();
			}
		}),
		homePage: new jumpui.Page({
			name: "home",
			route: "home",
			blocks: {
				'header':new jumpApp.Header(),
				'content': new jumpui.block.Content({
					templateKey: "home"
				}),
				'footer':jumpApp.footer
			},
			prepare:function() {
				this.model={title: "Abcd"};
				this.render();
			}
		}),
		aboutPage: new jumpui.Page({
			name: "about",
			route:"about/:title",
			blocks: {
				'header':new jumpApp.Header(),
				'content': new jumpui.block.Content({
					templateKey: "about",
					prepare:function(title) {
						this.model = {'title':title};
					}
				}),
				'footer':jumpApp.footer
			},
			prepare:function(title) {
				this.model={title: 'Page title'};
				this.render();
			}
		})
	};
	
	jumpApp.app.addPage(jumpApp.pages.loginPage);
	jumpApp.app.addPage(jumpApp.pages.homePage);
	jumpApp.app.addPage(jumpApp.pages.aboutPage);
});

$(document).ready(function() {
	setTimeout(function(){
		jumpApp.app.load();
	},1000);
});