sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("slExemple_Cross_App_Navigation.controller.Main", {

		OnNav: function(oEvent) {
			
			
			//copiat del SAPUI5 SDK (Cross App Navigation API reference)  
			var xnavservice = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService && sap.ushell.Container.getService(
				"CrossApplicationNavigation");
			var href = (xnavservice && xnavservice.hrefForExternal({
				target: {
					semanticObject: "SalesOrder",
					action: "manage"
				},
				params: {
					"SalesOrganization": this.getView().byId("SalesOrg_id").getValue()    
					 //"1710"
				}
			})) || "";
			
			var finalURL = window.location.href.split('#')[0] + href; 
			sap.m.URLHelper.redirect(finalURL, true);

		}
	});
});