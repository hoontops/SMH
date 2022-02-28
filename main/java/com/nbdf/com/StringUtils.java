package com.nbdf.com;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;


public class StringUtils {
    private StringUtils() {
    }

	public static String lpad(String str, int len, String addStr){
	    String result = str;
	    int templen = len - result.length();
	    for(int i=0; i<templen; i++){
	        result = addStr + result;
	    }
        return result;
	}

    /**
     * <p>
     * String이 비었거나("") 혹은 null 인지 검증
     * </p>
     *
     * <pre>
     *  StringUtil.isEmpty(null)      = true
     *  StringUtil.isEmpty("")        = true
     *  StringUtil.isEmpty(" ")       = false
     *  StringUtil.isEmpty("bob")     = false
     *  StringUtil.isEmpty("  bob  ") = false
     * </pre>
     *
     * @param str - 체크 대상 스트링오브젝트이며 null을 허용함
     * @return <code>true</code> - 입력받은 String 이 빈 문자열 또는 null인 경우
     */
    public static boolean isEmpty(String str) {
        return str == null || str.length() == 0;
    }

    /**
     * <p>문자열에서 {@link Character#isWhitespace(char)}에 정의된
     * 모든 공백문자를 제거한다.</p>
     *
     * <pre>
     * StringUtil.removeWhitespace(null)         = null
     * StringUtil.removeWhitespace("")           = ""
     * StringUtil.removeWhitespace("abc")        = "abc"
     * StringUtil.removeWhitespace("   ab  c  ") = "abc"
     * </pre>
     *
     * @param str  공백문자가 제거도어야 할 문자열
     * @return the 공백문자가 제거된 문자열, null이 입력되면 <code>null</code>이 리턴
     */
    public static String removeWhitespace(String str) {
        if (isEmpty(str)) {
            return str;
        }
        int sz = 0;
        if(str != null)
        sz = str.length();
        char[] chs = new char[sz];
        int count = 0;
        for (int i = 0; i < sz; i++) {
            if (!Character.isWhitespace(str.charAt(i))) {
                chs[count++] = str.charAt(i);
            }
        }
        if (count == sz) {
            return str;
        }

        return new String(chs, 0, count);
    }

    public static strictfp byte[] generateImage(byte[] imageContent, int maxWidth, double xyRatio, String formatName ) throws IOException{

        ByteArrayInputStream bais = new ByteArrayInputStream(imageContent);
        if(bais == null) return null;

        BufferedImage originalImg = ImageIO.read( bais);
        if(originalImg == null) return null;

        int[] centerPoint = {originalImg.getWidth()/2, originalImg.getHeight()/2};

        int cropWidth = originalImg.getWidth();
        int cropHeight = originalImg.getHeight();

        if( cropHeight > cropWidth * xyRatio){
            cropHeight = (int) (cropWidth * xyRatio);
        }else{
            cropWidth = (int) ( (float) cropHeight / xyRatio);
        }

        int targetWidth = cropWidth;
        int targetHeight = cropHeight;

        if(targetWidth > maxWidth){
            targetWidth = maxWidth;
            targetHeight = (int) (targetWidth * xyRatio);
        }

        BufferedImage targetImage = new BufferedImage( targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);

        Graphics2D graphics2d = targetImage.createGraphics();
        graphics2d.setBackground(Color.WHITE);
        graphics2d.setPaint(Color.WHITE);
        graphics2d.fillRect(0, 0, targetWidth, targetHeight);
        graphics2d.setRenderingHint( RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
        graphics2d.drawImage(originalImg, 0, 0, targetWidth, targetHeight
                                          , centerPoint[0] - (int)(cropWidth/2), centerPoint[1] - (int)(cropHeight/2)
                                          , centerPoint[0] + (int)(cropWidth/2), centerPoint[0] + (int)(cropHeight/2), null);

        ByteArrayOutputStream output = new ByteArrayOutputStream();
        ImageIO.write(targetImage ,formatName, output);

        return output.toByteArray();


    }

}
