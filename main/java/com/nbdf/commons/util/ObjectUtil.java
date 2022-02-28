package com.nbdf.commons.util;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.lang.reflect.Field;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.Security;
import java.sql.Clob;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.codec.binary.Base64;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.beans.MutablePropertyValues;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.support.RequestContextUtils;

/**
 * @Class ObjectUtil
 * @Description Object 관련 유틸 클래스
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 *
 *      (c) Copyright Built1 2014. All rights reserved.
 */
/**
* @file: ObjectUtil.java
* @Package: com.nbdf.commons.util
* @Project name: IFC MES시스템 구축
* @Type name: ObjectUtil
* @Company: Built1
* @Create Date: 2015. 5. 30. 오후 1:22:09
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 5. 30.        JIn Sung Ha     최초  생성
 *
*/
@SuppressWarnings("unchecked")
public class ObjectUtil {

    /**
     * request 객체에서 parameter 객체 정보 가져오기
     *
     * @param request
     * @return
     * @throws Exception
     */
    public static final Map<String, Object> getParameterMap(HttpServletRequest request) throws Exception {
        return getParameterMap(request, null, true);
    }

    /**
     * OBJ <-- session (User)
     *
     * @param request
     * @param obj
     * @return
     */
    public static final Map<String, Object> getParameterMap(HttpServletRequest request, Object obj) throws Exception {
        return getParameterMap(request, obj, true);
    }

    /**
     * request 객체에서 parameter 객체 정보 가져오기
     *
     * @param request
     * @param obj
     * @param containAttribute
     * @return
     * @throws Exception
     */
    @SuppressWarnings("deprecation")
    public static final Map<String, Object> getParameterMap(HttpServletRequest request, Object obj, boolean containAttribute) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        WebApplicationContext context = null;

        Enumeration<String> e = request.getSession().getAttributeNames();
        while (e.hasMoreElements()) {
            String key = (String) e.nextElement();
            if ("User".equals(key) || "categoryListingType".equalsIgnoreCase(key) || "store_category".equalsIgnoreCase(key) || "Config".equalsIgnoreCase(key)) {
                if (obj != null) {
                    DomainBinderUtil binder = new DomainBinderUtil(obj);
                    MutablePropertyValues mpvs = new MutablePropertyValues();
                    mpvs.addPropertyValue(key.toLowerCase(), request.getSession().getValue(key));
                    binder.doBind(mpvs);
                }
                paramMap.put(key, request.getSession().getValue(key));
            }
        }

        // Grid Used according to the presence or absence of branching
        // if(null != request.getParameter("mode")){

        e = request.getParameterNames();
        while (e.hasMoreElements()) {
            String key = (String) e.nextElement();
            String[] values = request.getParameterValues(key);
            if (values.length == 1) {
                paramMap.put(key, values[0].trim());
            } else {
                paramMap.put(key, values);
            }
        }

        if (containAttribute) {
            e = request.getAttributeNames();
            while (e.hasMoreElements()) {
                String key = (String) e.nextElement();
                paramMap.put(key, request.getAttribute(key));
            }
        }

        MultipartHttpServletRequest mpRequest = null;
        if (request instanceof MultipartHttpServletRequest) {
            mpRequest = (MultipartHttpServletRequest) request;
            Iterator iter = mpRequest.getFileNames();
            while (iter.hasNext()) {
                String key = (String) iter.next();
                MultipartFile file = mpRequest.getFile(key);
                if (file.getSize() > 0) {
                    paramMap.put(key, file);
                }
            }
        }

        // Top title, Left menu setting
        if (paramMap.get("cur_parent_cd") != null && paramMap.get("cur_menu_cd") != null) {
            request.getSession().setAttribute("cur_menu_cd", paramMap.get("cur_menu_cd"));
            request.getSession().setAttribute("cur_parent_cd", paramMap.get("cur_parent_cd"));
            request.getSession().setAttribute("cur_parent_nm", MenuUtil.getParent_nm((List) request.getSession().getAttribute("MenuList"), (String) paramMap.get("cur_parent_cd")));
            request.getSession().setAttribute("cur_menu_nm", MenuUtil.getMenu_nm((List) request.getSession().getAttribute("MenuList"), (String) paramMap.get("cur_menu_cd")));
            request.getSession().setAttribute("cur_menu_navi", MenuUtil.getMenu_navi((List) request.getSession().getAttribute("MenuList"), (String) paramMap.get("cur_menu_cd")));
        }

