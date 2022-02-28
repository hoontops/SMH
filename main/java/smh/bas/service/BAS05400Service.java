package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS05400Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05400Service
* @Company: Built1
* @Create Date: 2021.05.06
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.06.   김진현   최초  생성
 *
 *
*/
public interface BAS05400Service {

	/**
     * @fn : selectProductDefList
     * @brief : PCS이미지 관리 - 품목 팝업
     * @Method Name : selectProductDefList
     * @remark
     * @Create Date: 2021.05.06
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.06.     김진현        최초  생성
      *
     */
    public void selectProductDefList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectPCSImageList
     * @brief : PCS이미지 관리 - 메인 그리드 조회
     * @Method Name : selectPCSImageList
     * @remark
     * @Create Date: 2021.05.07
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.07.     김진현        최초  생성
      *
     */
    public void selectPCSImageList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : savePcmImage
     * @brief : PCS이미지 관리 - 메인 그리드 저장
     * @Method Name : savePcmImage
     * @remark
     * @Create Date: 2021.05.07
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.07.     김진현        최초  생성
      *
     */
    public void savePcmImage(UiMapDto dto) throws Exception;
    
    /**
     * @fn : savePCSImageSize
     * @brief : PCS이미지 관리 - 메인 그리드 저장(가로/세로)
     * @Method Name : savePCSImageSize
     * @remark
     * @Create Date: 2021.05.07
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.07.     김진현        최초  생성
      *
     */
    public void savePCSImageSize(UiMapDto dto) throws Exception;
   
 
 }