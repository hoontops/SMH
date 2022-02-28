package com.nbdf.commons.util;

import com.nbdf.commons.system.schema.ServiceField;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;

/**
 * @Class DateUtil
 * @Description 날짜 관련 유틸
 * @Modification
 *
 * @author lessor
 * @version 1.0
 * @see
 */
public class DateUtil {

    /**
     * 현재 날짜를 반환한다.
     *
     * @return 현재 날짜 (<code>java.util.Date</code>)
     */
    public static java.util.Date date() {
        return new java.util.Date();
    }

    public static String getNowDateTime() {
        Calendar calendar = Calendar.getInstance();
        Date date = calendar.getTime();
        return new SimpleDateFormat("yyyyMMddHHmmss").format(date);
    }

    public static String getNowDate(String dateFormat) {
        Calendar calendar = Calendar.getInstance();
        Date date = calendar.getTime();
        return new SimpleDateFormat(dateFormat).format(date);
    }


    /**
     * 원하는 날짜형식으로 오늘 날짜를 리턴한다.
     *
     * @see java.text.SimpleDateFormat
     * @param string
     *            패턴
     * @return string 패턴화 된 날짜 문자열
     */
    public static String today(String pattern) throws Exception {
        return format(new Date(), pattern);
    }

    /**
     * 현재 날짜를 반환한다.
     *
     * @return 현재 날짜 (<code>java.sql.Date</code>)
     */
    public static Timestamp stamp() {
        return new java.sql.Timestamp(date().getTime());
    }

    /**
     * 현재 날짜에 특정일 이후의 날짜를 Timestamp 형태로 반환한다.
     *
     * @return 특정일자 (<code>java.sql.Date</code>)
     */
    public static java.sql.Timestamp Cstamp(long dateint) {
        return new java.sql.Timestamp(date().getTime() + (1000 * 60 * 60 * 24 * dateint));
    }

    /**
     * @param datestr
     * @return
     */
    public static java.sql.Timestamp stamp(String datestr) throws Exception {
        return stamp(datestr, "yyyy-MM-dd");
    }

    /**
     * @param datestr
     * @return
     */
    public static java.sql.Timestamp stamp(String datestr, String pattern) throws Exception {
        return new java.sql.Timestamp(parse(datestr, pattern).getTime());
    }

    /**
     * 주어진 Date를 pattern화 된 문자열로 반환한다.
     *
     * @param date
     *            패턴화할 날짜
     * @param pattern
     *            string 패턴
     * @return string 패턴화된 날짜 문자열
     */
    public static String format(Date date, String pattern) throws Exception {
        return dateUtilformat(date, pattern);
    }

    /**
     * @param date
     * @param pattern
     * @return
     */
    public static String dateUtilformat(Date date, String pattern) {
        SimpleDateFormat formatter = new SimpleDateFormat(pattern);
        return formatter.format(date);
    }

    /**
     * 원하는 날짜형식으로 오늘 날짜를 리턴한다.
     */
    public static String dateUtiltoday(String pattern) throws Exception {
        return format(new Date(), pattern);
    }

    /**
     * <pre>
     *  해당일에 대하여 무슨 요일인지 알아본다.
     *  리턴은 월, 화, 수, 목.....으로 된다.
     * </pre>
     *
     * @param java
     *            .util.Date
     * @return String
     */
    public static String getDayOfTheWeek(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("E", Locale.KOREA);
        return sdf.format(date);
    }

    /**
     * 해당일이 어떤 요일인지 알아본다.
     *
     * @param year
     *            int
     * @param month
     *            int 1월이면 1, 2월이면 2
     * @param date
     *            int
     * @return 월, 화, 수, 목, 금, 토, 일
     */
    public static String getDayOfTheWeek(int year, int month, int date) {
        GregorianCalendar calendar = new GregorianCalendar(year, month - 1, date);
        SimpleDateFormat sdf = new SimpleDateFormat("E", Locale.KOREA);
        return sdf.format(calendar.getTime());
    }

    /**
     * 현재 시간기준 x분 이전의 최근 시(24HH)와 분을 가져온다.
     *
     * @param minusMin
     *            x분 이전(10)
     * @return 시분(HHmm)-10이전
     */
    public static String getLastTime10Min(int minusMin) throws Exception {
        String ymd = today("yyyyMMddHHmm");
        String lastYmd = "", retHHmm = "";
        // ymd = "201111181003";

        // retHHmm = addDateFromNow(Calendar.MINUTE, -10, "yyyyMMddHHmm");
        lastYmd = addDate(Calendar.MINUTE, minusMin, "yyyyMMddHHmm", ymd);

        // String intHour = lastYmd.substring(8,10); // 시
        retHHmm = lastYmd.substring(0, 10) + lastYmd.substring(10, 11) + "0";
        return retHHmm;
    }