        // required setting
        if (paramMap.get("currPage") == null || paramMap.get("currPage").equals("") || paramMap.get("currPage").equals("undefined"))
            paramMap.put("currPage", "1");
        if (paramMap.get("pageLine") == null || paramMap.get("pageLine").equals("") || paramMap.get("pageLine").equals("undefined"))
            paramMap.put("pageLine", "10");

        // Local Vs Server
        context = RequestContextUtils.getWebApplicationContext(request);
        String realPath = context.getServletContext().getRealPath("");
        paramMap.put("realPath", realPath);
        String server_name = request.getServerName();

        // System.out.println("realPath=[" + realPath + "]");

        if ("df.hgrinc.com".equals(server_name)) {
            paramMap.put("serverType", "real");
        } else if ("erp.yesc.co.kr".equals(server_name)) {
            paramMap.put("serverType", "test");
        } else {
            paramMap.put("serverType", "local");
        }

        return paramMap;
    }

    /**
     * 문자열의 빈 문자 제거하기
     *
     * @param obj
     * @return
     */
    public static final String toStrTrim(Object obj) {
        if (obj == null) {
            return "";
        }
        return String.valueOf(obj).trim();
    }

    /**
     * request ---> file list
     *
     * @param request
     * @return
     */
    public static final Map<String, MultipartFile> getFileList(HttpServletRequest request) {
        MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
        Map<String, MultipartFile> files = multiRequest.getFileMap();
        return files;
    }

    /**
     * Convert Object to Map
     *
     * @param fromObj
     * @param sUpperDiv
     * @return
     */
    public static final Map<String, Object> getObjectToMap(Object obj, String sUpperDiv) {
        java.lang.reflect.Field[] fields = obj.getClass().getDeclaredFields();
        Map<String, Object> map = new HashMap<String, Object>();
        for (int i = 0; i < fields.length; i++) {
            // private 변수에 접근 허용
            fields[i].setAccessible(true);
            try {
                // 변수 명을 key로 value 저장.
                String sKey = fields[i].getName();
                if (sUpperDiv != null)
                    sKey = (fields[i].getName()).toUpperCase();

                map.put(sKey, fields[i].get(obj));
            } catch (IllegalArgumentException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }

        return map;
    }

    /**
     * Convert Object to List<Map>
     *
     * @param fromObj
     * @param sUpperDiv
     * @return
     */
    public static final List<Map<String, Object>> getObjectToList(Object obj, String sUpperDiv) {
        List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
        Map<String, Object> map = new HashMap<String, Object>();

        Field[] fields = obj.getClass().getDeclaredFields();
        for (int i = 0; i < fields.length; i++) {
            // private 변수에 접근 허용
            fields[i].setAccessible(true);
            try {
                // 변수 명을 key로 value 저장.
                String sKey = fields[i].getName();
                if (sUpperDiv != null)
                    sKey = (fields[i].getName()).toUpperCase();

                map.put(sKey, fields[i].get(obj));
            } catch (IllegalArgumentException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }

        resultList.add(map);
        return resultList;
    }

    public static String replaceNum(String phoneNum) {
        phoneNum = phoneNum.replaceAll("-", "").trim();
        return phoneNum;
    }

    /**
    * @fn : ClobConvertForString
    * @brief : CLOB형태의 데이터를 String으로 변경
    * @Method Name : ClobConvertForString
    * @Create Date: 2015. 5. 30. 오후 1:22:17
    * @Author: JIn Sung Ha
    * @param: Clob clob
    * @return: String
     * @throws IOException
    * @throws : Exception
    */
    public static String ClobConvertForString(Clob clob)  throws SQLException, IOException{

        Reader reader = clob.getCharacterStream();

        StringBuffer out = new StringBuffer();
        char[] buff = new char[1024];
        int nchars = 0;

        while((nchars =  reader.read(buff)) > 0) {
            out.append(buff, 0 , nchars);
        }
        return out.toString();
    }

    /**
         * 객체가 Null 인지 확인한다.
         * @param object
         * @return Null인경우 1 / Null이 아닌경우 0
         */
        public static int isNullCheck(Object object) {
    //        if((object == null) || object.equals(null)) {
            if(object == null) {
                return 1;
            }else {
                return 0;
            }
        }
        
/*
 * 파일을 Base64 문자열로 변환
public static String fileToBase64String(final File target)
throws IOException {

	BufferedInputStream bis = null;
	try {
		bis = new BufferedInputStream(new FileInputStream(target));
		return Base64.encodeBase64String(IOUtils.toByteArray(bis));
	} finally {
		try {
			bis.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}

Base64 문자열을 파일로 변환
public static void base64StringToFile(final String encoded, final File output)
throws IOException {

	BufferedOutputStream bos = null;
	try {
		output.createNewFile();
		bos = new BufferedOutputStream(new FileOutputStream(output));
		bos.write(Base64.decodeBase64(encoded));
	} finally {
		try {
			bos.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

        
 */
        /*
         * 한진 SSO복호화
         */
        public static String decodeString(String sabun)
        {
            byte plainText[] = (byte[])null;
            String rst = null;
            try
            {
            	Base64 dn = new Base64();
                plainText = dn.decodeBase64(sabun);									//BASE64 DECODE
        		Security.addProvider(new BouncyCastleProvider());
            }
            catch(Exception e)
            {
            	e.printStackTrace();
            }
        	
        	byte[] keyBytes = new byte[] { 0x68,0x32,0x68,0x30,0x69,0x31,0x63,0x35 };
        	byte[] ivBytes  = new byte[] { 0x68,0x32,0x68,0x30,0x69,0x31,0x63,0x35 };
        	SecretKeySpec key = new SecretKeySpec(keyBytes, "DES");
        	IvParameterSpec ivSpec = new IvParameterSpec(ivBytes);
        	
        	Cipher desCipher;
        	try {
        		desCipher = Cipher.getInstance("DES/CBC/PKCS5Padding");
        		try {
        			desCipher.init(Cipher.DECRYPT_MODE,key,ivSpec);
        			try {
        				byte[] byteDecryptedText = desCipher.doFinal(plainText);	//DES DECODE
        				rst = new String(byteDecryptedText);
        			} catch (IllegalStateException e) {
        				rst = "100";
        			} catch (IllegalBlockSizeException e) {
        				rst = "200";
        			} catch (BadPaddingException e) {
        				rst = "300";
        			}
        		} catch (InvalidKeyException e) {
        			rst = "400";
        		} catch (InvalidAlgorithmParameterException e) {
        			rst = "500";
        		}
        	} catch (NoSuchAlgorithmException e) {
        		rst = "600";
        	} catch (NoSuchPaddingException e) {
        		rst = "700";
        	}

            return rst;
        }
        
        public static String encodeSHA256(String str){

        	String SHA = ""; 
        	try{
        		MessageDigest sh = MessageDigest.getInstance("SHA-256"); 
        		sh.update(str.getBytes()); 
        		byte byteData[] = sh.digest();
        		StringBuffer sb = new StringBuffer(); 
        		for(int i = 0 ; i < byteData.length ; i++){
        			sb.append(Integer.toString((byteData[i]&0xff) + 0x100, 16).substring(1));
        		}
        		SHA = sb.toString();
        	}catch(NoSuchAlgorithmException e){
        		e.printStackTrace(); 
        		SHA = null; 
        	}
        	return SHA;
        }
        
        public static long[] getImageInfoByFilePath(String filePath){
    	  try{
			   File imageFile = new File(filePath);
			   long imageInfo[] = null;
			   if(imageFile.exists()){
					BufferedImage bi = ImageIO.read(new File(filePath));
					imageInfo = new long[3];
					imageInfo[0] = bi.getWidth();
					imageInfo[1] = bi.getHeight();
					imageInfo[2] = imageFile.length();
			   }
			   
			   if(imageInfo == null)
				   return null;
			   
			   return imageInfo;
    	   }catch(Exception e){
    	    	 e.printStackTrace(); 
    	    	 return null;
    	   }
    	}
        
        public static void main(String args[]) { 
        	long nano = System.currentTimeMillis();
        	System.out.println(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(nano));
        	
        	System.out.println("1"+"-->"+encodeSHA256("1"));
        	System.out.println("2"+"-->"+encodeSHA256("2"));
        	System.out.println("thhan3"+"-->"+encodeSHA256("thhan3"));
        	System.out.println("test"+"-->"+encodeSHA256("test"));
        	System.out.println("admin"+"-->"+encodeSHA256("admin"));
        	System.out.println("test2"+"-->"+encodeSHA256("test2"));
        	System.out.println("8150301"+"-->"+encodeSHA256("8150301"));
        	System.out.println("8150319"+"-->"+encodeSHA256("8150319"));
        	System.out.println("8150384"+"-->"+encodeSHA256("8150384"));
        	System.out.println("8150357"+"-->"+encodeSHA256("8150357"));
        	System.out.println("t"+"-->"+encodeSHA256("t"));
        	System.out.println("a1234567!"+"-->"+encodeSHA256("a1234567!"));
        	System.out.println("a123456!"+"-->"+encodeSHA256("a123456!"));
        	System.out.println("1111"+"-->"+encodeSHA256("1111"));
        	
        }
}
