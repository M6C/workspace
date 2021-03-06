Ext.define('Workspace.filebrowser.button.ButtonFileCartCopyMove', {
	// REQUIRED
	requires: [ 'Workspace.filebrowser.constant.ConstantImage']
	,
	extend: 'Ext.button.Button'
	,
	alias: 'widget.buttonFileCartCopyMove',
	alternateClassName: 'WorkspaceFilebrowserButtonFileCartCopyMove'
	,
    initComponent : function(){
		var me = this;
		Ext.apply(me, {
			icon: Workspace.filebrowser.constant.ConstantImage.BUTTON_CART_COPY_MOVE_URL
		});
	},
    handler: function(button, e) {
        var mainCenterPanel = Ext.getCmp('mainCenterPanel');
        var mainCenterTab = mainCenterPanel.getActiveTab();

        var mainEstPanel = Ext.getCmp('mainEstPanel');
        var mainEstTab = mainEstPanel.getActiveTab();

        if (!Ext.isEmpty(mainCenterTab)) {
        	// Cr�ation d'une nouvelle collection avec recopie des data
        	var col = new Ext.util.MixedCollection(true, 
        		function(item) {
        			return item.id;//item.getKey();
        		});
        	col.addAll(mainEstTab.data.getRange());

        	col.each(function (item, index, length) {
                var mainCenterPanel = Ext.getCmp('mainCenterPanel');
                var mainCenterTab = mainCenterPanel.getActiveTab();
                var itemPathDst = mainCenterTab.id;
                var itemPathSrc = item.id;//item.getKey();

                if (Workspace.tool.UtilString.isNotEqualPath(itemPathDst, itemPathSrc)) {
    		        console.info('Workspace.filebrowser.button.ButtonFileCartCopyMove success move/copy to:'+itemPathDst+' from:'+itemPathSrc);

    		        Ext.Ajax.request({
	        		    url: '/WorkSpace/action.servlet?event=FileBrowserCopyMove',
	        		    params: {
		        			pathSrc:itemPathSrc, pathDst:itemPathDst, operation:item.dropAction
	        		    },
	        		    success: function(response){

	        		        Ext.getCmp('mainSouthPanel').log('Workspace.filebrowser.button.ButtonFileCartCopyMove', 'success', 'Success move/copy to:'+itemPathDst+' item:'+itemPathSrc);

	        		    	var mainEstPanel = Ext.getCmp('mainEstPanel');
	        		        var mainEstTab = mainEstPanel.getActiveTab();
	        		        var mainEstGrid = mainEstTab.items.items[0].panel;
	        		        var mainEstStore = mainEstGrid.store;
	        		        var dataModel = mainEstStore.data.getByKey(item.id);

	        		        // Supprime une donn�e
	        		        mainEstGrid.data.removeAtKey(item.id);//item.getKey());
	    		        	// Raffaichissement du store et donc de la grid
	    		        	mainEstStore.remove(dataModel);

	    		    		// Rechargement de la grid
	    		        	var grid = mainCenterTab.items.items[0];
	    		        	grid.refresh();
	        		    },
	        		    failure: function(response){
	        		    	item.bodyStyle='background:#fcc;';

	        		    	var text = response.responseText;
	        		        Ext.getCmp('mainSouthPanel').log('Workspace.filebrowser.button.ButtonFileCartCopyMove', 'failure', 'failure  to:'+itemPathDst+' item:'+itemPathSrc+' cause:'+text);
	        		    }
	        		});
                }
                else {
    		        var text = 'No move/copy because destination path and source path can not be same. to:'+itemPathDst+' item:'+itemPathSrc;
    		        Ext.getCmp('mainSouthPanel').log('Workspace.filebrowser.button.ButtonFileCartCopyMove', 'error', text);
//    		        var mainEstGrid = mainEstTab.items.items[0].panel;
//    		        mainEstGrid.getView().getRow(index).style.color="#f30";
                }
        	});
        }
        else {
	        var text = 'No move/copy because no destination panel find.';
	        Ext.getCmp('mainSouthPanel').log('Workspace.filebrowser.button.ButtonFileCartCopyMove', 'error', text);
        }
    }

}, function() {Workspace.tool.Log.defined('Workspace.filebrowser.button.ButtonFileCartCopyMove');});