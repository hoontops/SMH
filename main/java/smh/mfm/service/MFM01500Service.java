package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

	/**
	 * @file		: MFM01500Service.java
	 * @Package		: smh.mfm.service
	 * @Project name: IFC MES시스템 구축
	 * @Type name	: MFM01600Service
	 * @Company		: Built1
	 * @Create Date	: 2021.04.26
	 * @Author		: 김성현
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일               수정자         수정내용
	 *   ------------  ------  ----------
	 *   2021. 04. 26.  김성현      최초  생성 
	 */
	public interface MFM01500Service {
	
	/**
     * @fn : selectProductKind
     * @brief : 
     * @Method Name : selectProductKind
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 05. 24     김성현        최초  생성
      *
     */
	public void selectProductKind(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProductKindForItemForProductdefList
     * @brief : 
     * @Method Name : selectProductKindForItemForProductdefList
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 05. 24     김성현        최초  생성
      *
     */
	public void selectItemGrpProductdefList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProductKindForProductForProductdefList
     * @brief : 
     * @Method Name : selectProductKindForProductForProductdefList
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 05. 24     김성현        최초  생성
      *
     */
	public void selectProductGrpProductdefList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectItemGrpProductdefDetailList
     * @brief : 
     * @Method Name : selectItemGrpProductdefDetailList
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 05. 24     김성현        최초  생성
      *
     */
	public void selectItemGrpProductdefDetailList(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectProductGrpProductdefDetailList
     * @brief : 
     * @Method Name : selectProductGrpProductdefDetailList
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 05. 24     김성현        최초  생성
      *
     */
	public void selectProductGrpProductdefDetailList(UiMapDto dto) throws Exception;
	
	
 }