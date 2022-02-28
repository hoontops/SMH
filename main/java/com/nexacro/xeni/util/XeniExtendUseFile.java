package com.nexacro.xeni.util;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xeni.util.CommUtil;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

import javax.servlet.http.HttpServletResponse;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.poifs.crypt.EncryptionInfo;
import org.apache.poi.poifs.crypt.EncryptionMode;
import org.apache.poi.poifs.crypt.Encryptor;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

public class XeniExtendUseFile
  //implements XeniExtendBase
{
  public InputStream loadTargetStream(String paramString)
    throws Exception
  {
    File localFile = new File(paramString);
    return new FileInputStream(localFile);
  }
  
  public String saveImportStream(VariableList paramVariableList, InputStream paramInputStream, String paramString)
    throws Exception
  {
	String paramStringEnds = paramString.toLowerCase();
	boolean endsWith = paramStringEnds.endsWith(".csv");

	int i = paramString.lastIndexOf("/");
    String str = paramString.substring(0, i);
    File localFile = new File(str);
    if (!localFile.exists()) {
      localFile.mkdirs();
    }

    FileOutputStream localFileOutputStream = new FileOutputStream(paramString);
    if(endsWith){
        BufferedReader br = new BufferedReader(new InputStreamReader(paramInputStream, "MS949"));
        String line = null;
        while ((line = br.readLine()) != null) {
            line = line + "\n";
            localFileOutputStream.write(line.getBytes());
        }
    }else{
	    byte[] arrayOfByte = new byte['?'];
	    int j = 0;
	    while ((j = paramInputStream.read(arrayOfByte)) > 0) {
	      localFileOutputStream.write(arrayOfByte, 0, j);
	    }
    }
    localFileOutputStream.flush();
    localFileOutputStream.close();
    paramInputStream.close();
    return null;
  }
  
  public int saveExportStream(VariableList paramVariableList, DataSet paramDataSet, ByteArrayOutputStream paramByteArrayOutputStream, String paramString1, String paramString2, HttpServletResponse paramHttpServletResponse)
    throws Exception
  {
    int i = paramString1.lastIndexOf("/");
    String str1 = paramString1.substring(0, i);
    File localFile = new File(str1);
    if (!localFile.exists()) {
      localFile.mkdirs();
    }
    FileOutputStream localFileOutputStream = new FileOutputStream(paramString1);
    String str2 = paramDataSet.getString(0, "password");
    if ((str2 != null) && (str2.length() > 0))
    {
      int j = paramDataSet.getInt(0, "type");
      if ((j == 288) || (j == 1040))
      {
        ByteArrayInputStream localObject1 = new ByteArrayInputStream(paramByteArrayOutputStream.toByteArray());
        OPCPackage localObject2 = OPCPackage.open((InputStream)localObject1);
        POIFSFileSystem localObject3 = new POIFSFileSystem();
        EncryptionInfo localEncryptionInfo = new EncryptionInfo((POIFSFileSystem)localObject3, EncryptionMode.agile);
        Encryptor localEncryptor = localEncryptionInfo.getEncryptor();
        localEncryptor.confirmPassword(str2);
        OutputStream localOutputStream = localEncryptor.getDataStream((POIFSFileSystem)localObject3);
        ((OPCPackage)localObject2).save(localOutputStream);
        ((OPCPackage)localObject2).close();
        ((POIFSFileSystem)localObject3).writeFilesystem(localFileOutputStream);
        localFileOutputStream.close();
      }
      else
      {
        localFileOutputStream.write(paramByteArrayOutputStream.toByteArray());
      }
    }
    else
    {
    	String paramStringEnds = paramString2.toLowerCase();
    	boolean endsWith = paramStringEnds.endsWith(".csv");
    	
		if(endsWith){
			OutputStreamWriter osw = new OutputStreamWriter(localFileOutputStream, "MS949"); 
			osw.write(paramByteArrayOutputStream.toString());
			osw.flush();
			osw.close();
		}else{
			localFileOutputStream.write(paramByteArrayOutputStream.toByteArray());
		}
    }
    localFileOutputStream.close();
    paramByteArrayOutputStream.close();
    DataSet localDataSet = CommUtil.getDatasetExportResponse(paramDataSet);
    Object localObject1 = new PlatformData();
    Object localObject2 = ((PlatformData)localObject1).getVariableList();
    ((VariableList)localObject2).add("ErrorCode", 0);
    ((VariableList)localObject2).add("ErrorMsg", "SUCCESS");
    localDataSet.set(0, "url", paramString2);
    ((PlatformData)localObject1).addDataSet(localDataSet);
    Object localObject3 = new HttpPlatformResponse(paramHttpServletResponse, "PlatformSsv", "UTF-8");
    ((HttpPlatformResponse)localObject3).setData((PlatformData)localObject1);
    ((HttpPlatformResponse)localObject3).sendData();
    return 0;
  }
  
  public DataSet saveExportStream(VariableList paramVariableList, DataSet paramDataSet, ByteArrayOutputStream paramByteArrayOutputStream, String paramString1, String paramString2)
    throws Exception
  {
    int i = paramString1.lastIndexOf("/");
    String str = paramString1.substring(0, i);
    File localFile = new File(str);
    if (!localFile.exists()) {
      localFile.mkdirs();
    }
    FileOutputStream localFileOutputStream = new FileOutputStream(paramString1);
    localFileOutputStream.write(paramByteArrayOutputStream.toByteArray());
    localFileOutputStream.close();
    paramByteArrayOutputStream.close();
    DataSet localDataSet = CommUtil.getDatasetExportResponse(paramDataSet);
    localDataSet.set(0, "url", paramString2);
    return localDataSet;
  }
}
