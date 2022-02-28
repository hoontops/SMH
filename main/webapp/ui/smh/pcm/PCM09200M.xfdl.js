(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM09200M");
            this.set_titletext("자재 입/출고 내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_matrialInOutList", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLESTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONSTATUSCODES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_incomeDischarge", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_incomeMove", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_incomeEtc", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_incomeProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outboundReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outboundMove", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outboundEtc", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outboundProcessSegment", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_siteId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"105","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","115","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","131","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_areaId","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_holdYn","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("자재구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_holdYn","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnArea",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_01",null,"105","45","20","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_materialDefId","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("자재코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_materialDefId","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_materialDefId",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","152","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_matrialInOutList","0","34",null,"48.36%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_matrialInOutList");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DURABLESTATEID\"/><Cell col=\"1\" text=\"DURABLESTATE\"/><Cell col=\"2\" text=\"ISHOLD\"/><Cell col=\"3\" text=\"TOOLNO\"/><Cell col=\"4\" text=\"TOOLCODE\"/><Cell col=\"5\" text=\"TOOLNOSEQ\"/><Cell col=\"6\" text=\"TOOLVERSION\"/><Cell col=\"7\" text=\"TOOLNAME\"/><Cell col=\"8\" text=\"PRODUCTDEFID\"/><Cell col=\"9\" text=\"PRODUCTDEFNAME\"/><Cell col=\"10\" text=\"TOOLTYPEID\"/><Cell col=\"11\" text=\"TOOLTYPE\"/><Cell col=\"12\" text=\"TOOLFORMCODE\"/><Cell col=\"13\" text=\"TOOLFORM\"/><Cell col=\"14\" text=\"TOOLKINDID\"/><Cell col=\"15\" text=\"TOOLKIND\"/><Cell col=\"16\" text=\"AREAID\"/><Cell col=\"17\" text=\"AREANAME\"/><Cell col=\"18\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"19\" text=\"DURABLECLEANSTATE\"/><Cell col=\"20\" text=\"USEDCOUNT\"/><Cell col=\"21\" text=\"CLEANLIMIT\"/><Cell col=\"22\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"23\" text=\"USEDLIMIT\"/><Cell col=\"24\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"25\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"26\" text=\"WEIGHT\"/><Cell col=\"27\" text=\"HORIZONTAL\"/><Cell col=\"28\" text=\"VERTICAL\"/><Cell col=\"29\" text=\"THEIGHT\"/><Cell col=\"30\" text=\"USEDFACTOR\"/><Cell col=\"31\" text=\"POLISHTHICKNESS\"/><Cell col=\"32\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"33\" text=\"CREATEDTHICKNESS\"/><Cell col=\"34\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"35\" text=\"PRODUCTDEFVERSION\"/></Band><Band id=\"body\"><Cell text=\"bind:DURABLESTATEID\"/><Cell col=\"1\" text=\"bind:DURABLESTATE\"/><Cell col=\"2\" text=\"bind:ISHOLD\"/><Cell col=\"3\" text=\"bind:TOOLNO\"/><Cell col=\"4\" text=\"bind:TOOLCODE\"/><Cell col=\"5\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"6\" text=\"bind:TOOLVERSION\"/><Cell col=\"7\" text=\"bind:TOOLNAME\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"10\" text=\"bind:TOOLTYPEID\"/><Cell col=\"11\" text=\"bind:TOOLTYPE\"/><Cell col=\"12\" text=\"bind:TOOLFORMCODE\"/><Cell col=\"13\" text=\"bind:TOOLFORM\"/><Cell col=\"14\" text=\"bind:TOOLKINDID\"/><Cell col=\"15\" text=\"bind:TOOLKIND\"/><Cell col=\"16\" text=\"bind:AREAID\"/><Cell col=\"17\" text=\"bind:AREANAME\"/><Cell col=\"18\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"19\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"20\" text=\"bind:USEDCOUNT\"/><Cell col=\"21\" text=\"bind:CLEANLIMIT\"/><Cell col=\"22\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"23\" text=\"bind:USEDLIMIT\"/><Cell col=\"24\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"25\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"26\" text=\"bind:WEIGHT\"/><Cell col=\"27\" text=\"bind:HORIZONTAL\"/><Cell col=\"28\" text=\"bind:VERTICAL\"/><Cell col=\"29\" text=\"bind:THEIGHT\"/><Cell col=\"30\" text=\"bind:USEDFACTOR\"/><Cell col=\"31\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"32\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"33\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"34\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"35\" text=\"bind:PRODUCTDEFVERSION\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tabHistory","0","grd_matrialInOutList:11",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_tabindex("4");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tabHistory);
            obj.set_text("입고-불출");
            obj.set_tooltiptext("TOOLHISTORY");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Grid("grd_incomeDischarge","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_incomeDischarge");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOOLNO\"/><Cell col=\"1\" text=\"TOOLCODE\"/><Cell col=\"2\" text=\"TOOLNOSEQ\"/><Cell col=\"3\" text=\"TOOLVERSION\"/><Cell col=\"4\" text=\"TRXDATE\"/><Cell col=\"5\" text=\"TXNID\"/><Cell col=\"6\" text=\"TXNNAME\"/><Cell col=\"7\" text=\"TXNUSER\"/><Cell col=\"8\" text=\"TXNUSERNAME\"/><Cell col=\"9\" text=\"PREVPLANTID\"/><Cell col=\"10\" text=\"PREVPLANTNAME\"/><Cell col=\"11\" text=\"PREVAREAID\"/><Cell col=\"12\" text=\"PREVAREANAME\"/><Cell col=\"13\" text=\"PLANTID\"/><Cell col=\"14\" text=\"PLANT\"/><Cell col=\"15\" text=\"AREAID\"/><Cell col=\"16\" text=\"AREANAME\"/><Cell col=\"17\" text=\"QTY\"/><Cell col=\"18\" text=\"REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"VENDORID\"/><Cell col=\"21\" text=\"VENDORNAME\"/><Cell col=\"22\" text=\"REQUESTNO\"/><Cell col=\"23\" text=\"REQUESTUSER\"/><Cell col=\"24\" text=\"TOOLMAKETYPE\"/><Cell col=\"25\" text=\"TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"TXNHISTKEY\"/><Cell col=\"27\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"USEDCOUNT\"/><Cell col=\"30\" text=\"CLEANLIMIT\"/><Cell col=\"31\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"USEDLIMIT\"/><Cell col=\"33\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"WEIGHT\"/><Cell col=\"36\" text=\"HORIZONTAL\"/><Cell col=\"37\" text=\"VERTICAL\"/><Cell col=\"38\" text=\"THEIGHT\"/><Cell col=\"39\" text=\"USEDFACTOR\"/><Cell col=\"40\" text=\"POLISHTHICKNESS\"/><Cell col=\"41\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"REQUESTDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNO\"/><Cell col=\"1\" text=\"bind:TOOLCODE\"/><Cell col=\"2\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TRXDATE\"/><Cell col=\"5\" text=\"bind:TXNID\"/><Cell col=\"6\" text=\"bind:TXNNAME\"/><Cell col=\"7\" text=\"bind:TXNUSER\"/><Cell col=\"8\" text=\"bind:TXNUSERNAME\"/><Cell col=\"9\" text=\"bind:PREVPLANTID\"/><Cell col=\"10\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"11\" text=\"bind:PREVAREAID\"/><Cell col=\"12\" text=\"bind:PREVAREANAME\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:PLANT\"/><Cell col=\"15\" text=\"bind:AREAID\"/><Cell col=\"16\" text=\"bind:AREANAME\"/><Cell col=\"17\" text=\"bind:QTY\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"bind:REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"bind:VENDORID\"/><Cell col=\"21\" text=\"bind:VENDORNAME\"/><Cell col=\"22\" text=\"bind:REQUESTNO\"/><Cell col=\"23\" text=\"bind:REQUESTUSER\"/><Cell col=\"24\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"25\" text=\"bind:TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"bind:TXNHISTKEY\"/><Cell col=\"27\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"bind:USEDCOUNT\"/><Cell col=\"30\" text=\"bind:CLEANLIMIT\"/><Cell col=\"31\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"bind:USEDLIMIT\"/><Cell col=\"33\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"bind:WEIGHT\"/><Cell col=\"36\" text=\"bind:HORIZONTAL\"/><Cell col=\"37\" text=\"bind:VERTICAL\"/><Cell col=\"38\" text=\"bind:THEIGHT\"/><Cell col=\"39\" text=\"bind:USEDFACTOR\"/><Cell col=\"40\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"41\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"bind:REQUESTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_incomeDischarge","8","-3",null,"34","844",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tomDurableLot",null,"6","29","24","3",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tabHistory);
            obj.set_text("입고-재고이동");
            obj.set_tooltiptext("TOOLUSESTATUS");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Grid("grd_incomeMove","0","33",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_incomeMove");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOOLNO\"/><Cell col=\"1\" text=\"TOOLCODE\"/><Cell col=\"2\" text=\"TOOLNOSEQ\"/><Cell col=\"3\" text=\"TOOLVERSION\"/><Cell col=\"4\" text=\"TRXDATE\"/><Cell col=\"5\" text=\"TXNID\"/><Cell col=\"6\" text=\"TXNNAME\"/><Cell col=\"7\" text=\"TXNUSER\"/><Cell col=\"8\" text=\"TXNUSERNAME\"/><Cell col=\"9\" text=\"PREVPLANTID\"/><Cell col=\"10\" text=\"PREVPLANTNAME\"/><Cell col=\"11\" text=\"PREVAREAID\"/><Cell col=\"12\" text=\"PREVAREANAME\"/><Cell col=\"13\" text=\"PLANTID\"/><Cell col=\"14\" text=\"PLANT\"/><Cell col=\"15\" text=\"AREAID\"/><Cell col=\"16\" text=\"AREANAME\"/><Cell col=\"17\" text=\"QTY\"/><Cell col=\"18\" text=\"REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"VENDORID\"/><Cell col=\"21\" text=\"VENDORNAME\"/><Cell col=\"22\" text=\"REQUESTNO\"/><Cell col=\"23\" text=\"REQUESTUSER\"/><Cell col=\"24\" text=\"TOOLMAKETYPE\"/><Cell col=\"25\" text=\"TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"TXNHISTKEY\"/><Cell col=\"27\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"USEDCOUNT\"/><Cell col=\"30\" text=\"CLEANLIMIT\"/><Cell col=\"31\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"USEDLIMIT\"/><Cell col=\"33\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"WEIGHT\"/><Cell col=\"36\" text=\"HORIZONTAL\"/><Cell col=\"37\" text=\"VERTICAL\"/><Cell col=\"38\" text=\"THEIGHT\"/><Cell col=\"39\" text=\"USEDFACTOR\"/><Cell col=\"40\" text=\"POLISHTHICKNESS\"/><Cell col=\"41\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"REQUESTDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNO\"/><Cell col=\"1\" text=\"bind:TOOLCODE\"/><Cell col=\"2\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TRXDATE\"/><Cell col=\"5\" text=\"bind:TXNID\"/><Cell col=\"6\" text=\"bind:TXNNAME\"/><Cell col=\"7\" text=\"bind:TXNUSER\"/><Cell col=\"8\" text=\"bind:TXNUSERNAME\"/><Cell col=\"9\" text=\"bind:PREVPLANTID\"/><Cell col=\"10\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"11\" text=\"bind:PREVAREAID\"/><Cell col=\"12\" text=\"bind:PREVAREANAME\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:PLANT\"/><Cell col=\"15\" text=\"bind:AREAID\"/><Cell col=\"16\" text=\"bind:AREANAME\"/><Cell col=\"17\" text=\"bind:QTY\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"bind:REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"bind:VENDORID\"/><Cell col=\"21\" text=\"bind:VENDORNAME\"/><Cell col=\"22\" text=\"bind:REQUESTNO\"/><Cell col=\"23\" text=\"bind:REQUESTUSER\"/><Cell col=\"24\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"25\" text=\"bind:TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"bind:TXNHISTKEY\"/><Cell col=\"27\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"bind:USEDCOUNT\"/><Cell col=\"30\" text=\"bind:CLEANLIMIT\"/><Cell col=\"31\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"bind:USEDLIMIT\"/><Cell col=\"33\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"bind:WEIGHT\"/><Cell col=\"36\" text=\"bind:HORIZONTAL\"/><Cell col=\"37\" text=\"bind:VERTICAL\"/><Cell col=\"38\" text=\"bind:THEIGHT\"/><Cell col=\"39\" text=\"bind:USEDFACTOR\"/><Cell col=\"40\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"41\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"bind:REQUESTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_incomeMove","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tomDurableLot",null,"6","29","24","3",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tabHistory);
            obj.set_text("입고-기타입고");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_incomeEtc","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_incomeEtc","0","33",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_incomeEtc");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOOLNO\"/><Cell col=\"1\" text=\"TOOLCODE\"/><Cell col=\"2\" text=\"TOOLNOSEQ\"/><Cell col=\"3\" text=\"TOOLVERSION\"/><Cell col=\"4\" text=\"TRXDATE\"/><Cell col=\"5\" text=\"TXNID\"/><Cell col=\"6\" text=\"TXNNAME\"/><Cell col=\"7\" text=\"TXNUSER\"/><Cell col=\"8\" text=\"TXNUSERNAME\"/><Cell col=\"9\" text=\"PREVPLANTID\"/><Cell col=\"10\" text=\"PREVPLANTNAME\"/><Cell col=\"11\" text=\"PREVAREAID\"/><Cell col=\"12\" text=\"PREVAREANAME\"/><Cell col=\"13\" text=\"PLANTID\"/><Cell col=\"14\" text=\"PLANT\"/><Cell col=\"15\" text=\"AREAID\"/><Cell col=\"16\" text=\"AREANAME\"/><Cell col=\"17\" text=\"QTY\"/><Cell col=\"18\" text=\"REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"VENDORID\"/><Cell col=\"21\" text=\"VENDORNAME\"/><Cell col=\"22\" text=\"REQUESTNO\"/><Cell col=\"23\" text=\"REQUESTUSER\"/><Cell col=\"24\" text=\"TOOLMAKETYPE\"/><Cell col=\"25\" text=\"TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"TXNHISTKEY\"/><Cell col=\"27\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"USEDCOUNT\"/><Cell col=\"30\" text=\"CLEANLIMIT\"/><Cell col=\"31\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"USEDLIMIT\"/><Cell col=\"33\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"WEIGHT\"/><Cell col=\"36\" text=\"HORIZONTAL\"/><Cell col=\"37\" text=\"VERTICAL\"/><Cell col=\"38\" text=\"THEIGHT\"/><Cell col=\"39\" text=\"USEDFACTOR\"/><Cell col=\"40\" text=\"POLISHTHICKNESS\"/><Cell col=\"41\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"REQUESTDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNO\"/><Cell col=\"1\" text=\"bind:TOOLCODE\"/><Cell col=\"2\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TRXDATE\"/><Cell col=\"5\" text=\"bind:TXNID\"/><Cell col=\"6\" text=\"bind:TXNNAME\"/><Cell col=\"7\" text=\"bind:TXNUSER\"/><Cell col=\"8\" text=\"bind:TXNUSERNAME\"/><Cell col=\"9\" text=\"bind:PREVPLANTID\"/><Cell col=\"10\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"11\" text=\"bind:PREVAREAID\"/><Cell col=\"12\" text=\"bind:PREVAREANAME\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:PLANT\"/><Cell col=\"15\" text=\"bind:AREAID\"/><Cell col=\"16\" text=\"bind:AREANAME\"/><Cell col=\"17\" text=\"bind:QTY\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"bind:REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"bind:VENDORID\"/><Cell col=\"21\" text=\"bind:VENDORNAME\"/><Cell col=\"22\" text=\"bind:REQUESTNO\"/><Cell col=\"23\" text=\"bind:REQUESTUSER\"/><Cell col=\"24\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"25\" text=\"bind:TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"bind:TXNHISTKEY\"/><Cell col=\"27\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"bind:USEDCOUNT\"/><Cell col=\"30\" text=\"bind:CLEANLIMIT\"/><Cell col=\"31\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"bind:USEDLIMIT\"/><Cell col=\"33\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"bind:WEIGHT\"/><Cell col=\"36\" text=\"bind:HORIZONTAL\"/><Cell col=\"37\" text=\"bind:VERTICAL\"/><Cell col=\"38\" text=\"bind:THEIGHT\"/><Cell col=\"39\" text=\"bind:USEDFACTOR\"/><Cell col=\"40\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"41\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"bind:REQUESTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tomDurableLot",null,"6","29","24","3",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tabHistory);
            obj.set_text("입고-생산입고");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_incomeProduct","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_incomeProduct","0","33",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_incomeProduct");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOOLNO\"/><Cell col=\"1\" text=\"TOOLCODE\"/><Cell col=\"2\" text=\"TOOLNOSEQ\"/><Cell col=\"3\" text=\"TOOLVERSION\"/><Cell col=\"4\" text=\"TRXDATE\"/><Cell col=\"5\" text=\"TXNID\"/><Cell col=\"6\" text=\"TXNNAME\"/><Cell col=\"7\" text=\"TXNUSER\"/><Cell col=\"8\" text=\"TXNUSERNAME\"/><Cell col=\"9\" text=\"PREVPLANTID\"/><Cell col=\"10\" text=\"PREVPLANTNAME\"/><Cell col=\"11\" text=\"PREVAREAID\"/><Cell col=\"12\" text=\"PREVAREANAME\"/><Cell col=\"13\" text=\"PLANTID\"/><Cell col=\"14\" text=\"PLANT\"/><Cell col=\"15\" text=\"AREAID\"/><Cell col=\"16\" text=\"AREANAME\"/><Cell col=\"17\" text=\"QTY\"/><Cell col=\"18\" text=\"REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"VENDORID\"/><Cell col=\"21\" text=\"VENDORNAME\"/><Cell col=\"22\" text=\"REQUESTNO\"/><Cell col=\"23\" text=\"REQUESTUSER\"/><Cell col=\"24\" text=\"TOOLMAKETYPE\"/><Cell col=\"25\" text=\"TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"TXNHISTKEY\"/><Cell col=\"27\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"USEDCOUNT\"/><Cell col=\"30\" text=\"CLEANLIMIT\"/><Cell col=\"31\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"USEDLIMIT\"/><Cell col=\"33\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"WEIGHT\"/><Cell col=\"36\" text=\"HORIZONTAL\"/><Cell col=\"37\" text=\"VERTICAL\"/><Cell col=\"38\" text=\"THEIGHT\"/><Cell col=\"39\" text=\"USEDFACTOR\"/><Cell col=\"40\" text=\"POLISHTHICKNESS\"/><Cell col=\"41\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"REQUESTDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNO\"/><Cell col=\"1\" text=\"bind:TOOLCODE\"/><Cell col=\"2\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TRXDATE\"/><Cell col=\"5\" text=\"bind:TXNID\"/><Cell col=\"6\" text=\"bind:TXNNAME\"/><Cell col=\"7\" text=\"bind:TXNUSER\"/><Cell col=\"8\" text=\"bind:TXNUSERNAME\"/><Cell col=\"9\" text=\"bind:PREVPLANTID\"/><Cell col=\"10\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"11\" text=\"bind:PREVAREAID\"/><Cell col=\"12\" text=\"bind:PREVAREANAME\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:PLANT\"/><Cell col=\"15\" text=\"bind:AREAID\"/><Cell col=\"16\" text=\"bind:AREANAME\"/><Cell col=\"17\" text=\"bind:QTY\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"bind:REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"bind:VENDORID\"/><Cell col=\"21\" text=\"bind:VENDORNAME\"/><Cell col=\"22\" text=\"bind:REQUESTNO\"/><Cell col=\"23\" text=\"bind:REQUESTUSER\"/><Cell col=\"24\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"25\" text=\"bind:TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"bind:TXNHISTKEY\"/><Cell col=\"27\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"bind:USEDCOUNT\"/><Cell col=\"30\" text=\"bind:CLEANLIMIT\"/><Cell col=\"31\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"bind:USEDLIMIT\"/><Cell col=\"33\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"bind:WEIGHT\"/><Cell col=\"36\" text=\"bind:HORIZONTAL\"/><Cell col=\"37\" text=\"bind:VERTICAL\"/><Cell col=\"38\" text=\"bind:THEIGHT\"/><Cell col=\"39\" text=\"bind:USEDFACTOR\"/><Cell col=\"40\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"41\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"bind:REQUESTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage4.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tomDurableLot",null,"6","29","24","3",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage4.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work.form.tabHistory);
            obj.set_text("출고-반납");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_outboundReturn","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_outboundReturn","0","33",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_outboundReturn");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOOLNO\"/><Cell col=\"1\" text=\"TOOLCODE\"/><Cell col=\"2\" text=\"TOOLNOSEQ\"/><Cell col=\"3\" text=\"TOOLVERSION\"/><Cell col=\"4\" text=\"TRXDATE\"/><Cell col=\"5\" text=\"TXNID\"/><Cell col=\"6\" text=\"TXNNAME\"/><Cell col=\"7\" text=\"TXNUSER\"/><Cell col=\"8\" text=\"TXNUSERNAME\"/><Cell col=\"9\" text=\"PREVPLANTID\"/><Cell col=\"10\" text=\"PREVPLANTNAME\"/><Cell col=\"11\" text=\"PREVAREAID\"/><Cell col=\"12\" text=\"PREVAREANAME\"/><Cell col=\"13\" text=\"PLANTID\"/><Cell col=\"14\" text=\"PLANT\"/><Cell col=\"15\" text=\"AREAID\"/><Cell col=\"16\" text=\"AREANAME\"/><Cell col=\"17\" text=\"QTY\"/><Cell col=\"18\" text=\"REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"VENDORID\"/><Cell col=\"21\" text=\"VENDORNAME\"/><Cell col=\"22\" text=\"REQUESTNO\"/><Cell col=\"23\" text=\"REQUESTUSER\"/><Cell col=\"24\" text=\"TOOLMAKETYPE\"/><Cell col=\"25\" text=\"TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"TXNHISTKEY\"/><Cell col=\"27\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"USEDCOUNT\"/><Cell col=\"30\" text=\"CLEANLIMIT\"/><Cell col=\"31\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"USEDLIMIT\"/><Cell col=\"33\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"WEIGHT\"/><Cell col=\"36\" text=\"HORIZONTAL\"/><Cell col=\"37\" text=\"VERTICAL\"/><Cell col=\"38\" text=\"THEIGHT\"/><Cell col=\"39\" text=\"USEDFACTOR\"/><Cell col=\"40\" text=\"POLISHTHICKNESS\"/><Cell col=\"41\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"REQUESTDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNO\"/><Cell col=\"1\" text=\"bind:TOOLCODE\"/><Cell col=\"2\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TRXDATE\"/><Cell col=\"5\" text=\"bind:TXNID\"/><Cell col=\"6\" text=\"bind:TXNNAME\"/><Cell col=\"7\" text=\"bind:TXNUSER\"/><Cell col=\"8\" text=\"bind:TXNUSERNAME\"/><Cell col=\"9\" text=\"bind:PREVPLANTID\"/><Cell col=\"10\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"11\" text=\"bind:PREVAREAID\"/><Cell col=\"12\" text=\"bind:PREVAREANAME\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:PLANT\"/><Cell col=\"15\" text=\"bind:AREAID\"/><Cell col=\"16\" text=\"bind:AREANAME\"/><Cell col=\"17\" text=\"bind:QTY\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"bind:REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"bind:VENDORID\"/><Cell col=\"21\" text=\"bind:VENDORNAME\"/><Cell col=\"22\" text=\"bind:REQUESTNO\"/><Cell col=\"23\" text=\"bind:REQUESTUSER\"/><Cell col=\"24\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"25\" text=\"bind:TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"bind:TXNHISTKEY\"/><Cell col=\"27\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"bind:USEDCOUNT\"/><Cell col=\"30\" text=\"bind:CLEANLIMIT\"/><Cell col=\"31\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"bind:USEDLIMIT\"/><Cell col=\"33\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"bind:WEIGHT\"/><Cell col=\"36\" text=\"bind:HORIZONTAL\"/><Cell col=\"37\" text=\"bind:VERTICAL\"/><Cell col=\"38\" text=\"bind:THEIGHT\"/><Cell col=\"39\" text=\"bind:USEDFACTOR\"/><Cell col=\"40\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"41\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"bind:REQUESTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage5.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_outboundReturn",null,"6","29","24","3",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage5.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.div_work.form.tabHistory);
            obj.set_text("출고-재고이동");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_outboundMove","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage6.addChild(obj.name, obj);

            obj = new Grid("grd_outboundMove","0","33",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage6.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_outboundMove");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOOLNO\"/><Cell col=\"1\" text=\"TOOLCODE\"/><Cell col=\"2\" text=\"TOOLNOSEQ\"/><Cell col=\"3\" text=\"TOOLVERSION\"/><Cell col=\"4\" text=\"TRXDATE\"/><Cell col=\"5\" text=\"TXNID\"/><Cell col=\"6\" text=\"TXNNAME\"/><Cell col=\"7\" text=\"TXNUSER\"/><Cell col=\"8\" text=\"TXNUSERNAME\"/><Cell col=\"9\" text=\"PREVPLANTID\"/><Cell col=\"10\" text=\"PREVPLANTNAME\"/><Cell col=\"11\" text=\"PREVAREAID\"/><Cell col=\"12\" text=\"PREVAREANAME\"/><Cell col=\"13\" text=\"PLANTID\"/><Cell col=\"14\" text=\"PLANT\"/><Cell col=\"15\" text=\"AREAID\"/><Cell col=\"16\" text=\"AREANAME\"/><Cell col=\"17\" text=\"QTY\"/><Cell col=\"18\" text=\"REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"VENDORID\"/><Cell col=\"21\" text=\"VENDORNAME\"/><Cell col=\"22\" text=\"REQUESTNO\"/><Cell col=\"23\" text=\"REQUESTUSER\"/><Cell col=\"24\" text=\"TOOLMAKETYPE\"/><Cell col=\"25\" text=\"TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"TXNHISTKEY\"/><Cell col=\"27\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"USEDCOUNT\"/><Cell col=\"30\" text=\"CLEANLIMIT\"/><Cell col=\"31\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"USEDLIMIT\"/><Cell col=\"33\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"WEIGHT\"/><Cell col=\"36\" text=\"HORIZONTAL\"/><Cell col=\"37\" text=\"VERTICAL\"/><Cell col=\"38\" text=\"THEIGHT\"/><Cell col=\"39\" text=\"USEDFACTOR\"/><Cell col=\"40\" text=\"POLISHTHICKNESS\"/><Cell col=\"41\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"REQUESTDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNO\"/><Cell col=\"1\" text=\"bind:TOOLCODE\"/><Cell col=\"2\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TRXDATE\"/><Cell col=\"5\" text=\"bind:TXNID\"/><Cell col=\"6\" text=\"bind:TXNNAME\"/><Cell col=\"7\" text=\"bind:TXNUSER\"/><Cell col=\"8\" text=\"bind:TXNUSERNAME\"/><Cell col=\"9\" text=\"bind:PREVPLANTID\"/><Cell col=\"10\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"11\" text=\"bind:PREVAREAID\"/><Cell col=\"12\" text=\"bind:PREVAREANAME\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:PLANT\"/><Cell col=\"15\" text=\"bind:AREAID\"/><Cell col=\"16\" text=\"bind:AREANAME\"/><Cell col=\"17\" text=\"bind:QTY\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"bind:REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"bind:VENDORID\"/><Cell col=\"21\" text=\"bind:VENDORNAME\"/><Cell col=\"22\" text=\"bind:REQUESTNO\"/><Cell col=\"23\" text=\"bind:REQUESTUSER\"/><Cell col=\"24\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"25\" text=\"bind:TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"bind:TXNHISTKEY\"/><Cell col=\"27\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"bind:USEDCOUNT\"/><Cell col=\"30\" text=\"bind:CLEANLIMIT\"/><Cell col=\"31\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"bind:USEDLIMIT\"/><Cell col=\"33\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"bind:WEIGHT\"/><Cell col=\"36\" text=\"bind:HORIZONTAL\"/><Cell col=\"37\" text=\"bind:VERTICAL\"/><Cell col=\"38\" text=\"bind:THEIGHT\"/><Cell col=\"39\" text=\"bind:USEDFACTOR\"/><Cell col=\"40\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"41\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"bind:REQUESTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_outboundMove",null,"6","29","24","3",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage6.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.div_work.form.tabHistory);
            obj.set_text("출고-기타출고");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_outboundEtc","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage7.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage7.addChild(obj.name, obj);

            obj = new Grid("grd_outboundEtc","0","33",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage7.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_outboundEtc");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOOLNO\"/><Cell col=\"1\" text=\"TOOLCODE\"/><Cell col=\"2\" text=\"TOOLNOSEQ\"/><Cell col=\"3\" text=\"TOOLVERSION\"/><Cell col=\"4\" text=\"TRXDATE\"/><Cell col=\"5\" text=\"TXNID\"/><Cell col=\"6\" text=\"TXNNAME\"/><Cell col=\"7\" text=\"TXNUSER\"/><Cell col=\"8\" text=\"TXNUSERNAME\"/><Cell col=\"9\" text=\"PREVPLANTID\"/><Cell col=\"10\" text=\"PREVPLANTNAME\"/><Cell col=\"11\" text=\"PREVAREAID\"/><Cell col=\"12\" text=\"PREVAREANAME\"/><Cell col=\"13\" text=\"PLANTID\"/><Cell col=\"14\" text=\"PLANT\"/><Cell col=\"15\" text=\"AREAID\"/><Cell col=\"16\" text=\"AREANAME\"/><Cell col=\"17\" text=\"QTY\"/><Cell col=\"18\" text=\"REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"VENDORID\"/><Cell col=\"21\" text=\"VENDORNAME\"/><Cell col=\"22\" text=\"REQUESTNO\"/><Cell col=\"23\" text=\"REQUESTUSER\"/><Cell col=\"24\" text=\"TOOLMAKETYPE\"/><Cell col=\"25\" text=\"TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"TXNHISTKEY\"/><Cell col=\"27\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"USEDCOUNT\"/><Cell col=\"30\" text=\"CLEANLIMIT\"/><Cell col=\"31\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"USEDLIMIT\"/><Cell col=\"33\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"WEIGHT\"/><Cell col=\"36\" text=\"HORIZONTAL\"/><Cell col=\"37\" text=\"VERTICAL\"/><Cell col=\"38\" text=\"THEIGHT\"/><Cell col=\"39\" text=\"USEDFACTOR\"/><Cell col=\"40\" text=\"POLISHTHICKNESS\"/><Cell col=\"41\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"REQUESTDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNO\"/><Cell col=\"1\" text=\"bind:TOOLCODE\"/><Cell col=\"2\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TRXDATE\"/><Cell col=\"5\" text=\"bind:TXNID\"/><Cell col=\"6\" text=\"bind:TXNNAME\"/><Cell col=\"7\" text=\"bind:TXNUSER\"/><Cell col=\"8\" text=\"bind:TXNUSERNAME\"/><Cell col=\"9\" text=\"bind:PREVPLANTID\"/><Cell col=\"10\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"11\" text=\"bind:PREVAREAID\"/><Cell col=\"12\" text=\"bind:PREVAREANAME\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:PLANT\"/><Cell col=\"15\" text=\"bind:AREAID\"/><Cell col=\"16\" text=\"bind:AREANAME\"/><Cell col=\"17\" text=\"bind:QTY\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"bind:REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"bind:VENDORID\"/><Cell col=\"21\" text=\"bind:VENDORNAME\"/><Cell col=\"22\" text=\"bind:REQUESTNO\"/><Cell col=\"23\" text=\"bind:REQUESTUSER\"/><Cell col=\"24\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"25\" text=\"bind:TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"bind:TXNHISTKEY\"/><Cell col=\"27\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"bind:USEDCOUNT\"/><Cell col=\"30\" text=\"bind:CLEANLIMIT\"/><Cell col=\"31\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"bind:USEDLIMIT\"/><Cell col=\"33\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"bind:WEIGHT\"/><Cell col=\"36\" text=\"bind:HORIZONTAL\"/><Cell col=\"37\" text=\"bind:VERTICAL\"/><Cell col=\"38\" text=\"bind:THEIGHT\"/><Cell col=\"39\" text=\"bind:USEDFACTOR\"/><Cell col=\"40\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"41\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"bind:REQUESTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage7.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_outboundEtc",null,"6","29","24","3",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage7.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage7.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.div_work.form.tabHistory);
            obj.set_text("출고-공정출고");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_outboundProcessSegment","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage8.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage8.addChild(obj.name, obj);

            obj = new Grid("grd_outboundProcessSegment","0","33",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage8.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_outboundProcessSegment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOOLNO\"/><Cell col=\"1\" text=\"TOOLCODE\"/><Cell col=\"2\" text=\"TOOLNOSEQ\"/><Cell col=\"3\" text=\"TOOLVERSION\"/><Cell col=\"4\" text=\"TRXDATE\"/><Cell col=\"5\" text=\"TXNID\"/><Cell col=\"6\" text=\"TXNNAME\"/><Cell col=\"7\" text=\"TXNUSER\"/><Cell col=\"8\" text=\"TXNUSERNAME\"/><Cell col=\"9\" text=\"PREVPLANTID\"/><Cell col=\"10\" text=\"PREVPLANTNAME\"/><Cell col=\"11\" text=\"PREVAREAID\"/><Cell col=\"12\" text=\"PREVAREANAME\"/><Cell col=\"13\" text=\"PLANTID\"/><Cell col=\"14\" text=\"PLANT\"/><Cell col=\"15\" text=\"AREAID\"/><Cell col=\"16\" text=\"AREANAME\"/><Cell col=\"17\" text=\"QTY\"/><Cell col=\"18\" text=\"REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"VENDORID\"/><Cell col=\"21\" text=\"VENDORNAME\"/><Cell col=\"22\" text=\"REQUESTNO\"/><Cell col=\"23\" text=\"REQUESTUSER\"/><Cell col=\"24\" text=\"TOOLMAKETYPE\"/><Cell col=\"25\" text=\"TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"TXNHISTKEY\"/><Cell col=\"27\" text=\"DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"USEDCOUNT\"/><Cell col=\"30\" text=\"CLEANLIMIT\"/><Cell col=\"31\" text=\"TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"USEDLIMIT\"/><Cell col=\"33\" text=\"TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"WEIGHT\"/><Cell col=\"36\" text=\"HORIZONTAL\"/><Cell col=\"37\" text=\"VERTICAL\"/><Cell col=\"38\" text=\"THEIGHT\"/><Cell col=\"39\" text=\"USEDFACTOR\"/><Cell col=\"40\" text=\"POLISHTHICKNESS\"/><Cell col=\"41\" text=\"TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"REQUESTDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNO\"/><Cell col=\"1\" text=\"bind:TOOLCODE\"/><Cell col=\"2\" text=\"bind:TOOLNOSEQ\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TRXDATE\"/><Cell col=\"5\" text=\"bind:TXNID\"/><Cell col=\"6\" text=\"bind:TXNNAME\"/><Cell col=\"7\" text=\"bind:TXNUSER\"/><Cell col=\"8\" text=\"bind:TXNUSERNAME\"/><Cell col=\"9\" text=\"bind:PREVPLANTID\"/><Cell col=\"10\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"11\" text=\"bind:PREVAREAID\"/><Cell col=\"12\" text=\"bind:PREVAREANAME\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:PLANT\"/><Cell col=\"15\" text=\"bind:AREAID\"/><Cell col=\"16\" text=\"bind:AREANAME\"/><Cell col=\"17\" text=\"bind:QTY\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\"/><Cell col=\"19\" text=\"bind:REPAIRRESULTCOMMENT\"/><Cell col=\"20\" text=\"bind:VENDORID\"/><Cell col=\"21\" text=\"bind:VENDORNAME\"/><Cell col=\"22\" text=\"bind:REQUESTNO\"/><Cell col=\"23\" text=\"bind:REQUESTUSER\"/><Cell col=\"24\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"25\" text=\"bind:TOOLMAKETYPEID\"/><Cell col=\"26\" text=\"bind:TXNHISTKEY\"/><Cell col=\"27\" text=\"bind:DURABLECLEANSTATEID\"/><Cell col=\"28\" text=\"bind:DURABLECLEANSTATE\"/><Cell col=\"29\" text=\"bind:USEDCOUNT\"/><Cell col=\"30\" text=\"bind:CLEANLIMIT\"/><Cell col=\"31\" text=\"bind:TOTALUSEDCOUNT\"/><Cell col=\"32\" text=\"bind:USEDLIMIT\"/><Cell col=\"33\" text=\"bind:TOTALCLEANCOUNT\"/><Cell col=\"34\" text=\"bind:TOTALREPAIRCOUNT\"/><Cell col=\"35\" text=\"bind:WEIGHT\"/><Cell col=\"36\" text=\"bind:HORIZONTAL\"/><Cell col=\"37\" text=\"bind:VERTICAL\"/><Cell col=\"38\" text=\"bind:THEIGHT\"/><Cell col=\"39\" text=\"bind:USEDFACTOR\"/><Cell col=\"40\" text=\"bind:POLISHTHICKNESS\"/><Cell col=\"41\" text=\"bind:TOTALPOLISHTHICKNESS\"/><Cell col=\"42\" text=\"bind:CREATEDTHICKNESS\"/><Cell col=\"43\" text=\"bind:TOOLTHICKNESSLIMIT\"/><Cell col=\"44\" text=\"bind:REQUESTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage8.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_outboundProcessSegment",null,"6","29","24","3",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage8.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage8.addChild(obj.name, obj);

            obj = new Static("title0","1","0","155","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("자재 입출고 내역 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_matrialInOutList","title0:21","-1",null,"34","706",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tomDurableLot",null,"6","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset2",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","81",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("자재 입/출고 내역");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,780,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM09200M.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM09200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자재 입/출고 내역
         * 파일명 		: PCM09200M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 자재 입/출고 내역
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.detailDiv = this.div_work.form;

        var gTrStatusListStr="";

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_tomDurableLot.clearData();
        	this.ds_tomToolHistory.clearData();
        	this.ds_tomToolUseHistory.clearData();

        	this.ds_search.clearData();

        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.searchDiv.edt_areaId.value = ''; //히든공백처리
        	}

        	//품목코드명이 공백이면 품목코드Id 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.searchDiv.edt_productId.value = ''; //히든공백처리
        	}

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "P_PLANTID", this.searchDiv.cbo_site.value); //Site코드
        	this.ds_search.setColumn(0, "AREAID", this.searchDiv.edt_areaId.value); //작업장코드
        	this.ds_search.setColumn(0, "DURABLESTATE", this.searchDiv.cbo_state.value); //상태코드
        	this.ds_search.setColumn(0, "ISHOLD", this.searchDiv.cbo_holdYn.value); //보류여부
        	this.ds_search.setColumn(0, "P_TOOLNO", this.searchDiv.edt_toolNo.value); //Tool번호
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.searchDiv.edt_productId.value); //품목 코드
        	this.ds_search.setColumn(0, "CURRENTLOGINID", this.gf_getUserAcnt()); //세션사용자로그인ID
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectTomToolStatusListForReportByEap");

        	var sSvcID 			= "selectTomToolStatusListForReportByEap";
        	var sController 	= "/tom01100/selectTomToolStatusListForReportByEap.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tomDurableLot=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        	case "selectTomPlantList":	//[조회조건] Site Callback
        		this.searchDiv.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        		this.fn_initStateCombo();
        		//HIDDEN Init
        		this.searchDiv.edt_areaId.value = '';
        		this.searchDiv.edt_productId.value = '';
        		break;
        	case "selectTomToolStatusListForReportByEap":	//치공구현황 조회 callback
        	    if (this.ds_tomDurableLot.getRowCount() == 0)
        	    {
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		} else {
        		}
        		break;
        	case "selectTomToolHistoryListForReportByEqp":	//이력 조회 callback
        	    if (this.ds_tomToolHistory.getRowCount() == 0)
        		{
        		} else {
        		}
        		break;
        	case "selectToolUseStatusListForReportByEqp":	//사용내역 조회 callback
        		if (this.ds_tomToolUseHistory.getRowCount() == 0)
        		{
        		} else {
        		}
        		break;
        	case "transactionStatusCodes":	//Transaction Status List 조회 callback
        		if (this.ds_tomTransactionStatusCodes.getRowCount() == 0)
        		{
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		} else {
        			//초기 init 작업시에 저장해 놓고, 상세 내역 그리드 클릭시 전송 한다.
        			this.gTrStatusListStr = this.gfn_datasetColumnToCommaStrings(this.ds_tomTransactionStatusCodes);
        		}
        		break;
        	default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00063"){ //작업장조회 조회
        		oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00162"){ //자재코드
        		oArg.arg_searchStr   = "MATERIAL=" +this.nfn_nvl(this.searchDiv.edt_materialDefId.value,''); //조회조건의 자재코드
        		oArg.arg_rtnCols = "CONSUMABLENUM";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.searchDiv.edt_areaId.set_value(rtn[0]); //HIDDEN 필드
        	} else if(sPopupId == "SCH_MATRIALDEF") //자재코드
        	{
        		this.searchDiv.edt_materialDefId.set_value(rtn[0]);
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_transactionStatusCodes(); //트랜젝션 상태 리스트
        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : Transaction Status Codes (초기에 트랜젝션 코드 리스트 구해 놓고, 검색시에 전송 한다.)
         */
        this.fn_transactionStatusCodes = function()
        {
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "CODECLASSID", "ToolTransactionStatus"); //값 고정
        	this.ds_search.setColumn(0, "SQL_ID", "selectTomLookupCodeList");

        	var sSvcID = "transactionStatusCodes";
        	var sController = "/tomCommon/selectTomLookupCodeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_tomTransactionStatusCodes=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_site // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }



        /*
         * 기능 : '상태' 콤보 조회
         */
        this.fn_initStateCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("STATEMODELID", "DurableState");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_state // Object
        								, "selectTomStateListByTool,ALL,Y,A" // OPTION
        								, sArgs);	  // 추가 파라미터
        }

        /*
         * 기능 : 이력 조회 (치공구현황조회 리스트에서 클릭 이벤트 실행시 호출 됨)
         */
        this.ToolHistoryListForReportByEap = function(SRow)
        {
        	this.ds_tomToolHistory.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "TRANSACTIONSTATUSCODES", this.gTrStatusListStr);
            this.ds_search.setColumn(0, "DURABLELOTID", this.ds_tomDurableLot.getColumn(SRow,"TOOLNO"));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectTomToolHistoryListForReportByEqp");

        	var sSvcID = "selectTomToolHistoryListForReportByEqp";
        	var sController = "/tom01100/selectTomToolHistoryListForReportByEqp.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_tomToolHistory=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 기능 : 내역 조회 (치공구현황조회 리스트에서 클릭 이벤트 실행시 호출 됨)
         */
        this.ToolUseStatusListForReportByEap = function(SRow)
        {
        	this.ds_tomToolUseHistory.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
            this.ds_search.setColumn(0, "DURABLELOTID", this.ds_tomDurableLot.getColumn(SRow,"TOOLNO"));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectTomToolUseStatusListForReportByEqp");

        	var sSvcID = "selectTomToolUseStatusListForReportByEqp";
        	var sController = "/tom01100/selectTomToolUseStatusListForReportByEqp.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_tomToolUseHistory=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cbo_site_onitemchanged = function(obj,e)
        {
        	this.fn_initStateCombo();
        };

        /*
         * 이벤트 : 조회조건에서 '작업장' 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btnArea_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_site.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        };

        /*
         * 이벤트 : 조회조건에서 '자재코드' : 공통 팝업
         */
        this.tab_search_Tabpage1_btnProduct_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_site.value);
        	sArgs += this.gfn_setParam("VALIDSTATE", "Valid");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_MATRIALDEF","P00162", sArgs); //자재 조회
        };

        /*
         * 이벤트 : 그리드에서 클릭 이벤트
         */
        this.div_work_grd_tomDurableLot_oncellclick = function(obj,e)
        {
        	this.ToolHistoryListForReportByEap(e.row);
        	this.ToolUseStatusListForReportByEap(e.row);
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_site.set_value(this.gf_getSiteType());
        };

        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnArea_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnProduct_onclick();
        	}
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_tomDurableLot.clearData();
        	this.ds_tomToolHistory.clearData();
        	this.ds_tomToolUseHistory.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.sta_cnt_ds_tomDurableLot.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.tabHistory.Tabpage1.form.sta_cnt_ds_tomToolHistory.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.tabHistory.Tabpage2.form.sta_cnt_ds_tomToolUseHistory.set_text(strCnt);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_site.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboSite_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.edt_area.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area_onkeydown,this);
            this.tab_search.Tabpage1.form.btnArea.addEventHandler("onclick",this.tab_search_Tabpage1_btnArea_onclick,this);
            this.tab_search.Tabpage1.form.edt_materialDefId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_materialDefId.addEventHandler("onclick",this.tab_search_Tabpage1_btnProduct_onclick,this);
            this.div_work.form.grd_matrialInOutList.addEventHandler("oncellclick",this.div_work_grd_tomDurableLot_oncellclick,this);
            this.div_work.form.tabHistory.addEventHandler("onchanged",this.tab_onchanged,this);
            this.div_work.form.tabHistory.Tabpage1.form.grd_incomeDischarge.addEventHandler("onexpanddown",this.div_work_tab_Tabpage1_grdResource_onexpanddown,this);
            this.div_work.form.tabHistory.Tabpage2.form.grd_incomeMove.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_work.form.tabHistory.Tabpage3.form.grd_incomeEtc.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_work.form.tabHistory.Tabpage4.form.grd_incomeProduct.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_work.form.tabHistory.Tabpage5.form.grd_outboundReturn.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_work.form.tabHistory.Tabpage6.form.grd_outboundMove.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_work.form.tabHistory.Tabpage7.form.grd_outboundEtc.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_work.form.tabHistory.Tabpage8.form.grd_outboundProcessSegment.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_header.form.Static01.addEventHandler("onclick",this.div_header_Static01_onclick,this);
            this.div_header.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM09200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
