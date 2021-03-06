(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample90");
            this.set_titletext("Report");
            if (Form == this.constructor)
            {
                this._setFormPosition(1330,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">QCAction003</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">QCAction004</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">3333</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">444</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">5555</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">6666</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">777</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"value\">8888</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"value\">999</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a</Col><Col id=\"value\">?????????</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">c</Col><Col id=\"value\">?????????</Col></Row><Row><Col id=\"code\">d</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">e</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">f</Col><Col id=\"value\">?????????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a</Col><Col id=\"value\">?????????</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">c</Col><Col id=\"value\">?????????</Col></Row><Row><Col id=\"code\">d</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">e</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">f</Col><Col id=\"value\">?????????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">atchFileId</Col><Col id=\"value\">5</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">c</Col><Col id=\"value\">?????????</Col></Row><Row><Col id=\"code\">d</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">e</Col><Col id=\"value\">??????</Col></Row><Row><Col id=\"code\">f</Col><Col id=\"value\">?????????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rdname\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rdname\">7HJSARR77778_3</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">aaa</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">bbb</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">HJSABCPR001</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">HJSABCPR002</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">HJSABCPR003</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">HJSABCPR004</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">HJSABCPR101</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">HJSABCPR102</Col><Col id=\"value\"/></Row><Row><Col id=\"rdname\">HJSABCPR104</Col></Row><Row><Col id=\"rdname\">HJSAPR00001</Col></Row><Row><Col id=\"rdname\">HJSAPR00001_111115</Col></Row><Row><Col id=\"rdname\">HJSAPR00001_org_20061128</Col></Row><Row><Col id=\"rdname\">HJSAPR00001_org_20061129</Col></Row><Row><Col id=\"rdname\">HJSAPR00002</Col></Row><Row><Col id=\"rdname\">HJSAPR00004</Col></Row><Row><Col id=\"rdname\">HJSAPR00004(old)</Col></Row><Row><Col id=\"rdname\">HJSAPR00005</Col></Row><Row><Col id=\"rdname\">HJSAPR00006</Col></Row><Row><Col id=\"rdname\">HJSAPR00006_111114</Col></Row><Row><Col id=\"rdname\">HJSAPR00007</Col></Row><Row><Col id=\"rdname\">HJSAPR00008</Col></Row><Row><Col id=\"rdname\">HJSAPR00009</Col></Row><Row><Col id=\"rdname\">HJSAPR00009(org)</Col></Row><Row><Col id=\"rdname\">HJSAPR00010</Col></Row><Row><Col id=\"rdname\">HJSAPR00011</Col></Row><Row><Col id=\"rdname\">HJSAPR00012</Col></Row><Row><Col id=\"rdname\">HJSAPR00013</Col></Row><Row><Col id=\"rdname\">HJSAPR00013_111114</Col></Row><Row><Col id=\"rdname\">HJSAPR00014</Col></Row><Row><Col id=\"rdname\">HJSAPR00014_111114</Col></Row><Row><Col id=\"rdname\">HJSAPR00015</Col></Row><Row><Col id=\"rdname\">HJSAPR00016</Col></Row><Row><Col id=\"rdname\">HJSAPR00016_111114</Col></Row><Row><Col id=\"rdname\">HJSAPR00017</Col></Row><Row><Col id=\"rdname\">HJSAPR00018</Col></Row><Row><Col id=\"rdname\">HJSAPR00019</Col></Row><Row><Col id=\"rdname\">HJSAPR00020</Col></Row><Row><Col id=\"rdname\">HJSAPR00021</Col></Row><Row><Col id=\"rdname\">HJSAPR00022</Col></Row><Row><Col id=\"rdname\">HJSAPR00023</Col></Row><Row><Col id=\"rdname\">HJSAPR00023_111114</Col></Row><Row><Col id=\"rdname\">HJSAPR00024</Col></Row><Row><Col id=\"rdname\">HJSAPR00025</Col></Row><Row><Col id=\"rdname\">HJSAPR00026</Col></Row><Row><Col id=\"rdname\">HJSAPR00027</Col></Row><Row><Col id=\"rdname\">HJSAPR00028</Col></Row><Row><Col id=\"rdname\">HJSAPR00029</Col></Row><Row><Col id=\"rdname\">HJSAPR00030</Col></Row><Row><Col id=\"rdname\">HJSAPR00031</Col></Row><Row><Col id=\"rdname\">HJSAPR00032</Col></Row><Row><Col id=\"rdname\">HJSAPR00034</Col></Row><Row><Col id=\"rdname\">HJSAPR00035</Col></Row><Row><Col id=\"rdname\">HJSAPR00036</Col></Row><Row><Col id=\"rdname\">HJSAPR00038</Col></Row><Row><Col id=\"rdname\">HJSAPR00039</Col></Row><Row><Col id=\"rdname\">HJSAPR00040</Col></Row><Row><Col id=\"rdname\">HJSAPR00041</Col></Row><Row><Col id=\"rdname\">HJSAPR00043</Col></Row><Row><Col id=\"rdname\">HJSARR00009</Col></Row><Row><Col id=\"rdname\">HJSARR00009_1</Col></Row><Row><Col id=\"rdname\">HJSARR00009_2</Col></Row><Row><Col id=\"rdname\">HJSARR00010</Col></Row><Row><Col id=\"rdname\">HJSARR00010_1</Col></Row><Row><Col id=\"rdname\">HJSARR00010_2</Col></Row><Row><Col id=\"rdname\">HJSARR00010_3</Col></Row><Row><Col id=\"rdname\">HJSARR00024</Col></Row><Row><Col id=\"rdname\">HJSARR00025</Col></Row><Row><Col id=\"rdname\">HJSARR00027</Col></Row><Row><Col id=\"rdname\">HJSARR00028</Col></Row><Row><Col id=\"rdname\">HJSARR00028_UN</Col></Row><Row><Col id=\"rdname\">HJSARR00029</Col></Row><Row><Col id=\"rdname\">HJSARR00029_BOM</Col></Row><Row><Col id=\"rdname\">HJSARR00029_ORG</Col></Row><Row><Col id=\"rdname\">HJSARR00029_PKG</Col></Row><Row><Col id=\"rdname\">HJSARR00030</Col></Row><Row><Col id=\"rdname\">HJSARR00036</Col></Row><Row><Col id=\"rdname\">HJSARR00036_1</Col></Row><Row><Col id=\"rdname\">HJSARR00038</Col></Row><Row><Col id=\"rdname\">HJSARR00038_Det</Col></Row><Row><Col id=\"rdname\">HJSARR00040</Col></Row><Row><Col id=\"rdname\">HJSARR00047</Col></Row><Row><Col id=\"rdname\">HJSARR00047_1</Col></Row><Row><Col id=\"rdname\">HJSARR00047_bak26</Col></Row><Row><Col id=\"rdname\">HJSARR00048</Col></Row><Row><Col id=\"rdname\">HJSARR00051</Col></Row><Row><Col id=\"rdname\">HJSARR00051_1</Col></Row><Row><Col id=\"rdname\">HJSARR00051_2</Col></Row><Row><Col id=\"rdname\">HJSARR00051_3</Col></Row><Row><Col id=\"rdname\">HJSARR00051_D</Col></Row><Row><Col id=\"rdname\">HJSARR00051_e</Col></Row><Row><Col id=\"rdname\">HJSARR00051_PK</Col></Row><Row><Col id=\"rdname\">HJSARR000511</Col></Row><Row><Col id=\"rdname\">HJSARR00052_1</Col></Row><Row><Col id=\"rdname\">HJSARR00052_2</Col></Row><Row><Col id=\"rdname\">HJSARR00052_3</Col></Row><Row><Col id=\"rdname\">HJSARR00054</Col></Row><Row><Col id=\"rdname\">HJSARR00058_1</Col></Row><Row><Col id=\"rdname\">HJSARR00058_2</Col></Row><Row><Col id=\"rdname\">HJSARR00058_3</Col></Row><Row><Col id=\"rdname\">HJSARR00058_4</Col></Row><Row><Col id=\"rdname\">HJSARR00059</Col></Row><Row><Col id=\"rdname\">HJSARR00064</Col></Row><Row><Col id=\"rdname\">HJSARR00064_1</Col></Row><Row><Col id=\"rdname\">HJSARR00065</Col></Row><Row><Col id=\"rdname\">HJSARR00065_1</Col></Row><Row><Col id=\"rdname\">HJSARR00066</Col></Row><Row><Col id=\"rdname\">HJSARR00067</Col></Row><Row><Col id=\"rdname\">HJSARR00068</Col></Row><Row><Col id=\"rdname\">HJSARR00069</Col></Row><Row><Col id=\"rdname\">HJSARR00070</Col></Row><Row><Col id=\"rdname\">HJSARR00103</Col></Row><Row><Col id=\"rdname\">HJSARR00201</Col></Row><Row><Col id=\"rdname\">HJSARR00202</Col></Row><Row><Col id=\"rdname\">HJSARR00203</Col></Row><Row><Col id=\"rdname\">HJSARR00204</Col></Row><Row><Col id=\"rdname\">HJSARR00500</Col></Row><Row><Col id=\"rdname\">HJSBENR06045</Col></Row><Row><Col id=\"rdname\">HJSBENR06050</Col></Row><Row><Col id=\"rdname\">HJSBENR06110</Col></Row><Row><Col id=\"rdname\">HJSBENR06180</Col></Row><Row><Col id=\"rdname\">HJSBENR06190</Col></Row><Row><Col id=\"rdname\">HJSBENR06191</Col></Row><Row><Col id=\"rdname\">HJSBENR06270</Col></Row><Row><Col id=\"rdname\">HJSBENR06365</Col></Row><Row><Col id=\"rdname\">HJSBENR06375</Col></Row><Row><Col id=\"rdname\">HJSBENR06376</Col></Row><Row><Col id=\"rdname\">HJSBENR06460</Col></Row><Row><Col id=\"rdname\">HJSBENR06461</Col></Row><Row><Col id=\"rdname\">HJSBENR06540</Col></Row><Row><Col id=\"rdname\">HJSBENR06570</Col></Row><Row><Col id=\"rdname\">HJSBENR06630</Col></Row><Row><Col id=\"rdname\">HJSBENR06660</Col></Row><Row><Col id=\"rdname\">HJSBENR06660_HC</Col></Row><Row><Col id=\"rdname\">HJSBENR06661</Col></Row><Row><Col id=\"rdname\">HJSBENR06662</Col></Row><Row><Col id=\"rdname\">HJSBENR06662_HC</Col></Row><Row><Col id=\"rdname\">HJSBENR08010</Col></Row><Row><Col id=\"rdname\">HJSBENR08020</Col></Row><Row><Col id=\"rdname\">HJSBENR08030</Col></Row><Row><Col id=\"rdname\">HJSBENR08040</Col></Row><Row><Col id=\"rdname\">HJSBENR08050</Col></Row><Row><Col id=\"rdname\">HJSBENR08060</Col></Row><Row><Col id=\"rdname\">HJSBENR08061</Col></Row><Row><Col id=\"rdname\">HJSBENR08070</Col></Row><Row><Col id=\"rdname\">HJSEUEMDR01100</Col></Row><Row><Col id=\"rdname\">HJSEUEMDR01110</Col></Row><Row><Col id=\"rdname\">HJSEUEMDR01130</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01030</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01040</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01050</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01060</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01070</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01080</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01090</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01110</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01120</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01140</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01150</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01160</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01170</Col></Row><Row><Col id=\"rdname\">HJSEUHRAR01180</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01120</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01130</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01131</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01140</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01150</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01190</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01200</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01210</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01260A</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR01260B</Col></Row><Row><Col id=\"rdname\">HJSEUPAYR08010</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR01100</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR01131</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR01310</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09100</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09110</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09120_COMP</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09120_PERF</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09121_COMP</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09121_PERF</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09122_COMP</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09122_PERF</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09130_2ND</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09140</Col></Row><Row><Col id=\"rdname\">HJSEUPFMR09150</Col></Row><Row><Col id=\"rdname\">HJSEUWFMR01100</Col></Row><Row><Col id=\"rdname\">HJSFAR00007</Col></Row><Row><Col id=\"rdname\">HJSGLR00001</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(0905)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(0906)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(0915)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(0927)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(1013)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(1030)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(1106)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(1123)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(1212)</Col></Row><Row><Col id=\"rdname\">HJSGLR00001(1214)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002</Col></Row><Row><Col id=\"rdname\">HJSGLR00002(0905)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002(0906)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002(0915)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002(0927)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002(1030)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002(1123)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002(1211)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002(1214)</Col></Row><Row><Col id=\"rdname\">HJSGLR00002_TB</Col></Row><Row><Col id=\"rdname\">HJSGLR00003</Col></Row><Row><Col id=\"rdname\">HJSGLR00003(0905)</Col></Row><Row><Col id=\"rdname\">HJSGLR00003(0911)</Col></Row><Row><Col id=\"rdname\">HJSGLR00003(0926)</Col></Row><Row><Col id=\"rdname\">HJSGLR00003(1107)</Col></Row><Row><Col id=\"rdname\">HJSGLR00003(1205)</Col></Row><Row><Col id=\"rdname\">HJSGLR00004</Col></Row><Row><Col id=\"rdname\">HJSGLR00004(0906)</Col></Row><Row><Col id=\"rdname\">HJSGLR00004(0926)</Col></Row><Row><Col id=\"rdname\">HJSGLR00004(1010)</Col></Row><Row><Col id=\"rdname\">HJSGLR00004(1024)</Col></Row><Row><Col id=\"rdname\">HJSGLR00004(1030)</Col></Row><Row><Col id=\"rdname\">HJSGLR00004(1123)</Col></Row><Row><Col id=\"rdname\">HJSGLR00004(1213)</Col></Row><Row><Col id=\"rdname\">HJSGLR00005</Col></Row><Row><Col id=\"rdname\">HJSGLR00005(0905)</Col></Row><Row><Col id=\"rdname\">HJSGLR00005(0906)</Col></Row><Row><Col id=\"rdname\">HJSGLR00005(0927)</Col></Row><Row><Col id=\"rdname\">HJSGLR00005(1010)</Col></Row><Row><Col id=\"rdname\">HJSGLR00005(1024)</Col></Row><Row><Col id=\"rdname\">HJSGLR00005(1123)</Col></Row><Row><Col id=\"rdname\">HJSGLR00005(1213)</Col></Row><Row><Col id=\"rdname\">HJSGLR00005(1214)</Col></Row><Row><Col id=\"rdname\">HJSGLR00006</Col></Row><Row><Col id=\"rdname\">HJSGLR00006(0906)</Col></Row><Row><Col id=\"rdname\">HJSGLR00006(1027)</Col></Row><Row><Col id=\"rdname\">HJSGLR00006(1030)</Col></Row><Row><Col id=\"rdname\">HJSGLR00006(1123)</Col></Row><Row><Col id=\"rdname\">HJSGLR00006(1213)</Col></Row><Row><Col id=\"rdname\">HJSGLR00007</Col></Row><Row><Col id=\"rdname\">HJSGLR00007(0926)</Col></Row><Row><Col id=\"rdname\">HJSGLR00007(1011)</Col></Row><Row><Col id=\"rdname\">HJSGLR00007(1023)</Col></Row><Row><Col id=\"rdname\">HJSGLR00007(1030)</Col></Row><Row><Col id=\"rdname\">HJSGLR00007(1103)</Col></Row><Row><Col id=\"rdname\">HJSGLR00008</Col></Row><Row><Col id=\"rdname\">HJSGLR00008(1010)</Col></Row><Row><Col id=\"rdname\">HJSGLR00008(1030)</Col></Row><Row><Col id=\"rdname\">HJSGLR00009</Col></Row><Row><Col id=\"rdname\">HJSGLR00009(1030)</Col></Row><Row><Col id=\"rdname\">HJSGLR00009(1107)</Col></Row><Row><Col id=\"rdname\">HJSGLR00010</Col></Row><Row><Col id=\"rdname\">HJSGLR00010(1030)</Col></Row><Row><Col id=\"rdname\">HJSGLR00011</Col></Row><Row><Col id=\"rdname\">HJSGLR00012</Col></Row><Row><Col id=\"rdname\">HJSGLR00013</Col></Row><Row><Col id=\"rdname\">HJSGLR00014</Col></Row><Row><Col id=\"rdname\">HJSGLR00030</Col></Row><Row><Col id=\"rdname\">HJSGLR00031</Col></Row><Row><Col id=\"rdname\">HJSGLR00032</Col></Row><Row><Col id=\"rdname\">HJSGLR00033</Col></Row><Row><Col id=\"rdname\">HJSGLR00034</Col></Row><Row><Col id=\"rdname\">HJSGLR00035</Col></Row><Row><Col id=\"rdname\">HJSGLR00202</Col></Row><Row><Col id=\"rdname\">HJSGLR00203</Col></Row><Row><Col id=\"rdname\">HJSHRR01020</Col></Row><Row><Col id=\"rdname\">HJSHRR01020_1</Col></Row><Row><Col id=\"rdname\">HJSHRR01020_2</Col></Row><Row><Col id=\"rdname\">HJSHRR01020_2_20210917</Col></Row><Row><Col id=\"rdname\">HJSHRR01020_2_20210927</Col></Row><Row><Col id=\"rdname\">HJSHRR01020_20201203</Col></Row><Row><Col id=\"rdname\">HJSHRR01050</Col></Row><Row><Col id=\"rdname\">HJSHRR01080</Col></Row><Row><Col id=\"rdname\">HJSHRR01080_old</Col></Row><Row><Col id=\"rdname\">HJSHRR01080H</Col></Row><Row><Col id=\"rdname\">HJSHRR01090</Col></Row><Row><Col id=\"rdname\">HJSHRR01090_old2</Col></Row><Row><Col id=\"rdname\">HJSHRR01090_??????</Col></Row><Row><Col id=\"rdname\">HJSHRR01090H</Col></Row><Row><Col id=\"rdname\">HJSHRR01100</Col></Row><Row><Col id=\"rdname\">HJSHRR01100H</Col></Row><Row><Col id=\"rdname\">HJSHRR01110</Col></Row><Row><Col id=\"rdname\">HJSHRR01110_20210525</Col></Row><Row><Col id=\"rdname\">HJSHRR01110H</Col></Row><Row><Col id=\"rdname\">HJSHRR01120</Col></Row><Row><Col id=\"rdname\">HJSHRR01120_20210525</Col></Row><Row><Col id=\"rdname\">HJSHRR01120H</Col></Row><Row><Col id=\"rdname\">HJSHRR01130</Col></Row><Row><Col id=\"rdname\">HJSHRR01130_20210525</Col></Row><Row><Col id=\"rdname\">HJSHRR01130H</Col></Row><Row><Col id=\"rdname\">HJSHRR01140</Col></Row><Row><Col id=\"rdname\">HJSHRR01140_20210525</Col></Row><Row><Col id=\"rdname\">HJSHRR01150</Col></Row><Row><Col id=\"rdname\">HJSHRR01150_20210525</Col></Row><Row><Col id=\"rdname\">HJSHRR01270</Col></Row><Row><Col id=\"rdname\">HJSHRR01300</Col></Row><Row><Col id=\"rdname\">HJSHRR02010</Col></Row><Row><Col id=\"rdname\">HJSHRR02020</Col></Row><Row><Col id=\"rdname\">HJSHRR03021</Col></Row><Row><Col id=\"rdname\">HJSHRR03022</Col></Row><Row><Col id=\"rdname\">HJSHRR03023</Col></Row><Row><Col id=\"rdname\">HJSHRR03030</Col></Row><Row><Col id=\"rdname\">HJSHRR05110</Col></Row><Row><Col id=\"rdname\">HJSHRR08010</Col></Row><Row><Col id=\"rdname\">HJSHRR08011</Col></Row><Row><Col id=\"rdname\">HJSHRR08020</Col></Row><Row><Col id=\"rdname\">HJSHRR08021</Col></Row><Row><Col id=\"rdname\">HJSHRR08030</Col></Row><Row><Col id=\"rdname\">HJSHRR08031</Col></Row><Row><Col id=\"rdname\">HJSHRR08040</Col></Row><Row><Col id=\"rdname\">HJSHRR08050</Col></Row><Row><Col id=\"rdname\">HJSHRR08051</Col></Row><Row><Col id=\"rdname\">HJSHRR08060</Col></Row><Row><Col id=\"rdname\">HJSHRR08061</Col></Row><Row><Col id=\"rdname\">HJSHRR08070</Col></Row><Row><Col id=\"rdname\">HJSHRR08071</Col></Row><Row><Col id=\"rdname\">HJSHRR08080</Col></Row><Row><Col id=\"rdname\">HJSHRR08081</Col></Row><Row><Col id=\"rdname\">HJSHRR08090</Col></Row><Row><Col id=\"rdname\">HJSHRR08100</Col></Row><Row><Col id=\"rdname\">HJSHRR08110</Col></Row><Row><Col id=\"rdname\">HJSLMSR00024</Col></Row><Row><Col id=\"rdname\">HJSLMSR00046</Col></Row><Row><Col id=\"rdname\">HJSLMSR00047</Col></Row><Row><Col id=\"rdname\">HJSPAYR03050</Col></Row><Row><Col id=\"rdname\">HJSPAYR03051</Col></Row><Row><Col id=\"rdname\">HJSPAYR03070</Col></Row><Row><Col id=\"rdname\">HJSPAYR03080</Col></Row><Row><Col id=\"rdname\">HJSPAYR04110</Col></Row><Row><Col id=\"rdname\">HJSPAYR05050</Col></Row><Row><Col id=\"rdname\">HJSPAYR05100</Col></Row><Row><Col id=\"rdname\">HJSPAYR05110</Col></Row><Row><Col id=\"rdname\">HJSPAYR05150</Col></Row><Row><Col id=\"rdname\">HJSPAYR05211</Col></Row><Row><Col id=\"rdname\">HJSPAYR05260</Col></Row><Row><Col id=\"rdname\">HJSPAYR05270</Col></Row><Row><Col id=\"rdname\">HJSPAYR05280</Col></Row><Row><Col id=\"rdname\">HJSPAYR05340</Col></Row><Row><Col id=\"rdname\">HJSPAYR05350</Col></Row><Row><Col id=\"rdname\">HJSPAYR05360</Col></Row><Row><Col id=\"rdname\">HJSPAYR05400</Col></Row><Row><Col id=\"rdname\">HJSPAYR05440</Col></Row><Row><Col id=\"rdname\">HJSPAYR05445</Col></Row><Row><Col id=\"rdname\">HJSPAYR08040</Col></Row><Row><Col id=\"rdname\">HJSPFMR01085</Col></Row><Row><Col id=\"rdname\">HJSPFMR01301</Col></Row><Row><Col id=\"rdname\">HJSPFMR01302</Col></Row><Row><Col id=\"rdname\">HJSPFMR01302.20211019</Col></Row><Row><Col id=\"rdname\">HJSPFMR08010</Col></Row><Row><Col id=\"rdname\">HJSPFMR08020</Col></Row><Row><Col id=\"rdname\">HJSPFMR08030</Col></Row><Row><Col id=\"rdname\">HJSPFMR08040</Col></Row><Row><Col id=\"rdname\">HJSPFMR08050</Col></Row><Row><Col id=\"rdname\">HJSPFMR08060</Col></Row><Row><Col id=\"rdname\">HJSPFMR08070</Col></Row><Row><Col id=\"rdname\">HJSPFMR08080</Col></Row><Row><Col id=\"rdname\">HJSPFMR08090</Col></Row><Row><Col id=\"rdname\">HJSPOR00003</Col></Row><Row><Col id=\"rdname\">HJSPOR00008</Col></Row><Row><Col id=\"rdname\">HJSPOR00008_origin</Col></Row><Row><Col id=\"rdname\">HJSPOR00009</Col></Row><Row><Col id=\"rdname\">HJSPOR00021</Col></Row><Row><Col id=\"rdname\">HJSPOR00022</Col></Row><Row><Col id=\"rdname\">HJSPOR00034</Col></Row><Row><Col id=\"rdname\">HJSPOR00035</Col></Row><Row><Col id=\"rdname\">HJSPOR00036</Col></Row><Row><Col id=\"rdname\">HJSPOR00039</Col></Row><Row><Col id=\"rdname\">HJSPOR00040</Col></Row><Row><Col id=\"rdname\">HJSPOR00041</Col></Row><Row><Col id=\"rdname\">HJSPOR00041_origin</Col></Row><Row><Col id=\"rdname\">HJSPOR00042</Col></Row><Row><Col id=\"rdname\">HJSPOR00080</Col></Row><Row><Col id=\"rdname\">HJSPOR00081</Col></Row><Row><Col id=\"rdname\">HJSPOR00082</Col></Row><Row><Col id=\"rdname\">HJSPOR00087</Col></Row><Row><Col id=\"rdname\">HJSPOR00088</Col></Row><Row><Col id=\"rdname\">HJSPOR00089</Col></Row><Row><Col id=\"rdname\">HJSPOR00090</Col></Row><Row><Col id=\"rdname\">HJSPOR00091</Col></Row><Row><Col id=\"rdname\">HJSPOR00092</Col></Row><Row><Col id=\"rdname\">HJSPOR00093</Col></Row><Row><Col id=\"rdname\">HJSPOR00094</Col></Row><Row><Col id=\"rdname\">HJSPOR00095</Col></Row><Row><Col id=\"rdname\">HJSPOR00096</Col></Row><Row><Col id=\"rdname\">HJSPOR00097</Col></Row><Row><Col id=\"rdname\">HJSPOR00098</Col></Row><Row><Col id=\"rdname\">HJSPOR00099</Col></Row><Row><Col id=\"rdname\">HJSPOR00100</Col></Row><Row><Col id=\"rdname\">HJSPOR00101</Col></Row><Row><Col id=\"rdname\">HJSPOR00102</Col></Row><Row><Col id=\"rdname\">HJSPOR00103</Col></Row><Row><Col id=\"rdname\">HJSPOR00104</Col></Row><Row><Col id=\"rdname\">HJSPOR00105</Col></Row><Row><Col id=\"rdname\">HJSPOR00106</Col></Row><Row><Col id=\"rdname\">HJSPOR00107</Col></Row><Row><Col id=\"rdname\">HJSPOR00108</Col></Row><Row><Col id=\"rdname\">HJSPOR00109</Col></Row><Row><Col id=\"rdname\">HJSPOR00110</Col></Row><Row><Col id=\"rdname\">HJSPOR00111</Col></Row><Row><Col id=\"rdname\">HJSPOR00112</Col></Row><Row><Col id=\"rdname\">HJSPOR00113</Col></Row><Row><Col id=\"rdname\">HJSPOR00114</Col></Row><Row><Col id=\"rdname\">HJSPOR00115</Col></Row><Row><Col id=\"rdname\">HJSPOR00116</Col></Row><Row><Col id=\"rdname\">HJSPOR00117</Col></Row><Row><Col id=\"rdname\">HJSPOR00118</Col></Row><Row><Col id=\"rdname\">HJSPOR00119</Col></Row><Row><Col id=\"rdname\">HJSPOR00120</Col></Row><Row><Col id=\"rdname\">HJSPOR00121</Col></Row><Row><Col id=\"rdname\">HJSPOR00122</Col></Row><Row><Col id=\"rdname\">HJSPOR00123</Col></Row><Row><Col id=\"rdname\">HJSPOR00133</Col></Row><Row><Col id=\"rdname\">HJSPOR00134</Col></Row><Row><Col id=\"rdname\">HJSPOR00135</Col></Row><Row><Col id=\"rdname\">HJSPOR00136</Col></Row><Row><Col id=\"rdname\">HJSPOR00137</Col></Row><Row><Col id=\"rdname\">HJSPOR00138</Col></Row><Row><Col id=\"rdname\">HJSPOR00139</Col></Row><Row><Col id=\"rdname\">HJSPOR00140</Col></Row><Row><Col id=\"rdname\">HJSPOR00141</Col></Row><Row><Col id=\"rdname\">HJSPOR00302</Col></Row><Row><Col id=\"rdname\">HJSPOR00303</Col></Row><Row><Col id=\"rdname\">HJSPOR00304</Col></Row><Row><Col id=\"rdname\">HJSRECR01080</Col></Row><Row><Col id=\"rdname\">HJSRECR01090</Col></Row><Row><Col id=\"rdname\">HJSRECR01091</Col></Row><Row><Col id=\"rdname\">HJSRECR01110</Col></Row><Row><Col id=\"rdname\">HJSRECR01110_2ND</Col></Row><Row><Col id=\"rdname\">HJSRECR01120</Col></Row><Row><Col id=\"rdname\">HJSRECR01120_1</Col></Row><Row><Col id=\"rdname\">HJSRECR01120_2</Col></Row><Row><Col id=\"rdname\">HJSRECR01120_2ND</Col></Row><Row><Col id=\"rdname\">HJSRECR01130</Col></Row><Row><Col id=\"rdname\">HJSRECR01150</Col></Row><Row><Col id=\"rdname\">HJSRECR02080</Col></Row><Row><Col id=\"rdname\">HJSRECR02090_O</Col></Row><Row><Col id=\"rdname\">HJSRECR02090_R</Col></Row><Row><Col id=\"rdname\">HJSRECR02110_O</Col></Row><Row><Col id=\"rdname\">HJSRECR02110_O_2ND</Col></Row><Row><Col id=\"rdname\">HJSRECR02110_R</Col></Row><Row><Col id=\"rdname\">HJSRECR02110_R_2ND</Col></Row><Row><Col id=\"rdname\">HJSRECR02120_O</Col></Row><Row><Col id=\"rdname\">HJSRECR02120_O_2ND</Col></Row><Row><Col id=\"rdname\">HJSRECR02120_R</Col></Row><Row><Col id=\"rdname\">HJSRECR02120_R_2ND</Col></Row><Row><Col id=\"rdname\">HJSRECR02130_O</Col></Row><Row><Col id=\"rdname\">HJSTXR00001</Col></Row><Row><Col id=\"rdname\">HJSTXR00002</Col></Row><Row><Col id=\"rdname\">HJSTXR00002_20210929</Col></Row><Row><Col id=\"rdname\">HJSTXR00004</Col></Row><Row><Col id=\"rdname\">HJSTXR00005</Col></Row><Row><Col id=\"rdname\">HJSTXR00006</Col></Row><Row><Col id=\"rdname\">HJSTXR00007</Col></Row><Row><Col id=\"rdname\">HJSTXR00008</Col></Row><Row><Col id=\"rdname\">HJSTXR00009</Col></Row><Row><Col id=\"rdname\">HJSTXR00010</Col></Row><Row><Col id=\"rdname\">HJSTXR00011</Col></Row><Row><Col id=\"rdname\">HJSTXR00012</Col></Row><Row><Col id=\"rdname\">HJSTXR00013</Col></Row><Row><Col id=\"rdname\">HJSTXR00014</Col></Row><Row><Col id=\"rdname\">HJSTXR00015</Col></Row><Row><Col id=\"rdname\">HJSTXR00015(20061124)</Col></Row><Row><Col id=\"rdname\">HJSTXR00016</Col></Row><Row><Col id=\"rdname\">HJSTXR00016(20061130)</Col></Row><Row><Col id=\"rdname\">HJSTXR00017</Col></Row><Row><Col id=\"rdname\">HJSTXR00017(20061124)</Col></Row><Row><Col id=\"rdname\">HJSTXR00018</Col></Row><Row><Col id=\"rdname\">HJSTXR00019</Col></Row><Row><Col id=\"rdname\">HJSTXR00020</Col></Row><Row><Col id=\"rdname\">HJSTXR00021</Col></Row><Row><Col id=\"rdname\">HJSTXR00022</Col></Row><Row><Col id=\"rdname\">HJSTXR00023</Col></Row><Row><Col id=\"rdname\">HJSTXR00023(20061123)</Col></Row><Row><Col id=\"rdname\">HJSTXR00024</Col></Row><Row><Col id=\"rdname\">HJSTXR00024(20061123)</Col></Row><Row><Col id=\"rdname\">HJSTXR00025</Col></Row><Row><Col id=\"rdname\">HJSTXR00026</Col></Row><Row><Col id=\"rdname\">HJSTXR00027</Col></Row><Row><Col id=\"rdname\">HJSTXR00028</Col></Row><Row><Col id=\"rdname\">HJSTXR00029</Col></Row><Row><Col id=\"rdname\">HJSTXR00030</Col></Row><Row><Col id=\"rdname\">HJSTXR00077</Col></Row><Row><Col id=\"rdname\">HJSTXR00078</Col></Row><Row><Col id=\"rdname\">HJSTXR00079</Col></Row><Row><Col id=\"rdname\">HJSTXR00080</Col></Row><Row><Col id=\"rdname\">HJSTXR00081</Col></Row><Row><Col id=\"rdname\">HJSTXR00082</Col></Row><Row><Col id=\"rdname\">HJSTXR00082_20060915</Col></Row><Row><Col id=\"rdname\">HJSTXR00083</Col></Row><Row><Col id=\"rdname\">HJSTXR00084</Col></Row><Row><Col id=\"rdname\">HJSTXR00085</Col></Row><Row><Col id=\"rdname\">HJSTXR00086</Col></Row><Row><Col id=\"rdname\">HJSTXR00087</Col></Row><Row><Col id=\"rdname\">HJSTXR00088</Col></Row><Row><Col id=\"rdname\">HJSTXR00089</Col></Row><Row><Col id=\"rdname\">HJSTXR00090</Col></Row><Row><Col id=\"rdname\">HJSTXR00090_??????</Col></Row><Row><Col id=\"rdname\">HJSTXR00091</Col></Row><Row><Col id=\"rdname\">HJSTXR00092</Col></Row><Row><Col id=\"rdname\">HJSTXR00093</Col></Row><Row><Col id=\"rdname\">HJSTXR00094</Col></Row><Row><Col id=\"rdname\">HJSTXR00095</Col></Row><Row><Col id=\"rdname\">HJSTXR00096</Col></Row><Row><Col id=\"rdname\">HJSTXR00097</Col></Row><Row><Col id=\"rdname\">HJSTXR00098</Col></Row><Row><Col id=\"rdname\">HJSTXR00099</Col></Row><Row><Col id=\"rdname\">HJSTXR00100</Col></Row><Row><Col id=\"rdname\">HJSTXR00101</Col></Row><Row><Col id=\"rdname\">HJSTXR00102</Col></Row><Row><Col id=\"rdname\">HJSTXR00153</Col></Row><Row><Col id=\"rdname\">HJSTXR00154</Col></Row><Row><Col id=\"rdname\">HJSTXR00155</Col></Row><Row><Col id=\"rdname\">HJSTXR00156</Col></Row><Row><Col id=\"rdname\">HJSTXR00157</Col></Row><Row><Col id=\"rdname\">HJSTXR00158</Col></Row><Row><Col id=\"rdname\">HJSTXR00159</Col></Row><Row><Col id=\"rdname\">HJSTXR00160</Col></Row><Row><Col id=\"rdname\">HJSTXR00161</Col></Row><Row><Col id=\"rdname\">HJSTXR00162</Col></Row><Row><Col id=\"rdname\">HJSTXR00163</Col></Row><Row><Col id=\"rdname\">HJSWFMR03050</Col></Row><Row><Col id=\"rdname\">HJSWFMR03100</Col></Row><Row><Col id=\"rdname\">HJSWFMR03120</Col></Row><Row><Col id=\"rdname\">HJSWFMR03150</Col></Row><Row><Col id=\"rdname\">HJSWFMR03180</Col></Row><Row><Col id=\"rdname\">HJSWFMR031801</Col></Row><Row><Col id=\"rdname\">HJSWFMR031802</Col></Row><Row><Col id=\"rdname\">HJSWFMR08010</Col></Row><Row><Col id=\"rdname\">HJSXTRR00001</Col></Row><Row><Col id=\"rdname\">HJSXTRR00002</Col></Row><Row><Col id=\"rdname\">HJSXTRR00003</Col></Row><Row><Col id=\"rdname\">HJSXTRR00004</Col></Row><Row><Col id=\"rdname\">HJSXTRR00005</Col></Row><Row><Col id=\"rdname\">HJSXTRR00006</Col></Row><Row><Col id=\"rdname\">HJSXTRR00007</Col></Row><Row><Col id=\"rdname\">HJSXTRR00007X</Col></Row><Row><Col id=\"rdname\">HJSXTRR00008</Col></Row><Row><Col id=\"rdname\">HJSXTRR00009</Col></Row><Row><Col id=\"rdname\">HJSXTRR00010</Col></Row><Row><Col id=\"rdname\">HJSXTRR00011</Col></Row><Row><Col id=\"rdname\">HJSXTRR00012</Col></Row><Row><Col id=\"rdname\">HJSXTRR00012_0929-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00012_1007-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00013</Col></Row><Row><Col id=\"rdname\">HJSXTRR00014</Col></Row><Row><Col id=\"rdname\">HJSXTRR00016</Col></Row><Row><Col id=\"rdname\">HJSXTRR00017</Col></Row><Row><Col id=\"rdname\">HJSXTRR00018</Col></Row><Row><Col id=\"rdname\">HJSXTRR00019</Col></Row><Row><Col id=\"rdname\">HJSXTRR00020</Col></Row><Row><Col id=\"rdname\">HJSXTRR00020_0923-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00020_0929-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00020_1007-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00020_1013-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00020_111025</Col></Row><Row><Col id=\"rdname\">HJSXTRR00021</Col></Row><Row><Col id=\"rdname\">HJSXTRR00021_0923-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00021_0929-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00021_1007-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00021_1015-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00022</Col></Row><Row><Col id=\"rdname\">HJSXTRR00023</Col></Row><Row><Col id=\"rdname\">HJSXTRR00024</Col></Row><Row><Col id=\"rdname\">HJSXTRR00025</Col></Row><Row><Col id=\"rdname\">HJSXTRR00026</Col></Row><Row><Col id=\"rdname\">HJSXTRR00027</Col></Row><Row><Col id=\"rdname\">HJSXTRR00028</Col></Row><Row><Col id=\"rdname\">HJSXTRR00032</Col></Row><Row><Col id=\"rdname\">HJSXTRR00033</Col></Row><Row><Col id=\"rdname\">HJSXTRR00034</Col></Row><Row><Col id=\"rdname\">HJSXTRR00035</Col></Row><Row><Col id=\"rdname\">HJSXTRR00040</Col></Row><Row><Col id=\"rdname\">HJSXTRR00040_0923-01</Col></Row><Row><Col id=\"rdname\">HJSXTRR00074</Col></Row><Row><Col id=\"rdname\">HJSXTRR00100</Col></Row><Row><Col id=\"rdname\">HJSXTRR00101</Col></Row><Row><Col id=\"rdname\">HJSXTRR00102</Col></Row><Row><Col id=\"rdname\">HJSXTRR00306</Col></Row><Row><Col id=\"rdname\">Master_horizontal</Col></Row><Row><Col id=\"rdname\">Master_horizontal_wide</Col></Row><Row><Col id=\"rdname\">Master_vertical</Col></Row><Row><Col id=\"rdname\">Master_vertical_wide</Col></Row><Row><Col id=\"rdname\">sample</Col></Row><Row><Col id=\"rdname\">sample2</Col></Row><Row><Col id=\"rdname\">Template_horizontal_v2.1</Col></Row><Row><Col id=\"rdname\">Template_horizontal_v2.1_wide</Col></Row><Row><Col id=\"rdname\">Template_vertical_v2.1</Col></Row><Row><Col id=\"rdname\">Template_vertical_v2.1_wide</Col></Row><Row><Col id=\"rdname\">TEST</Col></Row><Row><Col id=\"rdname\">TEST_V50.bak</Col></Row><Row><Col id=\"rdname\">TEST01</Col></Row><Row><Col id=\"rdname\">test2222</Col></Row><Row><Col id=\"rdname\">TEST77</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","0","1","160","449",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Report","4","6","146","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Report ??????(SQL??????)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup","4","50","146","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("????????????(modal)");
            this.addChild(obj.name, obj);

            obj = new Div("div_report","160","1","864",null,null,"68",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("?????????");
            obj.set_url("common::com_report.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","1030","0",null,null,"0","65",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_list03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"246\"/><Column size=\"41\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"rdname\"/><Cell col=\"1\" text=\"value\"/></Band><Band id=\"body\"><Cell text=\"bind:rdname\"/><Cell col=\"1\" text=\"bind:value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","7",null,"383","20",null,"35",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","7",null,"1163","20",null,"8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("[SELSC] [2020/12] [2020/12] [] [6623][][][][][][][][][][][][][][][][][][][][][][][][][]");
            obj.set_text("[SELSC] [2020/12] [2020/12] [] [6623][][][][][][][][][][][][][][][][][][][][][][][][][]");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup00","1180",null,"140","37",null,"8",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Test Call");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01","4","103","146","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" HJSPAYR05211 \r\n 696321");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01_00","4","150","146","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" HJSPAYR05211 \r\n 693709");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1330,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_report.xfdl");
        };
        
        // User Script
        this.registerScript("Sample90.xfdl", function() {
        /***************************************************************************************
         * ???????????? 	: IFC MES?????????
         * ????????? 		: Report viewer ??????
         * ????????? 		: rexpertViewer.xfdl
         * ????????? 		: UI??????
         * ????????? 		: 2017.09.08
         *
         * ???  ???		: ????????? ?????? ??????
         *---------------------------------------------------------------------------------------
         * ?????????		?????????		????????????
         *---------------------------------------------------------------------------------------
         /**************************************************************************
         * 1. ?????? include(??????)
         ***************************************************************************/
        //include "lib::comLib.xjs"
        //include "lib::comReport.xjs"
        // ????????? ?????? ??????????????? include ??????
        /**************************************************************************
         * 2. FORM ?????? ?????? ??????
         ***************************************************************************/
        this.fv_strXML = "";


        /**************************************************************************
         * 3. FORM ??????
         ***************************************************************************/
        this.form_onload = function (obj, e)
        {
        	/*?????? ????????? ???????????? ?????? ??????????????? ??? ??? ????????? ?????? ??????*/
        	// rexpert OofData ??????
        	//var strField = this.gfn_fieldData(this.ds_list, "code", "value");

        	/* crf ????????? ????????? 'crf/???????????????(ex:cmd)/?????????/?????????.crf' ???????????? ?????? */
        	//var strXML = this.gfn_getOofSqlData("/oracle_sample.ozr", strField, "report", "ratetest");
        	//this.fv_strXML = strXML;
        };

        /**************************************************************************
         * 4. TRANSACTION, CALLBACK ??????
         ***************************************************************************/

        /*-------------------------------------------------------------------------
         * ??????      : ?????? ?????? ??????
         *------------------------------------------------------------------------*/
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	trace("sPopupId ==> " + sPopupId + ", Variant ==>" + Variant);
        	switch (sPopupId)
        	{
        		case "rexpertViewer":
        			break;
        		default:
        			break;
        	}
        };

        /**************************************************************************
         * 7. ?????? ?????? ??????
         **************************************************************************/

        /**************************************************************************
         * 8. ?????????
         ***************************************************************************/

        /* clipReport ??????(SQL??????) ?????? ?????? */
        this.btn_Report_onclick = function (obj, e) {
            //code : parameter ?????? : 1,2....
        	var strField = this.gfn_strParameterData(this.ds_list, "code", "value");   //strField-->[QCAction003][QCAction004][3333][444][5555][6666][777][8888][999]
        	strField = '[SELSC][2020/12][2020/12][][6623]'; // ???????????? ???????????? ????????????. ???????????? ????????????.
        	var sRptName = "HJSTXR00090";  // HJSTXR00090.mrd // mrd ?????? ??????.
        	var sRptPath = "";             // mrd ????????? mrd ?????? ?????? ????????? ???????????????... ???????????? ??????.
            // ?????? div??? ?????????... fn_WebBrowserCall ??????
        	this.div_report.form.fn_WebBrowserCall(sRptPath, strField, sRptName);
        };

        /* ????????????(modal) ?????? ?????? ????????? */
        this.btn_popup_onclick = function (obj, e){
        	var strField = this.gfn_strParameterData(this.ds_list, "code", "value");  //code : parameter ?????? : 1,2....
        	//?????? strField = [$1???][$2???]....[$n???];
        	var sRptName = "HJSTXR00090";  // HJSTXR00090.mrd
        	var sRptPath = "";
        	strField = '[SELSC][2020/12][2020/12][][6623]';
        	var oArg = {
        		sRptPath : "",
        		sRptName : "HJSTXR00090",  // HJSTXR00090.mrd
        		strField : strField,
        		bModalless : false
        	};
        	var sOption = "titletext=Report modal ?????? ??????,modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };





























































        /* ????????????(modeless) ?????? ?????? ????????? */
        this.btn_popup00_onclick = function (obj, e)
        {
        	// rexpert OofData ??????
        	var strField = this.gfn_strParameterData(this.ds_list, "code", "value");
        	//?????? strField = [$1???][$2???]....[$n???];
        	var oArg = {
        		sRptPath : "/bas/",
        		sRptName : "test.mrd",
        		strField : strField,
        		bModalless : true
        	};
        	// ????????? ????????? ????????? ?????? autosize????????? ?????? width, height ????????? ??????.
        	var sOption = "autosize=false,width=1200,height=900,titletext=Report ??????,modeless=true";
        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };



        /////////?????? ??????////////
        /* clipReport ??????(XML??????) ?????? ?????? */
        this.btn_clipReportXML_onclick = function (obj, e)
        {
        	/*********************************************************************/
        	/*************************** ?????? case ******************************/
        	/*********************************************************************/
        	// /* webbrowser onloadcompleted ?????? ?????? ?????? */
        	// /* crf ????????? ????????? 'crf/???????????????(ex:cmd)/?????????/?????????.crf' ???????????? ?????? */
        	// var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", this.ds_list);
        	//
        	// //rexpert ??????
        	// this.div_report.fn_callReport(strXML);


        	/*********************************************************************/
        	/********************* param ??? ????????? case *************************/
        	/*********************************************************************/

        	// XML?????? ????????? rexpert OofData ??????
        	var arrFieldList = [];
        	arrFieldList.push(["param1", "?????????"]);
        	arrFieldList.push(["param2", "?????????"]);
        	arrFieldList.push(["param3", "?????????"]);
        	arrFieldList.push(["param4", "?????????"]);

        	/*case 2 - webbrowser onloadcompleted ?????? ?????? ??????*/
        	/* crf ????????? ????????? 'crf/???????????????(ex:cmd)/?????????/?????????.crf' ???????????? ?????? */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", this.ds_list, arrFieldList);
        	trace(strXML);
        	// rexpert ??????
        	this.div_report.form.fn_callReport(strXML);
        };

        /* ????????????(modal) ?????? ?????? ????????? (XML??????) */
        this.btn_popup01_onclick = function (obj, e)
        {
        	// rexpert OofData ??????
        	/* crf ????????? ????????? 'crf/???????????????(ex:cmd)/?????????/?????????.crf' ???????????? ?????? */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", this.ds_list);

        	var oArg = {
        		arg1 : "????????? ?????????",
        		strXML : strXML
        	};
        	var sOption = "titletext=Report ??????,modeless=false";
        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /* ????????????(modeless) ?????? ?????? ?????????(XML??????) */
        this.btn_popup02_onclick = function (obj, e)
        {
        	// rexpert OofData ??????
        	/* crf ????????? ????????? 'crf/???????????????(ex:cmd)/?????????/?????????.crf' ???????????? ?????? */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", this.ds_list);

        	var oArg = {
        		arg1 : "????????? ?????????",
        		strXML : strXML
        	};
        	// alert(oArg[1]);

        	// ????????? ????????? ????????? ?????? autosize????????? ?????? width, height ????????? ??????.
        	var sOption = "autosize=false,width=1200,height=900,titletext=Report ??????,modeless=true";

        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };


        /* ?????? ?????? ????????? (XML??????- Multi) */
        this.btn_clipReportXML00_onclick = function (obj, e)
        {
        	var objDsList = [this.ds_list, this.ds_list00, this.ds_list01];

        	/*case 2 - webbrowser onloadcompleted ?????? ?????? ??????*/
        	/* crf ????????? ????????? 'crf/???????????????(ex:cmd)/?????????/?????????.crf' ???????????? ?????? */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", objDsList);


        	// rexpert ??????
        	this.div_report.form.fn_callReport(strXML);
        };


        /* ????????????(modal) ?????? ?????? ????????? (XML??????- Multi) */
        this.btn_popup03_onclick = function (obj, e)
        {
        	var objDsList = [this.ds_list, this.ds_list00, this.ds_list01];

        	// rexpert OofData ??????
        	/* crf ????????? ????????? 'crf/???????????????(ex:cmd)/?????????/?????????.crf' ???????????? ?????? */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", objDsList);

        	var oArg = {
        		arg1 : "????????? ?????????",
        		strXML : strXML
        	};
        	// alert(oArg[1]);

        	var sOption = "titletext=Report ??????,modeless=false";

        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /* ????????????(modeless) ?????? ?????? ?????????(XML??????- Multi) */
        this.btn_popup04_onclick = function (obj, e)
        {
        	var objDsList = [this.ds_list, this.ds_list00, this.ds_list01];

        	// rexpert OofData ??????
        	/* crf ????????? ????????? 'crf/???????????????(ex:cmd)/?????????/?????????.crf' ???????????? ?????? */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", objDsList);

        	var oArg = {
        		arg1 : "????????? ?????????",
        		strXML : strXML
        	};
        	// alert(oArg[1]);

        	// ????????? ????????? ????????? ?????? autosize????????? ?????? width, height ????????? ??????.
        	var sOption = "autosize=false,width=1200,height=900,titletext=Report ??????,modeless=true";

        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        }
        ;


        this.ds_list03_onrowposchanged = function(obj,e)
        {
            var rdName = this.ds_list03.getColumn(e.newrow, 0);
        	this.edt_00.set_value(rdName);
        };

        this.ds_list03_canrowposchange = function(obj,e)
        {

        };

        /* ????????????(modal) ?????? ?????? ????????? */
        this.btn_popup_onclick2 = function (obj, e){
        	var sRptName = this.edt_00.value ;  // HJSTXR00090.mrd
        	var sRptPath = "";
        	var strField = this.edt_00_00.value; //'[SELSC] [2020/12] [2020/12] [] [6623]';
        	var oArg = {
        		sRptPath : sRptPath,
        		sRptName : sRptName,
        		strField : strField,
        		bModalless : false
        	};
        	var sOption = "titletext=Report modal ?????? - "+sRptName+",modeless=false";
        	this.div_report.form.fn_WebBrowserCall(sRptPath, strField, sRptName);
        	//this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };



        this.btn_popup01x_onclick = function(obj,e)
        {
        	var strField = '[696321]'; // 696321 ???????????? ???????????? ????????????. ???????????? ????????????.
        	var sRptName = "HJSPAYR05211bk";  // HJSTXR00090.mrd // mrd ?????? ??????.
        	var sRptPath = "";
        	this.div_report.form.fn_WebBrowserCall(sRptPath, strField, sRptName);
        };

        this.btn_popup01x2_onclick = function(obj,e)
        {
        	//693709
        	var strField = '[693709]'; // ???????????? ???????????? ????????????. ???????????? ????????????.
        	var sRptName = "HJSPAYR05211";  // HJSTXR00090.mrd // mrd ?????? ??????.
        	var sRptPath = "";
        	this.div_report.form.fn_WebBrowserCall(sRptPath, strField, sRptName);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_Report.addEventHandler("onclick",this.btn_Report_onclick,this);
            this.btn_popup.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.btn_popup00.addEventHandler("onclick",this.btn_popup_onclick2,this);
            this.btn_popup01.addEventHandler("onclick",this.btn_popup01x_onclick,this);
            this.btn_popup01_00.addEventHandler("onclick",this.btn_popup01x2_onclick,this);
            this.ds_list03.addEventHandler("onrowposchanged",this.ds_list03_onrowposchanged,this);
            this.ds_list03.addEventHandler("canrowposchange",this.ds_list03_canrowposchange,this);
        };
        this.loadIncludeScript("Sample90.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
