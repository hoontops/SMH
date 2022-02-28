package com.nbdf.commons.util;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParseException;

/**
 * @Class NumberUtil
 * @Description 숫자 관련 유틸 클래스
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 *
 *      (c) Copyright Built1 2014. All rights reserved.
 */
/**
* @file: NumberUtil.java
* @Package: com.nbdf.commons.util
* @Project name: IFC MES시스템 구축
* @Type name: NumberUtil
* @Company: Built1
* @Create Date: 2015. 6. 10. 오후 2:33:16
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 6. 10.        JIn Sung Ha     최초  생성
 *
*/
/**
* @file: NumberUtil.java
* @Package: com.nbdf.commons.util
* @Project name: IFC MES시스템 구축
* @Type name: NumberUtil
* @Company: Built1
* @Create Date: 2015. 6. 10. 오후 2:33:19
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 6. 10.        JIn Sung Ha     최초  생성
 *
*/
public class NumberUtil {

    /**
     * 천단위 표기법
     *
     * @param d
     * @return 천단위 표기법(0,000,000) 형식의 문자열
     */
    public static final String notation(double d) {
        return NumberFormat.getInstance().format(d);
    }

    /**
     * 천단위 표기법 제거한다.<br>
     *
     * @param str
     *            12,345,678 형식의 문자열
     * @return 12345678 ParseException발생 시 0 을 리턴한다.
     */
    public static final double normal(String str) {
        double returnValue;

        try {
            returnValue = NumberFormat.getInstance().parse(str).doubleValue();
        } catch (ParseException e) {
            returnValue = 0;
        }

        return returnValue;
    }

    /**
     * 넘어오는 String 을 int 형으로 바꾸어준다<br>
     * 천단위 표기법 제거한다.<br>
     * NumberFormatException 발생 시 Configuration 파일의 convert.utilpkg.NumberFormatException.ignore의 값을 true로 하면 0을 리턴한다.
     *
     * @see #toDouble(String)
     * @see #toFloat(String)
     * @see #toLong(String)
     * @see #normal(String)
     * @see #notation(double)
     * @param param
     * @return
     */
    public static final int toInt(String param) {
        int value = 0;
        try {
            if (param == null || param.equals("")) {
                return value;
            }

            if (param.indexOf(",") > -1) {
                param = param.replaceAll(",", "");
                value = Integer.parseInt(param);
            } else {
                value = Integer.parseInt(param);
            }
        } catch (NumberFormatException e) {
            return 0;
        }
        return value;
    }

    /**
     * 넘어오는 String 을 float 형으로 바꾸어준다<br>
     * 천단위 표기법 제거한다.<br>
     * NumberFormatException 발생 시 Configuration 파일의 convert.utilpkg.NumberFormatException.ignore의 값을 true로 하면 0을 리턴한다.
     *
     * @see #toDouble(String)
     * @see #toInt(String)
     * @see #toLong(String)
     * @see #normal(String)
     * @see #notation(double)
     * @param param
     * @return
     */
    public static final float toFloat(String param) {
        float value = 0;

        if (param == null || param.equals("")) {
            return value;
        }

        if (param.indexOf(",") > -1) {
            param = param.replaceAll(",", "");
            value = Float.parseFloat(param);
        } else {
            value = Float.parseFloat(param);
        }

        return value;
    }

    /**
     * 넘어오는 String 을 long 형으로 바꾸어준다<br>
     * 천단위 표기법 제거한다.<br>
     * NumberFormatException 발생 시 Configuration 파일의 convert.utilpkg.NumberFormatException.ignore의 값을 true로 하면 0을 리턴한다.
     *
     * @see #toDouble(String)
     * @see #toFloat(String)
     * @see #toInt(String)
     * @see #normal(String)
     * @see #notation(double)
     * @param param
     * @return
     */
    public static final long toLong(String param) {
        long value = 0;

        if (param == null || param.equals("")) {
            return value;
        }

        if (param.indexOf(",") > -1) {
            param = param.replaceAll(",", "");
            value = Long.parseLong(param);
        } else {
            value = Long.parseLong(param);
        }

        return value;
    }

