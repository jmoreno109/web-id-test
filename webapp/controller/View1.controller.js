sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel","sap/m/MessageToast"
], function(Controller, JSONModel,MessageToast) {
	"use strict";

	return Controller.extend("test.controller.View1", {

		onInit: function() {
			var model = new JSONModel();
			
			model.setData({
				arrayName: [{
					firstName: "Albert",
					lastName: "Einstein",
					age: 76,
					born: 1879
				}, {
					firstName: "Thomas",
					lastName: "Edison",
					age: 84,
					born: 1847
				}, {
					firstName: "Neil",
					lastName: "Armstrong",
					age: 82,
					born: 1930
				}]
			});
			
			this.getView().setModel(model, "modelPath");
			
		},

		rowClicked: function(oEventArgs) {
			var row = oEventArgs.getSource();
			var context = row.getBindingContext("modelPath");

			// get binding object (reference to an object of the original array)
			var person = context.oModel.getProperty(context.sPath);

			MessageToast.show(person.firstName + " was born in " + person.born + ".");
		}

	});
});