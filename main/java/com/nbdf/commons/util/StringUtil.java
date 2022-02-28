package com.nbdf.commons.util;

import java.io.UnsupportedEncodingException;
import java.nio.ByteBuffer;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;
import java.util.UUID;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import org.apache.commons.lang3.StringUtils;

import com.nbdf.commons.exception.BizException;

public class StringUtil {
    public static String toCamelCase(String value) {
        String[] strings = StringUtils.split(value.toLowerCase(), "_");
        for (int i = 1; i < strings.length; i++) {
            strings[i] = StringUtils.capitalize(strings[i]);
        }
        return StringUtils.join(strings);
    }

    public static String toUnderscoreCase(String value) {
        char[] arr = value.toCharArray();
        String str = "";

        for (char c : arr) {

            if ((c + "").matches("[A-Z]")) {
                str += "_" + c;
            } else
                str += "" + c;
        }

        return str.toUpperCase();
    }

    /*
     * 통상 PK의 고유성을 보장하기 위한 번호로서, 일련번호 대신에 사용한다. 데이터의 이관, 복제, 분산을 위해서는 반드시 고유 값 PK에서 반드시 이 메소드를 사용하여 작성한다. 마스터 - 디테일의 데이터에서도 사용하기 위해서, 이 메소드는 AutoDao 안에 위치시키고 사용하도록 한다.
     */
    public static String getUniqueString() {
        UUID uuid = UUID.randomUUID();
        long l = ByteBuffer.wrap(uuid.toString().getBytes()).getLong();
        return Long.toString(l, Character.MAX_RADIX).toUpperCase();
    }

    public static String getUniqueStringLong() {
        return UUID.randomUUID().toString();
    }

    public static String NVL(String str1, String str2) {
        if (str1 == null) {
            return str2;
        } else {
            return str1;
        }
    }

    public static boolean isNumber(String s) throws Exception{
        Double.parseDouble(s);
        return false;
    }

    /**
    * @fn : isValidEmailAddress
    * @brief : 이메일 형식에 맞는지 확인
    * @Method Name : isValidEmailAddress
    * @Create Date: 2015 2015. 4. 17. 오전 11:03:34
    * @Author: JIn Sung Ha
    * @param: String email
    * @return: boolean
    * @throws : Exception
    */
    public static boolean isValidEmailAddress(String email) {
        boolean result = true;
        try {
            InternetAddress emailAddr = new InternetAddress(email);
            emailAddr.validate();
        } catch (AddressException ex) {
            result = false;
        }
        return result;
    }

    /**
    * @fn : match
    * @brief : 파라미터로 들어온 값과 패턴의 값을 비교하여 일치하는 지 확인
    * @Method Name : match
    * @Create Date: 2015 2015. 4. 20. 오전 11:13:26
    * @Author: JIn Sung Ha
    * @param: String target, String pattern
    * @return: boolean
    * @throws : Exception
    */
    public static boolean match(String target, String pattern) {

        boolean matchFlag = true;

        if ((target != null && target.length() > 0) && (pattern != null && pattern.length() > 0)) {
                int matchResult = 0;
                target = target.toLowerCase();
                for (int inx=0; inx < target.length() && matchFlag == true; inx++) {
                        matchResult = pattern.indexOf(target.substring(inx, inx+1));
                        if (matchResult < 0) matchFlag = false;
                }
        }
        return matchFlag;
    }

    /**
    * @fn : stringConByte
    * @brief : String의 내용을 Byte형태로 변환
    * @Method Name : stringConByte
    * @Create Date: 2015 2015. 4. 20. 오전 10:46:53
    * @Author: JIn Sung Ha
    * @param: String text
    * @return: integer
    * @throws : Exception
    */
    public static int stringConByte(String text){
        int rst = 0;

        try{
           rst = text.getBytes("euc-kr").length;
        }catch(UnsupportedEncodingException e){
           rst =0;
        }
        return rst;
    }