    /**
     * 넘어오는 String 을 double 형으로 바꾸어준다<br>
     * 천단위 표기법 제거한다.<br>
     * NumberFormatException 발생 시 Configuration 파일의 convert.utilpkg.NumberFormatException.ignore의 값을 true로 하면 0을 리턴한다.
     *
     * @see #normal(String)
     * @see #notation(double)
     * @param param
     * @return
     */
    public static final double toDouble(String param) {
        double value = 0;

        try {
            if (param == null || param.equals("")) {
                return value;
            }

            if (param.indexOf(",") > -1) {
                value = normal(param);
            } else {
                value = Double.parseDouble(param);
            }
        } catch ( NumberFormatException e) {
            value = 0;
        }

        return value;
    }

    /**
     * range 범위에 따라 올림 예) ceil(12342,10) == > 12350
     *
     * @param d
     * @param range
     * @return
     */
    //public static final double ceil(double d, int range) {
    //    return Math.ceil(d / range) * range;
    //}

    /**
     * range 범위에 따라 내림 예)floor(12346,10) == > 12340
     *
     * @param d
     * @param range
     * @return
     */
    /*public static final double floor(double d, int range) {
        return Math.floor(d / range) * range;
    }*/

    /**
     * range 범위에 따라 반올림 예)round(12345,10) == > 12350
     *
     * @param d
     * @param range
     * @return
     */
/*    public static final double round(double d, int range) {
        return Math.round(d / range) * range;
    }*/

    /**
     * 자리수 올림 scale이 2이면 52.2329 -> 52.24
     *
     * @param double number
     * @param int scale
     * @return double
     */
    public static final double ceilPoint(double number, int scale) {
        BigDecimal bd = new BigDecimal(number);
        bd = bd.setScale(scale, BigDecimal.ROUND_UP);
        return bd.doubleValue();
    }

    /**
     * 자리수 내림 scale이 2이면 52.2369 -> 52.23
     *
     * @param double number
     * @param int scale
     * @return double
     */
    public static final double floorPoint(double number, int scale) {
        BigDecimal bd = new BigDecimal(number);
        bd = bd.setScale(scale, BigDecimal.ROUND_DOWN);
        return bd.doubleValue();
    }

    /**
     * 자리수 반올림 scale이 2이면 52.2369 -> 52.24
     *
     * @param double number
     * @param int scale
     * @return double
     */
    public static final double roundPoint(double number, int scale) {
        BigDecimal bd = new BigDecimal(number);
        bd = bd.setScale(scale, BigDecimal.ROUND_HALF_EVEN);
        return bd.doubleValue();
    }

    /**
     * 주어진 패턴에 따라 숫자를 변환한다.
     *
     * @see java.text.DecimalFormat
     * @param value
     *            double
     * @param pattern
     *            String
     * @return String if value is 12 and pattern "000" return "012"
     */
    public static final String format(double value, String pattern) {
        DecimalFormat df = new DecimalFormat(pattern);
        return df.format(value);
    }

    /**
     * 문자열이 Long타입으로 변환가능한지 체크한다.
     *
     * @param str
     * @return boolean
     * @author 내천규
     * @throws NumberFormatException
     */
    public static final boolean isStrLong(String str) {
        try {
            Long.parseLong(str);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    /**
    * @fn : getTransId
    * @brief : 연계 테이블에 저장시  TRAN_ID(연계 트렌젝션 ID)를 획득하기 위함
    * @Method Name : getTransId
    * @Create Date: 2015. 6. 10. 오후 2:33:23
    * @Author: JIn Sung Ha
    * @param: 업무시스템 코드
    * @return:  송신시스템구분(3) + 년(4) + 월(2) + 일(2) + 시(2) + 분(2) + 초(2) +  밀리초(3) + SEQ(6)
    * @throws : Exception
    */
/*    public static String getTransId(String jobSysCd) {
        Random r = new Random();
        String date = DateUtil.getNowDate("yyyyMMddHHmmssSSS");
        int cNum = 0;
        int num = (int)Math.floor(Math.random() * 1000000) + 100000;

        r.setSeed(num);
        int rNum =  r.nextInt();
        if(rNum < 0){
            cNum = rNum * -1;
        }else{
            cNum = rNum;
        }
        return jobSysCd+date+cNum;
    }*/


}