    /**
     * 오늘날짜에서 해당 주중(월~금)날짜중 월요일의 날짜를 얻어온다.
     *
     * @param weekJungNum
     *            해당 주중 옵션숫자 0:해당 주중, 1:다음주중, 2: 2주후 주중, -1:전 주중, -2:2주전 주중
     * @param date
     *            int
     * @return 월, 화, 수, 목, 금, 토, 일
     */
    public static String getDayOfTheWeekJung(int weekJungNum) throws Exception {
        String retMonDate = today("yyyyMMdd");
        String todayWeek = getDayOfTheWeek(date()); // 금일의 요일

        int thisMondate = 0 + (7 * weekJungNum); // 이번주중 월요일
        if (todayWeek.equals("화"))
            thisMondate = -1 + (7 * weekJungNum);
        else if (todayWeek.equals("수"))
            thisMondate = -2 + (7 * weekJungNum);
        else if (todayWeek.equals("목"))
            thisMondate = -3 + (7 * weekJungNum);
        else if (todayWeek.equals("금"))
            thisMondate = -4 + (7 * weekJungNum);
        else if (todayWeek.equals("토"))
            thisMondate = -5 + (7 * weekJungNum);
        else if (todayWeek.equals("일"))
            thisMondate = -6 + (7 * weekJungNum);
        retMonDate = addDateFromNow(Calendar.DATE, thisMondate);

        return retMonDate;
    }

    /**
     * 특정 날짜의 타입에 따른 바로 이전 날짜의 주중일자를 구해온다.
     *
     * @param type
     *            타입(DAY, WEEK, MONTH)
     * @param ymd
     *            기준일자(yyyyMMdd)
     * @param date
     * @return String
     */
    public static String getDayPrevType(String type, String ymd) throws Exception {
        String retDate = "";

        if (type.equals("DAY")) {
            retDate = addDate(Calendar.DATE, -1, "yyyyMMdd", ymd);
        } else if (type.equals("WEEK")) { // -1주전
            retDate = addDate(Calendar.WEEK_OF_MONTH, -1, "yyyyMMdd", ymd);
        } else if (type.equals("WEEK2")) { // -2주전
            retDate = addDate(Calendar.WEEK_OF_MONTH, -2, "yyyyMMdd", ymd);
        } else if (type.equals("WEEK4")) { // -4주전
            retDate = addDate(Calendar.WEEK_OF_MONTH, -4, "yyyyMMdd", ymd);
        } else if (type.equals("MONTH")) { // -1개월(요일은 불규칙)-근접한 주중요일로 변경.
            retDate = addDate(Calendar.MONTH, -1, "yyyyMMdd", ymd);
        }

        return retDate;
    }

    /**
     * 특정날짜를 기준으로 이전의 구간갯수만큼의 주중일자를 구해온다.
     *
     * @param type
     *            타입(DAY, WEEK, WEEK2, WEEK4, MONTH)
     * @param ymd
     *            기준일자(yyyyMMdd)
     * @param cnt
     *            구간 갯수(12 or 24)
     * @param date
     * @return String[12]
     */
    public static String[] getDayListWeekInType(String type, String ymd, int cnt) throws Exception {
        String retMonDate[] = new String[cnt];
        // String todayWeek = getDayOfTheWeek(date()); // 금일의 요일
        // int arrChkcnt = 0;
        int year = Integer.parseInt(ymd.substring(0, 4));
        int month = Integer.parseInt(ymd.substring(4, 6));
        int day = Integer.parseInt(ymd.substring(6, 8));

        String startWeek = getDayOfTheWeek(year, month, day); // 해당날짜의 요일

        String nowDay = ymd;
        for (int i = cnt; i > 0; i--) {
            if (i == cnt) { // 초기 맨 마지막배열 값의 날짜.
                if (startWeek.equals("토")) {
                    nowDay = addDate(Calendar.DATE, -1, "yyyyMMdd", ymd);
                    retMonDate[i - 1] = nowDay;
                } else if (startWeek.equals("일")) {
                    nowDay = addDate(Calendar.DATE, -2, "yyyyMMdd", ymd);
                    retMonDate[i - 1] = nowDay;
                } else {
                    retMonDate[i - 1] = ymd;
                }
                continue;
            }
            String retDate = getDayPrevType(type, nowDay);
            year = Integer.parseInt(retDate.substring(0, 4));
            month = Integer.parseInt(retDate.substring(4, 6));
            day = Integer.parseInt(retDate.substring(6, 8));
            String retWeek = getDayOfTheWeek(year, month, day);
            if (retWeek.equals("토")) {
                retDate = addDate(Calendar.DATE, -1, "yyyyMMdd", retDate); // -1일 , "금"
            } else if (retWeek.equals("일")) {
                retDate = addDate(Calendar.DATE, -2, "yyyyMMdd", retDate); // -2일 , "금"
            }
            retMonDate[i - 1] = retDate;
            nowDay = retDate;
        }

        return retMonDate;
    }

