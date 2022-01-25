
const voicepacks = {
	folders:{
		VG: "Global",
		VGC: "Compliment",
		VGR: "Respond",
		VGT: "Taunt",
		VA: "Attack",
		VD: "Defend",
		VR: "Repair",
		VB: "Base",
		VC: "Command",
		VE: "Enemy",
		VF: "Flag",
		VN: "Need",
		VS: "Self",
		VSA: "Attack",
		VSD: "Defend",
		VSR: "Repair",
		VST: "Task",
		VSU: "Upgrade",
		VT: "Target",
		VU: "Upgrade",
		VW: "Warning",
		VV: "Very Quick",
	},

	all:{
		VGY:	"%Yes%.",
		VGN:	"%No%.",
		VGH:	"%Hi%.",
		VGB:	"%Bye%.",
		VGO:	"%Ooops%.",
		VGQ:	"%Quiet%!",
		VGS:	"%Shazbot%!",
		VGW:	"%Woohoo%!",
		VGCA: 	"%Awesome%!",
		VGCG: 	"%Good game%.",
		VGCN: 	"%Nice move%!",
		VGCY: 	"%You rock%!",
		VGCS: 	"%Great shot%!",
		VGRA: 	"%Any time%.",
		VGRD: 	"I %don't know%.",
		VGRT: 	"%Thanks%.",
		VGRW: 	"%Wait%.",
		VAA: 	"%Attack%!",
		VAB: 	"Attack the enemy %base%!",
		VAC: 	"Chase the enemy %flag carrier%!",
		VAD: 	"Disrupt the enemy %defense%!",
		VAF: 	"Get the enemy %flag%!",
		VAG: 	"Destroy the enemy %generator%!",
		VAR: 	"%Reinforce% the offense!",
		VAS: 	"Destroy enemy %sensors%!",
		VAT: 	"Destroy enemy %turrets%!",
		VAV: 	"Destroy the enemy %vehicle%!",
		VAW: 	"%Wait% for my signal before attacking!",
		VGTA: 	"Aww, that's %too bad%!",
		VGTB: 	"Is that the %best% you can do?",
		VGTG: 	"I am the %greatest%!",
		VGTT: 	"THAT was %graceful%!",
		VGTW: 	"%When% will you learn?",
		VDB: 	"Defend our %base%!",
		VDC: 	"Defend the %flag carrier%!",
		VDE: 	"Defend the %entrances%!",
		VDF: 	"Defend our %flag%!",
		VDG: 	"Defend our %generator%!",
		VDM: 	"%Cover me%!",
		VDR: 	"%Reinforce% our defense!",
		VDS: 	"Defend our %sensors%!",
		VDT: 	"Defend our %turrets%!",
		VDV: 	"Defend our %vehicle%!",
		VRG: 	"Repair our %generator%!",
		VRS: 	"Repair our %sensors%!",
		VRT: 	"Repair our %turrets%!",
		VRV: 	"Repair the %vehicle%!",
		VBC: 	"Our %base% is clear.",
		VBE: 	"The %enemy% is in our base.",
		VBR: 	"%Retake% our base!",
		VBS: 	"%Secure% our base!",
		VCA: 	"%Acknowledged%.",
		VCC: 	"%Completed%.",
		VCD: 	"%Declined%.",
		VCW: 	"What's my %assignment?%",
		VED: 	"The enemy is in %disarray%.",
		VEG: 	"The enemy %generator% is destroyed.",
		VES: 	"The enemy %sensors% are destroyed.",
		VET: 	"The enemy %turrets% are destroyed.",
		VEV: 	"The enemy %vehicle% is destroyed.",
		VFD: 	"%Defend% our flag!",
		VFF: 	"I %have% the flag!",
		VFG: 	"%Give% me the flag!",
		VFR: 	"%Retrieve% our flag!",
		VFQ: 	"%I'll retrieve% our flag!",
		VFS: 	"Our flag is %secure%.",
		VFT: 	"%Take% the flag from me!",
		VNC: 	"Need %covering fire%.",
		VND: 	"I need a %driver%.",
		VNE: 	"I need an %escort%.",
		VNH: 	"%Hold% that vehicle! I'm coming!",
		VNR: 	"I need a %ride%!",
		VNS: 	"I need %support%!",
		VNV: 	"%Vehicle ready%. Need a ride?",
		VNW: 	"%Where% to?",
		VSAA: 	"I will %attack%.",
		VSAB: 	"I will attack the enemy %base%.",
		VSAF: 	"I'll go for the enemy %flag%.",
		VSAG: 	"I'll attack the enemy %generator%.",
		VSAS: 	"I'll attack the enemy %sensors%.",
		VSAT: 	"I'll attack the enemy %turrets%.",
		VSAV: 	"I'll attack the enemy %vehicle%.",
		VSDD: 	"I will %defend%.",
		VSDB: 	"I will defend our %base%.",
		VSDF: 	"I will defend our %flag%.",
		VSDG: 	"I'll defend our %generator%.",
		VSDS: 	"I'll defend our %sensors%.",
		VSDT: 	"I'll defend our %turrets%.",
		VSDV: 	"I'll defend our %vehicle%.",
		VSRB: 	"I'll repair our %base%.",
		VSRG: 	"I'll repair our %generator%.",
		VSRS: 	"I'll repair our %sensors%.",
		VSRT: 	"I'll repair our %turrets%.",
		VSRV: 	"I'll repair the %vehicle%.",
		VSTC: 	"I'll %cover% you.",
		VSTD: 	"I'll set up %defenses%.",
		VSTF: 	"I'll deploy %forcefields%.",
		VSTO: 	"I'm %on it%.",
		VSTS: 	"I'm deploying %sensors%.",
		VSTT: 	"I'm deploying %turrets%.",
		VSTV: 	"I'll get a %vehicle% ready.",
		VTA: 	"Target %acquired%.",
		VTB: 	"Target the enemy %base%! I'm in position.",
		VTD: 	"Target %destroyed%.",
		VTF: 	"Target the enemy %flag%! I'm in position.",
		VTM: 	"%Fire% on my target!",
		VTN: 	"I %need% a target painted!",
		VTS: 	"Target the %sensors%! I'm in position.",
		VTT: 	"Target the %turret%! I'm in position.",
		VTV: 	"Target the %vehicle%! I'm in position.",
		VTW: 	"%Wait%! I'll be in range soon.",
		VWE: 	"Incoming %hostiles%!",
		VWV: 	"Incoming enemy %vehicle%!",
		VVY: 	"%Yes%.",
		VVN: 	"%No%.",
		VVA: 	"%Anytime%.",
		VVB: 	"Is our %base secure?%",
		VVC: 	"%Cease fire%!",
		VVD: 	"I %don't know%.",
		VVH: 	"%Help%!",
		VVM: 	"%Move%!",
		VVS: 	"%Sorry%.",
		VVT: 	"%Thanks%.",
		VVW: 	"%Wait%."
	},

	packs:{
		tribes_ascend:{
			name: "Tribes Ascend",
			voices:{
				Soldier_Male_01:{
					name:	"Light Armor"
				},
				Soldier_Male_02:{
					name:	"Medium Armor",
					default:	true
				},
				Soldier_Male_03:{
					name:	"Heavy Armor"
				},
				Male_01:{
					name:	"Battleworn"
				},
				Female_01:{
					name:	"Femme Fatale"
				},
				Female_02:{
					name:	"Ms Wilderzone"
				},
				Male_02:{
					name:	"Disker Dundee"
				},
				T2_Female_01:{
					name:	"T2 Female Heroine"
				},
				T2_Female_02:{
					name:	"T2 Female Professional"
				},
				T2_Female_03:{
					name:	"T2 Female Cadet"
				},
				T2_Female_04:{
					name:	"T2 Female Veteran"
				},
				T2_Female_05:{
					name:	"T2 Female Amazon"
				},
				T2_Male_01:{
					name:	"T2 Male Hero"
				},
				T2_Male_02:{
					name:	"T2 Male Iceman"
				},
				T2_Male_03:{
					name:	"T2 Male Rogue"
				},
				T2_Male_04:{
					name:	"T2 Male Hardcase"
				},
				T2_Male_05:{
					name:	"T2 Male Psycho"
				},
				T2_Derm_01:{
					name:	"T2 Bioderm Warrior"
				},
				T2_Derm_02:{
					name:	"T2 Bioderm Monster"
				},
				T2_Derm_03:{
					name:	"T2 Bioderm Predator"
				},
				TotalBiscuit:{
					name:	"TotalBiscuit"
				},
				StowAway:{
					name:	"Stowaway"
				},
				ExcitedGuy:{
					name:	"Basement Champion"
				}
			}
		},

		
		community:{
			name: "Community",
			voices:{
				$Chicken:{
					name:	"Chicken"
				},
				$Dodge:{
					name:	"Dodge"
				},
				$Frogkabobs:{
					name:	"Frogkabobs"
				},
				$Gred:{
					name:	"Gred"
				},
				$GreenEarth:{
					name:	"GreenEarth"
				},
				$Quench:{
					name:	"Quench"
				}
			}
		}
	}
}


