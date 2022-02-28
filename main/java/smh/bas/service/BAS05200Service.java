package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS05200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05200Service
* @Company: Built1
* @Create Date: 2021.04.27
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.27.   김진현   최초  생성
 *
 *
*/
public interface BAS05200Service {

	/**
     * @fn : selectBasAreaPersonTreeList
     * @brief : 자사 작업자 관리 - Tree 조회
     * @Method Name : selectBasAreaPersonTreeList
     * @remark
     * @Create Date: 2021.04.27
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.27.     김진현        최초  생성
      *
     */
	public void selectBasAreaPersonTreeList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selecBasAreaPersonMainList
     * @brief : 자사 작업자 관리 - Tree 선택 후 Main 조회
     * @Method Name : selecBasAreaPersonMainList
     * @remark
     * @Create Date: 2021.04.27
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.27.     김진현        최초  생성
      *
     */
	public void selecBasAreaPersonMainList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectInitComboList
     * @brief : 자사 작업자 관리 - site, area 콤보 정보 조회
     * @Method Name : selectInitComboList
     * @remark
     * @Create Date: 2021.04.27
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.27.     김진현        최초  생성
      *
     */
	public void selectInitComboList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selecUserAreaPersonList
     * @brief : 자사 작업자 관리 - 사용자 ID 조회
     * @Method Name : selecUserAreaPersonList
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.27.     김진현        최초  생성
      *
     */
	public void selecUserAreaPersonList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : saveBasAreaPerson
     * @brief : 자사 작업자 관리 - 저장
     * @Method Name : saveBasAreaPerson
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.27.     김진현        최초  생성
      *
     */
	public void saveBasAreaPerson(UiMapDto dto) throws Exception;
	
	

 
 }