    /**
     * 객체가 Null 인지 확인한다.
     * @param object
     * @return ""인경우 true / ""이 아닌경우 false
     */
    public static boolean isEmpty(String text) {
        if( "".equalsIgnoreCase(text.trim()) ){
            return true;
        }
        return false;
    }
    
    /**
     * Cross Site Script를 방지하기 위한 코드
     * @param String
     * @return String
     */
    public static String cleanXSS(String value){
    	String result;
    	
    	result = value.replaceAll("eval\\((.*)\\)", "");
    	result = value.replaceAll("script", "");
    	result = value.replaceAll("alert", "");
    	result = value.replaceAll("onerror", "");
    	result = value.replaceAll("cookie", "");
    	result = value.replaceAll("onload", "");
    	return result;
    }
    
    /**
     * 문자열을 byte길이만큼 자르기
     * @param String
     * @return String
     */
    public static String substrB(String str, int startIndex, int length){
	    byte[] b1 = null;
	    byte[] b2 = null;
	    String result = null;
	    try{
	    	if (str == null) return "";
		    
		
		    b1 = str.getBytes("euc-kr");
		    b2 = new byte[length];
		
		    if (length > (b1.length - startIndex)) length = b1.length - startIndex;
		    
		
		    System.arraycopy(b1, startIndex, b2, 0, length);
		    result = new String(b2,"euc-kr");
	    }
	    catch (Exception e){
	    	e.printStackTrace();
	    }
	
	    return result;
    }
    /**
     * 문자열을 byte길이만큼 자르기
     * @param String
     * @return String
     */
    public static String substrB(String str, int startIndex, int length, String type){
    	byte[] b1 = null;
    	byte[] b2 = null;
    	String result = null;
    	
    	// 빈공간제거
    	type = type.trim(); // N 또는 AN 등 타입이 넘어옴
    	
    	try{
    		if (str == null) return "";
    		
    		b1 = str.getBytes("euc-kr");
    		b2 = new byte[length];
    		
    		if (length > (b1.length - startIndex)) length = b1.length - startIndex;
    		
    		
    		System.arraycopy(b1, startIndex, b2, 0, length);
    		result = new String(b2,"euc-kr");
    		result = result.trim();
    		// 문자열 => 숫자 => 문자
    		if("N".indexOf(type) != -1){
    			result = result.replaceAll("^0*", "");
    			if("".equals(result)) result = "0";
    			//result = Integer.parseInt(result)+"";
    			
    		}
    	}
    	catch (Exception e){
    		e.printStackTrace();
    	}
    	
    	return result;
    }
    
    /**
     * 문자열을 byte길이만큼 자르기
     * @param String
     * @return String
     */
    public static String substrB(String str, int startIndex){
	    byte[] b1 = null;
	    byte[] b2 = null;
	    String result = null;
	    try{
	    	if (str == null) return "";
		    
		
		    b1 = str.getBytes("euc-kr");
		    b2 = new byte[b1.length - startIndex];
		
		    //if (length > (b1.length - startIndex)) length = b1.length - startIndex;
		    
		
		    System.arraycopy(b1, startIndex, b2, 0, b1.length - startIndex);
		    result = new String(b2,"euc-kr");
	    }
	    catch (Exception e){
	    	e.printStackTrace();
	    }
	
	    return result;
    }
    /**
     * 문자열을 byte길이만큼 자르기
     * @param String
     * @return String
     */
    public static String substrB(String str, int startIndex,String type){
    	byte[] b1 = null;
    	byte[] b2 = null;
    	String result = null;
    	try{
    		if (str == null) return "";
    		
    		
    		b1 = str.getBytes("euc-kr");
    		b2 = new byte[b1.length - startIndex];
    		
    		//if (length > (b1.length - startIndex)) length = b1.length - startIndex;
    		
    		
    		System.arraycopy(b1, startIndex, b2, 0, b1.length - startIndex);
    		result = new String(b2,"euc-kr");
    		// 문자열 => 숫자 => 문자
    		if("N".equals(type)){
    			result = result.trim()+"";
    			result = result.replaceAll("^0*", "");
    			if("".equals(result)) result = "0"; 
    			//result = Integer.parseInt(result)+"";
    		}
    	}
    	catch (Exception e){
    		e.printStackTrace();
    	}
    	
    	return result;
    }
    