    /**
     * java.util.Date 클래스를 yyyy-MM-dd 포맷의 String으로 변환한다. 데이타베이스 컬럼이 NULL인경우에는 ""값을 리턴한다.(with SqlMap.xml)
     *
     * @param date
     * @return
     */
    public static String format(Date date) throws Exception {
        String str = format(date, "yyyy-MM-dd");
        if (str.equals("0001-01-01")) {
            str = "";
        }
        return str;
    }

    /**
     * java.util.Date 클래스를 yyyy-MM-dd HH:mm:ss 포맷의 String으로 변환한다. 데이타베이스 컬럼이 NULL인경우에는 ""값을 리턴한다.(with SqlMap.xml)
     *
     * @param date
     * @return
     */
    public static String formatLong(Date date) throws Exception {
        String str = format(date, "yyyy-MM-dd HH:mm:ss");
        if (str.equals("0001-01-01 00:00:00")) {
            str = "";
        }
        return str;
    }

    /**
     * yyyyMMdd형태의 문자열을 yyyy-MM-dd 형태로 변환한다.
     *
     * @param str
     *            yyyyMMdd
     * @return java.lang.String yyyy-MM-dd
     */
    public static String formatView(String datestr) throws Exception {
        return format(datestr, "yyyyMMdd", "yyyy-MM-dd");
    }

    /**
     * yyyy-MM-dd형태의 문자열을 yyyyMMdd 형태로 변환한다.
     *
     * @param str
     *            yyyy-MM-dd
     * @return java.lang.String yyyyMMdd
     */
    public static String format(String datestr) throws Exception {
        return format(datestr, "yyyy-MM-dd", "yyyyMMdd");
    }

    /**
     * fromPattern형식의 날짜 문자열을 toPattern형식의 날짜 문자열로 반환한다.
     *
     * @param str
     * @param fromPattern
     * @param toPattern
     * @return
     */
    public static String format(String datestr, String fromPattern, String toPattern) throws Exception {
        return format(parse(datestr, fromPattern), toPattern);
    }

    /**
     * yyyy-MM-dd 날짜형식으로 오늘 날짜를 리턴한다.
     */
    public static String today() throws Exception {
        return today("yyyy-MM-dd");
    }

    /**
     * pattern형식으로 포맷된 날짜 문자열을 java.util.Date 형태로 반환한다.
     *
     * @param s
     *            date string you want to check.
     * @param format
     *            string representation of the date format. For example, "yyyy-MM-dd".
     * @return date java.util.Date
     */
    public static Date parse(String str, String pattern) throws Exception {

        if (str == null) {
            throw new Exception("date string to check is null");
        }

        if (pattern == null) {
            throw new Exception("format string to check date is null");
        }

        SimpleDateFormat formatter = new SimpleDateFormat(pattern, java.util.Locale.KOREA);
        Date date = null;

        try {
            date = formatter.parse(str);
        } catch (ParseException e) {

            throw new Exception(" wrong date:\"" + str + "\" with format \"" + pattern + "\"");
        }

        if (!format(date, pattern).equals(str))
            throw new Exception("Out of bound date:\"" + str + "\" with format \"" + pattern + "\"");
        return date;
    }

    /**
     * 현재 날짜를 기준으로 원하는 시점의 날짜를 구함 Default Date Format "yyyyMMdd"
     *
     * @param field
     *            Calendar Field - 일: Calendar.DATE, 주: Calendar.WEEK_OF_MONTH, 월: Calendar.MONTH, 년: Calendar.YEAR
     * @param amount
     *            원하는 날짜 시점 (10일 후를 원하면 10, 10일 전을 원하면 -10)
     * @return 날짜 String
     */
    public static String addDateFromNow(int field, int amount) {
        return addDateFromNow(field, amount, "yyyyMMdd");
    }

    /**
     * 현재 날짜를 기준으로 원하는 시점의 날짜를 구함
     *
     * @param field
     *            Calendar Field - 분:MINUTE, 시:HOUR_OF_DAY, 일: Calendar.DATE, 주: Calendar.WEEK_OF_MONTH, 월: Calendar.MONTH, 년: Calendar.YEAR
     * @param amount
     *            원하는 날짜 시점 (10일 후를 원하면 10, 10일 전을 원하면 -10)
     * @param formatstr
     *            날짜 format
     * @return 날짜 String
     */
    public static String addDateFromNow(int field, int amount, String formatstr) {
        Calendar cal = Calendar.getInstance();
        cal.add(field, amount);
        Date date = cal.getTime();

        SimpleDateFormat formatter = new SimpleDateFormat(formatstr);
        return formatter.format(date);

    }

