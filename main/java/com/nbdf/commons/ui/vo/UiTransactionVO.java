package com.nbdf.commons.ui.vo;

import com.nbdf.commons.vo.BaseVo;

/**
 * @Class UiTransactionVO
 * @Description UiTransactionVO 클래스
 * @Modification
 * 
 * @author lessor
 * @version 1.0
 * @see
 */
@SuppressWarnings("serial")
public class UiTransactionVO extends BaseVo {

    /**
     * input DataSet 명
     */
    private String inDataset;

    /**
     * input DataSet과 매핑될 Value Object class 명
     */
    private String inVOClass;

    /**
     * output DataSet 명
     */
    private String outDataset;

    /**
     * output DataSet과 매핑될 Value Object calss 명
     */
    private String outVOClass;

    public String getInDataset() {
        return inDataset;
    }

    public void setInDataset(String inDataset) {
        this.inDataset = inDataset;
    }

    public String getInVOClass() {
        return inVOClass;
    }

    public void setInVOClass(String inVOClass) {
        this.inVOClass = inVOClass;
    }

    public String getOutDataset() {
        return outDataset;
    }

    public void setOutDataset(String outDataset) {
        this.outDataset = outDataset;
    }

    public String getOutVOClass() {
        return outVOClass;
    }

    public void setOutVOClass(String outVOClass) {
        this.outVOClass = outVOClass;
    }

}
