import dynamic from "next/dynamic";

export const iconMapper: { [key: string]: any } = {
  "attach-money": dynamic(() => import("@mui/icons-material/AttachMoney")),
  "medical-services": dynamic(() => import("@mui/icons-material/MedicalServices")),
  "folder-special": dynamic(() => import("@mui/icons-material/FolderSpecial")),
  "food-bank": dynamic(() => import("@mui/icons-material/FoodBank")),
  "home-repair-service": dynamic(() => import("@mui/icons-material/HomeRepairService")),
  "local-grocery-store": dynamic(() => import("@mui/icons-material/LocalGroceryStore")),
  "train": dynamic(() => import("@mui/icons-material/Train")),
  "account-balance-wallet": dynamic(() => import("@mui/icons-material/AccountBalanceWallet")),
  "escalator-warning": dynamic(() => import("@mui/icons-material/EscalatorWarning")),
  "sports-tennis": dynamic(() => import("@mui/icons-material/SportsTennis")),
  "airplane-mode-activate": dynamic(() => import("@mui/icons-material/AirplanemodeActive")),
  "payment": dynamic(() => import("@mui/icons-material/Payment"))
}
