package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface MFMCommonService {
	
	public void selectMfmCustomQuery(UiMapDto dto) throws Exception;
	
	public void selectDayDulationList(UiMapDto dto) throws Exception;
	
	public void selectItemGroupName(UiMapDto dto) throws Exception;
 }
