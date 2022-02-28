package smh.pcm.service;

public class PCMCancelInfo {
	public static class CancelTrackInInfo{
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
	public static class CancelSendLotInfo{
		private String lotId;
		  
		  private String toLocationId;
		  
		  private String areaId;
		  
		  private String plantId;
		  
		  private String toLotState;
		  
		  public String getLotId() {
		    return this.lotId;
		  }
		  
		  public String getToLocationId() {
		    return this.toLocationId;
		  }
		  
		  public void setLotId(String lotId) {
		    this.lotId = lotId;
		  }
		  
		  public void setToLocationId(String toLocationId) {
		    this.toLocationId = toLocationId;
		  }
		  
		  public String getAreaId() {
		    return this.areaId;
		  }
		  
		  public void setAreaId(String areaId) {
		    this.areaId = areaId;
		  }
		  
		  public String getPlantId() {
		    return this.plantId;
		  }
		  
		  public void setPlantId(String plantId) {
		    this.plantId = plantId;
		  }
		  
		  public String getToLotState() {
		    return this.toLotState;
		  }
		  
		  public void setToLotState(String lotState) {
		    this.toLotState = lotState;
		  }
	}
	
	public static class CancelConsumeMaterialInfo
	{
		/** The lot id. */
		private String lotId;
		
		/** The material infos. */
		private MaterialInfo[] materialInfos;
		
		/** The warehouse id. */
		private String warehouseId;

		/**
		 * Gets the lot id.
		 *
		 * @return the lot id
		 */
		public String getLotId() { return lotId; }
		
		/**
		 * Gets the material infos.
		 *
		 * @return the material infos
		 */
		public MaterialInfo[] getMaterialInfos() { return materialInfos; }

		/**
		 * Sets the lot id.
		 *
		 * @param lotId the new lot id
		 */
		public void setLotId(String lotId){ this.lotId = lotId; }
		
		/**
		 * Sets the material infos.
		 *
		 * @param materialInfos the new material infos
		 */
		public void setMaterialInfos(MaterialInfo[] materialInfos){ this.materialInfos = materialInfos; }
		
		/**
		 * Gets the warehouse id.
		 *
		 * @return the warehouse id
		 */
		public String getWarehouseId() {
			return warehouseId;
		}
		
		/**
		 * Sets the warehouse id.
		 *
		 * @param warehouseId the new consumable lot id
		 */
		public void setWarehouseId(String warehouseId) {
			this.warehouseId = warehouseId;
		}
	}
	
	public static class MaterialInfo 
	{
		/** The material id. */
		private String materialId;
		
		/** The warehouse id. */
		private String warehouseId;
		
		/** The material type. */
		private String materialType;
		
		/** The consumed qty. */
		private double consumedQty;
		
		/**
		 * Gets the material type.
		 *
		 * @return the material type
		 */
		public String getMaterialType() {
			return materialType;
		}
		
		/**
		 * Sets the material type.
		 *
		 * @param materialType the new material type
		 */
		public void setMaterialType(String materialType) {
			this.materialType = materialType;
		}
		
		/**
		 * Gets the material id.
		 *
		 * @return the material id
		 */
		public String getMaterialId() {
			return materialId;
		}
		
		/**
		 * Sets the material id.
		 *
		 * @param materialId the new material id
		 */
		public void setMaterialId(String materialId) {
			this.materialId = materialId;
		}
		
		/**
		 * Gets the warehouse id.
		 *
		 * @return the warehouse id
		 */
		public String getWarehouseId() {
			return warehouseId;
		}
		
		/**
		 * Sets the warehouse id.
		 *
		 * @param warehouseId the new consumable lot id
		 */
		public void setWarehouseId(String warehouseId) {
			this.warehouseId = warehouseId;
		}
		
		/**
		 * Gets the consumed qty.
		 *
		 * @return the consumed qty
		 */
		public double getConsumedQty() {
			return consumedQty;
		}
		
		/**
		 * Sets the consumed qty.
		 *
		 * @param consumedQty the new consumed qty
		 */
		public void setConsumedQty(double consumedQty) {
			this.consumedQty = consumedQty;
		}
	}
}
