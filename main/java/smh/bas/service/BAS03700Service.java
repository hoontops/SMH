package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS03700Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03700Service
* @Company: Built1
* @Create Date: 2021.3.5
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 5.   김기수   최초  생성
 *
 *
*/
public interface BAS03700Service {

    /**
    * @fn : selectBasBOMList
    * @brief : BOM소요량을 조회 한다.
    * @Method Name : selectBasBOMList
    * @remark
    * @Create Date: 2021.3.5
    * @Author: 김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.3.5.       김기수     최초  생성
     *
    */
    public void selectBasBOMList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectBasBOMListExcel
     * @brief : 전체 BOM소요량 Excel 다운로드 
     * @Method Name : selectBasBOMListExcel
     * @remark
     * @Create Date: 2021.3.5
     * @Author: 김기수
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.3.5.       김기수     최초  생성
      *
     */
    public void selectBasBOMListExcel(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectBasAllCount
     * @brief : 전체 BOM 소요량 다운로드를 위한 전체 ROW수 체크.
     * @Method Name : selectBasAllCount
     * @remark
     * @Create Date: 2021.3.5
     * @Author: 김기수
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.3.5.       김기수     최초  생성
      *
     */
    public void selectBasAllCount(UiMapDto dto) throws Exception;
 }