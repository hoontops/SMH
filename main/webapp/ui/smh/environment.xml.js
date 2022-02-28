if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::ifc");
        this.set_datatyperule("2.0");
        this.set_icon("url(\'theme::ifc/images/favicon_24.png\')");
        this.set_userfontid("font::nanum_gothic.xfont");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "0");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("svcurl", "JSP", "http://localhost:8080", "none", null, "", "0", "0");
        nexacro._addService("nexacro17lib", "file", "./nexacro17lib/", "session", null, "", "0", "0");
        nexacro._addService("lib", "file", "./lib/", "session", null, "", "0", "0");
        nexacro._addService("richtexteditor", "file", "./richtexteditor/", "session", null, "", "0", "0");
        nexacro._addService("image", "file", "./image/", "session", null, "", "0", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
        nexacro._addService("common", "form", "./common/", "session", null, "", "0", "0");
        nexacro._addService("cuslib", "form", "./cuslib/", "session", null, "", "0", "0");
        nexacro._addService("cmd", "form", "./cmd/", "none", null, "", "0", "0");
        nexacro._addService("bas", "form", "./bas/", "none", null, "", "0", "0");
        nexacro._addService("mfm", "form", "./mfm/", "none", null, "", "0", "0");
        nexacro._addService("pcm", "form", "./pcm/", "none", null, "", "0", "0");
        nexacro._addService("qam", "form", "./qam/", "none", null, "", "0", "0");
        nexacro._addService("spc", "form", "./spc/", "none", null, "", "0", "0");
        nexacro._addService("dfm", "form", "./dfm/", "none", null, "", "0", "0");
        nexacro._addService("osm", "form", "./osm/", "none", null, "", "0", "0");
        nexacro._addService("eqm", "form", "./eqm/", "none", null, "", "0", "0");
        nexacro._addService("tom", "form", "./tom/", "none", null, "", "0", "0");
        nexacro._addService("mtm", "form", "./mtm/", "none", null, "", "0", "0");
        nexacro._addService("guide", "form", "./guide/", "session", null, "", "0", "0");
        nexacro._addService("sample", "form", "./sample/", "session", null, "", "0", "0");
        nexacro._addService("template", "form", "./template/", "session", null, "", "0", "0");
        nexacro._addService("pda", "form", "./pda/", "none", null, "", "0", "0");
        nexacro._addService("design", "form", "./design/", "none", null, "", "0", "0");
        nexacro._addService("apr", "form", "./apr/", "session", null, "", "0", "0");
        nexacro._addService("hra", "form", "./hra/", "session", null, "", "0", "0");
        nexacro._addService("pay", "form", "./pay/", "session", null, "", "0", "0");
        nexacro._addService("ben", "form", "./ben/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"BasicChart", "classname":"nexacro.BasicChart", "type":"JavaScript"},
        		{"id":"PyramidChart", "classname":"nexacro.PyramidChart", "type":"JavaScript"},
        		{"id":"FloatChart", "classname":"nexacro.FloatChart", "type":"JavaScript"},
        		{"id":"RoseChart", "classname":"nexacro.RoseChart", "type":"JavaScript"},
        		{"id":"RadarChart", "classname":"nexacro.RadarChart", "type":"JavaScript"},
        		{"id":"GaugeChart", "classname":"nexacro.GaugeChart", "type":"JavaScript"},
        		{"id":"PieChart", "classname":"nexacro.PieChart", "type":"JavaScript"},
        		{"id":"BubbleChart", "classname":"nexacro.BubbleChart", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script

					
    env = null;
}
