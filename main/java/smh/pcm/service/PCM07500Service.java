package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM07500Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM07500Service
 * @Company		: Built1
 * @Create Date	: 2021.04.09
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 09.  김진현      최초  생성 
 */
public interface PCM07500Service {
	
	/**
     * @fn : selectPackLineList
     * @brief : 포장라벨출력(2블럭) - Line List  조회
     * @Method Name : selectPackLineList
     * @remark
     * @Create Date: 2021.04.09
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.09.     김진현        최초  생성
      *
     */
	public void selectPackLineList(UiMapDto dto) throws Exception; 
	
	
	/**
     * @fn : savePackLabel02
     * @brief : 포장라벨출력(2블럭) - 저장시
     * @Method Name : savePackLabel02
     * @remark
     * @Create Date: 2021.04.09
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.09.     김진현        최초  생성
      *
     */
	public void savePackLabel02(UiMapDto dto) throws Exception; 
	
	/**
     * @fn : selectPackLabelMain2BList
     * @brief : 2블럭 메인 조회시 lot정보 Line에서 가져옴
     * @Method Name : selectPackLabelMain2BList
     * @remark
     * @Create Date: 2021.05.10
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.10.     김진현        최초  생성
      *
     */
    public void selectPackLabelMain2BList(UiMapDto dto) throws Exception;
	
	
 }