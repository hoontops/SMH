package smh.dfm.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;




/**
 * @file		: DFM00100ServiceImpl.java
 * @Package		: smh.dfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: DFM00100ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.05.10
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 10.  김진현      최초  생성 
 */
@Service
public class DFM00100ServiceImpl extends AbstractNbdfService implements DFM00100Service {

    public static final String NAMESAPCE = "smh.dfm.dao.DFM00100Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief 2블럭 메인 조회시 lot정보 Line에서 가져옴
     * @remark 
     * @see smh.dfm.service.DFM00100Service#selectDefectMapLotList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectMapLotList", param));
    }
    
    /**
     * @fn
     * @brief Lot Defect Map 조회 - 필터 공정콤보 (lot에 해당하는 AOI이면서 층이 존재하는 공정만)
     * @remark 
     * @see smh.dfm.service.DFM00100Service#selectProcComboList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcComboList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcComboList", param));
    }
    
    /**
     * @fn
     * @brief : Lot Defect Map 조회 - RAW DATA 조회 (수정됨)
     * @remark 
     * @see smh.dfm.service.DFM00100Service#selectDefectMapList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectMapRawList" , param)		, "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectGrpComboList" , param)	, "output2");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectCodeComboList" , param)	, "output3");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectList" , param)					, "output4");
 		// 이미지 Layer 정보 조회 
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLayerInfoList" , param)				, "output5");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectImgPointList" , param)		, "output6");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectColorList" , param)		, "output7");
 		
    }
    
    
    /**
     * @fn
     * @brief : Lot Defect Map 조회 - 이미지 Layer C,S면 조회(BLOB TYPE)
     * @remark 
     * @see smh.dfm.service.DFM00100Service#selectLayerImageInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLayerImageInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param 		= getParametersMap(dto);
        Map<String, Object> paramImg 	= new HashMap<>();			// 조회 조건 리턴값     
        paramImg = generalDao.addSelectOneMap(NAMESAPCE + ".selectLayerImageInfo", param);
        
        String fullSaveCours = "";
        if (!(MapUtils.isEmpty(paramImg)))
    	{	
        	fullSaveCours = (String) paramImg.get("FULLSAVECOURS");			// 이미지 경로 조회
        	System.out.println(" #####[이미지 경로]#### --> : "+fullSaveCours);
        	
        	// (21.06.16) 추가
        	if ((StringUtil.isNullOrEmpty(fullSaveCours)))
        	{
        		// {0}가 없습니다.
    			//throw new BizException("MessageParamIsNull|"+"Image");
        		throw new BizException("DefectCheckImage|"+"Image");		//	기준정보 >> 품질기준정보 >> Defect Map 도면 등록 화면에 이미지를 등록하세요.
    			
        	}
    	}
		else
		{
			// {0}가 없습니다.
			//throw new BizException("MessageParamIsNull|"+"Image");
			throw new BizException("DefectCheckImage|"+"Image");			//	기준정보 >> 품질기준정보 >> Defect Map 도면 등록 화면에 이미지를 등록하세요.
		}
        
        List<Map<String, Object>> dtPrint = new ArrayList<Map<String, Object>>();
    	Map<String, Object> tempMap = new HashMap<>();
    	
        File file = new File(fullSaveCours);
    	System.out.println(" #####[리턴 성공 - (file)]#### --> : "+(int) file.length());    	
        tempMap.put("BLOB", 	fileToBinary(file)	);
        tempMap.put("TYPE", 	"C"	);
    	dtPrint.add(tempMap);
    	System.out.println(" #####[리턴 성공 - BLOB (정상)]#### --> : "+tempMap.get("BLOB"));
    	
    	// 이미지 반전
    	// 좌우 반전 도전 후 -> blob 변환(시도 할 것)
    	BufferedImage simg = null;
    	try{ 
    	      simg = ImageIO.read(file);
	    }catch(IOException e){
	    	// 요청처리 중 오류가 발생하였습니다.{0}
	    	throw new BizException("ProcessingError|"+"Exception position : FileUtil - fileToString(File file)");
	    }
    	int width 	= simg.getWidth();
        int height 	= simg.getHeight();        

        System.out.println("이미지의(넓이) " + width);
        System.out.println("이미지의(높이) " + height);
        
        BufferedImage mimg = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);

        for(int j = 0; j < height; j++){
            for(int i = 0, w = width - 1; i < width; i++, w--){
            	int p = simg.getRGB(i, j);
            	//set mirror image pixel value - both left and right
            	mimg.setRGB(w, j, p);
            }
        }
        String out1 = "";
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        try {
			ImageIO.write(mimg, "png", os);
			byte[] fileArry1 = os.toByteArray();
			out1 = new String(base64Enc(fileArry1));
			os.close();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			// 요청처리 중 오류가 발생하였습니다.{0}
	    	throw new BizException("ProcessingError|"+"Exception position : FileUtil - fileToString(File file)");
		}
        Map<String, Object> tempMap2 = new HashMap<>();
        tempMap2.put("BLOB", out1);
        tempMap2.put("TYPE", 	"S"	);
    	dtPrint.add(tempMap2);
    	System.out.println(" ### [이미지 변환 - 반전] ### : "+tempMap2.get("BLOB"));
    	System.out.println(" ### [이미지 변환  후 사이즈 ] ### : "+dtPrint.size());

    	putDataSetMap(dto, dtPrint, "output");
    }
    
    /**
     * 파일을 바이너리 스트링으로 변경 (String 으로 반환 해봄.. )
     *
     * @param file
     * @return
     */
    public static String fileToBinary(File file) {
        String out = new String();
        FileInputStream fis = null;
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
     
        try {
            fis = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            // 요청처리 중 오류가 발생하였습니다.{0}
            throw new BizException("ProcessingError|"+"Exception position : FileUtil - fileToString(File file)");
        }     
        int len = 0;
        byte[] buf = new byte[1024];
        try {
            while ((len = fis.read(buf)) != -1) {
                baos.write(buf, 0, len);
            }
            byte[] fileArray = baos.toByteArray();
            out = new String(base64Enc(fileArray));
            fis.close();
            baos.close();
        } catch (IOException e) {
        	// 요청처리 중 오류가 발생하였습니다.{0}
            throw new BizException("ProcessingError|"+"Exception position : FileUtil - fileToString(File file)");
        }
        //System.out.println(" #####[리턴 성공 - 리턴전]#### --> : "+out);
        return out;
    }
    
    /*
     *  64변경
     */
    public static byte[] base64Enc(byte[] buffer) {
    	return Base64.encodeBase64(buffer);
    }
    
    
    /**
     * @fn
     * @brief : Lot Defect Map 조회 - 필터 적용 후 Point 정보 재조회
     * @remark 
     * @see smh.dfm.service.DFM00100Service#selectDefectMapLayerFilterList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapLayerFilterList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectImgPointList", param));
    }
    
    /**
     * @fn
     * @brief : Lot Defect Map 조회 - 선택된 (이미지 설정된 Layer 정보에 따른 생성해야 할 판넬 정보 조회)
     * @remark 
     * @see smh.dfm.service.DFM00100Service#selectDefectMapPanelFilterList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapPanelFilterList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectMapPanelFilterList", param));
    }
    
    /**
     * @fn
     * @brief : AOI Defect Map 그리드 조회
     * @remark 
     * @see smh.dfm.service.DFM00100Service#selectDefectMapDivList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapDivList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectList", param));
    }
    


    
  	
}