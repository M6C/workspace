// DEPENDENCE
Ext.Loader.load(['/WorkSpace/js/pageextjs/editorjava/window/classpathdetail/tree/TreeClasspathDetail.js']);

Ext.ns('Workspace.window.ClasspathDetail');

// Window
Workspace.window.ClasspathDetail.WindowClasspathDetail = Ext.extend(Ext.Window, {
	title: 'Classpath Detail',        //titre de la fen�tre
	// el = id du div dans le code html de la page qui contiendra la popup
//	el:windowEl,        
	layout:'fit',
	width:400,
	height:300,
	//autoHeight: true,        //hauteur de la fen�tre
	modal: true,             //Grise automatiquement le fond de la page
	closeAction:'hide',
	plain: true,
	//autoScroll:true,
	//hideBorders:true,
	//titleCollapse:true,
	//header:false,
	items: [{
		xtype:'WorkspaceTreeTreeClasspathDetail',
		id : 'treeClasspathDetail'
	}]
});
//
///**
///**
// * http://www.javascriptfr.com/tutoriaux/EXTJS-MINI-TUTO-INTERRACTION-AVEC-BASE-DONNEES_853.aspx
// */
//
//function create_WindowClasspathAction(windowEl) {
//	Ext.QuickTips.init();                //n�cessaire pour initialiser les infobulles d�erreur
//	Ext.form.Field.prototype.msgTarget = 'side';    //n�cessaire pour initialiser les infobulles d�erreur
//
//	var classpath_window = new Ext.Window({
//		title: 'Classpath Detail',        //titre de la fen�tre
//		// el = id du div dans le code html de la page qui contiendra la popup
//		el:windowEl,        
//		layout:'fit',
//		width:400,
//		height:300,
//		//autoHeight: true,        //hauteur de la fen�tre
//		modal: true,             //Grise automatiquement le fond de la page
//		closeAction:'hide',
//		plain: true,
//		//autoScroll:true,
//		//hideBorders:true,
//		//titleCollapse:true,
//		//header:false,
//		items: [{
//			xtype:'WorkspaceTreeTreeClasspathDetail',
//			id : 'treeClasspathDetail'
//		}]
//	});
//	
////	Ext.getCmp('treeClasspathDetail').root.reload();
//
//	return classpath_window;
//}