const file_name_map = {
	VGY:	"AUD_VGS_Global_Yes",
	VGN:	"AUD_VGS_Global_No",
	VGH:	"AUD_VGS_Global_Hi",
	VGB:	"AUD_VGS_Global_Bye",
	VGO:	"AUD_VGS_Global_Ooops",
	VGQ:	"AUD_VGS_Global_Quiet",
	VGS:	"AUD_VGS_Global_Shazbot",
	VGW:	"AUD_VGS_Global_Woohoo",
	VGCA: 	"AUD_VGS_Compliment_Awesome",
	VGCG: 	"AUD_VGS_Compliment_GoodGame",
	VGCN: 	"AUD_VGS_Compliment_NiceMove",
	VGCY: 	"AUD_VGS_Compliment_YouRock",
	VGCS: 	"AUD_VGS_Compliment_GreatShot",
	VGRA: 	"AUD_VGS_Respond_AnyTime",
	VGRD: 	"AUD_VGS_Respond_DontKnow",
	VGRT: 	"AUD_VGS_Respond_Thanks",
	VGRW: 	"AUD_VGS_Respond_RespondWait",
	VAA: 	"AUD_VGS_Attack_Attack",
	VAB: 	"AUD_VGS_Attack_Base",
	VAC: 	"AUD_VGS_Attack_Chase",
	VAD: 	"AUD_VGS_Attack_Disrupt",
	VAF: 	"AUD_VGS_Attack_Flag",
	VAG: 	"AUD_VGS_Attack_Generator",
	VAR: 	"AUD_VGS_Attack_Reinforce",
	VAS: 	"AUD_VGS_Attack_Sensors",
	VAT: 	"AUD_VGS_Attack_Turrets",
	VAV: 	"AUD_VGS_Attack_Vehicle",
	VAW: 	"AUD_VGS_Attack_AttackWait",
	VGTA: 	"AUD_VGS_Taunt_Aww",
	VGTB: 	"AUD_VGS_Taunt_Obnoxious",
	VGTG: 	"AUD_VGS_Taunt_Brag",
	VGTT: 	"AUD_VGS_Taunt_Sarcasm",
	VGTW: 	"AUD_VGS_Taunt_Learn",
	VDB: 	"AUD_VGS_Defend_Base",
	VDC: 	"AUD_VGS_Defend_FlagCarrier",
	VDE: 	"AUD_VGS_Defend_Entrances",
	VDF: 	"AUD_VGS_Defend_Flag",
	VDG: 	"AUD_VGS_Defend_Generator",
	VDM: 	"AUD_VGS_Defend_Me",
	VDR: 	"AUD_VGS_Defend_Reinforce",
	VDS: 	"AUD_VGS_Defend_Sensors",
	VDT: 	"AUD_VGS_Defend_Turrets",
	VDV: 	"AUD_VGS_Defend_Vehicle",
	VRG: 	"AUD_VGS_Repair_Generator",
	VRS: 	"AUD_VGS_Repair_Sensors",
	VRT: 	"AUD_VGS_Repair_Turrets",
	VRV: 	"AUD_VGS_Repair_Vehicle",
	VBC: 	"AUD_VGS_Base_Clear",
	VBE: 	"AUD_VGS_Base_EnemyInBase",
	VBR: 	"AUD_VGS_Base_Retake",
	VBS: 	"AUD_VGS_Base_Secure",
	VCA: 	"AUD_VGS_Command_Acknowledged",
	VCC: 	"AUD_VGS_Command_Completed",
	VCD: 	"AUD_VGS_Command_Declined",
	VCW: 	"AUD_VGS_Command_Assignment",
	VED: 	"AUD_VGS_Enemy_Disarray",
	VEG: 	"AUD_VGS_Enemy_Generator",
	VES: 	"AUD_VGS_Enemy_Sensors",
	VET: 	"AUD_VGS_Enemy_Turrets",
	VEV: 	"AUD_VGS_Enemy_Vehicle",
	VFD: 	"AUD_VGS_Flag_Defend",
	VFF: 	"AUD_VGS_Flag_IHave",
	VFG: 	"AUD_VGS_Flag_GiveMe",
	VFR: 	"AUD_VGS_Flag_Retrieve",
	VFQ: 	"AUD_VGS_Flag_IRetrieve",
	VFS: 	"AUD_VGS_Flag_Secure",
	VFT: 	"AUD_VGS_Flag_Take",
	VNC: 	"AUD_VGS_Need_Cover",
	VND: 	"AUD_VGS_Need_Driver",
	VNE: 	"AUD_VGS_Need_Escort",
	VNH: 	"AUD_VGS_Need_HoldVehicle",
	VNR: 	"AUD_VGS_Need_Ride",
	VNS: 	"AUD_VGS_Need_Support",
	VNV: 	"AUD_VGS_Need_VehicleReady",
	VNW: 	"AUD_VGS_Need_WhereTo",
	VSAA: 	"AUD_VGS_SelfAttack_Attack",
	VSAB: 	"AUD_VGS_SelfAttack_Base",
	VSAF: 	"AUD_VGS_SelfAttack_Flag",
	VSAG: 	"AUD_VGS_SelfAttack_Generator",
	VSAS: 	"AUD_VGS_SelfAttack_Sensors",
	VSAT: 	"AUD_VGS_SelfAttack_Turrets",
	VSAV: 	"AUD_VGS_SelfAttack_Vehicle",
	VSDD: 	"AUD_VGS_SelfDefend_Defend",
	VSDB: 	"AUD_VGS_SelfDefend_Base",
	VSDF: 	"AUD_VGS_SelfDefend_Flag",
	VSDG: 	"AUD_VGS_SelfDefend_Generator",
	VSDS: 	"AUD_VGS_SelfDefend_Sensors",
	VSDT: 	"AUD_VGS_SelfDefend_Turrets",
	VSDV: 	"AUD_VGS_SelfDefend_Vehicle",
	VSRB: 	"AUD_VGS_SelfRepair_Base",
	VSRG: 	"AUD_VGS_SelfRepair_Generator",
	VSRS: 	"AUD_VGS_SelfRepair_Sensors",
	VSRT: 	"AUD_VGS_SelfRepair_Turrets",
	VSRV: 	"AUD_VGS_SelfRepair_Vehicle",
	VSTC: 	"AUD_VGS_SelfTask_Cover",
	VSTD: 	"AUD_VGS_SelfTask_Defenses",
	VSTF: 	"AUD_VGS_SelfTask_DeployForcefields",
	VSTO: 	"AUD_VGS_SelfTask_OnIt",
	VSTS: 	"AUD_VGS_SelfTask_DeploySensors",
	VSTT: 	"AUD_VGS_SelfTask_DeployTurrets",
	VSTV: 	"AUD_VGS_SelfTask_Vehicle",
	VTA: 	"AUD_VGS_Target_Acquired",
	VTB: 	"AUD_VGS_Target_Base",
	VTD: 	"AUD_VGS_Target_Destroyed",
	VTF: 	"AUD_VGS_Target_Flag",
	VTM: 	"AUD_VGS_Target_FireOnMy",
	VTN: 	"AUD_VGS_Target_Need",
	VTS: 	"AUD_VGS_Target_Sensors",
	VTT: 	"AUD_VGS_Target_Turret",
	VTV: 	"AUD_VGS_Target_Vehicle",
	VTW: 	"AUD_VGS_Target_Wait",
	VWE: 	"AUD_VGS_Warn_Enemies",
	VWV: 	"AUD_VGS_Warn_Vehicle",
	VVY: 	"AUD_VGS_Team_Yes",
	VVN: 	"AUD_VGS_Team_No",
	VVA: 	"AUD_VGS_Team_Anytime",
	VVB: 	"AUD_VGS_Team_BaseSecure",
	VVC: 	"AUD_VGS_Team_CeaseFire",
	VVD: 	"AUD_VGS_Team_DontKnow",
	VVH: 	"AUD_VGS_Team_Help",
	VVM: 	"AUD_VGS_Team_Move",
	VVS: 	"AUD_VGS_Team_Sorry",
	VVT: 	"AUD_VGS_Team_Thanks",
	VVW: 	"AUD_VGS_Team_Wait",

	AAD:	"AUD_VGS_Warn_Context_A_Deployable",
	AAL:	"AUD_VGS_Warn_Context_A_Light",
	AAM:	"AUD_VGS_Warn_Context_A_Medium",
	AAH:	"AUD_VGS_Warn_Context_A_Heavy",
	AAS:	"AUD_VGS_Warn_Context_A_Sensor",
	AAT:	"AUD_VGS_Warn_Context_A_Turret",
	AAV:	"AUD_VGS_Warn_Context_A_Vehicle",
	ALAEB:	"AUD_VGS_Warn_Context_L_EnemyAroundEnemyBase",
	ALAOB:	"AUD_VGS_Warn_Context_L_EnemyAroundOurBase",
	ALBEB:	"AUD_VGS_Warn_Context_L_EnemyBehindEnemyBase",
	ALBOB:	"AUD_VGS_Warn_Context_L_EnemyBehindOurBase",
	ALM:	"AUD_VGS_Warn_Context_L_EnemyInMidfield",
	ALIEB:	"AUD_VGS_Warn_Context_L_EnemyInsideEnemyBase",
	ALIOB:	"AUD_VGS_Warn_Context_L_EnemyInsideOurBase",
	ALN:	"AUD_VGS_Warn_Context_L_EnemyNearby",
	ALNET:	"AUD_VGS_Warn_Context_L_EnemyNearEnemyBaseTurret",
	ALNEF:	"AUD_VGS_Warn_Context_L_EnemyNearEnemyFlag",
	ALNEG:	"AUD_VGS_Warn_Context_L_EnemyNearEnemyGenerator",
	ALNEV:	"AUD_VGS_Warn_Context_L_EnemyNearEnemyVehiclePad",
	ALNOT:	"AUD_VGS_Warn_Context_L_EnemyNearOurBaseTurret",
	ALNOF:	"AUD_VGS_Warn_Context_L_EnemyNearOurFlag",
	ALNOG:	"AUD_VGS_Warn_Context_L_EnemyNearOurGenerator",
	ALNOV:	"AUD_VGS_Warn_Context_L_EnemyNearOurVehiclePad"
}