    /**
     * 특정일자 를 기준으로 원하는 시점의 날짜를 구함 formatstr(일자포멧)은 fromdatestr(특정일자)의 포멧과 동일해야 한다. 사용예 addDate(Calendar.DATE, 10, "yyyyMMdd", "20070109");
     *
     * @param field
     *            Calendar Field - 일: Calendar.DATE, 주: Calendar.WEEK_OF_MONTH, 월: Calendar.MONTH, 년: Calendar.YEAR
     * @param amount
     *            원하는 날짜 시점 (10일 후를 원하면 10, 10일 전을 원하면 -10)
     * @param formatstr
     *            특정일자의 포멧
     * @param fromdatestr
     *            특정일자(기준일자)
     * @return String
     */
    public static String addDate(int field, int amount, String formatstr, String fromdatestr) throws Exception {
        Date date = DateUtil.parse(fromdatestr, formatstr);

        Calendar cal = Calendar.getInstance();
        cal.setTime(date);

        cal.add(field, amount);
        Date toDate = cal.getTime();

        SimpleDateFormat formatter = new SimpleDateFormat(formatstr);
        return formatter.format(toDate);

    }

    /**
     * 현재날짜의 년도 가져오기
     *
     * @return
     */
    public static int getNowYear() {
        return Calendar.getInstance().get(Calendar.YEAR);
    }

    /**
     * 현재날짜의 월 가져오기
     *
     * @return
     */
    public static int getNowMonth() {
        return Calendar.getInstance().get(Calendar.MONTH) + 1;
    }

    /**
     * 현재날짜의 일 가져오기
     *
     * @return
     */
    public static int getNowDay() {
        return Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
    }

    /**
     * 현재시간 의 시 가져오기
     *
     * @return
     */
    public static int getNowHour() {
        return Calendar.getInstance().get(Calendar.HOUR);
    }

    /**
     * 현재시간 의 시 가져오기
     *
     * @return
     */
    public static int getNowHour24() {
        return Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
    }

    /**
     * 현재시간 의 분 가져오기
     *
     * @return
     */
    public static int getNowMinute() {
        return Calendar.getInstance().get(Calendar.MINUTE);
    }

    public static Date convertToDate(Object obj) throws Exception {
        Date date = null;
        if (obj == null)
            return date;
        if (obj instanceof Timestamp) {
            Timestamp timestamp = (Timestamp) obj;
            date = new Date(timestamp.getTime());
        } else if (obj instanceof Date) {
            date = (Date) obj;
        } else if (obj instanceof String) {
            String str = (String) obj;
            if (str.length() > 19)
                str = str.substring(0, 19);
            if (str.length() == 19) {
                date = parse(str, "yyyy-MM-dd HH:mm:ss");
            } else if (str.length() == 10) {
                date = parse(str, "yyyy-MM-dd");
            }
        }

        return date;
    }

    public static Timestamp convertToTimestamp(Object obj) throws Exception {
        Timestamp timestamp = null;
        if (obj == null)
            return timestamp;
        if (obj instanceof Timestamp) {
            timestamp = (Timestamp) timestamp;
        } else if (obj instanceof Date) {
            timestamp = new Timestamp(((Date) obj).getTime());
        } else if (obj instanceof String) {
            timestamp = stamp((String) obj, "yyyy-MM-dd HH:mm:ss");
        }
        return timestamp;
    }

    /**
     * 해당월의 마지막 일자 가져오기
     *
     */
    public static String getLastDate(String fromDate, String formatStr) {
        int year = Integer.parseInt(fromDate.substring(0, 4));
        int month = Integer.parseInt(fromDate.substring(4, 6));
        Calendar cal = Calendar.getInstance();
        cal.set(year, month, 1);
        cal.add(Calendar.DATE, -1);
        SimpleDateFormat formatter = new SimpleDateFormat(formatStr);
        return formatter.format(cal.getTime());
    }
    
    public static boolean isExpiredDate(ServiceField serviceField) {
    	
    	if( serviceField.getFrom() == null || serviceField.getTo() == null ) {
    		return false;
    	}
    	
    	Long getNowDate = Long.parseLong(DateUtil.getNowDate("yyyyMMdd"));
    	
    	if(  Long.parseLong(serviceField.getFrom()) <= getNowDate ) {
    		if( getNowDate <=  Long.parseLong(serviceField.getTo()) ) {
    			return false;
    		}
    	}
    	
    	return true;
    }

}
