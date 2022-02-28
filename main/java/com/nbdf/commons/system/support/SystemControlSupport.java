package com.nbdf.commons.system.support;

import com.nbdf.commons.system.CommonConstant;
import com.nbdf.commons.system.schema.ObjectFactory;

import java.io.ByteArrayOutputStream;
import java.io.File;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
	 
public class SystemControlSupport {

	private static JAXBContext getJAXBContext() throws Exception {
		return JAXBContext.newInstance("com.nbdf.commons.system.schema", ObjectFactory.class.getClassLoader());
	}

	private static Marshaller _createMarshaller() throws Exception {
		return getJAXBContext().createMarshaller();
	}

	private static Unmarshaller _createUnmarshaller() throws Exception {
		return getJAXBContext().createUnmarshaller();
	}
	
	public static byte[] marshal(Object contents) throws Exception {
		 
			ByteArrayOutputStream resultStream = new ByteArrayOutputStream();
			Marshaller marshaller = _createMarshaller();
			marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
			marshaller.setProperty(Marshaller.JAXB_ENCODING, "EUC-KR");
			marshaller.marshal(contents, resultStream);

			return resultStream.toByteArray();
	}

	public static Object unmarshal()  {
		
		try {
			return (JAXBElement<com.nbdf.commons.system.schema.ImcsConfigType>) _createUnmarshaller().unmarshal(new File(CommonConstant.SYSTEM_CONTROL_FILE));
		} catch (JAXBException e) {
			return null;
		} catch (Exception e) {
			return null;
		}
	}
	
}
