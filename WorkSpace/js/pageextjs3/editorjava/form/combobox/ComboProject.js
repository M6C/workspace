// DEPENDENCE
Ext.Loader.load(fileList=[
'/WorkSpace/js/commonextjs/form/combobox/ComboProject.js',
'/WorkSpace/js/commonextjs/form/combobox/Combo.js'
],
preserveOrder=true);

// NAMESPACE
Ext.ns('Workspace.editorjava');

Workspace.editorjava.ComboProject = Ext.extend(Workspace.common.form.combobox.ComboProject, {
    listeners:{
		//scope: this, //yourScope
        'select': function (cmb, record, index){
			//comboRecord = record;
			//comboRecordIndex = index;
			Ext.getCmp('project').value=record.data.project;
		
			var tree = Ext.getCmp("treeDirectory");
			tree.loader.baseParams.path = '';
			tree.loader.baseParams.application = Ext.getCmp('project').value;//record.data.project;
			tree.root.reload();
		}
   }
});

// REGISTER
Ext.reg('WorkspaceEditorjavaComboProject',Workspace.editorjava.ComboProject);
