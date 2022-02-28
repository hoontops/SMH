package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: MFM00200Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00200Service
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
public interface MFM00200Service {
	
	  
	  
/**
   * @fn : selectLoadSegmentListByTypeList
   * @brief : 대/중/소 공정그룹조회
   * @Method Name : selectLoadSegmentListByTypeList
   * @remark
   * @Create Date: 2021.04.13
   * @Author: 김진현
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일                    수정자        수정내용
    *   ------------  ------  ----------
    *   2021.04.13.     김진현        최초  생성
    *
   */
	public void selectLoadSegmentListByTypeList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectLoadSegmentList
     * @brief : 대/중/소 공정그룹조회 List
     * @Method Name : selectLoadSegmentList
     * @remark
     * @Create Date: 2021.04.13
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.13.     김진현        최초  생성
      *
     */
	public void selectLoadSegmentList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : saveProcGrpList
     * @brief : 대/중/소 저장(등록,수정,삭제)
     * @Method Name : saveProcGrpList
     * @remark
     * @Create Date: 2021.04.18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.18.     김진현        최초  생성
      *
     */
	public void saveProcGrpList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectUserList
     * @brief : 공정 부하 기준 정보 - 담당자 팝업
     * @Method Name : selectUserList
     * @remark
     * @Create Date: 2021.04.19
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.19.     김진현        최초  생성
      *
     */
	public void selectUserList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProdDefIdList
     * @brief : 공정 부하 기준 정보 - 품목 팝업
     * @Method Name : selectProdDefIdList
     * @remark
     * @Create Date: 2021.04.19
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.19.     김진현        최초  생성
      *
     */
	public void selectProdDefIdList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProduDefListForOwnerMapping
     * @brief : 공정 부하 기준 정보 - 담당자 맵핑 List 조회
     * @Method Name : selectProduDefListForOwnerMapping
     * @remark
     * @Create Date: 2021.04.19
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.19.     김진현        최초  생성
      *
     */
	public void selectProduDefListForOwnerMapping(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : saveLoadSegmentRel
     * @brief : 공정 부하 기준 정보 - 담당자,표준공정맵핑,부하량 저장
     * @Method Name : saveLoadSegmentRel
     * @remark
     * @Create Date: 2021.04.19
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.19.     김진현        최초  생성
      *
     */
	public void saveLoadSegmentRel(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProcessSegmentList
     * @brief : 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정팝업
     * @Method Name : selectProcessSegmentList
     * @remark
     * @Create Date: 2021.04.19
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.19.     김진현        최초  생성
      *
     */
	public void selectProcessSegmentList(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectProcessSegmentClassByTypeList
     * @brief : 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정팝업 - 중공정
     * @Method Name : selectProcessSegmentClassByTypeList
     * @remark
     * @Create Date: 2021.04.19
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.19.     김진현        최초  생성
      *
     */
	public void selectProcessSegmentClassByTypeList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectLoadSegmentRelList
     * @brief : 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정List 조회
     * @Method Name : selectLoadSegmentRelList
     * @remark
     * @Create Date: 2021.04.20
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.20.     김진현        최초  생성
      *
     */
	public void selectLoadSegmentRelList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProductSegmentMappingList
     * @brief : 공정 부하 기준 정보 - [부하량 기준정보] - 부하량 기준정보 List 조회
     * @Method Name : selectProductSegmentMappingList
     * @remark
     * @Create Date: 2021.04.20
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.20.     김진현        최초  생성
      *
     */
	public void selectProductSegmentMappingList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProdGrp
     * @brief : 공정부하기준정보 - 담당자 필터 품목그룹
     * @Method Name : selectProdGrp
     * @remark
     * @Create Date: 2021. 07. 27
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 07. 27.     김진현        최초  생성
      *
     */
    public void selectProdGrp(UiMapDto dto) throws Exception;
	
	
 }