    /**
     * 문자열을 byte길이씩 잘라서 배열로 리턴
     * @param String
     * @return String
     */
    public static String[] byteStringCute(String value,int byteCnt){
    	byte[] b;
    	String[] result = null;
    	
		try {
			// 문자열을 Byte로 변환(euc-kr 형식)
			b = value.getBytes("euc-kr");
			
			// 총 길이 구하기
			int bLen = b.length;
			
			// 총길이 / 자를 길이 
			float aa = (float)bLen/byteCnt;
			
			// 소수인 경우 올림으로 변경
			int arrLen = (int) Math.ceil(aa);
			
			// String 선언
	    	result = new String[arrLen];
	    	
	    	
	    	int tempCnt = 0;
	    	int start = 0;
	    	int tempCnt2 = 0;
	    	
	    	for(int i=0;i<arrLen;i++){
	    		// 예 byteCnt : 10 => 10 , 20 , 30 ...
	    		tempCnt += byteCnt;
	    		// 예 byteCnt : 10 =>  0 , 10 , 20 ...
	    		start    = tempCnt - byteCnt;
	    		// 예 bLen    : 200 - start : 0 =>  200 , 190 ...
	    		tempCnt2 = bLen - start;
	    		
	    		// 자르려는 길이보다 큰 경우
	    		if(tempCnt2 > byteCnt){
	    			result[i] = substrB(value,start,byteCnt);
	    			
	    		// 자르려는 길이보다 작은 경우
	    		}else{
	    			result[i] = substrB(value,start,tempCnt2);
	    		}
	    	}
    	
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
    }
    /**
     * 문자열을 byte길이씩 잘라서 배열로 리턴
     * @param String
     * @return String
     */
    public static String lastByteStringCute(String value,int byteCnt){
    	byte[] b;
    	String result = null;
    	
		try {
			// 문자열을 Byte로 변환(euc-kr 형식)
			b = value.getBytes("euc-kr");
			
			// 총 길이 구하기
			int bLen = b.length;
			
			// 총길이 / 자를 길이 
			float aa = (float)bLen/byteCnt;
			
			// 소수인 경우 올림으로 변경
			int arrLen = (int) Math.ceil(aa);
			
			// 마지막 자리수 자르기
	    	result = substrB(value, (arrLen-1) * byteCnt,byteCnt);
	    	
    	
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
    }
//    public static String[] byteStringCute(String value,int byteCnt){
//    	byte[] b;
//    	String[] result = null;
//    	
//    	try {
//    		b = value.getBytes("euc-kr");
//    		
//    		result = new String[b.length/byteCnt];
//    		int tempCnt = 0;
//    		int start = 0;
//    		for(int i=0;i<b.length/byteCnt;i++){
//    			tempCnt += byteCnt;
//    			start = tempCnt-byteCnt;
//    			result[i] = substrB(value,start,byteCnt);
//    		}
//    		
//    	} catch (UnsupportedEncodingException e) {
//    		// TODO Auto-generated catch block
//    		e.printStackTrace();
//    	}
//    	return result;
//    }
    
    /**
     * 고객번호를 XXX-XXX-XXXX 형태로 변환하기
     * @param String
     * @return String
     */
    public static String getMaskCustNo(String str){
	    String result = null;
	    String strTemp = null;
	    
	    try{	    	
	    	if (str == null) return "";
	    	strTemp = str;
	    	result = strTemp.substring(0, 3)+"-"+strTemp.substring(3, 6)+"-"+strTemp.substring(6, 10);
	    }
	    catch (Exception e){
	    	return str;
	    }
	
	    return result;
    }

    /**
     * 자원번호를 XXXX-XXXX 형태로 변환하기
     * @param String
     * @return String
     */
    public static String getMaskHouseNo(String str){
	    String result = null;
	    String strTemp = null;
	    
	    try{	    	
	    	if (str == null) return "";
	    	strTemp = str;
	    	result = strTemp.substring(0, 4)+"-"+strTemp.substring(4, 8);
	    }
	    catch (Exception e){
	    	return str;
	    }
	
	    return result;
    }
    
    public static boolean isNullOrEmpty(Object obj){
    	boolean result = false;
    	if(obj == null) return true;
    	if( "".equals((String)obj)) return true;
    	return result;
    }
    
    public static String Object2String(Object obj) {
    	if(obj == null) return "";
    	return obj.toString();
    }
    
    public static double Object2Double(Object obj) {
    	if(obj == null) return 0d;
    	return Double.parseDouble(obj.toString());
    }
    
    public static int Object2Int(Object obj) {
    	if(obj == null) return 0;
    	return Integer.parseInt(obj.toString());
    }
    public static Stack<String> convertStringToStack(String str) {
        String[] stringArray = str.split("\\.");
        Stack<String> stack = new Stack<>();
        if (stringArray.length == 0) {
          stack.add(str);
        } else {
          List<String> list = Arrays.asList(stringArray);
          stack.addAll(list);
        } 
        return stack;
      }
      
    public static Stack<String> convertStringToStack(String str, String delimiter) {
        String[] stringArray = str.split(delimiter.equals(".") ? "\\." : ".");
        Stack<String> stack = new Stack<>();
        if (stringArray.length == 0) {
          stack.add(str);
        } else {
          List<String> list = Arrays.asList(stringArray);
          stack.addAll(list);
        } 
        return stack;
    } 
    
    public static String convertStackToString(Stack<String> stack, String delimiter) {
        return join(stack.toArray(), delimiter);
    }
    
    public static String join(final Object[] array, final String separator) {
        if (array == null) {
            return null;
        }
        return join(array, separator, 0, array.length);
    }  
    
    public static String join(final Object[] array, String separator, final int startIndex, final int endIndex) {
        if (array == null) {
            return null;
        }
        if (separator == null) {
            separator = "";
        }

        final int noOfItems = endIndex - startIndex;
        if (noOfItems <= 0) {
            return "";
        }

        final StringBuilder buf = new StringBuilder(noOfItems * 16);

        for (int i = startIndex; i < endIndex; i++) {
            if (i > startIndex) {
                buf.append(separator);
            }
            if (array[i] != null) {
                buf.append(array[i]);
            }
        }
        return buf.toString();
    }
    public static boolean equals(final CharSequence cs1, final CharSequence cs2) {
        if (cs1 == cs2) {
            return true;
        }
        if (cs1 == null || cs2 == null) {
            return false;
        }
        if (cs1 instanceof String && cs2 instanceof String) {
            return cs1.equals(cs2);
        }
        return regionMatches(cs1, false, 0, cs2, 0, Math.max(cs1.length(), cs2.length()));
    }  
    
    static boolean regionMatches(final CharSequence cs, final boolean ignoreCase, final int thisStart,
            final CharSequence substring, final int start, final int length)    {
        if (cs instanceof String && substring instanceof String) {
            return ((String) cs).regionMatches(ignoreCase, thisStart, (String) substring, start, length);
        } else {
            int index1 = thisStart;
            int index2 = start;
            int tmpLen = length;

            while (tmpLen-- > 0) {
                char c1 = cs.charAt(index1++);
                char c2 = substring.charAt(index2++);

                if (c1 == c2) {
                    continue;
                }

                if (!ignoreCase) {
                    return false;
                }

                // The same check as in String.regionMatches():
                if (Character.toUpperCase(c1) != Character.toUpperCase(c2)
                        && Character.toLowerCase(c1) != Character.toLowerCase(c2)) {
                    return false;
                }
            }

            return true;
        }
    }  
    
    public static String nextAlphabet(String source) {
       int length = source.length();
       char lastChar = source.charAt(length - 1);
       
        return source.substring(0, length - 1) + String.valueOf((char) (lastChar + 1));
    }


}
