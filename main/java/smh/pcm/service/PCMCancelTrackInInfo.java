package smh.pcm.service;

public class PCMCancelTrackInInfo {
	
	/** The lot id. */
	private String lotId;
	
	/** The to equipment id. */
	private String toEquipmentId;
	
	/** The to recipe def id. */
	private String toRecipeDefId;
	
	/** The to recipe def version. */
	private String toRecipeDefVersion;
	
	/** The to process state. */
	private String toProcessState;

	/**
	 * Gets the lot id.
	 *
	 * @return the lot id
	 */
	public String getLotId() { return lotId; }
	
	/**
	 * Gets the to equipment id.
	 *
	 * @return the to equipment id
	 */
	public String getToEquipmentId() { return toEquipmentId; }
	
	/**
	 * Gets the to recipe def id.
	 *
	 * @return the to recipe def id
	 */
	public String getToRecipeDefId() { return toRecipeDefId; }
	
	/**
	 * Gets the to process state.
	 *
	 * @return the to process state
	 */
	public String getToProcessState() { return toProcessState; }
	
	/**
	 * Gets the to recipe def version.
	 *
	 * @return the to recipe def version
	 */
	public String getToRecipeDefVersion() {
		return toRecipeDefVersion;
	}
	
	/**
	 * Sets the to recipe def version.
	 *
	 * @param toRecipeDefVersion the new to recipe def version
	 */
	public void setToRecipeDefVersion(String toRecipeDefVersion) {
		this.toRecipeDefVersion = toRecipeDefVersion;
	}
	
	/**
	 * Sets the lot id.
	 *
	 * @param lotId the new lot id
	 */
	public void setLotId(String lotId){ this.lotId = lotId; }
	
	/**
	 * Sets the to equipment id.
	 *
	 * @param equipmentId the new to equipment id
	 */
	public void setToEquipmentId(String equipmentId) { this.toEquipmentId = equipmentId; }
	
	/**
	 * Sets the to recipe def id.
	 *
	 * @param recipeDefId the new to recipe def id
	 */
	public void setToRecipeDefId(String recipeDefId) { this.toRecipeDefId = recipeDefId; }
	
	/**
	 * Sets the to process state.
	 *
	 * @param processState the new to process state
	 */
	public void setToProcessState(String processState) { this.toProcessState = processState; }

}
